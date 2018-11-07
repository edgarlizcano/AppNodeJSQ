var settings = require("../db/settings");

exports.sendJson = function(request, response, data){
    if(data){
        response.writeHead(200, {"Content-Type":"application/json"});
        response.write(JSON.stringify(data));
    }
}

exports.show500 = function(request, response, err){
    if(settings.httpMsgsFormat === "HTML"){
        response.writeHead(500,"Error interno",{"Content-Type":"text/html"});
        response.write("<html><body>500: Error Interno. Detalles: "+ err +"</body></html>");
    }else{
        response.writeHead(500,"Error interno", {"Content-Type":"application/json"});
        response.write(JSON.stringify({data:"Ha ocurrido un error "+err}));
    }
    response.end();
}

exports.show405 = function(request, response){
    if(settings.httpMsgsFormat === "HTML"){
        response.writeHead(405,"Método no soportado",{"Content-Type":"text/html"});
        response.write("<html><body>405: Método no soportado: </body></html>");
    }else{
        response.writeHead(405,"Método no soportado", {"Content-Type":"application/json"});
        response.write(JSON.stringify({data:"Método no soportado "}));
    }
    response.end();
}

exports.show404 = function(request, response){
    if(settings.httpMsgsFormat === "HTML"){
        response.writeHead(404,"Recurso no Encontrado",{"Content-Type":"text/html"});
        response.write("<html><body>404: Recurso no Encontrado </body></html>");
    }else{
        response.writeHead(404,"Recurso no Encontrado", {"Content-Type":"application/json"});
        response.write(JSON.stringify({data:"Recurso no Encontrado"}));
    }
    response.end();
}

exports.show413 = function(request, response){
    if(settings.httpMsgsFormat === "HTML"){
        response.writeHead(413,"Request Entity too Large",{"Content-Type":"text/html"});
        response.write("<html><body>413: Request Entity too Large </body></html>");
    }else{
        response.writeHead(413,"Request Entity too Large", {"Content-Type":"application/json"});
        response.write(JSON.stringify({data:"Request Entity too Large"}));
    }
    response.end();
}

exports.show200 = function(request, response){
    response.writeHead(200, {"Content-Type":"application/json"});
    response.end();
}

exports.showHome = function(request, response){
    if(settings.httpMsgsFormat === "HTML"){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<html><body>Ruta no programada</body></html>");
    }else{
        response.writeHead(200,{"Content-Type":"application/json"});
        response.write(JSON.stringify({data:"Ruta no programada"}));
    }
    response.end();
}