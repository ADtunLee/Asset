var db = require('../db/connection');
var Schema = db.Schema;

var PostSchema = new Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    description: String,
    url_name: String,
    keyword: String,
},
    { collection: 'post' }
);
module.exports = db.model('post', PostSchema);