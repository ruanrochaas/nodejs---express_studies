var http = require('http');
var fs = require('fs');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./ex1.html', null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('Arquivo não encontrado.');
        } else{
            response.write(data);
        }
        response.end();
    })
}

http.createServer(onRequest).listen(8000);