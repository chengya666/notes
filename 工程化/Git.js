
// git提交工作流钩子：
// 1.pre-commit 在键入提交信息前运行
// 2.prepare-commit-msg 在启动提交信息编辑器之前，默认信息被创建之后运行
// 3.commit-msg 接收一个参数，此参数即上文提到的，存有当前提交信息的临时文件的路径
// 4.post-commit 在整个提交过程完成后运行


// yorkie实际是fork husky，然后做了一些定制化的改动，使得钩子能从package.json的 "gitHooks"属性中读取。
// yorkie 处理gitHooks
// npm i yorkie

// 在代码提交之前，进行代码规则检查能够确保进入git库的代码都是符合代码规则的。
// 但是整个项目上运行lint速度会很慢，lint-staged能够让lint只检测暂存区的文件，所以速度很快。
// husky lint-staged
// yarn add husky lint-staged --dev

// 可组合yorkie、lint-staged


// ------------------------------------------------------------------------------
// 安装完git设置信息
// git config --global user.name "John Doe"
// git config --global user.email johndoe@example.com"

// 检查配置信息
// git config --list

// 远程仓库为空仓库时，本地项目执行以下操作：
// git init
// git add .
// git commit -m '初始化项目'
// git branch -M main
// git remote add origin git@github.com:cheng-shao/vue3.git
// git push -u origin main

// 合并（两种方法）
// 第一种： git merge
// 第二种： git rebase

// 回退（两种方法）
// 第一种： 后面的提交记录会消失
        // git reset --hard  'commit 1 的提交id'
// 第二种： 
        // git revert -n 30df3872497b1c56814adf53c1022dc1342e1c93
        //  手动改冲突并提交git commit -m 'test4'
        
// git reset --hard 撤销到某次提交 git revert 撤销某次提交

// 如何找回因回退或反做而消失的commit记录
// git reflog
// git reset --soft 'commit id'

// 修改之前的commit message
// git commit --amend


// github中：
        // 生成ssh秘钥
        // ssh-keygen -t rsa -C "your_email@example.com"
        // 或
        // ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

        // 查看ssh-agent运行状态
        // eval $(ssh-agent -s)
        // 将秘钥添加到代理中
        // ssh-add ~/.ssh/id_rsa
