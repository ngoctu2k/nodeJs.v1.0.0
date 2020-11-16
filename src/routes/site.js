const express = require('express'); //khoi tao route
const router = express.Router();
// nhận lại đối tượng khởi tạo từ class 
const siteController = require('../app/controllers/SiteController');

router.use('/:slug', siteController.search);
router.use('/', siteController.index);

module.exports = router;