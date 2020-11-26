const express = require('express'); //khoi tao route
const router = express.Router();
// nhận lại đối tượng khởi tạo từ class 
const courseController = require('../app/controllers/CourseController');
router.get('/creat', courseController.creat);
//
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);



module.exports = router;