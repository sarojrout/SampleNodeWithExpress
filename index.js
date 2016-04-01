var express = require('express');
var app = express();
var fs = require('fs');
var employees = []

fs.readFile('employees.json', {encoding: 'utf8'}, function(err, data){
	if(err) throw err

	JSON.parse(data).forEach(function(employee){
		employee.name.full=employee.name.first+' '+employee.name.last;
		employees.push(employee)
	})	
})  
 
app.get('/', function(req, res){
	var buffer = ''

	employees.forEach(function(employee){
		buffer+='<a href="/'+employee.username+'">'+employee.name.full +' </a><br>'
	})

	res.send(buffer)
})

var server = app.listen(4000, function(){
	console.log('Server running at http://localhost:'+server.address().port)
})