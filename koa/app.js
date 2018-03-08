const Koa = require('koa')
const fs = require('fs')

const route = require('koa-route')

const app = new Koa();

// demos/03.js
/*const main = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello World</data>';
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = { data: 'Hello World' };
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello World</p>';
    } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
};*/

// demo4
/*const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./temp/01.html')
};*/

// demo5
/*const main = ctx=>{
    if(ctx.request.path!=='/'){
        ctx.response.type = 'html'
        ctx.response.body = `
            <h1>Hello Word!</h1>
        `
    }else{
        ctx.response.body = 'Hello Koa!'
    }
}*/

// demo6
const about = ctx=>{
    ctx.response.type = 'html'
    ctx.response.body = `
        <a href="#">Index page</a>
    `
}
const main = ctx =>{
    ctx.response.body = 'Hello Koa'
}


app.use(route.get('/',main))
app.use(route.get('/about',about))















app.use(main);
app.listen(3000);