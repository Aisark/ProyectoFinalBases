<template>
    <div>
        <h3>Productos de la orden: {{ this.idOrder }}</h3>

        <h4>Jabones</h4>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Descripcion
                    </th>
                    <th>
                        Cantidad
                    </th>
                    <th>
                        Precio
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productsFromOrder" :key="producto.id">
                    <td>
                        {{ producto.nombreProducto }}
                    </td>
                    <td>
                        {{ producto.descripcion }}
                    </td>
                    <td>
                        {{ producto.cantidad }}
                    </td>
                    <td>
                        {{ definePrice(producto) }}
                    </td>
                </tr>

            </tbody>
            <tfoot>
                <td>

                </td>

                <td>

                </td>
                <td>
                    Total:
                </td>
                <td>
                        {{ this.calculateTotal }}
                </td>
            </tfoot>
        </table>
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: ['idOrder'],
        data: function () {
            return {
                productsFromOrder: []
            }
        },
        created() {
            this.getOrderDetails()
        },
        methods: {
            async getOrderDetails() {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/getProductsFromOrder",
                    data: {
                        "id": this.idOrder
                    }
                })
                    .then(function (response) {
                        console.log("Response:")
                        console.log(response.data)
                        this.productsFromOrder = response.data
                        console.log("local")
                        console.log(productsFromOrder)
                    }.bind(this))
                    .catch(function (error) {
                        console.log("Error:")
                        console.log(error)
                    })
            },
            definePrice(prod){
                var userInfo = this.$store.state.typeUser;
                console.log(prod)
                if(userInfo == 1){
                    return prod.precioPreferencial;
                }
                else if(userInfo == 2){
                    return prod.precioOcasional;
                }
                else{
                    return prod.precioPublico;
                }
            }
            
        },
        
        computed: {
            calculateTotal(){
                var total = 0
                for(var i = 0; i < this.productsFromOrder.length; i++){
                    
                    total+=(this.definePrice(this.productsFromOrder[i])*this.productsFromOrder[i].cantidad)
                }
                return total
            }
        }
    }
</script>

<style>
</style>