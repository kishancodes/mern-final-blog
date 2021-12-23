let router = require('express').Router();


router.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    res.setHeader('Access-Control-Allow-Credentials', true); 
    
    res.json({
        status: 'Hello there.',
        message: 'General Kenobi. You are a bold one. Kill Him!',
    });
});

var postsMans = require('./Posts');

router.route('/blogs')
    .get(postsMans.index)
    .post(postsMans.new);
router.route('/blogs/:blog_id')
    .get(postsMans.view)
    .patch(postsMans.update)
    .put(postsMans.update)
    .delete(postsMans.delete);

module.exports = router; 