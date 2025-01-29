const express = require('express')
const router = express.Router()

const blogController = require('../Controller/blogController')


router.post('/createblog', blogController.createblog)
router.get('/allblogs', blogController.allblogs)
router.get('/singleblog',blogController.findblog)
router.post('/updateblog',blogController.updateblog)


module.exports = router