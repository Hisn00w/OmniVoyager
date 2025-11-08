<div align="center">
  <img src="public/icon-128.png" alt="logo"/>
  <h1>Omni Voyager</h1>
  <h3>Your all-in-one toolkit for Gemini · AI Studio · ChatGPT · Deepseek · 豆包 · Kimi</h3>
  <p>Timeline navigation, prompt library, one-click export, width controls, and formula copy — all optimized for modern AI chat surfaces.</p>

  <p>
    <img src="https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=googlechrome&logoColor=white" alt="Chrome">
    <img src="https://img.shields.io/badge/Edge-0078D7?style=flat-square&logo=microsoftedge&logoColor=white" alt="Edge">
    <img src="https://img.shields.io/badge/Firefox-FF7139?style=flat-square&logo=firefox&logoColor=white" alt="Firefox">
    <img src="https://img.shields.io/badge/Safari-000000?style=flat-square&logo=safari&logoColor=white" alt="Safari">
    <img src="https://img.shields.io/badge/Opera-FF1B2D?style=flat-square&logo=opera&logoColor=white" alt="Opera">
    <img src="https://img.shields.io/badge/Brave-FB542B?style=flat-square&logo=brave&logoColor=white" alt="Brave">
  </p>
</div>

<p align="center">
  <a href="./README_ZH.md">中文说明（完整）</a> · <a href="#简体中文快速说明">中文速览</a>
</p>

---

## Features

<div align="center">
  <img src="public/teaser.png" alt="teaser"/>
</div>

### Timeline Navigation

Navigate long conversations at a glance:
- Click dots to jump to messages
- Hover for preview
- Long‑press to star important messages (syncs across tabs)
- Drag the bar to reposition; auto‑sync with scroll

### Folder Organization (Gemini/AI Studio)

Organize chats with two‑level folders:
- Drag and drop conversations into folders/subfolders
- Context menu: rename, duplicate, delete
- Local storage shared across accounts (u/0, u/1, …)
- Import/Export for cross‑device sync (see docs/IMPORT_EXPORT_GUIDE.md)

### Prompt Library

Save, search, and reuse prompts:
- Tag system + keyword search
- Import/Export as JSON
- Works on Gemini, AI Studio, and ChatGPT

### Formula Copy

Click KaTeX/MathJax formulas to copy source:
- Supports inline and display math
- Visual success feedback

### Chat Export (JSON · Markdown · PDF)

Export conversations with clean formatting:
- JSON for developers
- Markdown/PDF with images placed under `assets/`
- One‑click export button in the page header
- Preserves starred messages; hides UI noise (e.g., “Show thinking”)

### Adjustable Chat Width

Customize chat width (400–1400px) with real‑time preview.

> Open the extension popup to adjust scroll mode, chat width, and timeline options.

---

## Supported Sites

- Gemini (`https://gemini.google.com/*`)
- AI Studio (`https://aistudio.google.com/*`)
- ChatGPT (`https://chatgpt.com/*`, `https://chat.openai.com/*`)
- Deepseek (`https://chat.deepseek.com/*`)
- Doubao (`https://www.doubao.com/*`)
- Kimi (`https://www.kimi.com/*`, `https://kimi.moonshot.cn/*`)

---

## Installation

Recommended: download the latest release from GitHub Releases. The Web Store listing may lag due to reviews.

### Option 1: Manual (recommended)

Chromium (Chrome, Edge, Opera, Brave, Vivaldi, Arc):

1) Download `gemini-voyager-chrome-vX.Y.Z.zip` from the Releases page
2) Unzip it (you should see a `manifest.json` at the root)
3) Open `chrome://extensions` and enable Developer mode
4) Click "Load unpacked" and select the unzipped folder

<details>
<summary>Firefox</summary>

1) Download `gemini-voyager-firefox-vX.Y.Z.zip`
2) Unzip
3) Open `about:debugging#/runtime/this-firefox`
4) Click "Load Temporary Add-on" and choose the `manifest.json` inside the folder
</details>

<details>
<summary>Safari</summary>

1) Download `gemini-voyager-safari-vX.Y.Z.zip` from Releases
2) Convert: `xcrun safari-web-extension-converter dist_safari --macos-only --app-name "Omni Voyager"`
</details>

---

## For Developers

```bash
# Install dependencies (Bun recommended)
bun i

# Development (auto‑reload)
bun run dev:chrome
bun run dev:firefox
bun run dev:safari  # macOS

# Production builds
bun run build:chrome
bun run build:firefox
bun run build:safari
bun run build:all
```

Or with npm/pnpm:
```bash
pnpm install
pnpm run dev:chrome
pnpm run dev:firefox
pnpm run dev:safari  # macOS only
```

---

## Credits

Inspired by ChatGPT Conversation Timeline. We adapted the timeline concept and added folder management, prompt library, and chat export.

## Contributing

We welcome issues and pull requests. See `.github/CONTRIBUTING.md` for guidelines.

---

## Support This Project

If you find Omni Voyager helpful, consider supporting development:

<div align="center">
  <a href="https://www.buymeacoffee.com/Nag1ovo" target="_blank">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px; width: 174px; box-shadow: 0 3px 2px 0 rgba(190,190,190,0.5);" />
  </a>
</div>

<div align="center">
  <p><b>Or support via WeChat / Alipay:</b></p>
  <table>
    <tr>
      <td align="center">
        <img src="public/wechat-sponsor.jpg" alt="WeChat Pay" width="200"><br>
        <sub><b>WeChat Pay</b></sub>
      </td>
      <td align="center">
        <img src="public/alipay-sponsor.jpg" alt="Alipay" width="200"><br>
        <sub><b>Alipay</b></sub>
      </td>
    </tr>
  </table>
</div>

---

## Star History

<a href="https://www.star-history.com/#Hisn00w/OmniVoyager&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline" />
 </picture>
</a>

---

<div align="center">
  <p>Made with love for the AI community</p>
  <p>If you find this useful, please star the repo on GitHub!</p>
</div>

---

## 简体中文快速说明

- 支持站点：Gemini、AI Studio、ChatGPT（chatgpt.com / chat.openai.com）、Deepseek（chat.deepseek.com）、豆包（www.doubao.com）、Kimi（www.kimi.com / kimi.moonshot.cn）
- 主要功能：时间线导航、提示库、对话导出（JSON/Markdown/PDF）、聊天宽度可调、公式复制
- 文件夹管理：已在 Gemini/AI Studio 适配；ChatGPT 侧边栏适配计划中
- 安装：到 Releases 下载对应 zip，解压后在浏览器扩展页面开启「开发者模式」并选择「加载已解压的扩展」选择dist_chrome文件夹即可
- 开发：`bun i`，然后 `bun run dev:chrome`（或使用 pnpm/npm）
