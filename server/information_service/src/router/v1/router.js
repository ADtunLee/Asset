var express =require('express')
var PostAPI = require('../../API/postAPI')
var SearchAPI = require('../../API/search')
var router = express.Router()
router.use('/post',PostAPI)
router.use('/search',SearchAPI)
module.exports = router;