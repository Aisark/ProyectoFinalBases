<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acumulado</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prod in this.$store.state.shoppingCart" :key='prod.product.id'>
                    <td>
                        {{prod.product.nombreProducto}}
                    </td>
                    <td>
                        ${{ definePrice(prod) }}
                    </td>
                    <td>
                        {{prod.quantity}}
                    </td>
                    <td>
                        ${{ calculateTotal(definePrice(prod),prod.quantity) }}
                    </td>
                    <td>
                        <button class="btn btn-primary" @click="increaseProduct(prod)">+</button>
                        <button class="btn btn-danger" @click="decreaseProduct(prod)">-</button>
                        <button class="btn btn-dark" @click="deleteFromCart(prod)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>

                    </td>
                    <td>

                    </td>
                    <td>
                        Importe:
                    </td>
                    <td>
                        ${{ calculateTotalOfCart() }}
                    </td>
                    <td>
                        <button class="btn btn-success" @click="createOrder()">
                            Realizar pedido
                        </button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data: function () {
            return {
                totalImport: 0
            }
        },
        methods: {
            definePrice(prod){
                var userInfo = this.$store.state.typeUser;
                console.log(prod)
                if(userInfo == 1){
                    return prod.product.precioPreferencial;
                }
                else if(userInfo == 2){
                    return prod.product.precioOcasional;
                }
                else{
                    return prod.product.precioPublico;
                }
            },
            calculateTotal(price, quant) {
                return price * quant
            },
            calculateTotalOfCart() {
                var total = 0;
                for (var i = 0; i < this.$store.state.shoppingCart.length; i++) {
                    total += (this.definePrice(this.$store.state.shoppingCart[i]) * this.$store.state.shoppingCart[i].quantity)
                }
                this.totalImport = total
                return total
            },
            lookUpProduct(prod) {
                for (var i = 0; i < this.$store.state.shoppingCart.length; i++) {
                    if (prod.product.id == this.$store.state.shoppingCart[i].product.id) {
                        return i
                    }
                }
                return -1
            },
            increaseProduct(prod) {

                var index = this.lookUpProduct(prod);
                if (index != -1) {
                    this.$store.commit({
                        type: 'increaseQuantityShoppingCart',
                        index: index,
                        quantity: 1
                    })
                }

            },
            decreaseProduct(prod) {
                var index = this.lookUpProduct(prod);
                if (index != -1) {
                    this.$store.commit({
                        type: 'decreaseQuantityShoppingCart',
                        index: index,
                        quantity: 1
                    })
                }
            },
            deleteFromCart(prod) {
                var index = this.lookUpProduct(prod);
                if (index != -1) {
                    this.$store.commit({
                        type: 'deleteFromShoppingCart',
                        index: index
                    })
                }
            },
            async createOrder() {
                console.log("Shopppin")
                console.log(this.$store.state.shoppingCart)
                console.log("Shopppin")
                var resultingProducts = []
                for (var i = 0; i < this.$store.state.shoppingCart.length; i++) {
                    var obj = {
                        "productoID": this.$store.state.shoppingCart[i].product.id,
                        "cantidad": this.$store.state.shoppingCart[i].quantity
                    }
                    resultingProducts.push(obj)
                }

                var packet = {
                    "idUser": this.$store.state.idUser,
                    "costoTotal": this.calculateTotalOfCart(),
                    "productos": resultingProducts
                }
                console.log("::")
                console.log(packet)
                console.log("::")
                await axios({
                    method: "post",
                    url: "http://localhost:8080/generaPedido",
                    data: {
                        "idUser": this.$store.state.idUser,
                        "costoTotal": this.calculateTotalOfCart(),
                        "productos": resultingProducts
                    }
                })
                    .then(function (response) {
                        console.log("Response:")
                        console.log(response)
                        this.$store.state.shoppingCart = []
                    }.bind(this))
                    .catch(function (error) {
                        console.log("Error:")
                        console.log(error)
                    })
            }
        },
        created() {

        }
    }
</script>

<style>
</style>