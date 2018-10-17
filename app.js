var express = require('express');
//var bodyParser = require('body-parser');
const path = require('path');
var app = express();

var port = 3000
var host = 'localhost'

app.use(express.static('public'));

app.get('/', (req,res)=>{
  res.sendFile('index.html')
})

app.get('/random', (req,res)=>{
  var randNum = Math.floor(Math.random() *150)
  res.json({random_number: randNum})
})

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    res.status(err.status).send(err.message);

});

app.listen(port, host,function (){
  console.log('app listening at ',host, port);
});
