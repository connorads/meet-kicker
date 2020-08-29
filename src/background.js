chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.pageAction.show(tabId);
});

chrome.pageAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { text: "kick" });
});
