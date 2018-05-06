var express = require('express'); //Librería que te permite montar el server en js
var bodyParser = require('body-parser'); //Librería que te permite parsear datos a json
var Sequelize = require('sequelize'); //Permite hacer una conexión a la base de datos
var bcrypt = require('bcryptjs'); //Para los tokens
var cors = require('cors');

//PArametros para conexion con base de datos
var database = 'proyectoBases';
var user = 'root';
var password = 'mysql';
var host = 'localhost';
var dbType = 'mysql';

//Creacion de instancia que se va a conectar a la base de datos
var sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: dbType,
    dialectOptions: {
        multipleStatements: true
    }
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    return res.json({
        "response": "Hola Mundo"
    });
})

//Definicion de rutas
//Verifica que el correo y la contraseña sean correctas y genera un token de acuerdo a la sesion iniciada
app.post('/validate', function (req, res) {
    return sequelize.query("select * from clientes where email = \"" + req.body.mail + "\"", { type: sequelize.QueryTypes.SELECT })
        .then(user => {
            return sequelize.query("select pwd from clientes where id = " + user[0].id, { type: sequelize.QueryTypes.SELECT })
                .then(pass => {

                    if (bcrypt.compareSync(req.body.pwd, pass[0].pwd)) {
                        var salt = bcrypt.genSaltSync(user[0].id);
                        res.json({ "idUser": user[0].id, "token": salt , "typeUser": user[0].tipoCliente});
                    }
                    else {
                        res.status(400).send("Invalid")
                    }

                })
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
})

//Obtiene todos los productos existentes
app.get('/getProducts', function (req, res) {
    return sequelize.query("select * from productos").spread((results, metadata) => {
        res.json(results);
    })
})

//Obtiene la informacion del usuario de acuerdo a su id por post
app.post('/getUserInfo', function (req, res) {
    return sequelize.query("select * from clientes inner join direccionCliente on clientes.direccionID = direccionCliente.id where clientes.id = " + req.body.id, { type: sequelize.QueryTypes.SELECT })
        .then(userInfo => {
            res.json(userInfo);
        })
        .catch(error => res.status(400).send(error))
})

//Pedidos y envios por post
app.get('/getShipments', function (req, res) {
    return sequelize.query("select pedidos.id as idPedido, pedidos.fecha as fechaPedido, pedidos.costoTotal, envios.fecha as fechaEnvios,envios.estadoEnvio from pedidos inner join envios on envios.idPedido = pedidos.id", { type: sequelize.QueryTypes.SELECT })
        .then(pedido => {
            res.json(pedido);
        })
        .catch(error => res.status(400).send(error))
})

//Pedido de acuerdo al id del usuario por post
app.post('/getOrdersAndShipments', function (req, res) {
    return sequelize.query("select pedidos.id as idPedido, pedidos.fecha as fechaPedido, pedidos.costoTotal, envios.fecha as fechaEnvios,envios.estadoEnvio from pedidos inner join envios on envios.idPedido = pedidos.id where envios.idCliente = " + req.body.id, { type: sequelize.QueryTypes.SELECT })
        .then(pedido => {
            res.json(pedido);
        })
        .catch(error => res.status(400).send(error))
})

//Obtiene los productos que existen en una orden: TODO
app.post('/getProductsFromOrder', function (req, res) {
    return sequelize.query("select * from productos inner join pedidoProducto ON pedidoProducto.idProducto = productos.id where pedidoProducto.idPedido = " + req.body.id, { type: sequelize.QueryTypes.SELECT })
        .then(pedido => {
            res.json(pedido);
        })
        .catch(error => res.status(400).send(error))
})

//INSERTS - CREATE
app.post('/generaPedido', function (req, res) {
    var total = req.body.costoTotal;
    var idU = req.body.idUser;

    var sql = "insert into pedidos(fecha,costoTotal,clientID) values(CURDATE(), '" + total + "', '" + idU + "')";

    return sequelize.query(sql, { type: sequelize.QueryTypes.INSERT })
        .then(resultado => {
            var idPedido = resultado[0]
            var creaEnvioSql = "insert into envios(fecha,idCliente,idPedido,estadoEnvio) VALUES(CURDATE()," + idU + "," + idPedido + ",1);"
            return sequelize.query(creaEnvioSql, { type: sequelize.QueryTypes.INSERT })
                .then(creada => {
                    var productArray = req.body.productos;
                    var valuesToInsert = ""
                    for (var i = 0; i < productArray.length; i++) {
                        valuesToInsert += "(" + idPedido + "," + productArray[i].productoID + "," + productArray[i].cantidad + ")"
                        if (i < productArray.length - 1) {
                            valuesToInsert += ","
                        }
                        else {
                            valuesToInsert += ";"
                        }
                    }
                    var query2 = "INSERT INTO pedidoProducto(idPedido,idProducto,cantidad) VALUES " + valuesToInsert;
                    return sequelize.query(query2, { type: sequelize.QueryTypes.INSERT })
                        .then(result => {
                            res.json(result)
                        })
                        .catch(error => res.status(400).send(error))
                })
                .catch(error => res.status(400).send(error))
            //res.status(201).send(resultado)

        })
        .catch(error => res.status(400).send(error))
})

app.post('/actualizaInfo', function (req, res) {
    var idUser = req.body.user.id;
    var name   = req.body.user.nombre;
    var type   = req.body.user.tipoCliente;
    var cel    = req.body.user.celular;
    var mail  = req.body.user.email;
    var pass   = req.body.user.pwd;

    var idDireccion = req.body.user.direccionID;
    var state       = req.body.user.estado;
    var munic       = req.body.user.municipio;
    var city        = req.body.user.ciudad;
    var cp          = req.body.user.codigoPostal;
    var col         = req.body.user.colonia;
    var str         = req.body.user.calle;
    
    var sql = "update direccionCliente set estado = ('" + state + "'), municipio = ('" + munic + "'), ciudad = ('" + city + "'), codigoPostal = ('" + cp + "'), colonia = ('" + col + "'), calle = ('" + str + "') where direccionCliente.id =" + idDireccion;

    return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
        .then(res1 => {
            var sql = "update clientes set nombre = ('" + name + "'), tipoCliente = ('" + type + "'), celular = ('" + cel + "'), email = ('" + mail + "'), pwd = ('" + pass + "') where clientes.id =" + idUser;

            return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
                .then(res2 => {
                    res.json(res2)
                })
                .catch(error => res.status(401).send(error))
        })
        .catch(error => res.status(400).send(error))
})

app.post('/registraInfo', function (req, res) {
    var name   = req.body.nombre;
    var type   = req.body.tipoCliente;
    var cel    = req.body.celular;
    var mail  = req.body.email;
    var pass   = req.body.pwd;

    var state       = req.body.estado;
    var munic       = req.body.municipio;
    var city        = req.body.ciudad;
    var cp          = req.body.codigoPostal;
    var col         = req.body.colonia;
    var str         = req.body.calle;
    
    var sql = "insert into direccionCliente(estado,municipio,ciudad,codigoPostal,colonia,calle) values( '" + state + "', '" + munic + "', '" + city + "', '" + cp + "', '" + col + "', '" + str + "')";

    return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
        .then(res1 => {
            var sql = "insert into clientes(nombre,tipoCliente,celular,email,pwd) values( '" + name + "', '" + 3 + "', '" + cel + "', '" + mail + "', '" + pass + "')";

            return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
                .then(res2 => {
                    res.json(res2)
                })
                .catch(error => res.status(401).send(error))
        })
        .catch(error => res.status(400).send(error))
})

//admin
app.post('/insertProducto', function (req, res) {
    var nombre = req.body.product.nombreProducto;
    var descr = req.body.product.descripcion;
    var tipo = req.body.product.tipoProducto;
    var pPreferencial = req.body.product.precioPreferencial;
    var pOcasional = req.body.product.precioOcasional;
    var pPublico = req.body.product.precioPublico;
    var img = "none.png";

    var sql = "insert into productos(nombreProducto,descripcion,tipoProducto,precioPreferencial,precioOcasional,precioPublico,imgPath) values ('" + nombre + "',  '" + descr + "', '" + tipo + "', '" + pPreferencial + "', '" + pOcasional + "', '" + pPublico + "', '" + img + "')";

    return sequelize.query(sql, { type: sequelize.QueryTypes.INSERT })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})

app.post('/insertDireccion', function (req, res) {
    var state = req.body.estado;
    var munic = req.body.municipio;
    var city = req.body.ciudad;
    var cp = req.body.codigoPostal;
    var col = req.body.colonia;
    var str = req.body.calle;

    var sql = "insert into direccionCliente(estado,municipio,ciudad,codigoPostal,colonia,calle) values ('" + state + "',  '" + munic + "', '" + city + "', '" + cp + "', '" + col + "', '" + str + "')";

    return sequelize.query(sql, { type: sequelize.QueryTypes.INSERT })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})

app.post('/insertCliente', function (req, res) {
    var name = req.body.nombre;
    var tipo = req.body.tipoCliente;
    var cel = req.body.celular;
    var correo = req.body.email;
    var pass = req.body.pwd;

    var sql = "insert into clientes(nombre,tipoCliente,celular,email,pwd) values ('" + name + "',  '" + tipo + "', '" + cel + "', '" + correo + "', '" + pass + "')";

    return sequelize.query(sql, { type: sequelize.QueryTypes.INSERT })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})



//SELECTS - READ
app.get('/selectProductos', function (req, res) {
    return sequelize.query("select * from productos").spread((results, metadata) => {
        res.json(results);
    })
})

app.get('/selectDirecciones', function (req, res) {
    return sequelize.query("select * from direccionCliente").spread((results, metadata) => {
        res.json(results);
    })
})

app.get('/selectClientes', function (req, res) {
    return sequelize.query("select * from clientes").spread((results, metadata) => {
        res.json(results);
    })
})

//UPDATES - EDIT
app.post('/updateEstadoEnvio', function (req, res) {
    var estado = req.body.estadoEnvio;

    var sql = "update envios set estadoEnvio = ('" + estado + "'), fecha = (CURDATE()) where envios.idPedido =" + req.body.id;

    return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})

app.post('/updateProducto', function (req, res) {
    var nombre = req.body.nombreProducto;
    var descr = req.body.descripcion;
    var tipo = req.body.tipoProducto;
    var pPreferencial = req.body.precioPreferencial;
    var pOcasional = req.body.precioOcasional;
    var pPublico = req.body.precioPublico;
    var img = req.body.imgPath;

    var sql = "update productos set nombreProducto = ('" + nombre + "'), descripcion = ('" + descr + "'), tipoProducto = ('" + tipo + "'), precioPreferencial = ('" + pPreferencial + "'), precioOcasional = ('" + pOcasional + "'), precioPublico = ('" + pPublico + "'), imgPath = ('" + img + "') where productos.id =" + req.body.id;

    return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})

app.post('/updateDireccion', function (req, res) {
    var state = req.body.estado;
    var munic = req.body.municipio;
    var city = req.body.ciudad;
    var cp = req.body.codigoPostal;
    var col = req.body.colonia;
    var str = req.body.calle;

    var sql = "update direccionCliente set estado = ('" + state + "'), municipio = ('" + munic + "'), ciudad = ('" + city + "'), codigoPostal = ('" + cp + "'), colonia = ('" + col + "'), calle = ('" + str + "') where direccionCliente.id =" + req.body.id;

    return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})

app.post('/updateCliente', function (req, res) {
    var name = req.body.nombre;
    var tipo = req.body.tipoCliente;
    var cel = req.body.celular;
    var correo = req.body.email;
    var pass = req.body.pwd;

    var sql = "update clientes set nombre = ('" + name + "'), tipoCliente = ('" + tipo + "'), celular = ('" + cel + "'), email = ('" + correo + "'), pwd = ('" + pass + "') where clientes.id =" + req.body.id;

    return sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE })
        .then(resultado => res.status(201).send(resultado))
        .catch(error => res.status(400).send(error))
})

//DELETES
app.post('/deleteOrder', function (req, res) {
    console.log(req.body.id)
    return sequelize.query("delete from pedidoProducto where idPedido = " + req.body.id, { type: sequelize.QueryTypes.DELETE })
        .then(res1 => {
            return sequelize.query("delete from envios where idPedido = " + req.body.id, { type: sequelize.QueryTypes.DELETE })
                .then(res2 => {
                    return sequelize.query("delete from pedidos where id = " + req.body.id, { type: sequelize.QueryTypes.DELETE })
                        .then(res3 => {
                            res.json({ "res": "Ok" })
                        })
                        .catch(error => res.status(400).send(error))
                })
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
})


//admin
app.post('/deleteProducto', function (req, res) {
    return sequelize.query("delete from productos where productos.id = " + req.body.id, { type: sequelize.QueryTypes.DELETE })
        .then(resultado => res.status(201).send({ "result": "ok" }))
        .catch(error => res.status(400).send(error))
})

app.post('/deleteDireccion', function (req, res) {
    return sequelize.query("delete from direccionCliente where direccionCliente.id = " + req.body.id, { type: sequelize.QueryTypes.DELETE })
        .then(resultado => res.status(201).send({ "result": "ok" }))
        .catch(error => res.status(400).send(error))
})

app.post('/deleteCliente', function (req, res) {
    return sequelize.query("delete from clientes where clientes.id = " + req.body.id, { type: sequelize.QueryTypes.DELETE })
        .then(resultado => res.status(201).send({ "result": "ok" }))
        .catch(error => res.status(400).send(error))
})

app.listen(8080);
console.log('Escuchando en puerto 8080')