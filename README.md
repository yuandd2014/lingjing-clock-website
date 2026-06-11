# 灵境时钟 · 官网

> 让桌面, 有一面镜子。

这是 [灵境时钟 LingJing Clock](https://github.com/yuandd2014/lingjing-clock) 的官方宣传站点, 面向普通用户。

**当前版本 · v1.3.1** — Apple 风 UI 大幅升级 (官网 5 页 + 主仓 firstrun/settings 重做) + 安装包 brand assets 重烧

[![下载 v1.3.1](https://img.shields.io/badge/下载-v1.3.1-0071e3?style=for-the-badge)](https://yuandd2014.github.io/lingjing-clock-website/download.html)
[![主仓](https://img.shields.io/badge/主仓-lingjing--clock-8e8e93?style=flat-square)](https://github.com/yuandd2014/lingjing-clock)
[![更新日志](https://img.shields.io/badge/更新日志-changelog-34c759?style=flat-square)](changelog.html)

---

## 站点结构 (v1.3.1)

```
website-site/
├── index.html             # 主页 — Apple 风 Hero + 4 token 色块
├── changelog.html         # 更新日志 — 4 段体验风 (砍技术细节)
├── download.html          # 下载 — 安装版 / 便携版
├── about.html             # 关于 — 项目由来 + 灵境UI 视觉 + 隐私 (timeline 已并入 changelog)
├── design.html            # 灵境UI 设计语言 — 8 色 + 4 token + 4 原则 + CSS 代码块 (v1.3.1 新增)
├── assets/
│   ├── css/
│   │   ├── base.css       # 变量 + reset + 字体
│   │   ├── apple.css      # 导航 + Hero + 按钮 + 卡片
│   │   └── pages.css      # 各页特定样式 (含 v1.3.1 .hero-tokens / .design-*)
│   ├── js/
│   │   └── nav.js         # 导航 + 滚动揭示
│   └── img/
│       └── favicon.svg
└── README.md
```

## 风格

- **明亮白底** — Apple iOS 26 / macOS Sequoia 风格
- **SF Pro 字体** — 系统字体栈 (`-apple-system, BlinkMacSystemFont`)
- **圆角 24-40px** + **多层柔和阴影**
- **蓝色主调** — `#0071e3` (Apple Blue) + 紫粉极光渐变 (灵境UI 强调色)
- **主视觉截图** — `assets/img/lingjing-demo-*.png` 由 Electron `BrowserWindow.capturePage()` 实际跑 HTML 生成, 100% 真实, 无 AI 渲染

## 每次发布同步

桌面 app 发布新版本后, 请同步更新:

1. `changelog.html` — 在最前面加新版本 entry
2. `download.html` — 把下载链接里的版本号和文件大小改为新值
3. `index.html` — 如果是大版本, 可更新"特性"列表 (按"这次更新"小节)
4. `README.md` — 当前版本号徽章 (顶部) 改为新版本号

> 💡 当前 `LingJing.Clock.Setup.1.3.0.exe` 安装包 89 MB · `LingJingClock-Portable.exe` 便携包 89 MB

## 本地预览

```bash
cd website-site
python -m http.server 8000
# 访问 http://localhost:8000
```
