Post = require('./postSchema');

exports.index = function (req, res) {
    Post.get(function (err, posts) {
        if (err) {
            res.json({
                status: "error",
                message: err, 
            });
        }
        res.json({
            status: "success",
            message: "Post retrieved successfully",
            data: posts
        });
    });
};

exports.new = function (req, res) {
    var postss = new Post();
    postss.title = req.body.title;
    postss.text = req.body.text;
// save the blog and check for errors
    postss.save(function (err) {
        res.json({
            message: 'Posted new.',
            data: postss,
            status: true
        });
    });
};


exports.update = function (req, res) {
    Post.findOne({ "_id": req.params.blog_id }, function (err, postssss) {
        if (err)
            res.send(err);
        postssss.title = req.body.title;
        postssss.text = req.body.text;
        postssss.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'updated',
                data: postssss,
                status: true
            });
        });
    });
};


exports.view = function (req, res) {
    Post.findOne({ "id": req.params.blog_id }, function (err, postsss) {
        if (err)
            res.send(err);
        res.json({
            message: 'Retreiving...',
            data: postsss
        });
    });
};


exports.delete = function (req, res) {
    Post.remove({
        _id: req.params.blog_id
    }, function (err, postst) {
        if (err)
            res.send(err);
        res.json({
            status: true,
            message: 'deleted'
        });
    });
};