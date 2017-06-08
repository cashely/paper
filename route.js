const md5 = require('./modules/md5.js');
const path = require('path');
const initWx = require('./routes/initWx.js');

/* GET home page. */
module.exports = function(app) {
    app
        .get('/MP_verify_TulMgRcUBXaRi7hY.txt',(req,res)=>{
            res.sendFile(path.join(__dirname,'./MP_verify_TulMgRcUBXaRi7hY.txt'));
        })
    	.get('*', function(req, res, next) {
            res.locals.title = '全局挂载的标题';
            next();
        })
        .get('/paper',function(req,res,next){
            res.render('index')
        })

        //生成密码
        .get('/getMd5', md5)
        .all('*', function(req, res, next) {
            res.locals.status = 0;
            next();
        })
        .get('/paper/initWx',initWx)

        .all('*', function(req, res) {
            res.status(200);
            res.json(res.locals);
        })
}
