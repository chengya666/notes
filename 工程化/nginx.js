// 启动nginx：
// start nginx

// 关闭nginx
// nginx -s stop

// 重新加载配置项：
// nginx -s reload


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

