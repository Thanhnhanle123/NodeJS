const homeRouter = require('./homeRouter');
function route(app){
    // Home
    app.use('/', homeRouter);
}
module.exports = route;