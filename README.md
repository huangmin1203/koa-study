# Koa

npm，包管理器，类似于python中的pip。官方网站：https://www.npmjs.com/。在这里可以搜到前端常用的工具库或者框架等。


### 初始化npm目录：
```
npm init -y
```

执行完成之后，当前目录下会生成一个package.json文件。内容类似如下的形式。

```
{
  "name": "koa_study",
  "version": "1.0.0",
  "description": "npm，包管理器，类似于python中的pip。",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```


当我们需要安装一个包时：
```
npm i koa
```

表示在当前目录下将koa安装为一个依赖。


### 设置npm源：
```
npm config set registry http://registry.npm.taobao.org/
```
或者在项目目录下添加.npmrc
```
registry=http://registry.npm.taobao.org/
```


## git忽略配置文件

在根目录下添加.gitignore 文件

指定node_modules文件夹不被git识别：
```
node_modules
```


## 获取请求路径名
```
https://koa.bootcss.com/#request

假如我请求路径是：http://localhost:1000/getpeiview?app_id=2323

ctx.request.path = /getpeiview
ctx.request.url = getpeiview?app_id=2323


```
###获取原始字符串
```
request.querystring
根据 ? 获取原始查询字符串.
通过querystring定位到？以及？后面的参数
做判断，如果querystring里面包含了我需要的必填的字段，则返回我想返回的内容，否则返回一个错误事例

1. 获取url上的参数：
ctx.request.querystring
示例：
http://localhost:1000/getpeiview?app_id=2323&test=12
则ctx.request.querystring = app_id=2323&test=12

2. 判断一个字符串中是否包含另外一个字符串
includes方法
示例：
const querystring = '?app_id=2323&test=12'
querystring.includes('app_id')  // true
querystring.includes('appIIII')   // false


3. 常用的接口返回数据结构
{
    code: 0,  // 业务状态码
    data: null,  // 业务数据
    msg: '',  // 错误信息
}

```

