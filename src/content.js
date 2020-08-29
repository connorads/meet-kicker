chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === "kick") {
    document.querySelector('[data-tooltip="Remove from meeting"]')?.click();
    setTimeout(() => document.querySelector('[data-id="EBS5u"]')?.click(), 100);
  }
});
