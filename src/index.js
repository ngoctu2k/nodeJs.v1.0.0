const express = require('express'); //import
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
//import route
const route = require('./routes')
const app = express();
//cổng localhost
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
// HTTP morgan
app.use(morgan('combined'));
//Midderlwear
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//hander bar
app.engine('hbs', handlebars({ //tạo engine
    extname: '.hbs' //đổi đuôi mặc định handlerbar
}));
// view engine setup
app.set('view engine', 'hbs'); //dùng engine
app.set('views', path.join(__dirname, 'resources', 'views'));

//use route
route(app);
//

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})