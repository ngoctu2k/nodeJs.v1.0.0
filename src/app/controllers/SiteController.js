const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    //[GET] /
    index(req, res, next) {
            // res.render('Home')
            // Course.find({}, function(err, courses) {
            //     if (!err) {
            //         res.json(courses)
            //     } else {
            //         next(err)
            //     }
            // })
            Course.find({})
                .then(courses => {
                    res.render('home', {
                        courses: mutipleMongooseToObject(courses)
                    })
                })
                .catch(error => {
                    next(error)
                })
        }
        //[GET]/search
    search(req, res) {
        res.render('Search');
    }
}
module.exports = new SiteController;