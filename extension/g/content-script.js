window.addEventListener("message", (event) => {
  if (event.source !== window || event.data.source !== "sync-button") return;
  if (event.data.action === "fetch-bookmarks") {
    chrome.runtime.sendMessage(
      {
        action: "fetch-bookmarks",
        source: "sync-content-script",
      },
      (response) => {
        event.source.postMessage(
          {
            action: "fetched-bookmarks",
            source: "sync-content-script",
            bookmarks: response.data,
          },
          event.origin,
        );
      },
    );
  } else if (
    event.data.action === "set-bookmarks" &&
    "set" in event.data &&
    "del" in event.data
  ) {
    chrome.runtime.sendMessage({
      action: "set-bookmarks",
      source: "sync-content-script",
      set: event.data.set,
      del: event.data.del,
    });
  }
});
