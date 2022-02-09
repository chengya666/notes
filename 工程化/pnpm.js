
// 在Windows中运行需要借助于junction

// 1.下载junction.exe

// 2.把junction.exe放到cmd.exe所在目录(即C:\Windows\System32)

 

// 运行命令： junction -s C:\ddd “C:\ Program Files”


// ddd为目标文件，且不存在。

// C:\ddd 是一个改成你想要映射的文件夹名称（有这个名称的文件夹要删除，会自己创建）

// C:\ Program Files  需要映射的录

注：该方案暂时没测试通过！！！

