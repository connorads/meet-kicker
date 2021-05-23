const showPageAction = (tabId) => chrome.pageAction.show(tabId);
chrome.tabs.onCreated.addListener(({ tabId }) => showPageAction(tabId));
chrome.tabs.onActivated.addListener(({ tabId }) => showPageAction(tabId));
chrome.tabs.onUpdated.addListener(showPageAction);

chrome.pageAction.onClicked.addListener((tab) =>
  chrome.tabs.sendMessage(tab.id, { text: "kick" })
);
