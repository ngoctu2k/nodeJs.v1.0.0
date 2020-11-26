const newsRoute = require('./news')
const siteRoute = require('./site')
const courseRoute = require('./course')



function route(app) {
    app.use('/course', courseRoute)
    app.use('/news', newsRoute)
    app.use('/', siteRoute)


    // app.get('/', (req, res) => {
    //     res.render('home'); //page home
    // });

    // app.get('/news', (req, res) => {
    //     res.render('news'); //page news
    // });

    // app.get('/search', (req, res) => {
    //     res.render('search'); //page search
    //     //get req.uery
    // });
    // app.post('/search', (req, res) => {
    //     res.send(''); //page search
    //     // post req.body
    //     console.log(req.body);
    // });
}
module.exports = route;