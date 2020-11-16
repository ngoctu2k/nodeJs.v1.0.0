const express = require('express'); //khoi tao route
const router = express.Router();
// nhận lại đối tượng khởi tạo từ class 
const siteController = require('../app/controllers/SiteController');

router.get('/:slug', siteController.search);
router.get('/', siteController.index);

module.exports = router;