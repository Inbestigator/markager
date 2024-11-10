"use client";

import { Loader2, RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";
import { api } from "@/trpc/react";
import { useEffect, useState } from "react";

interface ParsedBookmark {
  id: string;
  title: string;
  url: string;
  index: number;
  createdAt: string | Date;
}

export default function Sync() {
  const [checking, setChecking] = useState(false);
  const utils = api.useUtils();
  const addBookmarks = api.bookmark.create.useMutation();
  const deleteBookmarks = api.bookmark.delete.useMutation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    function onMessage(event: MessageEvent) {
      const data = event.data as {
        source: string;
        bookmarks: ParsedBookmark[];
      };
      if (data.source !== "sync-content-script" || !("bookmarks" in data))
        return;

      const { bookmarks: toolbarBookmarks } = data;
      const lastChecked = new Date(
        parseInt(localStorage.getItem("lastChecked") ?? "0", 10),
      );

      const myBookmarks = utils.bookmark.getMarks.getData() ?? [];

      async function handleChanges() {
        const dbBookmarksToSet: ParsedBookmark[] = [];
        const dbBookmarksToDel: ParsedBookmark[] = [];
        const tBookmarksToSet: ParsedBookmark[] = [];
        const tBookmarksToDel: ParsedBookmark[] = [];
        myBookmarks.forEach((bookmark) => {
          if (
            toolbarBookmarks.some(
              (tb) => tb.title === bookmark.title && tb.url === bookmark.url,
            )
          ) {
            return;
          }

          if (bookmark.createdAt > lastChecked) {
            tBookmarksToSet.push(bookmark);
          } else {
            dbBookmarksToDel.push(bookmark);
          }
        });

        toolbarBookmarks.forEach((bookmark) => {
          if (
            myBookmarks.some(
              (my) => my.title === bookmark.title && my.url === bookmark.url,
            )
          ) {
            return;
          }
          if (bookmark.createdAt > lastChecked.toISOString()) {
            dbBookmarksToSet.push(bookmark);
          } else {
            tBookmarksToDel.push(bookmark);
          }
        });

        if (dbBookmarksToDel.length > 0) {
          await deleteBookmarks.mutateAsync(
            dbBookmarksToDel.map((bookmark) => bookmark.id),
          );
        }

        if (dbBookmarksToSet.length > 0) {
          await addBookmarks.mutateAsync(
            dbBookmarksToSet.map((bookmark) => ({
              title: bookmark.title,
              url: bookmark.url,
              index: bookmark.index,
            })),
          );
        }

        if (tBookmarksToSet.length > 0 || tBookmarksToDel.length > 0) {
          window.postMessage({
            action: "set-bookmarks",
            source: "sync-button",
            set: tBookmarksToSet,
            del: tBookmarksToDel,
          });
        }

        await utils.bookmark.getMarks.invalidate();
        localStorage.setItem("lastChecked", String(Date.now()));
        setChecking(false);
      }
      void handleChanges();
    }

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button
      disabled={checking}
      onClick={() => {
        setChecking(true);
        window.postMessage({
          action: "fetch-bookmarks",
          source: "sync-button",
        });
      }}
    >
      {checking ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <RefreshCcw className="size-4" />
      )}{" "}
      Sync{checking && "ing"}
    </Button>
  );
}
