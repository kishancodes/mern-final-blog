var mongoose = require('mongoose')

var postScheme = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
});

var Post = module.exports = mongoose.model('blog', postScheme);
module.exports.get = function (callback, limit) {
    Post.find(callback).limit(limit);
}

