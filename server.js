const express = require("express");
const app = express();
var user = require("./controllers/usuariosServices");
var settings = require("./settings");
var body_parser = require('body-parser');

var db = require('./db/db');
app.use(body_parser.urlencoded({extended:true}));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'))

app.set("view engine", "jade");

app.get("/", function(request, response){
    response.render("index");
});

app.get("/users", function(request, response){
    user.getUsers(request, response);
});

app.get("/users/:id", function(request, response){
    var edit = false;
    user.getUser(request, response, edit);
});

app.get("/adduser", function(request, response){
    response.render("adduser");
});

app.post("/adduser", function(request, response){
    user.addUsers(request, response);
});

app.post("/updateuser", function(request, response){
    user.updateUser(request, response);
});

app.get("/updateuser/:id", function(request, response){
    var edit = true;
    user.getUser(request, response, edit);
});

app.get("/deleteuser/:id", function(request, response){
    user.deleteUser(request, response);
});

app.listen(settings.webPort, function(){
    console.log("Servidor en el puerto "+settings.webPort+"!");
});