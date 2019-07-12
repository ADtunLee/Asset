var express = require('express')
var router = express.Router();
var postBL = require('../BL/post')
router.get('/get_list', async (req, res) => {
    let list_post = await postBL.getAll()
    return res.json(list_post)
})
module.exports = router;