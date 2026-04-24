# 🦍 RealGorilla Browser

The official browser of **RealGorillaOS** — a Gorilla Tag themed, cross-platform web browser with built-in AI, extensions, and an app store.

[![Version](https://img.shields.io/badge/version-1.2.0-019999)](https://github.com/dere-w4eyt/realgorilla-browser/releases)
[![Platforms](https://img.shields.io/badge/platforms-Windows%20%7C%20Linux%20%7C%20Android-019999)](https://github.com/dere-w4eyt/realgorilla-browser/releases)
[![License](https://img.shields.io/badge/license-MIT-019999)](LICENSE)

---

## ✨ Features

- 🎨 **Gorilla Tag Themed UI** — Cyan & dark jungle colors
- 🗂️ **Tabbed Browsing** — Chrome-style horizontal tabs with scroll
- 🤖 **Built-in AI** — Free chatbot powered by OpenRouter (secure Cloudflare proxy)
- 🧩 **Extension System** — Load extensions from ZIP files
- 🏪 **Extensions Store** — Browse, submit, and review extensions at [realgorillaos-site/extensions](https://dere-w4eyt.github.io/realgorillaos-site/extensions.html)
- 🛡️ **Built-in Ad Blocker** — 60+ domains blocked with element hiding
- 🔒 **Privacy First** — API keys hidden via Cloudflare Worker proxy
- 🎮 **WebGL 2.0** — Play Krunker, Minecraft Classic, and more
- 🔖 **Bookmarks** — Save, open, and delete your favorites
- 📥 **Downloads Manager** — Auto-popup with file info
- ⚙️ **Settings** — Customize homepage and search engine
- 🆕 **New Tab Page** — Google search + quick shortcuts
- 📱 **Mobile Support** — Android APK with touch-optimized UI
- 🐧 **Linux Support** — Portable build available
- 🪶 **Lightweight** — Runs on low-end hardware

---

## 📥 Download

| Platform | Download |
|----------|----------|
| 🪟 **Windows** | [Setup.exe](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) or [Portable ZIP](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) |
| 🐧 **Linux** | [Linux ZIP](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) |
| 📱 **Android** | [APK](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) |

**[All Releases →](https://github.com/dere-w4eyt/realgorilla-browser/releases)**

---

## 🚀 Quick Start

### Windows
1. Download `RealGorillaBrowser Setup 1.2.0.exe`
2. Run the installer
3. Launch from desktop shortcut

**Portable:** Download the ZIP, extract, and run `RealGorillaBrowser.exe`

### Linux
```bash
unzip RealGorillaBrowser-Linux.zip
cd RealGorillaBrowser-Linux
chmod +x realgorilla-browser
sudo chown root:root chrome-sandbox
sudo chmod 4755 chrome-sandbox
./realgorilla-browser
Or without sandbox: ./realgorilla-browser --no-sandbox

Android
Download RealGorillaBrowser-Android.apk

Enable "Install from unknown sources" in Settings

Open the APK to install

🧩 Extensions
RealGorilla Browser has a built-in extension system. Visit the Extensions Store to browse available extensions.

Install an Extension
Download a .zip from the store

In the browser, click 🧩 → Load Extension

Select the downloaded ZIP file

Extension activates immediately

Submit an Extension
Go to the Submit Page

Fill in your extension details

Your submission is auto-scanned with VirusTotal

If clean, it appears in the store automatically

🛠️ Build From Source
bash
git clone https://github.com/dere-w4eyt/realgorilla-browser.git
cd realgorilla-browser
npm install
npm start
Build desktop:

bash
npm run build
Build Android:

bash
npx cap copy android
cd android
./gradlew assembleDebug
🔒 Security
AI Proxy: All AI requests go through a Cloudflare Worker — API key never exposed

Extension Scanning: All community submissions scanned with VirusTotal API

Ad Blocker: Blocks tracking domains and removes ad elements

🌐 Links
RealGorillaOS Website

Extensions Store

Submit Extension

RealGorillaOS GitHub

Report a Bug

📝 Changelog
v1.2.0 (Current)
🧩 Extension system with ZIP loader

🏪 Extensions store with community submissions

🔍 VirusTotal auto-scanning

📥 Downloads manager with auto-popup

🎨 Dark Mode extension

📄 App detail pages with reviews

🗄️ Cloudflare D1 live database

v1.1.0
⚙️ Settings modal

📥 Downloads viewer

🔖 Bookmarks with add/delete

🧩 Extension manager UI

v1.0.0
🎨 Gorilla-themed UI

🗂️ Tabbed browsing

🤖 AI chatbot

🎮 WebGL 2.0 gaming

🆕 New tab page

🦍 Made for RealGorillaOS 
