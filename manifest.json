{
  "name": "Meet Kicker 🦶",
  "version": "0.0.1",
  "manifest_version": 2,
  "description": "Kick your colleagues out of Google Meet",
  "homepage_url": "https://github.com/connorads/meet-kicker",
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  },
  "background": {
    "scripts": ["src/background.js"],
    "persistent": false
  },
  "content_scripts": [
    {
      "matches": ["https://meet.google.com/*"],
      "js": ["src/content.js"]
    }
  ],
  "page_action": {
    "default_icon": "icons/icon19.png"
  },
  "permissions": ["https://meet.google.com/*"]
}
