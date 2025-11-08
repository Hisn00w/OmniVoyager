# Safari Development Guide

English | [简体中文](README_ZH.md)

Developer guide for building and extending Omni Voyager for Safari.

## Quick Start

### Build from Source

```bash
# Install dependencies
bun install

# Build for Safari
bun run build:safari
```

This creates a `dist_safari/` folder with the extension files.

### Convert and Run

```bash
# Convert to Safari format
xcrun safari-web-extension-converter dist_safari --macos-only --app-name "Omni Voyager"

# Open in Xcode
open "Omni Voyager/Omni Voyager.xcodeproj"
```

In Xcode:
1. Select **Signing & Capabilities** �?Choose your Team
2. Set target to **My Mac**
3. Press **⌘R** to build and run

## Development Workflow

### Auto-reload on Changes

```bash
bun run dev:safari
```

This watches for file changes and rebuilds automatically. After each rebuild:
1. Press **⌘R** in Xcode to reload
2. Safari will refresh the extension

### Manual Build

```bash
# After code changes
bun run build:safari

# Then rebuild in Xcode (⌘R)
```

## Adding Swift Native Code (Optional)

This project includes Swift code for native macOS features. Adding it is **optional** but recommended.

### Files Included

```
safari/
├── App/
�?  └── SafariWebExtensionHandler.swift  # Native message handler
└── Models/
    └── SafariMessage.swift              # Message definitions
```

### How to Add

1. Open the Xcode project
2. Right-click **"Omni Voyager Extension"** target
3. Select **Add Files to "Omni Voyager Extension"...**
4. Navigate to `safari/App/` and `safari/Models/`
5. Check **"Copy items if needed"**
6. Ensure target is **"Omni Voyager Extension"**

### Native Features

Once added, you can:
- Access macOS Keychain (future)
- Use native notifications
- Access file system with native pickers
- Sync via iCloud (future)
- Enhanced debugging logs

### Native Messaging API

**From JavaScript:**
```javascript
// Health check
browser.runtime.sendNativeMessage({ action: 'ping' }, (response) => {
  console.log(response); // { success: true, data: { status: "ok", message: "pong" } }
});

// Get version
browser.runtime.sendNativeMessage({ action: 'getVersion' }, (response) => {
  console.log(response.data); // { version: "1.0.0", platform: "macOS" }
});
```

**Available Actions:**
- `ping` - Health check
- `getVersion` - Get extension version info
- `syncStorage` - Sync storage (placeholder for future)

## Debugging

### View Extension Logs

**Web Console:**
- Safari �?Develop �?Web Extension Background Pages �?Omni Voyager

**Native Logs:**
```bash
log stream --predicate 'subsystem == "com.gemini-voyager.safari"' --level debug
```

### Common Issues

**"Module 'SafariServices' not found"**
- Ensure Swift files are added to "Omni Voyager Extension" target, not the main app

**Native messaging not working**
- Check `Info.plist` has `SafariWebExtensionHandler` as principal class

**Swift files not compiling**
- Verify Target Membership in Xcode file inspector

## Building for Distribution

### Create Archive

1. Product �?Archive in Xcode
2. Window �?Organizer
3. Select archive �?Distribute App
4. Follow prompts to export

### For App Store

Requires:
- Apple Developer account ($99/year)
- App Store Connect setup
- App review submission

See [Apple's official guide](https://developer.apple.com/documentation/safariservices/safari_web_extensions/distributing_your_safari_web_extension) for details.

## Project Structure

```
├── dist_safari/              # Built extension (gitignored)
├── safari/                   # Native Swift code
�?  ├── App/                 # Extension handlers
�?  ├── Models/              # Data models
�?  └── Resources/           # Example code
├── src/                     # Main extension source
└── vite.config.safari.ts    # Safari build config
```

## Build Commands

```bash
bun run build:safari   # Production build
bun run dev:safari     # Development with auto-reload
bun run build:all      # Build for all browsers
```

## Resources

- [Safari Web Extensions Docs](https://developer.apple.com/documentation/safariservices/safari_web_extensions)
- [Native Messaging Guide](https://developer.apple.com/documentation/safariservices/safari_web_extensions/messaging_between_the_app_and_javascript_in_a_safari_web_extension)
- [Converting Extensions for Safari](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari)

## Contributing

See [CONTRIBUTING.md](../.github/CONTRIBUTING.md) for contribution guidelines.

When adding native features:
1. Define action in `SafariMessage.swift`
2. Implement handler in `SafariWebExtensionHandler.swift`
3. Add JavaScript API in web extension
4. Document in this README
