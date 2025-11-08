<div align="center">
  <img src="public/icon-128.png" alt="logo"/>
  <h1>Omni Voyager</h1>
  <h3>您的全能工具包，适用于 Gemini · AI Studio · ChatGPT · Deepseek · 豆包 · Kimi</h3>
  <p>时间线导航、提示词库、一键导出、宽度控制和公式复制 — 全部针对现代AI聊天界面进行了优化。</p>

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
  <a href="./README_EN.md">English</a> · <a href="#简体中文快速说明">中文速览</a>
</p>

---

## 功能特性

<div align="center">
  <img src="public/teaser.png" alt="teaser"/>
</div>

### 时间线导航

一览无余地浏览长对话：
- 点击圆点跳转到消息
- 悬停预览内容
- 长按收藏重要消息（跨标签页同步）
- 拖拽进度条重新定位；自动与滚动同步

### 文件夹组织 (Gemini/AI Studio)

使用两级文件夹整理聊天记录：
- 拖放对话到文件夹/子文件夹
- 右键菜单：重命名、复制、删除
- 本地存储跨账户共享 (u/0, u/1, …)
- 导入/导出实现跨设备同步 (参见 docs/IMPORT_EXPORT_GUIDE.md)

### 提示词库

保存、搜索和重复使用提示词：
- 标签系统 + 关键词搜索
- 以JSON格式导入/导出
- 适用于 Gemini、AI Studio 和 ChatGPT

### 公式复制

点击KaTeX/MathJax公式复制源码：
- 支持行内和块级数学公式
- 可视化成功反馈

### 对话导出 (JSON · Markdown · PDF)

导出格式良好的对话：
- JSON格式供开发者使用
- Markdown/PDF格式图片放置在 `assets/` 目录下
- 页面头部的一键导出按钮
- 保留收藏的消息；隐藏界面干扰元素（如"显示思考过程"）

### 可调节聊天宽度

自定义聊天宽度（400-1400px）实时预览。

> 打开扩展弹窗可调整滚动模式、聊天宽度和时间线选项。

---

## 支持的网站

- Gemini (`https://gemini.google.com/*`)
- AI Studio (`https://aistudio.google.com/*`)
- ChatGPT (`https://chatgpt.com/*`, `https://chat.openai.com/*`)
- Deepseek (`https://chat.deepseek.com/*`)
- 豆包 (`https://www.doubao.com/*`)
- Kimi (`https://www.kimi.com/*`, `https://kimi.moonshot.cn/*`)

---

## 安装方法

推荐：从GitHub Releases下载最新版本。Web商店列表可能因审核而滞后。

### 方式一：手动安装（推荐）

Chromium 浏览器 (Chrome, Edge, Opera, Brave, Vivaldi, Arc)：

1) 从Releases页面下载 `gemini-voyager-chrome-vX.Y.Z.zip`
2) 解压缩（你应该在根目录看到 `manifest.json`）
3) 打开 `chrome://extensions` 并启用开发者模式
4) 点击"加载已解压的扩展程序"并选择解压后的文件夹

<details>
<summary>Firefox</summary>

1) 下载 `gemini-voyager-firefox-vX.Y.Z.zip`
2) 解压缩
3) 打开 `about:debugging#/runtime/this-firefox`
4) 点击"临时载入附加组件"并选择文件夹内的 `manifest.json`
</details>

<details>
<summary>Safari</summary>

1) 从Releases下载 `gemini-voyager-safari-vX.Y.Z.zip`
2) 转换：`xcrun safari-web-extension-converter dist_safari --macos-only --app-name "Omni Voyager"`
</details>

---

## 开发者指南

```bash
# 安装依赖（推荐使用Bun）
bun i

# 开发模式（自动重载）
bun run dev:chrome
bun run dev:firefox
bun run dev:safari  # macOS

# 生产构建
bun run build:chrome
bun run build:firefox
bun run build:safari
bun run build:all
```

或者使用 npm/pnpm：
```bash
pnpm install
pnpm run dev:chrome
pnpm run dev:firefox
pnpm run dev:safari  # 仅macOS
```

---

## 致谢

灵感来源于ChatGPT Conversation Timeline。我们借鉴了时间线概念，并增加了文件夹管理、提示词库和对话导出功能。

## 贡献

欢迎提交问题和拉取请求。请参阅 `.github/CONTRIBUTING.md` 了解指南。

---

## 支持此项目

如果您觉得Omni Voyager很有帮助，请考虑支持开发：

<div align="center">
  <a href="https://www.buymeacoffee.com/Nag1ovo" target="_blank">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px; width: 174px; box-shadow: 0 3px 2px 0 rgba(190,190,190,0.5);" />
  </a>
</div>

<div align="center">
  <p><b>或通过微信/支付宝支持：</b></p>
  <table>
    <tr>
      <td align="center">
        <img src="public/wechat-sponsor.jpg" alt="微信支付" width="200"><br>
        <sub><b>微信支付</b></sub>
      </td>
      <td align="center">
        <img src="public/alipay-sponsor.jpg" alt="支付宝" width="200"><br>
        <sub><b>支付宝</b></sub>
      </td>
    </tr>
  </table>
</div>

---

## Star历史

<a href="https://www.star-history.com/#Hisn00w/OmniVoyager&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Hisn00w/OmniVoyager&type=Timeline" />
 </picture>
</a>

---

<div align="center">
  <p>为AI社区倾情制作</p>
  <p>如果您觉得有用，请在GitHub上给这个仓库加星！</p>
</div>

---

## 简体中文快速说明

- 支持站点：Gemini、AI Studio、ChatGPT（chatgpt.com / chat.openai.com）、Deepseek（chat.deepseek.com）、豆包（www.doubao.com）、Kimi（www.kimi.com / kimi.moonshot.cn）
- 主要功能：时间线导航、提示库、对话导出（JSON/Markdown/PDF）、聊天宽度可调、公式复制
- 文件夹管理：已在 Gemini/AI Studio 适配；ChatGPT 侧边栏适配计划中
- 安装：到 Releases 下载对应 zip，解压后在浏览器扩展页面开启「开发者模式」并选择「加载已解压的扩展」选择dist_chrome文件夹即可
- 开发：`bun i`，然后 `bun run dev:chrome`（或使用 pnpm/npm）