# 设计约定

## 定位
林见秋，计算机视觉方向博士生，学术风格个人主页。浅色、克制、易扫读。

## 配色
- 背景 `--color-bg: #fafaf8`（暖白）
- 卡片/表面 `--color-surface: #ffffff`
- 边框 `--color-border: #e3e1da`
- 正文 `--color-text: #1f2420`
- 次要文字 `--color-text-muted: #5a5f5a`
- 强调色（链接/小标签）`--color-accent: #35604f`（低饱和墨绿）
- 强调色浅底 `--color-accent-soft: #e7efe9`
- 占位内容底色 `--color-placeholder-bg: #f3efe4`，边框 `--color-placeholder-border: #d8cfb2`，文字 `--color-placeholder-text: #8a7a4a`

## 字体
- 标题：`Source Serif 4`（Google Fonts），回退 `Noto Serif SC, Georgia, "Songti SC", serif`
- 正文：`Noto Sans SC`（Google Fonts），回退 `"Helvetica Neue", Arial, sans-serif`
- 正文行高 1.75，段落最大宽度 `68ch`

## 圆角与间距
- 圆角统一 `8px`（`--radius`）
- 区块内边距 `4rem 1.5rem`（移动端 `3rem 1.25rem`）
- 区块最大宽度 880px（首屏 960px）

## 动效
- 区块入场：轻微上移 + 淡入，`0.6s ease`，按顺序错开 0.05s
- 链接/按钮 hover：颜色或底色过渡 `0.2s ease`
- 尊重 `prefers-reduced-motion: reduce`

## 区块顺序（研究者模板）
`hero` -> `about` -> `research` -> `publications` -> `experience` -> `contact`

## 占位内容
论文列表、部分经历为占位，样式为虚线边框 + 暖黄底 + 斜体文字，明显区别于真实内容。
严禁在占位处编造具体论文标题、会议、年份、奖项等事实。

## 素材
- 头像：`assets/avatar-demo-3e53e346.png`，圆形，用于 hero
- 研究示意图：`assets/work-demo-94ad9c75.png`，用于 research 区块
