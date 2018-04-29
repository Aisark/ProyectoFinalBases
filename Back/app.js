var express = require('express'); //Librería que te permite montar el server en js
var bodyParser = require('body-parser'); //Librería que te permite parsear datos a json
var Sequelize = require('sequelize'); //Permite hacer una conexión a la base de datos
var bcrypt = require('bcryptjs'); //Para los tokens

//PArametros para conexion con base de datos
var database = 'proyectoBases';
var user = 'root';
var password = 'mysql';
var host = 'localhost';
var dbType = 'mysql';

//Creacion de instancia que se va a conectar a la base de datos
var sequelize = new Sequelize(database, user, password,{
    host: host,
    dialect: dbType    
})

// COnexion a la base de datos
sequelize
.authenticate()
.then(() => {
    console.log('Conexion establecida exitosamente');
}).catch(err => {
    console.error('No se pudo realizar la conexión', err);
});

//Instancia del server
var app = express();
//Configura el server para que pueda parsear json's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Definicion de rutas
app.get('/', function(req, res){
    return sequelize.query("select * from productos").spread((results, metadata) => {
        res.json(results);
    })
})

app.post('/validate',function(req, res){
    return sequelize.query("select * from clientes where email = \"" + req.body.mail + "\"",{type: sequelize.QueryTypes.SELECT})
    .then(user => {
        return sequelize.query("select pwd from clientes where id = " + user[0].id ,{type: sequelize.QueryTypes.SELECT})
        .then(pass => {
            if(pass[0].pwd == req.body.pwd){
                var salt = bcrypt.genSaltSync(user[0].id);
                res.json({"token": salt});
            }
            else{
                res.json({"error": "Password does not match"})
            }
            
        })
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
})

app.listen(8080);
console.log('Escuchando en puerto 8080')