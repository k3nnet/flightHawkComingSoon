var express=require('express');
var app=express();  
var path=require('path');
var publicPath='/public/';



app.use(express.static(path.resolve(__dirname + publicPath)))
app.use(express.static(path.resolve(__dirname + '/../bower_components')))

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname, publicPath, 'index.html'))
})


app.listen(2000);
console.log("server running ....");

module.exports=app;