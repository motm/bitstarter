var express = require('express');
var fs = require('fs');
var buf = require('buffer')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  readFromFile("./index.html", response);
  //response.send('Hello World2!');
});


var readFromFile = function(fileName, response) {
	fs.readFile(fileName, function (err, data) {
		if (err) throw err;
  		writeBuff(data, response)
	});
};


var writeBuff = function(data, response){
	var buf = new Buffer(data);
	//console.log(buf.toString());
	response.send(buf.toString());
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});