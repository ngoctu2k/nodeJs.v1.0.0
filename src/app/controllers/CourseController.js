const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
class CourseController {
    //[GET] /course/course-detail
    show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                .then(course => {
                    res.render('courses/course-detail', {
                        course: mongooseToObject(course)
                    })
                })
                .catch(next)
                // res.send('course-detail');
        }
        //[GET] /course/course-detail
    creat(req, res, next) {
            res.render('courses/creat')
        }
        //[POST] /course/store
    store(req, res, next) {
        res.json(req.body)
    }
}
module.exports = new CourseController;