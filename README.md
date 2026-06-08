# 灵境时钟 · 官网

> 灵境UI / 灵镜光感 — 屏幕如镜, 光从内生

这是 [LingJing Clock](https://github.com/yuandd2014/lingjing-clock) 的官方宣传站点,
采用与桌面应用一致的 **灵境UI** 设计语言 + **灵镜光感** 视觉效果。

## 站点结构

```
website-site/
├── index.html          # 首页 — Hero + 核心特性 + 灵镜光感四象
├── screenshots.html    # 预览 — 界面实拍 / 分镜
├── download.html       # 下载 — 安装包 + SHA256 + 校验
├── about.html          # 关于 — 项目由来 / 设计语言 / 技术栈
├── assets/
│   ├── css/
│   │   ├── base.css    # 变量 + 重置 + 字体 + 背景
│   │   ├── glass.css   # 玻璃卡片 + 按钮 + 徽章
│   │   └── pages.css   # 各页特定样式
│   ├── js/
│   │   ├── particles.js  # 粒子背景 canvas
│   │   └── nav.js        # 导航 + 滚动揭示
│   └── img/
│       └── favicon.svg
└── README.md
```

## 灵境UI / 灵镜光感

四个核心视觉子项:

1. **毛玻璃** — `backdrop-filter: blur(40px) saturate(1.8)`
2. **粒子背景** — Canvas 2D 渲染, 鼠标交互
3. **模糊发光** — `box-shadow` + `filter: blur` 营造呼吸感
4. **暗角** — 径向渐变覆盖, 收束视觉中心

## 本地预览

```bash
# 进入目录
cd website-site

# 任意静态服务器即可, 例:
python -m http.server 8000
# 或
npx serve .
```

然后访问 <http://localhost:8000>

## 部署

本仓库使用 **GitHub Pages** 静态托管。
启用 Pages 后, 站点将发布在:

```
https://yuandd2014.github.io/lingjing-clock-website/
```

构建源: `main` 分支根目录。

## 技术栈

- 纯静态 HTML / CSS / JavaScript
- 无构建工具, 无依赖
- 字体: Google Fonts (Orbitron + JetBrains Mono)
- 渲染: Canvas 2D 粒子

## License

MIT
