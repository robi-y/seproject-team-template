var express = require('express')
var path = require('path');

var app=express();


app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
 
app.use('/app', express.static('app'));
 
//app.use('/auth', require('./controllers/auth.controller'));

app.get('/', function (req, res) {
    return res.redirect('/app');
});

app.listen(1337, function(){
   console.log('Server listening at http://');
});


