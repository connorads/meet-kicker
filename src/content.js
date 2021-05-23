const getAlertText = (errorMessage) => `Meet Kicker 🦶

${errorMessage}

💡 Try manually kicking a user using the Google Meet UI, did it work?

If not, then you probably don't have permission to kick users
Remember: 🚨 This is not a hack 🚨

If manual kick works but Meet Kicker 🦶 does not then please report this issue
https://github.com/connorads/meet-kicker/issues`;

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === "kick") {
    const removeButton = document.querySelector(
      '[data-tooltip="Remove from meeting"], [jsname="BUtajd"]'
    );
    if (removeButton) {
      removeButton.click();
      setTimeout(() => {
        const confirmButton = document.querySelector('[data-id="EBS5u"]');
        if (confirmButton) {
          confirmButton.click();
        } else {
          alert(getAlertText("Error 2: Confirm button not found 😢"));
        }
      }, 100);
    } else {
      alert(getAlertText("Error 1: Remove user button not found 😢"));
    }
  }
});
