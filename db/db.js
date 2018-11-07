var sqlDb = require('mssql');
var settings = require('../settings');

exports.executeSql = function(sql, callback){
    sqlDb.connect(settings.dbConfig)
    .then(function(){
        var req = new sqlDb.Request();
        req.query(sql)
        .then(function(recorset){
            callback(recorset["recordset"]);
            sqlDb.close();
        })
        .catch(function(err){
            callback(null, err);
            console.log(err);
        })
    })
    .catch(function(err){
        callback(err);
        console.log(null, err);
    });
};