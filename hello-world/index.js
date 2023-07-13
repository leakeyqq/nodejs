var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/',function(req,res){
    res.cookie('name','njoki').send('cookie-set');
});

app.get('/see',function(req,res){
    console.log('Cookies: ', req.cookies);
});
app.get('/clear_cookie_njoki',function(req,res){
    res.clearCookie('name');
    res.send('Cookie njoki cleared');
    console.log('Cookies: ', req.cookies);
});

app.listen(3000);
