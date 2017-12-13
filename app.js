
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var session = require('express-session')
var md5 = require('MD5');
var multer = require('multer');

//load customers route
var app = express();
var config = require('./config');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(session({secret: 'ssshhhhh'}));
app.md5 = md5;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Images')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

require('./config/connection')(app);
require('./config/route')(app);

app.get('/', function (req, res) {
    var sess = req.session;
    //Session set when user Request our app via URL
    if (sess.UserName) {
        res.redirect('/customers');
    } else {
        res.redirect('/login');
    }
});

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

app.upload = multer({
    storage: Storage
}).array("imgUploader", 1); //Field name and max count


app.use(app.router);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
