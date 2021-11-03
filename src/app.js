const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {

    // 允许跨域
    ctx.set('Access-Control-Allow-Origin', '*');

    // console.log('ctx', ctx)
    // console.log('req', ctx.request.path)

    const path = ctx.request.path
    if ( path === '/login' ) {
        console.log('ctx'. ctx)
        ctx.body = {
            code: 0,
            data: null,
            msg: '登录成功'
        };
        return
    }
    else if(path === '/getpeiview'){

        console.log('request getpeiview: ', ctx.request.querystring)

        const querystring = ctx.request.querystring
        if ( querystring.includes('app_id') ) {
            ctx.body = {
                code:0,
                data:{
                    "name":"haha",
                    "age":"13"
                },
                msg:"success"
               };
        } else {
            ctx.body = {
                code: 1,
                data: null,
                msg: "app_id不能为空"
               };
        }
         return
    }
    else{
        ctx.body ='输入有误'    
    }
        
  
});

app.listen(1000);