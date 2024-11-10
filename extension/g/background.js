chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.source !== "sync-content-script") return;
  if (message.action === "fetch-bookmarks") {
    chrome.bookmarks.getTree().then((bookmarkTreeNodes) => {
      sendResponse({
        data:
          bookmarkTreeNodes
            .find((bookmark) => bookmark.id === "0")
            ?.children.find((bookmark) => bookmark.id === "1")
            ?.children.map((bookmark) => ({
              id: bookmark.id,
              title: bookmark.title,
              url: bookmark.url,
              index: bookmark.index,
              createdAt: new Date(bookmark.dateAdded).toISOString(),
            })) ?? [],
      });
    });
    return true;
  } else if (
    message.action === "set-bookmarks" &&
    "set" in message &&
    "del" in message
  ) {
    message.set.forEach((bookmark) => {
      chrome.bookmarks.create({
        url: bookmark.url,
        title: bookmark.title,
        index: bookmark.index,
        parentId: "1",
      });
    });
    message.del.forEach((bookmark) => {
      chrome.bookmarks.remove(bookmark.id);
    });
    return true;
  }
  return false;
});
