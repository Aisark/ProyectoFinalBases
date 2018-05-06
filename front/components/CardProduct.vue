<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" v-bind:src="imgPath" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ product.nombreProducto }}</h5>
                <p class="card-text">{{ product.descripcion }}</p>
                <button class="btn btn-primary" @click=detailedInfo() >Agregar al carrito </button>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        data: function () {
            return {
                //loads straigth from static file
                imgPath: "/productsImages/" + this.product.imgPath
            }
        },
        created() {

        },
        methods: {
            detailedInfo(){
                this.$router.push({ name: 'login-dashboard-products-id', params: { id: this.product.id } })
            }
        }
    }

</script>

<style>
</style>