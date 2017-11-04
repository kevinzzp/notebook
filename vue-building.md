# vue工程搭建\(基于vue-cli\)

1.使用npm全局安装vue-cli（前提是你已经安装了nodejs，否则你连npm都用不了），在cmd中输入一下命令

```
  npm install --global vue-cli

  安装完成后
```

![](/assets/import.png)安装完成后，创建自己的工作空间，在cmd切换至刚刚创建好的工作空间，如果已经有工作空间，直接切换到工作空间即可。使用命令创建项目

vue init webpack vuetest

vuetest是项目名称，这个名字自己随便取。

命令输入后，会进入安装阶段，需要用户输入一些信息

比如是否安装vue-router,eslint,karmar等组件等，根据个人喜好安装就可以了。

工程目录：

![](/assets/import1.png)

简单说一下这个目录，

bulid   里面是一些操作文件，使用npm run \*    时其实执行的就是这里的文件

config 配置文件，执行文件需要的配置信息

src   资源文件，所有的组件以及所用的图片都是在这个放着的简单看一下这个文件夹下都放了那些东西

