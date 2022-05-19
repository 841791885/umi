import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    hmr: true,
    immer: false,
    skipModelValidate: true,
  },
  antd: {},
  routes: [
    {
      path: '/',
      // component: '@/index.tsx',
      component: '@/pages/main/main.jsx',
      routes: [
        {
          path: '/about',
          component: '@/pages/about/about.jsx',
        },
      ],
      // component: '@/pages/about/about.tsx',
    },
  ],
  fastRefresh: {},
});
