
// 概念：
// （1）正向代理 相对于客户端的
// （2）反向代理 相对于服务器的
  // 客户端访问一个ip，自动区选取空闲服务器，但是ip地址不变
// （3）负载均衡 1.轮询 2.加权轮询（加上权重给不同服务器分配不同个数任务）
// （4）动静分离 
  // 在我们的软件开发中，有些请求是需要后台处理的，有些请求是不需要经过后台处理的(如: Css、 html. jpg、js等等文件)，这些不需要经过后台处理的
  // 文件称为静态文件。让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来， 动静资源做好了拆分以后，我们就可以根据静态资源的特点将其
  // 做缓存操作。提高资源响应的速度。

// 常用命令：
  // nginx 启动
  // nginx -s stop 停止
  // nginx -s quit 安全退出
  // nginx -s reload 重新加载配置文件

// 第一种：
// location /proxy/ {undefined
//    proxy_pass http://127.0.0.1/;
// }
// 代理到URL：http://127.0.0.1/test.html

// 第二种（相对于第一种，最后少一个 / ）
// location /proxy/ {undefined
//    proxy_pass http://127.0.0.1;
// }
// 代理到URL：http://127.0.0.1/proxy/test.html

// 第三种：
// location /proxy/ {undefined
//    proxy_pass http://127.0.0.1/aaa/;
// }
// 代理到URL：http://127.0.0.1/aaa/test.html

// 第四种（相对于第三种，最后少一个 / ）
// location /proxy/ {undefined
//    proxy_pass http://127.0.0.1/aaa;
// }
// 代理到URL：http://127.0.0.1/aaatest.html


// server {
//   listen       8083;
//   server_name  192.168.1.123;
//   location / {
//       root html;
//       index index.html index.html;
//       try_files $uri $uri/ /index.html;
//   }
//   location /other/ {
//       root html;
//       index index.html index.html;            
//       try_files $uri $uri/ /index.html;
//   }
//   location /api/ {
//       rewrite ^/api/(.*)/$1 break;
//       proxy_pass  http://192.168.1.120:8443/;
//       proxy_redirect off;
//       proxy_set_header Host $host;
//       proxy_set_header X-Real-IP $remote_addr;
//       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//   }
     
// }

