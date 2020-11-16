const Course = require('../models/Course')
class SiteController {
    //[GET] /
    index(req, res) {
            // res.render('Home')
            Course.find({}, function(err, courses) {
                if (!err) {
                    res.json(courses)
                } else {
                    res.json({ error: 'message' })
                }
            })
        }
        //[GET]/search
    search(req, res) {
        res.render('Search');
    }
}
module.exports = new SiteController;