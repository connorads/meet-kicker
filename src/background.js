const showPageAction = ({ tabId }) => chrome.pageAction.show(tabId);

chrome.tabs.onCreated.addListener(showPageAction);
chrome.tabs.onActivated.addListener(showPageAction);

chrome.pageAction.onClicked.addListener((tab) =>
  chrome.tabs.sendMessage(tab.id, { text: "kick" })
);
