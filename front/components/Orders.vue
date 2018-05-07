<template>
    <div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Fecha de orden</th>
                    <th scope="col">Costo Total</th>
                    <th scope="col">Estado de Envío</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in this.$store.state.ordersAndProducts" :key='order.idPedido'>
                    <td>{{ order.fechaPedido }}</td>
                    <td>{{ order.costoTotal }}</td>
                    <td v-if="order.estadoEnvio == 1">No enviado</td>
                    <td v-else>Enviado: {{ order.fechaEnvios }}</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-info" @click="getOrderDetails(order.idPedido)">
                                Ver detalles
                            </button>
                            <button class="btn btn-danger" v-if="order.estadoEnvio == 1" @click="deleteOrder(order.idPedido)">
                                Cancelar: {{ order.idPedido }}
                            </button>
                        </div>

                    </td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
    //mostrar: fecha de orden, costo total, estadoEnvio y fechaEnvio(si ha sido enviado, estadoEnvio = 2)
    /*fechaPedido,costoTotal,estadoEnvio, if(estadoEnvio == 2) fechaEnvio else "Pedido no enviado"
   
    */
    import axios from 'axios'
    //this.$store.state.THING
    export default {
        methods: {
            async getOrdersAndProducts() {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/getOrdersAndShipments",
                    data: {
                        "id": this.$store.state.userInfo.id
                    }
                })
                    .then(function (response) {
                        this.$store.commit({
                            type: 'setOrdersAndProducts',
                            ordersAndProducts: response.data
                        })
                    }.bind(this))
                    .catch(function (error) {
                        console.log("Error:")
                        console.log(error)
                    })
            },
            getOrderDetails(idPedido) {
                this.$router.push({ name: 'login-dashboard-orders-orderDetails', params: { orderDetails: idPedido } })
                //this.$router.push({ name: 'login-dashboard-products-id', params: { id: this.product.id } })
            },
            async deleteOrder(id) {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/deleteOrder",
                    data: {
                        "id": id
                    }
                })
                    .then(function (response) {
                        console.log("Response:")
                        console.log(response.data)
                        this.getOrdersAndProducts()
                    }.bind(this))
                    .catch(function (error) {
                        console.log("Error:")
                        console.log(error)
                    })
            }
        },
        created() {
            this.getOrdersAndProducts()
        }
    }
</script>

<style>
</style>