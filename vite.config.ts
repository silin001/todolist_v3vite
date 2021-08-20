
// https://vitejs.dev/config/
import { defineConfig } from 'vite'  // defineConfig  配置智能提示
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
export default ({ mode }) => {
  return defineConfig({
    // publicPath: process.env.NODE_ENV === 'production' ? '/todolist_v3vite/' : '/',
    base: mode === 'production' ? '/todolist_v3vite/' : '/',
    publicDir: mode === 'production' ? '/todolist_v3vite/' : '/',
    // 别名配置
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "components": path.resolve(__dirname, "src/components"),
        "styles": path.resolve(__dirname, "src/styles"),
        "views": path.resolve(__dirname, "src/views"),
        "layouts": path.resolve(__dirname, "src/layouts"),
        "utils": path.resolve(__dirname, "src/utils"),
      },
    },
    // 插件
    plugins: [
      vue(),// 以插件形式使用vue
      styleImport({ // 按需加载ele-plus
        libs: [{
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }]
      })
    ],
    server: {
      port: 8090,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  })
}

