<div align="center">
  <img src="public/icon-128.png" alt="Omni Voyager logo" width="120" />
  <h1>Omni Voyager</h1>
  <p>Your all-in-one productivity kit for Gemini · AI Studio · ChatGPT · DeepSeek · Doubao · Kimi</p>
  <p>Timeline navigation · Prompt library · One-click export · Flexible chat width · Formula copy</p>
  <p>Forked from <a href="https://github.com/Nagi-ovo/gemini-voyager" target="_blank">Gemini Voyager</a> — huge thanks to @Nagi-ovo</p>
  <p>
    <img src="https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=googlechrome&logoColor=white" alt="Chrome badge" />
    <img src="https://img.shields.io/badge/Edge-0078D7?style=flat-square&logo=microsoftedge&logoColor=white" alt="Edge badge" />
    <img src="https://img.shields.io/badge/Opera-FF1B2D?style=flat-square&logo=opera&logoColor=white" alt="Opera badge" />
    <img src="https://img.shields.io/badge/Brave-FB542B?style=flat-square&logo=brave&logoColor=white" alt="Brave badge" />
  </p>
  <p>
    <a href="./README.md">简体中文版</a>
  </p>
</div>

---

## Feature Highlights

- **Timeline navigation** – glance through long conversations, preview messages, jump precisely, and star key turns.
- **Folder manager** – dual-level folders (Gemini / AI Studio) with drag & drop, context menu actions, and import/export.
- **Prompt library** – tags plus keyword search for reusable prompts, with JSON backup/restore.
- **Conversation export** – JSON / Markdown / PDF, including assets collection and configurable filters.
- **Adjustable chat width** – drag or input any width between 400–1400 px per site.
- **Formula copy** – detect KaTeX / MathJax formulas and copy the original LaTeX with instant feedback.

<div align="center">
  <img src="public/teaser.png" alt="Omni Voyager teaser" />
</div>

---

## Detailed Features

### Timeline Navigation

- Each dot marks a user turn; click to jump instantly.
- Hover to preview summary, long-press to star (syncs across tabs).
- Drag the rail to reposition; scroll and timeline stay in sync.

### Folder Manager (Gemini / AI Studio)

- Two-tier folder tree with drag-and-drop reordering.
- Context menu provides rename, duplicate, delete, bulk actions.
- Local storage shared across Google accounts (u/0, u/1, …).
- Import/export JSON for cross-device migration (see `docs/IMPORT_EXPORT_GUIDE.md`).

### Prompt Library

- Tag + keyword filtering surfaces prompts quickly.
- Bulk import/export enables team workflows.
- Available on Gemini, AI Studio, and ChatGPT.

### Conversation Export (JSON / Markdown / PDF)

- JSON for automation, Markdown/PDF with media moved under `assets/`.
- One-click export button fixed in the page header.
- Choose whether to include starred turns, system prompts, or UI decorations.

### Adjustable Chat Width

- Tweak width in the popup via slider/input; changes apply immediately.
- Remembers site-specific presets so you can switch layouts quickly.

### Formula Copy

- Detects inline/block KaTeX or MathJax formulas and inserts copy buttons.
- Floating toast reports success or failure near the cursor.

---

## Supported Sites

| Category | URLs |
| --- | --- |
| Google | `https://gemini.google.com/*`, `https://aistudio.google.com/*` |
| OpenAI | `https://chatgpt.com/*`, `https://chat.openai.com/*` |
| DeepSeek | `https://chat.deepseek.com/*` |
| Doubao | `https://www.doubao.com/*` |
| Kimi | `https://www.kimi.com/*`, `https://kimi.moonshot.cn/*` |

---

## Installation (Chromium Browsers)

1. Download `gemini-voyager-chrome-vX.Y.Z.zip` from Releases.
2. Extract it somewhere you can keep (you should see `manifest.json`).
3. Open `chrome://extensions` (or equivalent) and enable **Developer mode**.
4. Click **Load unpacked** and select the extracted folder.

> Works on Chrome, Edge, Opera, Brave, Vivaldi, Arc, and other Chromium-based browsers.

---

## Developer Guide

```bash
# Install dependencies (Bun recommended)
bun i

# Dev mode with auto-reload
bun run dev:chrome

# Production build
bun run build:chrome
```

Prefer npm/pnpm?

```bash
pnpm install
pnpm run dev:chrome
```

---

## Contribution & Roadmap

- PRs and issues are welcome — please include repro steps and screenshots when possible.
- ChatGPT sidebar folder support is on the roadmap; ideas and mockups are appreciated.
- Need custom features? Open a discussion or issue so we can coordinate.

---

## Credits

- Original concept: [Gemini Voyager](https://github.com/Nagi-ovo/gemini-voyager).
- DeepSeek adaptation: [DeepSeek Voyager](https://github.com/Azurboy/deepseek-voyager).
- Inspiration: [ChatGPT Conversation Timeline](https://github.com/Reborn14/chatgpt-conversation-timeline).

Big thanks to every contributor and user helping Omni Voyager improve! ❤️

---

## Support the Project

If Omni Voyager saves you time, consider sponsoring development:

<div align="center">
  <a href="https://www.buymeacoffee.com/Nag1ovo" target="_blank">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me a Coffee" style="height: 41px; width: 174px; box-shadow: 0 3px 2px 0 rgba(190,190,190,0.5);" />
  </a>
</div>

<div align="center">
  <p><b>Or sponsor via WeChat / Alipay:</b></p>
  <table>
    <tr>
      <td align="center">
        <img src="public/wechat-sponsor.jpg" alt="WeChat Pay" width="200" /><br />
        <sub><b>WeChat</b></sub>
      </td>
      <td align="center">
        <img src="public/alipay-sponsor.jpg" alt="Alipay" width="200" /><br />
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
   <img alt="Star history chart" src="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline" />
 </picture>
</a>

---

<div align="center">
  <p>Made with ❤️ for the AI community — if you enjoy it, please leave a ⭐</p>
</div>
