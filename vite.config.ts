// https://vitejs.dev/config/
import { defineConfig } from "vite"; // defineConfig  配置智能提示
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import"; // 按需引入css
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";
export default ({ mode }) => {
  console.log("mode=", mode);
  return defineConfig({
    // 部署服务器存放的子目录名称，也就是放 index.html 父目录
    // base: './',
    // base: '/v3p1/',
    base: mode === "production" ? "/v3p1/" : "/",
    // publicDir: mode === 'production' ? '/v3p1/' : '/',
    // 别名配置
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@mock": path.resolve(__dirname, "src/mock"),
        "@http": path.resolve(__dirname, "src/http"),
        "@piniaStore": path.resolve(__dirname, "src/piniaStore"),
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@views": path.resolve(__dirname, "src/views"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
    // 插件
    plugins: [
      vue(), // 以插件形式使用vue
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      styleImport({
        libs: [
          {
            libraryName: "element-plus",
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/theme-chalk/${name}.css`;
            },
            // resolveComponent: (name) => {
            //   return `element-plus/lib/components/${name}`
            // }
          },
        ],
      }),
    ],
    build: {
      outDir: "distTest",
      // sourcemap: true,
      emptyOutDir: true,
    },
    server: {
      port: 3033,
      // proxy只在本地开发环境生效
      proxy: {
        "/myApi": {
          target: "http://localhost:5000",
          // target: 'http://101.42.227.76:5000/', // my serves
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/myApi/, ""),
        },
      },
    },
  });
};
