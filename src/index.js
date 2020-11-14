const express = require('express'); //import
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
//cổng localhost
const port = 3000;
// HTTP morgan
app.use(morgan('combined'));
//hander bar
app.engine('hbs', handlebars({ //tạo engine
    extname: '.hbs' //đổi đuôi mặc định handlerbar
}));
// view engine setup
app.set('view engine', 'hbs'); //dùng engine
app.set('views', path.join(__dirname, 'resources', 'views'));

//
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})