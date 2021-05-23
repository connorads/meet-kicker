const showPageActionOnGoogleMeet = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: "meet.google.com", schemes: ["https"] },
    }),
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()],
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      showPageActionOnGoogleMeet,
    ]);
  });
});

chrome.pageAction.onClicked.addListener((tab) =>
  chrome.tabs.sendMessage(tab.id, { text: "kick" })
);
