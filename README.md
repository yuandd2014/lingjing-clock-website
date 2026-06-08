# 灵境时钟 · 官网

> 让桌面, 有一面镜子。

这是 [LingJing Clock](https://github.com/yuandd2014/lingjing-clock) 的官方宣传站点, 面向普通用户。

## 站点结构

```
website-site/
├── index.html        # 主页 — Apple 风 Hero + 实时桌面渲染
├── preview.html      # 预览 — 6 张"假截图"展示
├── changelog.html    # 更新日志 — 每次发布手动同步过来
├── download.html     # 下载 — 安装版 / 便携版
├── about.html        # 关于 — 项目由来 + 灵境UI 视觉 + 隐私
├── assets/
│   ├── css/
│   │   ├── base.css    # 变量 + reset + 字体
│   │   ├── apple.css   # 导航 + Hero + 按钮 + 卡片
│   │   └── pages.css   # 各页特定样式
│   ├── js/
│   │   ├── showcase.js # 实时渲染"假桌面"
│   │   └── nav.js      # 导航 + 滚动揭示
│   └── img/
│       └── favicon.svg
└── README.md
```

## 风格

- **明亮白底** — Apple iOS 26 / macOS Sequoia 风格
- **SF Pro 字体** — 系统字体栈 (`-apple-system, BlinkMacSystemFont`)
- **圆角 24-40px** + **多层柔和阴影**
- **蓝色主调** — `#0071e3` (Apple Blue) + 极少量紫粉强调
- **主视觉"假桌面"** — JS 实时渲染, 显示当前时钟 / 日期 / 节气

## 每次发布同步

桌面 app 发布新版本后, 请同步更新:

1. `changelog.html` — 在最前面加新版本 entry
2. `download.html` — 把下载链接里的 `v1.0.0` 改为新版本号
3. `index.html` — 如果是大版本, 可更新"特性"列表

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
