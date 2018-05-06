<template>
        <div>            
            <div class="container-fluid">
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Celular
                        </th>
                        <th>
                            E-mail
                        </th>
                        <th>

                        </th>

                    </tr>

                </thead>
                <tbody>
                    <tr v-for="client in clients">
                        <td>
                            {{ client.nombre }}
                        </td>
                        <td>
                            {{ client.celular }}
                        </td>
                        <td>
                            {{ client.email }}
                        </td>
                        <td>

                            <div class="btn-group">
                                    
                                    <div>
                                        <button class="btn btn-info round padding mr-2">
                                            Ver dirección
                                        </button>
                                    </div>                                        
                                    <div>
                                        <button class="btn btn-warning round padding mr-2">
                                            Editar
                                        </button>   
                                    </div>                                    
                                    <div>
                                        <button class="btn btn-danger round padding mr-2">
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
                this.getClients()
            },
            data: function(){
                return {
                    clients: []
                }
            },
            methods: {
                async getClients() {
                    await axios({
                        method: "get",
                        url: "http://localhost:8080/selectClientes"
                    })
                        .then(function (response) {
                            this.clients = response.data
                        }.bind(this))
                        .catch(function (error) {
                            console.log("Error:")
                            console.log(error)
                        })
                },

                async getDireccion() {
                    await axios({
                        method: "get",
                        url: "http://localhost:8080/selectDirecciones"
                    })
                        .then(function (response) {
                            this.clients = response.data
                        }.bind(this))
                        .catch(function (error) {
                            console.log("Error:")
                            console.log(error)
                        })
                },

            
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