const Koa = require('koa');
const app_test = new Koa();

// app_test.use(async ctx ,ctx=context背景，上下文
app_test.use(async ctx => {
    // 处理跨域名
    // ctx.response(header)处理相应头，让所有域名可访问
    ctx.set('Access-Control-Allow-Origin', '*');


    const path = ctx.request.path
    if (path === '/res'){
        console.log('ctx',ctx)
        ctx.body = {
            code:0,
            data:{
                "res_name":"rose",
                "res_age":"18",
                "res_status":"1"
            },
            msg:'登录成功'

        };
        return
        
    }
    else {
        ctx.body = {
            code: 1,
            data: null,
            msg: "app_id不能为空"
    };
    }
});

app_test.listen(3300);
