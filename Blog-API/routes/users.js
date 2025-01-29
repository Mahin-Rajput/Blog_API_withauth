var express = require('express');
var router = express.Router();
const userController = require('../Controller/userController')
/* GET users listing. */
router.post('/signup', userController.createuser);
router.post('/login',userController.login)

module.exports = router;
