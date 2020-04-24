// 환경변수 process.env.NODE_ENV가 local 환경에서는 'development'라고 나오고, 
// deploy(배포) 한 후에서는 'production'으로 나온다
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}