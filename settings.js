exports.dbConfig = {
    user : 'sa',
    password : 'sa',
    server : "localhost",
    database : "UsersDB",
    //port: 1433,
    options: {
        encrypt: true
    }
};

exports.webPort = 9000;

exports.httpMsgsFormat = "JSON";