# 🦍 RealGorilla Browser

The official browser of **RealGorillaOS** — a Gorilla Tag themed, cross-platform web browser with built-in AI, extensions, and an app store.

[![Version](https://img.shields.io/badge/version-1.3.0-019999)](https://github.com/dere-w4eyt/realgorilla-browser/releases)
[![Platforms](https://img.shields.io/badge/platforms-Windows%20%7C%20Linux%20%7C%20Android-019999)](https://github.com/dere-w4eyt/realgorilla-browser/releases)
[![License](https://img.shields.io/badge/license-MIT-019999)](LICENSE)

---

## ✨ Features

- 🎨 **Custom Themes** — Pick any color, choose your font (Impact, Segoe UI, Arial, Comic Sans MS)
- 🗂️ **Animated Tabbed Browsing** — Tabs slide up/down with toggleable animations
- 👤 **Account System** — Sign up with email/password or Google directly in the browser
- ☁️ **Cloud Sync** — Bookmarks & passwords sync across all your devices via Firestore
- 🔑 **Password Manager** — Auto-saves and auto-fills passwords on most sites
- 🔖 **Bookmarks Bar** — Drag tabs to bookmark, favicons, cyan hover effect
- 🕐 **Browsing History** — Searchable history with favicons and timestamps
- 🕶️ **Incognito Mode** — Purple-themed private browsing, nothing saved
- 🛡️ **Smart Ad Blocker** — Blocks ads everywhere except YouTube/Instagram for compatibility
- 📥 **Downloads Manager** — Auto-popup with file info
- ⚙️ **Settings Panel** — Homepage, search engine, theme, font, animations toggle, privacy toggles
- 🧩 **Extension System** — Load extensions from ZIP, enable/disable
- 🏪 **Extensions Store** — YouTube-style store with categories, search, ratings, and reviews
- 📊 **Developer Dashboard** — Manage your extensions with edit/delete and download stats
- 🔍 **VirusTotal Scanning** — All extension submissions automatically scanned
- 🎮 **WebGL 2.0** — Play Krunker, Minecraft Classic, and more
- 🤖 **Gorilla AI Sidebar** — Free chatbot powered by OpenRouter (secure Cloudflare proxy)
- 🔒 **Site Info Button** — Shows domain and security status in URL bar
- ⋮ **Menu Dropdown** — Quick access to all features
- 🎓 **First-Run Tutorial** — 9-step interactive walkthrough with replay button
- 🆕 **New Tab Page** — Google search + quick shortcuts + Replay Tutorial button
- 🌐 **YouTube Compatible** — Works fully with long videos, shorts, and comments
- 🖱️ **Right-Click Context Menu** — Chrome-style with Copy, Paste, Bookmark
- 📛 **Smart Tab Titles** — Always shows close button with proper text truncation
- 🌐 **Favicons** — Website icons in tabs with globe placeholder

---

## 📥 Download

| Platform | Version | Download |
|----------|---------|----------|
| 🪟 **Windows** | v1.3.0 | [Setup.exe](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) or [Portable ZIP](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) |
| 🐧 **Linux (PPA)** | v1.0.8 | [PPA (Recommended)](https://launchpad.net/~dere-w4eyt/+archive/ubuntu/realgorilla-browser) |
| 🐧 **Linux (ZIP)** | v1.0.0L | [Lite Linux ZIP](https://github.com/dere-w4eyt/realgorilla-browser/releases) ⚠️ Currently corrupted — use PPA |
| 📱 **Android** | v1.2.x | [APK](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) ⚠️ Currently non-functional — being rebuilt |

**[All Releases →](https://github.com/dere-w4eyt/realgorilla-browser/releases)**

### ⚠️ Known Issues
- **Linux ZIP** currently corrupted — use the PPA method below
- **Android APK** currently non-functional — a rebuilt version is in progress
- **Password manager** does not work on Meta sites (Instagram, Facebook) due to their Content Security Policy — this affects all password managers

---

## 🚀 Quick Start

### Windows
1. Download `RealGorillaBrowser Setup 1.3.0.exe`
2. Run the installer
3. Launch from desktop shortcut
4. Complete the first-run tutorial!

**Portable:** Download the ZIP, extract, and run `RealGorillaBrowser.exe`

### 🐧 Linux (PPA - Recommended)
```bash
sudo add-apt-repository ppa:dere-w4eyt/realgorilla-browser
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 6E0AEACAB3A201E0
sudo apt update
sudo apt install realgorilla-browser-lite
/opt/realgorilla-browser-lite/realgorilla-browser --no-sandbox
```
Supported: Ubuntu Noble (24.04). Other versions may work but are not tested.

### Android
1. Download `RealGorillaBrowser-Android.apk`
2. Enable "Install from unknown sources" in Settings
3. Open the APK to install

---

## 🔐 Accounts & Sync

Create an account directly in the browser — no website needed:

- **Sign up** with email, password, and username
- **Login** with email/password or Google
- **Cloud sync** bookmarks & passwords across all your devices
- **Account Dashboard** shows your data, sync status, and last sync time
- **Sync Now** button for manual sync
- **Same account** works across the browser and the extensions store

Visit the [Extensions Store](https://realgorilla.site/extensions.html) to browse, submit, and review extensions.

### Install an Extension
1. Download a `.zip` from the store
2. In the browser, click 🧩 → **Load Extension**
3. Select the downloaded ZIP file

---

## 🛠️ Build From Source

```bash
git clone https://github.com/dere-w4eyt/realgorilla-browser.git
cd realgorilla-browser
npm install
npm start
```

---

## 🔒 Security

- **AI Proxy:** Cloudflare Worker hides API key
- **Extension Scanning:** VirusTotal API on all submissions
- **Ad Blocker:** Blocks tracking domains and removes ad elements
- **Password Manager:** Stored locally, optionally synced to Firestore
- **Email Verification:** Available on signup (optional)

---

## 🌐 Links

- [RealGorillaOS Website](https://realgorilla.site)
- [Extensions Store](https://realgorilla.site/extensions.html)
- [Submit Extension](https://realgorilla.site/submit.html)
- [Linux PPA](https://launchpad.net/~dere-w4eyt/+archive/ubuntu/realgorilla-browser)
- [Report a Bug](https://github.com/dere-w4eyt/realgorilla-browser/issues)
- [RealGorillaOS GitHub](https://github.com/dere-w4eyt/RealGorillaOS)

---

🦍 **Made for RealGorillaOS — Now with `apt install`!**
