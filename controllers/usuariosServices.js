var db = require('../db/db');

exports.getUsers = function(request, response){
    var sql = "Select * from Usuarios";
    db.executeSql(sql, function(data, err){
        if(err){
            response.render("error", {codigo: 500, mensaje: err})
            return err;
        }else{
            response.render("users", {usuarios: data});
        }
    });
};

exports.getUser = function(request, response, edit){
    var sql = "Select * from Usuarios Where Id = "+ request.params.id;
    db.executeSql(sql, function(data, err){
        if(err){
            response.render("error", {codigo: 500, mensaje: err})
        }else{
            if(edit){
                response.render("edituser", {user: data[0]});
            }else{
                response.render("user", {user: data[0]});
            }
        }
    });
};

exports.addUsers = function(request, response){
    var sql= "Insert into Usuarios (Nombres, Apellidos, Email, Clave, FechaNacimiento) ";
    sql+= "values('"+request.body.nombres+"','"+request.body.apellidos+"','"+request.body.email+"','"+request.body.clave+"','"+request.body.fecha+"')";
    db.executeSql(sql, function(data, err){
        if(err){
            response.render("error", {codigo: 500, mensaje: err})
        }else{
            response.render("index",{mensaje: "Usuario registrado!"})
        }
    });
};

exports.updateUser = function(request, response){
    var sql= "Update Usuarios set Nombres = '"+request.body.nombres+"', Apellidos = '"+request.body.apellidos+"', Email = '"+request.body.email+"', Clave = '"+request.body.clave+"', FechaNacimiento = '"+request.body.fecha+"' ";
    sql+= "where Id = "+request.body.id;
    db.executeSql(sql, function(err){
        if(err){
            response.render("error", {codigo: 500, mensaje: err})
        }else{
            response.render("index", {mensaje:"Registro actualizado!"})
        }
    });
};

exports.deleteUser = function(request, response){
    var id = request.params.id;
    var sql= "Delete from Usuarios ";
    sql+= "where Id = "+id;
    db.executeSql(sql, function(err){
        if(err){
            response.render("error", {codigo: 500, mensaje: err})
        }else{
            response.render("index", {mensaje:"Usuario eliminado!"})
        }
    });
};