var url = require('url');
var fs = require('fs');

function renderHTML(path, response){
    fs.readFile(path, null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('Arquivo não encontrado.');
        } else{
            response.write(data);
        }
        response.end();
    })
}

module.exports = {
    handleRequest: function(request, response){
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        var path = url.parse(request.url).pathname;
        switch (path){
            case '/':
                renderHTML('./ex1.html', response);
                break;
            case '/at2':
                renderHTML('./at2.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
}