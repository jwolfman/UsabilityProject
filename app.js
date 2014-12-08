/**
 * Created by joshwolfman on 12/7/14.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
/*var favicon=require("serve-favicon");
app.use(favicon());
var logger=require("morgan");
app.use(logger('dev'));
var bodyParser=require("body-parser")
app.use(bodyParser());
var methodOverride=require("method-override");
app.use(methodOverride());*/

var tools=require("./routes/tools")

app.get("/",function(req,res){
    res.render("index.ejs")
});

var server=http.createServer(app);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});