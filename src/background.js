chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.pageAction.show(tabId);
});

chrome.pageAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { text: "kick" });
});
