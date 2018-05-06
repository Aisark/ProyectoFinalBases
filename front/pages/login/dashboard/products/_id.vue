<template>
    <div>
        <br>
        <NavBarUser :show="true" />
        <table class="table table-striped">
            <thead>
                <tr>
                    <th> Producto </th>
                    <th> Precio </th>
                    <th> Cantidad </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <td>
                    <input type="text" v-bind:value="product.nombreProducto" class="form-control" disabled>
                </td>
                <td>
                    <input type="number" v-bind:value="precioProducto" class="form-control" disabled>
                </td>
                <td>
                    <input type="number" v-bind:value="cantidad" class="form-control" disabled>
                </td>
                <td>
                    <button class="btn btn-primary" @click="increase()">+</button>
                    <button class="btn btn-danger" @click="decrease()">-</button>
                    <button class="btn btn-success" @click="addToCarts()">Agregar</button>

                </td>
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    </div>
</template>


<script>
    import NavBarUser from '@/components/NavBarUser'

    export default {
        components: {
            NavBarUser
        },
        validate({ params }) {
            return /^\d+$/.test(params.id)
        },
        data: function () {
            return {
                product: "",
                cantidad: 0,
                precioProducto: 0
            }
        },
        created() {
            this.setProduct();
            this.setPrecio();
        },
        methods: {
            setProduct() {
                var products = this.$store.state.products;
                var id = this.$route.params.id
                for (var i = 0; i < products.length; i++) {
                    if (id == products[i].id) {
                        this.product = products[i]
                    }
                }
            },
            setPrecio(){
                var userInfo = this.$store.state.typeUser;
                if(userInfo == 1){
                    this.precioProducto = this.product.precioPreferencial;
                }
                else if(userInfo == 2){
                    this.precioProducto = this.product.precioOcasional;
                }
                else{
                    this.precioProducto = this.product.precioPublico;
                }
            },
            lookUpProduct(){
                for(var i = 0; i < this.$store.state.shoppingCart.length; i++){
                    if( this.product.id == this.$store.state.shoppingCart[i].product.id ){
                        return i;
                    }
                }
                return -1;
            },
            increase(){
                this.cantidad+=1
            },
            decrease(){
                if(this.cantidad > 0){
                    this.cantidad-=1
                }
            },
            addToCarts(){
                if(this.cantidad > 0 && this.product != ""){
                    //var shoppingCart = this.$store.state.shoppingCart
                    var index = this.lookUpProduct()
                    //not found
                    if(index == -1){
                        var obj = {
                            product: this.product,
                            quantity: this.cantidad
                        }
                        this.$store.commit({
                            type: 'addToShoppingCart',
                            obj: obj
                        })
                    }
                    else{
                        this.$store.commit({
                            type: 'increaseQuantityShoppingCart',
                            index: index,
                            quantity: this.cantidad
                        })
                    }

                    alert("Carro actualizado")

                    this.$router.push({ name: 'login-dashboard-products'})
                }
            }
        }

    }
</script>

<style>
</style>