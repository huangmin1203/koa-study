const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {

    // 允许跨域
    ctx.set('Access-Control-Allow-Origin', '*');

    // console.log('ctx', ctx)
    // console.log('req', ctx.request.path)

    const path = ctx.request.path
    if ( path === '/class_manage'){
        console.log('ctx'. ctx)
        ctx.body = {
            code: 0,
            data: [
                1,2,3,4,5
            ],
            msg: '返回数据成功'
        };
        return
    }
    else {
        ctx.body = {
            code: 1,
            data: null,
            msg: "user_id不能为空"
           };
    }
     return
}
);

// 监听的端口号
app.listen(3500);