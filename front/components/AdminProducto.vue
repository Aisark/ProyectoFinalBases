<template>

        <div>    
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <button @click="crearProducto()" class="btn btn-success mr-2 padding round" style="width:100%">
                            Agregar producto
                    </button>
                </div>
                <div class="col-sm-4"></div>                    
            </div>
            <br>
            
            <div class="container-fluid">
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Precio Preferencial
                        </th>
                        <th>
                            Precio Ocasional
                        </th>
                        <th>
                            Precio Público
                        </th>
                        <th>

                        </th>

                    </tr>

                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <td>
                            {{ product.nombreProducto }}
                        </td>
                        <td>
                            {{ product.precioPreferencial }}
                        </td>
                        <td>
                            {{ product.precioOcasional }}
                        </td>
                        <td>
                            {{ product.precioPublico }}
                        </td>
                        <td>

                            <div class="btn-group">
                                                                           
                                    <div>
                                        <button class="btn btn-warning round padding mr-2">
                                            Editar
                                        </button>   
                                    </div>                                    
                                    <div>
                                        <button class="btn btn-danger round padding mr-2" @click="deleteProducto(product.id)">
                                            Eliminar
                                        </button>
                                    </div>                                                                                                                                                
                            </div>
                        </td>                        
                    </tr>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            </div>
            
    
        </div>
    </template>
    
    <script>
        //mostrar: fecha de orden, costo total, estadoEnvio y fechaEnvio(si ha sido enviado, estadoEnvio = 2)
        /*fechaPedido,costoTotal,estadoEnvio, if(estadoEnvio == 2) fechaEnvio else "Pedido no enviado"
       
        */
        import axios from 'axios'
        //this.$store.state.THING
        
        export default {
            created() {
                this.getProducts()
            },
            data: function(){
                return {
                    products: []
                }
            },
            methods: {
                async getProducts() {
                    await axios({
                        method: "get",
                        url: "http://localhost:8080/selectProductos"
                    })
                        .then(function (response) {
                            this.products = response.data
                        }.bind(this))
                        .catch(function (error) {
                            console.log("Error:")
                            console.log(error)
                        })
                },
                onFileSelected(event){
                    console.log(event)
                },
                crearProducto(){
                    this.$router.push({name: 'login-adminDashboard-adminProducts-agregaProducto'})
                },                
                async deleteProducto(id) {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/deleteProducto",
                    data: {
                        "id": id
                    }
                })
                    .then(function (response) {
                        console.log("Response:")
                        console.log(response.data)
                        this.getProducts()
                    }.bind(this))
                    .catch(function (error) {
                        console.log("Error:")
                        console.log(error)
                    })
            }

            
            }
        }
    </script>
    
    <style>
        .round{
            border-radius: 10px;
        }  
        .padding{
            padding: 10px;
        }      
        
    </style>