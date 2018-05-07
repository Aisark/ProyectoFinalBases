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
                                        <button class="btn btn-info round padding mr-2" @click="getClient(client.id)">
                                            Ver detalles
                                        </button>
                                    </div>                                        
                                    <div>
                                        <button class="btn btn-warning round padding mr-2" @click="editClient(client.id)">
                                            Editar
                                        </button>   
                                    </div>                                    
                                    <div>
                                        <button class="btn btn-danger round padding mr-2" @click="deleteClient(client.id,client.direccionID)">
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
                this.getUsers()
            },
            data: function(){
                return {
                    clients: []
                }
            },
            methods: {
                async getUsers() {
                    await axios({
                        method: "get",
                        url: "http://localhost:8080/getUsers"
                    })
                        .then(function (response) {
                            this.clients = response.data
                            this.$store.commit({
                                type: 'setClients',
                                users: this.clients
                            })
                        }.bind(this))
                        .catch(function (error) {
                            console.log("Error:")
                            console.log(error)
                        })
                },
                getClient(id) {
                   this.$router.push({ name: 'login-adminDashboard-adminClients-clientInfo', params: { clientInfo: id } })
                },
                editClient(id) {
                   this.$router.push({ name: 'login-adminDashboard-adminClients-editaCliente', params: { editaCliente: id } })
                },
                async deleteClient(userId,direccionId) {
                    await axios({
                        method: "post",
                        url: "http://localhost:8080/deleteUser",
                        data: {
                            userId: userId,
                            direccionId: direccionId
                        }
                    })
                        .then(function (response) {
                            console.log("response")
                            console.log(response)
                            this.getUsers()
                            
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