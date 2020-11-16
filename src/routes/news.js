const express = require('express'); //khoi tao route
const router = express.Router();
// nhận lại đối tượng khởi tạo từ class 
const newsController = require('../app/controllers/NewController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;