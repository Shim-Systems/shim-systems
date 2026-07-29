# Design-led Astro Starter

[English](README.md) · [通用演示站](https://design-led-astro-starter.vercel.app/)

这是一个可复用的 Astro 7 起步模板，适合内容型网站和设计系统驱动的网站。它包含可切换主题 token、MDX 博客、RSS、站点地图和 Elements 组件参考页。仓库与演示站使用相同的通用内容，不包含个人、公司或真实生产站信息。

![通用模板预览](public/assets/og-template.png)

## 技术栈

- Astro 7 与 TypeScript
- Tailwind CSS v4 与 `@tailwindcss/vite`
- Astro Content Layer、MDX、RSS、sitemap
- Sharp 本地图像处理

## 快速开始

```bash
pnpm install
pnpm dev
```

本地开发地址为 `http://localhost:5200`。

## 优先修改的位置

仓库中的默认值均为通用示例；创建自己的站点时，请从下列位置开始替换。

| 位置 | 用途 |
| --- | --- |
| `src/config/site.js` | 标题、规范 URL、SEO 信息和源码链接 |
| `src/config/themes.js` | 默认主题、主题包与语义 token |
| `src/styles/global.css`、`src/styles/themes.css` | 字体、基础样式与主题变量 |
| `src/content/post/` | 示例 MDX 文章与 frontmatter |
| `docs/DESIGN.md` | 给设计者、开发者和 AI 编码工具共用的视觉规范 |
| `src/pages/index.astro` | 首页区块和示例文案 |

如果生产站只需要固定主题，在 `src/config/themes.js` 选定 `defaultThemeId` 后，将 `showThemeSwitcher` 和 `persistUserSelection` 都设为 `false`。

## 路由

| 路由 | 用途 |
| --- | --- |
| `/` | 通用模板概览 |
| `/blog` | MDX 示例文章列表 |
| `/blog/[slug]` | 文章详情 |
| `/design` | 浏览器中的设计规范 |
| `/elements` | 组件和 token 参考页 |
| `/rss.xml` | RSS 订阅源 |

## 项目结构

```text
docs/                 设计系统文档
public/assets/        可替换的通用图片
src/components/       可复用区块、卡片、UI 与 widgets
src/config/           站点与主题配置
src/content/post/     MDX 文章
src/layouts/          布局与元数据
src/pages/            Astro 路由
src/styles/           全局、主题和文章样式
```

## 构建与部署

```bash
pnpm build
pnpm preview
```

构建前设置 `PUBLIC_SITE_URL` 为最终部署地址；它会用于 canonical URL、sitemap、RSS 和 Open Graph 元数据。审核演示站固定为 `https://design-led-astro-starter.vercel.app/`，应部署这个仓库的原样构建。后续为自己的站点定制时，请使用独立部署地址。

## 许可证

[MIT](LICENSE)
