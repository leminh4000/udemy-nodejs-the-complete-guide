const http = require('http');


const server= http.createServer(function(req, res){
    return console.log(req);
});

server.listen(5000);