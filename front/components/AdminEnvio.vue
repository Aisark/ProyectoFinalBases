<template>
        <div>            
            <div class="container-fluid">
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>
                            Fecha Pedido
                        </th>
                        <th>
                            Costo Total
                        </th>
                        <th>
                            Estado de Envío
                        </th>
                        <th>

                        </th>

                    </tr>

                </thead>
                <tbody>
                    <tr v-for="ship in shipments">
                        <td>
                            {{ ship.fechaPedido }}
                        </td>
                        <td>
                            {{ ship.costoTotal }}
                        </td>
                        <td v-if="ship.estadoEnvio == 1">
                            No enviado
                        </td>
                        <td v-else>
                            Enviado: {{ ship.fechaEnvios }}
                        </td>
                        <td>

                            <div class="btn-group">
                                    
                                    <div>
                                        <button class="btn btn-info round padding mr-1" @click="getOrderDetails(ship)">
                                            Detalles
                                        </button>
                                    </div>                                        
                                    <div v-if="ship.estadoEnvio == 1">
                                        <button class="btn btn-warning round padding ml-3" @click="updateEnvio(ship)">
                                            Enviar
                                        </button>   
                                    </div>                                    
                                    <div v-else>
                                        <button class="btn btn-danger round padding ml-2" @click="deleteOrder(ship)">
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
                this.getShipments()
            },
            data: function(){
                return {
                    shipments: []
                }
            },
            methods: {
                async getShipments() {
                    await axios({
                        method: "get",
                        url: "http://localhost:8080/getShipments"
                    })
                        .then(function (response) {
                            this.shipments = response.data
                        }.bind(this))
                        .catch(function (error) {
                            console.log("Error:")
                            console.log(error)
                        })
                },
                getOrderDetails(ship) {
                    this.$router.push({ name: 'login-adminDashboard-adminEnvios-orderDetails', params: { orderDetails: ship.idPedido } })
                    //this.$router.push({ name: 'login-dashboard-products-id', params: { id: this.product.id } })
                },
                async deleteOrder(ship) {
                    await axios({
                        method: "post",
                        url: "http://localhost:8080/deleteOrder",
                        data: {
                            "id": ship.idPedido                      
                        }
                    })
                        .then(function (response) {
                            console.log("Response:")
                            console.log(response.data)
                            this.getShipments()
                        }.bind(this))
                        .catch(function (error) {
                            console.log("Error:")
                            console.log(error)
                        })
                },

                async updateEnvio(ship) {
                    await axios({
                        method: "post",
                        url: "http://localhost:8080/updateEstadoEnvio",
                        data: {
                            "id": ship.idPedido,
                            "estadoEnvio": 2
                        }
                    })
                        .then(function (response) {
                            console.log("Response:")
                            console.log(response.data)
                            this.getShipments()
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