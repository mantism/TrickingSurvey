/*
  TrickingData
  Author - Mikael Mantis
  Simple Express server to serve static files for in-browser translation (JSXTransformer)
*/
var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 8000);          // set the server port
app.set('views', __dirname + '/views');            // globalise views
app.set('scripts', __dirname + '/scripts');          // globalise scripts
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');                // use the EJS rendering engine for native HTML
app.use(app.router);                      // use express Router middleware for root path
app.use(express.static(path.join(__dirname, 'public')));    // host static files on URL path

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/export', function (req, res) {
  res.json(JSON.parse(req.query.data));
})

// begin server
app.listen(app.get('port'), function () {
  console.log('Express game server listening on port ' + app.get('port'));
});
