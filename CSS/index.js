// px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
// em和rem相对于px更具有灵活性，他们是相对长度单位，意思是长度不是定死了的，更适用于响应式布局。
// em是相对于其父元素来设置字体大小的，一般都是以<body>的“font-size”为基准。这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而Rem是相对于根元素<html>，这样就意味着，我们只需要在根元素确定一个参考值。

// 总之：对于em和rem的区别一句话概括：em相对于父元素，rem相对于根元素。


// css变量
// :root 表示 html 选择器，除了CSS权重比它高以外，其他都是一样的。
// 1.--前缀定义变量
// :root {
//   --main-bg-color: pink;
// }
// 2.通过var函数使用变量
// body {
  // 如果 --main-bg-color未定义，则值为blue
//   background-color: var(--main-bg-color, blue);
// }


// env() 主要用于手机端全面屏 底部tabbar
// https://developer.mozilla.org/zh-CN/docs/Web/CSS/env()

