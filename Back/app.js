var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var database = 'proyectoBases';
var user = 'root';
var password = 'mysql';
var host = 'localhost';
var dbType = 'mysql';

var conection = new Sequelize(database, user, password,{
    host: host,
    dialect: dbType

})

conection
.authenticate()
.then(() => {
    console.log('Conexion establecida exitosamente');
}).catch(err => {
    console.error('No se pudo realizar la conexión', err);
});

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', function(req, res){
    return conection.query("select * from productos").spread((results, metadata) => {
        res.json(results);
    })
})


app.listen(8080);
console.log('Escuchando en puerto 8080')