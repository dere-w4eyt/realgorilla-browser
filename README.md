# 🦍 RealGorilla Browser

The official browser of **RealGorillaOS** — a Gorilla Tag themed, cross-platform web browser with built-in AI, extensions, and an app store.

[![Version](https://img.shields.io/badge/version-1.2.0-019999)](https://github.com/dere-w4eyt/realgorilla-browser/releases)
[![Platforms](https://img.shields.io/badge/platforms-Windows%20%7C%20Linux%20%7C%20Android-019999)](https://github.com/dere-w4eyt/realgorilla-browser/releases)
[![License](https://img.shields.io/badge/license-MIT-019999)](LICENSE)

---

## ✨ Features

- 🎨 **Two UI Themes** — Cyan jungle theme (Full) + Falkon-inspired dark theme (Lite)
- 🗂️ **Tabbed Browsing** — Chrome-style horizontal tabs with scroll
- 🤖 **Built-in AI** — Free chatbot powered by OpenRouter (secure Cloudflare proxy)
- 🧩 **Extension System** — Load extensions from ZIP files
- 🏪 **Extensions Store** — Browse, submit, and review extensions with VirusTotal scanning
- 🛡️ **Built-in Ad Blocker** — 60+ domains blocked with element hiding
- 🔒 **Privacy First** — API keys hidden via Cloudflare Worker proxy
- 🎮 **WebGL 2.0** — Play Krunker, Minecraft Classic, and more
- 🔖 **Bookmarks** — Save, open, and delete your favorites
- 📥 **Downloads Manager** — Auto-popup with file info
- ⚙️ **Settings** — Customize homepage and search engine
- 🆕 **New Tab Page** — Google search + quick shortcuts
- 📱 **Mobile Support** — Android APK with touch-optimized UI
- 🐧 **Linux Support** — PPA available for Ubuntu/Debian
- 🪶 **Lightweight Lite Edition** — Optimized for low-end hardware

---

## 📥 Download

| Platform | Download |
|----------|----------|
| 🪟 **Windows** | [Setup.exe](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) or [Portable ZIP](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) |
| 🐧 **Linux** | [PPA (Recommended)](https://launchpad.net/~dere-w4eyt/+archive/ubuntu/realgorilla-browser) or [Lite Linux ZIP](https://github.com/dere-w4eyt/realgorilla-browser/releases) |
| 📱 **Android** | [APK](https://github.com/dere-w4eyt/realgorilla-browser/releases/latest) |

**[All Releases →](https://github.com/dere-w4eyt/realgorilla-browser/releases)**

### ⚠️ Linux ZIP Currently Down

The portable Linux ZIP (`RealGorillaBrowser-Lite-Linux.zip`) is currently corrupted. Please use the **PPA install method** below instead. A fixed ZIP will be uploaded soon.

---

## 🚀 Quick Start

### Windows
1. Download `RealGorillaBrowser Setup 1.2.0.exe`
2. Run the installer
3. Launch from desktop shortcut

**Portable:** Download the ZIP, extract, and run `RealGorillaBrowser.exe`

### 🐧 Linux (PPA - Recommended)

```bash
sudo add-apt-repository ppa:dere-w4eyt/realgorilla-browser
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 6E0AEACAB3A201E0
sudo apt update
sudo apt install realgorilla-browser-lite
/opt/realgorilla-browser-lite/realgorilla-browser --no-sandbox
Supported: Ubuntu Noble (24.04) and newer. Older versions may not work.

Android
Download RealGorillaBrowser-Android.apk

Enable "Install from unknown sources" in Settings

Open the APK to install

🧩 Extensions
Visit the Extensions Store to browse, submit, and review extensions. All submissions are automatically scanned with VirusTotal.

Install an Extension
Download a .zip from the store

In the browser, click 🧩 → Load Extension

Select the downloaded ZIP file

🛠️ Build From Source
bash
git clone https://github.com/dere-w4eyt/realgorilla-browser.git
cd realgorilla-browser
npm install
npm start
🔒 Security
AI Proxy: Cloudflare Worker hides API key

Extension Scanning: VirusTotal API on all submissions

Ad Blocker: Blocks tracking domains and removes ad elements

🌐 Links
RealGorillaOS Website

Extensions Store

Linux PPA

Report a Bug

🦍 Made for RealGorillaOS — Now with apt install!
