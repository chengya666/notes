// vue-loader: 是一个webpack loader

// eslint-plugin-vue（解析器&插件）：
// npm install --save-dev eslint vue-eslint-parser eslint-plugin-vue
// 创建.eslintrc.js文件
// 创建.eslintignore文件
// 初始化eslint文件：npx eslint --init

// 配合typescript（解析器&插件）：
// npm i --save-dev typescript @typescript-eslint/parser
// npm i --save-dev @typescript-eslint/eslint-plugin


// 配合Prettier:
// npm install --save-dev --save-exact prettier
// 创建.prettier.config.js文件
// 创建.prettierignore文件
// commit 时对所修改的文件进行格式化
// npm install husky lint-staged 或 npx mrm lint-staged
// vscode配置：
// 安装插件：Prettier - Code formatter
// {
//   "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "[javascript]": {
//     "editor.defaultFormatter": "esbenp.prettier-vscode"
//   }
// }
// 保存自动格式
// "[javascript]": {
//   "editor.formatOnSave": false
// }