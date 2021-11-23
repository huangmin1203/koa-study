const { HttpError } = require('koa');
const Koa = require('koa');
// koa-bodyparser为了解析body里面的数据
var bodyParser = require('koa-bodyparser');
const app_test = new Koa();
app_test.use(bodyParser());
const class_list_data = require('./../class_data')

/**
 * 假装他是一个数据库
 */
const database = {
    classList: class_list_data
}


// app_test.use(async ctx ,ctx=context背景，上下文
app_test.use(async ctx => {
    // 处理跨域名
    // ctx.response(header)处理相应头，让所有域名可访问
    ctx.set('Access-Control-Allow-Origin', '*');
    let postParam = ctx.request.body
    console.log('postParam',postParam)

// /user/login登录接口
    const path = ctx.request.path
    console.log('path',path)
    if (path === '/user/login'){
        ctx.body = {
            code:0,
            data:{
                "username":postParam.userName,
                "password":postParam.password,
                "age": 12,
            },
            msg:'登录成功'

        };
        return
       
    }
    else if(path ==='/class/list' ){
        ctx.body = {
            code: 0,
            data: database.classList,
            msg: '获取课程列表成功'
        }
        return
    }
    // 新增课程
    else if (path === '/class/create') {
        console.log('postParam in create', postParam)
        database.classList.push({
            title: postParam.className
        })
        console.log('database.classList', database.classList.length)
        ctx.status = 201
        ctx.body = {
            code: 0,
            data: {},
            msg: '创建成功'
        }
    }
    // 删除课程
    else if (path === '/class/delete') {
        console.log('postParam in create', postParam)

        // 找到课程对应的索引并删除 findIndex 找到符合条件的元素索引
        const index = database.classList.findIndex(function(item) {
            return item.title === postParam.name  // 这里表示遍历数组直到找到某个元素的name属性与postParam的name属性相等
        })
        
        database.classList.splice(index, 1) // splice方法，剪切数组，这里表示从第 index 个元素开始删除0个
        console.log('database.classList', database.classList.length)
        ctx.status = 201
        ctx.body = {
            code: 0,
            data: {},
            msg: '删除成功'
        }
    }
    else if ( path === '/class/list/old') {
        ctx.response.header.Location = 'https:/www.baidu.com'
        ctx.response.status = 301
    }
    else if ( path === '/class/list/401' ) {
        if ( ctx.request.header.authorization ) {
            ctx.body = {
                code: 0,
                data: null,
                msg: 'success'
            }
        } else {
            ctx.status = 401
            return
        }
    }
    else if ( path === '/class/list/405' ) {
        if ( ctx.method !== 'GET' ) {
            ctx.status = 405
        } else {
            ctx.body = {
                code: 0,
                data: [],
                msg: 'success'
            }
        }
    }
    else if ( path === '/class/list/500' ) {
        const classList = []
        ctx.body = {
            code: 0,
            data: {
                list: clasList
            },
            msg: ''
        }
    }
});



app_test.listen(3550);
