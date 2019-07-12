var express = require('express')
var router = express.Router();
var res_searchBL = require('../BL/res_search')
router.get('/', async (req, res) => {
    var list_string_search
    if (req.query.key) { list_string_search = await res_searchBL.find(req.query.key) } 
    else {
        list_string_search = []
    }

    return res.json(list_string_search)
})
module.exports = router;