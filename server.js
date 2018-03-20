var http = require('http')

var server = http.createServer(funciton(req,res){
    res.write("hello world");
    res.end() 
})

server.listen(8080)  