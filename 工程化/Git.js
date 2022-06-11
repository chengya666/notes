
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

// cat命令主要用来查看文件内容
// cat b.txt

// echo 创建文件并写入内容 (>创建，>> 追加)
// echo '内容' > 文件名

// 删除
// rm -rf 文件/文件名

// 暂存
// git stash
// 弹出暂存应用到当前分支
// git stash pop
// 将堆栈中的内容应用到当前目录，不会将内容从堆栈中删除，可多次应用到工作目录中，适应于多个分支的情况。
// 查看堆栈中最新保存的stash和当前目录的差异。
// git stash apply

// git stash show
// git stash list

// 目录树结构
// tree .
// 加上 `-a` 跳过使用暂存区域的方式，不在执行git add命令
// git commit -a -m ''

// 帮助
// 打开命令手册
// git help config
// 查看某个命令的参数
// 如：git add -h 或 git reset -h

// 远程仓库为空仓库时，本地项目执行以下操作：
// git init
// git add .
// git commit -m '初始化项目'
// git branch -M main
// git remote add origin git@github.com:cheng-shao/vue3.git
// git push -u origin main

// 新建分支
// git branch xxxx
// 新建分支并切换到新分支上
// git checkout -b xxx
// 查看所有分支
// git branch -a

// 切换分支
// git checkout xxx
// 删除分支
// git branch -d xxx

// 简洁方式输出
// git status -s

// 查看尚未暂存的文件更新了哪些部分
// git diff
// 比对已暂存文件与最后一次提交的文件差异
// git diff --staged

// 移除某个文件
// git rm

// 每个版本以整行展示 格式 id: 提交描述
// git log --pretty=oneline

// 撤销 `git add` 和 `git commit`
// git restore --staged <文件> (撤销所有 `git add`)
// git reset HEAD file_test.md (撤销部分 `git add`)
// git reset --soft HEAD^ (撤销所有 `git commit`)

// HEAD^ 的意思是上一个版本，也可以写成 HEAD~1。如果你进行了 2 次 commit，想都撤回，可以使用 HEAD~2。

// --soft 的意思是不删除工作空间改动代码，撤销 commit，不撤销 git add .。

// --mixed 的意思是：不删除工作空间改动代码，撤销commit，并且撤销 git add . 操作。这个为默认参数，git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。

// --hard 的意思是删除工作空间改动代码，撤销 commit，撤销 git add .。 注意完成这个操作后，会删除工作空间代码！！！恢复到上一次的 commit 状态。慎重！！！

// 将另外一个分支的某个或某些提交合并当前分支
// git cherry-pick 提交startid,...
// 多个时包含startid的话需要加^
// git cherry-pick 提交startid^,...
// --abort 放弃
// --quit 退出
// --continue 继续


// rebase交互模式 interactive
// git rebase -i 9891a9d
// 操作命令
// pick	采用该提交（默认行为）
// reword	采用该提交，但要求修改提交记录的备注
// edit	采用该提交，但要求修改提交记录的信息，如：作者名称，邮箱地址等
// squash	采用该提交，但它会被并入前一条提交
// fixup	类似“squash”，但是会丢弃这条提交记录的日志信息
// exec	执行指定的shell脚本或命令
// drop	丢弃该提交
// 强制推送到远程分支
// git push -f origin test_rebase
// 撤销rebase修改
// git rebase --abort


// 合并（两种方法）
// 第一种： git merge
// 第二种： git rebase

// 当我们拉取公共分支最新代码的时候建议使用rebase，也就是git pull -r或git pull --rebase
// 往公共分支上合代码的时候，使用 merge 。（若使用rebase的话会把别人的提交历史篡改）

// --ff: (fast-forward) 默认的提交方式
// --no-ff: 指的是强行关闭fast-forward方式

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
