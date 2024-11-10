"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import { api } from "@/trpc/react";
import Link from "next/link";
import Sync from "./sync";

export default function BookmarksDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: bookmarks } = api.bookmark.getMarks.useQuery();

  if (!bookmarks) return null;

  const filteredBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.url.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Bookmarks</h1>

      <div className="mb-4 flex items-center gap-2">
        <Input
          placeholder="Search bookmarks..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          className="max-w-sm"
        />
        <Sync />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBookmarks.map((bookmark) => (
            <TableRow key={bookmark.id}>
              <TableCell>{bookmark.title}</TableCell>
              <TableCell>
                <Link
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:underline"
                >
                  {bookmark.url}
                  <ExternalLink className="ml-2 size-4" />
                </Link>
              </TableCell>
              <TableCell>{bookmark.createdAt.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
