const express = require('express');
const router = express.Router();

const adminMiddlewares = require('../middlewares/admin')

const controller = require('../controllers/mainController');

router.get('/', controller.index);

router.get('/admin',adminMiddlewares.admin,controller.admin);

module.exports = router;