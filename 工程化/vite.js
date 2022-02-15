// vite (法语，快速的)

// 1.内建变量
import.meta.env.MODE: // {string} 应用运行的模式。
import.meta.env.BASE_URL: // {string} 部署应用时的基本 URL。他由base 配置项决定。
import.meta.env.PROD: // {boolean} 应用是否运行在生产环境。
import.meta.env.DEV: // {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。

// 自定义额外环境变量
// 在.env文件中: 以'VITE_'开头,如：
VITE_BASE_URL = 'xxxx'
// 使用： 
import.meta.env.VITE_BASE_URL

// 打包后index.html里路径错误，在vite.config.js增加 base：'./'配置

// 关于缓存问题注意
  // 场景：当需要调试依赖包时 或 更改依赖相关配置时
  // 解决如下：加上 `--force` 即可，或者手动删除 node_modules/.vite 目录
  "scripts": {
    "dev": "vite --force",
  }

  // 预构建重新运行的条件（其中一项发生更改时）：
    // package.json 中的 dependencies 列表
    // 包管理器的 lockfile，例如 package-lock.json, yarn.lock，或者 pnpm-lock.yaml
    // 可能在 vite.config.js 相关字段中配置过的


// vue3 在vite.config中无法使用import.meta.env.*的解决办法：使用loadEnv来读取env
// import { loadEnv } from 'vite'
// export default ({ mode }) => {
//   return defineConfig({
//           plugins: [vue()],
//           base:loadEnv(mode, process.cwd()).VITE_APP_NAME
//       })
// }

// 相关插件
// unplugin-auto-import/vite // 会有ts报错提示， 可使用 vue-global-api
// unplugin-vue-components/vite
// vue-global-api
