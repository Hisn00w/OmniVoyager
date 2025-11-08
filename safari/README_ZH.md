# Safari 开发指�?
[English](README.md) | 简体中�?
�?Safari 构建和扩�?Omni Voyager 的开发者指南�?
## 快速开�?
### 从源代码构建

```bash
# 安装依赖
bun install

# �?Safari 构建
bun run build:safari
```

这会创建一个包含扩展文件的 `dist_safari/` 文件夹�?
### 转换并运�?
```bash
# 转换�?Safari 格式
xcrun safari-web-extension-converter dist_safari --macos-only --app-name "Omni Voyager"

# �?Xcode 中打开
open "Omni Voyager/Omni Voyager.xcodeproj"
```

�?Xcode 中：
1. 选择 **Signing & Capabilities** �?选择你的 Team
2. 设置目标�?**My Mac**
3. �?**⌘R** 构建并运�?
## 开发工作流

### 文件变更自动重载

```bash
bun run dev:safari
```

这会监听文件变更并自动重新构建。每次重新构建后�?1. �?Xcode 中按 **⌘R** 重新加载
2. Safari 会刷新扩�?
### 手动构建

```bash
# 修改代码�?bun run build:safari

# 然后�?Xcode 中重新构建（⌘R�?```

## 添加 Swift 原生代码（可选）

本项目包含用于原�?macOS 功能�?Swift 代码。添加它�?*可选的**，但推荐使用�?
### 包含的文�?
```
safari/
├── App/
�?  └── SafariWebExtensionHandler.swift  # 原生消息处理�?└── Models/
    └── SafariMessage.swift              # 消息定义
```

### 如何添加

1. 打开 Xcode 项目
2. 右键点击 **"Omni Voyager Extension"** 目标
3. 选择 **Add Files to "Omni Voyager Extension"...**
4. 导航�?`safari/App/` �?`safari/Models/`
5. 勾�?**"Copy items if needed"**
6. 确保目标�?**"Omni Voyager Extension"**

### 原生功能

添加后，你可以：
- 访问 macOS 钥匙串（未来�?- 使用原生通知
- 通过原生选择器访问文件系�?- 通过 iCloud 同步（未来）
- 增强的调试日�?
### 原生消息 API

**�?JavaScript 调用�?*
```javascript
// 健康检�?browser.runtime.sendNativeMessage({ action: 'ping' }, (response) => {
  console.log(response); // { success: true, data: { status: "ok", message: "pong" } }
});

// 获取版本
browser.runtime.sendNativeMessage({ action: 'getVersion' }, (response) => {
  console.log(response.data); // { version: "1.0.0", platform: "macOS" }
});
```

**可用操作�?*
- `ping` - 健康检�?- `getVersion` - 获取扩展版本信息
- `syncStorage` - 同步存储（未来功能的占位符）

## 调试

### 查看扩展日志

**Web 控制台：**
- Safari �?开�?�?Web Extension Background Pages �?Omni Voyager

**原生日志�?*
```bash
log stream --predicate 'subsystem == "com.gemini-voyager.safari"' --level debug
```

### 常见问题

**"Module 'SafariServices' not found"**
- 确保 Swift 文件添加�?"Omni Voyager Extension" 目标，而不是主应用

**原生消息不工�?*
- 检�?`Info.plist` 是否�?`SafariWebExtensionHandler` 设置为主�?
**Swift 文件未编�?*
- �?Xcode 文件检查器中验证目标成员资�?
## 构建分发版本

### 创建存档

1. �?Xcode 中选择 Product �?Archive
2. Window �?Organizer
3. 选择存档 �?Distribute App
4. 按提示导�?
### 发布�?App Store

需要：
- Apple Developer 账号�?99/年）
- App Store Connect 设置
- 应用审核提交

详见 [Apple 官方指南](https://developer.apple.com/documentation/safariservices/safari_web_extensions/distributing_your_safari_web_extension)�?
## 项目结构

```
├── dist_safari/              # 构建的扩展（已忽略）
├── safari/                   # 原生 Swift 代码
�?  ├── App/                 # 扩展处理�?�?  ├── Models/              # 数据模型
�?  └── Resources/           # 示例代码
├── src/                     # 主扩展源代码
└── vite.config.safari.ts    # Safari 构建配置
```

## 构建命令

```bash
bun run build:safari   # 生产构建
bun run dev:safari     # 开发模式（自动重载�?bun run build:all      # 为所有浏览器构建
```

## 资源

- [Safari Web Extensions 文档](https://developer.apple.com/documentation/safariservices/safari_web_extensions)
- [原生消息指南](https://developer.apple.com/documentation/safariservices/safari_web_extensions/messaging_between_the_app_and_javascript_in_a_safari_web_extension)
- [�?Safari 转换扩展](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari)

## 贡献

查看 [CONTRIBUTING.md](../.github/CONTRIBUTING.md) 了解贡献指南�?
添加原生功能时：
1. �?`SafariMessage.swift` 中定义操�?2. �?`SafariWebExtensionHandler.swift` 中实现处理器
3. �?web 扩展中添�?JavaScript API
4. 在本 README 中记�?