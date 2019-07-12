var post = require('../models/post')
exports.getAll = async () =>{
    return await post.find({})
}