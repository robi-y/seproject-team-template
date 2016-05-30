var express = require('express')
var path = require('path');

var port = process.env.PORT || 3000;
var app=express();


app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
 
app.use('/app', express.static('app'));
 
//app.use('/auth', require('./controllers/auth.controller'));

app.get('/', function (req, res) {
    return res.redirect('/app');
});

//listen on port
var server = app.listen(port, function(){
   console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
