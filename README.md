# 基于 Nextjs Shadcn 开发的管理后台

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Learn More

- shadcn https://ui.shadcn.com/docs/components/accordion
- nextjs https://nextjs.org/docs/app/getting-started/installation
- tailwindcss https://tailwindcss.com/docs/position
- 微信公众平台 https://mp.weixin.qq.com/
- deepseek https://www.deepseek.com/
- Next Auth
- Prisma
- API

## Deploy

- Netlify https://app.netlify.com
- 腾讯云 https://cloud.tencent.com

## 项目截图

<img width="1120" src="/public/admin.png"/>

## Google Translate
- https://cloud.google.com/translate

## 构建产物分析
- `npm install --save-dev rollup-plugin-visualizer` https://www.npmjs.com/package/rollup-plugin-visualizer

```js
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true, // 构建后自动打开浏览器
          gzipSize: true,
          brotliSize: true,
          filename: 'dist/stats.html', // 输出路径
        })
      ]
    }
  }
})
```

## Vite
- https://cn.vite.dev/guide/

Next.js 16

React 19.2  
View Transitions、useEffectEvent、<Activity /> TipTap

