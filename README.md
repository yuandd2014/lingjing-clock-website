# 灵境时钟 · 官网

> 让桌面, 有一面镜子。

这是 [灵境时钟 LingJing Clock](https://github.com/yuandd2014/lingjing-clock) 的官方宣传站点, 面向普通用户。

**当前版本 · v1.2.0** — 灵境 安装仪式 + 自动更新

[![下载 v1.2.0](https://img.shields.io/badge/下载-v1.2.0-0071e3?style=for-the-badge)](https://yuandd2014.github.io/lingjing-clock-website/download.html)
[![主仓](https://img.shields.io/badge/主仓-lingjing--clock-8e8e93?style=flat-square)](https://github.com/yuandd2014/lingjing-clock)
[![更新日志](https://img.shields.io/badge/更新日志-changelog-34c759?style=flat-square)](changelog.html)

---

## 站点结构

```
website-site/
├── index.html             # 主页 — Apple 风 Hero + 真实录屏 GIF
├── changelog.html         # 更新日志 — v1.0.0 / v1.0.1 / v1.1.0 / v1.2.0
├── download.html          # 下载 — 安装版 (95 MB) / 便携版 (93 MB)
├── about.html             # 关于 — 项目由来 + 灵境UI 视觉 + 隐私
├── assets/
│   ├── css/
│   │   ├── base.css       # 变量 + reset + 字体
│   │   ├── apple.css      # 导航 + Hero + 按钮 + 卡片
│   │   └── pages.css      # 各页特定样式
│   ├── js/
│   │   └── nav.js         # 导航 + 滚动揭示
│   └── img/
│       ├── favicon.svg
│       └── lingjing-demo.gif   # 真实录屏 GIF 主视觉
└── README.md
```

## 风格

- **明亮白底** — Apple iOS 26 / macOS Sequoia 风格
- **SF Pro 字体** — 系统字体栈 (`-apple-system, BlinkMacSystemFont`)
- **圆角 24-40px** + **多层柔和阴影**
- **蓝色主调** — `#0071e3` (Apple Blue) + 紫粉极光渐变 (灵境UI 强调色)
- **主视觉 GIF** — `assets/img/lingjing-demo.gif` 真实录屏, 显示完整灵境时钟运行画面

## 每次发布同步

桌面 app 发布新版本后, 请同步更新:

1. `changelog.html` — 在最前面加新版本 entry
2. `download.html` — 把下载链接里的版本号和文件大小改为新值
3. `index.html` — 如果是大版本, 可更新"特性"列表 (按"这次更新"小节)
4. `README.md` — 当前版本号徽章 (顶部) 改为新版本号

> 💡 当前 `LingJing.Clock.Setup.1.2.0.exe` 安装包 95 MB · `LingJingClock-Portable.exe` 便携包 93 MB

## 本地预览

```bash
cd website-site
python -m http.server 8000
# 访问 http://localhost:8000
```

## 部署

GitHub Pages 静态托管, main 分支根目录。

```
https://yuandd2014.github.io/lingjing-clock-website/
```

## License

MIT
