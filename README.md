<div align="center">
  <img src="public/icon-128.png" alt="Omni Voyager 标志" width="120" />
  <h1>Omni Voyager</h1>
  <p>面向 Gemini · AI Studio · ChatGPT · DeepSeek · 豆包 · Kimi 的多合一效率工具</p>
  <p>时间线导航 · 提示词库 · 一键导出 · 聊天区宽度调节 · 公式复制</p>
  <p>本项目基于 <a href="https://github.com/Nagi-ovo/gemini-voyager" target="_blank">Gemini Voyager</a> 改造，感谢原作者 @Nagi-ovo</p>
  <p>
    <img src="https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=googlechrome&logoColor=white" alt="Chrome 徽标" />
    <img src="https://img.shields.io/badge/Edge-0078D7?style=flat-square&logo=microsoftedge&logoColor=white" alt="Edge 徽标" />
    <img src="https://img.shields.io/badge/Opera-FF1B2D?style=flat-square&logo=opera&logoColor=white" alt="Opera 徽标" />
    <img src="https://img.shields.io/badge/Brave-FB542B?style=flat-square&logo=brave&logoColor=white" alt="Brave 徽标" />
  </p>
  <p>
    <a href="./README_EN.md">英文版</a>
  </p>
</div>

---

## 特性速览

- **时间线导航**：纵览长对话，支持预览、定位、拖拽跳转与重点收藏。
- **文件夹管理**：Gemini / AI Studio 提供双层文件夹，支持拖放、批量操作与导入导出。
- **提示词库**：标签 + 关键词搜索，常用提示一键复用，可 JSON 备份。
- **对话导出**：JSON / Markdown / PDF，多格式自定义导出，自动整理图片资源。
- **聊天区调宽**：400–1400 px 任意拖拽，自适应不同屏幕与排版偏好。
- **公式复制**：识别 KaTeX / MathJax，点击即可复制源码，并提供成功提示。

<div align="center">
  <img src="public/teaser.png" alt="Omni Voyager 功能示意图" />
</div>

---

## 详细功能

### 时间线导航

- 圆点代表用户发言，点击即可跳转。
- 悬停显示摘要，长按可添加星标。
- 进度条可拖动定位，滚动与时间线保持同步。

### 文件夹管理（Gemini / AI Studio）

- 双层文件夹结构，支持拖拽整理对话。
- 右键菜单可重命名、复制、删除以及批量操作。
- 本地存储可在不同账号 (u/0、u/1 …) 间共享。
- 导入 / 导出 JSON，方便跨设备迁移（详见 `docs/IMPORT_EXPORT_GUIDE.md`）。

### 提示词库

- 标签 + 搜索快速定位提示。
- 支持批量导入导出，便利团队共享。
- 已适配 Gemini、AI Studio 与 ChatGPT。

### 对话导出（JSON / Markdown / PDF）

- JSON 适合二次开发，Markdown / PDF 自带资源目录。
- 导出按钮固定在页面顶部，操作不打扰当前对话。
- 可选是否包含星标消息、系统提示等内容。

### 聊天宽度调节

- 在弹窗中拖动或输入即可调整聊天区域宽度。
- 不同站点可保存独立设置，常用布局一键复原。

### 公式复制

- 自动识别行内/块级公式，新增按钮或点击区域即可复制原始 LaTeX。
- 复制成功/失败都会弹出提示，方便确认。

---

## 支持站点

| 类型 | 站点 |
| --- | --- |
| Google | `https://gemini.google.com/*`、`https://aistudio.google.com/*` |
| OpenAI | `https://chatgpt.com/*`、`https://chat.openai.com/*` |
| DeepSeek | `https://chat.deepseek.com/*` |
| 豆包 | `https://www.doubao.com/*` |
| Kimi | `https://www.kimi.com/*`、`https://kimi.moonshot.cn/*` |

---

## 安装指南（Chromium 内核浏览器）

1. 前往 Releases 下载 Code。
2. 解压到任意目录。
3. 打开 `chrome://extensions`，启用「开发者模式」。
4. 点击「加载已解压的扩展程序」，选择dist_chrome文件夹。

> Chrome、Edge、Opera、Brave、Vivaldi、Arc 等浏览器均可按此步骤安装。

---

## 开发者指南

```bash
# 安装依赖（推荐 Bun）
bun i

# 开发调试（自动重载）
bun run dev:chrome

# 生产构建
bun run build:chrome
```

若使用 npm / pnpm：

```bash
pnpm install
pnpm run dev:chrome
```


---

## 许可与致谢
MIT License（详见 `LICENSE`）。

本项目基于 [Gemini Voyager](https://github.com/Nagi-ovo/gemini-voyager) 改编，感谢原作者的工作。
---
## 相关链接
- [Gemini Voyager](https://github.com/Nagi-ovo/gemini-voyager)**：原始项目，提供时间线、提示库等核心思路。
- [DeepSeek Voyager](https://github.com/Azurboy/deepseek-voyager)**：将 Gemini Voyager 移植到 DeepSeek，继续深化时间线与会话管理体验。
- [ChatGPT Conversation Timeline](https://github.com/Reborn14/chatgpt-conversation-timeline)**：最初的 ChatGPT 时间线扩展，启发了我们在多平台上实现时间线与更多高级功能。

感谢所有帮助完善 Omni Voyager 的朋友！❤️

---


## Star 记录

<a href="https://www.star-history.com/#Hisn00w/OmniVoyager&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline" />
   <img alt="Star 统计图" src="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline" />
 </picture>
</a>

---

<div align="center">
  <p>为 AI 社区倾情制作 · 如果觉得好用，请记得点个 ⭐</p>
</div>
