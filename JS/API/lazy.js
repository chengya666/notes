// 某个元素是否进入了"视口"（viewport），即用户能不能看到它。(探测某个元素是否进入了可视区域)

var io = new IntersectionObserver(callback, option);

// options: {

  // root: 用于观察的根元素，默认是浏览器的视口，也可以指定具体元素，指定元素的时候用于观察的元素必须是指定元素的子元素

  // threshold: 用来指定交叉比例，决定什么时候触发回调函数，是一个数组，默认是[0]

  // rootMargin: 用来扩大或者缩小视窗的的大小，使用css的定义方法，10px 10px 30px 20px表示top、right、bottom 和 left的值

// }

// 开始观察
io.observe(document.getElementById('example'));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();

