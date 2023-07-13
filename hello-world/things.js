var express = require('express');
var router = express.Router();



router.get('/components',function(req,res){
    res.render('content');
});
router.get('/dynamic_view',function(req,res){
    res.render('dynamic',{
        user: {
            name: "Florence",
            age: "31"
        }
    });
});
router.get('/static_view',function(req,res){
    res.render('first_view');
});
router.get('/static_file_test',function(req,res){
    res.render('myimage');
});


//Export this router to use in our index.js
module.exports = router;