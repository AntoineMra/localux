var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '192.168.2.4',
    user     : 'sqlamarionneau',
    password : 'savary',
    database : 'bdamarionneau4'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;