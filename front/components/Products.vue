<template>
    <div class="container-fluid">
        <div class="row">
            <div v-for="product in this.$store.state.products" :key='product.id' class="col-sm-4">
                <CardProduct :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import CardProduct from '@/components/CardProduct'
    export default {
        components: {
            CardProduct
        },
        created() {
            if (this.$store.state.products.length == 0) {
                this.getProducts();
            }

        },
        methods: {
            async getProducts() {
                await axios({
                    method: "get",
                    url: "http://localhost:8080/getProducts",
                })
                    .then(function (response) {
                        this.$store.commit({
                            type: 'setProducts',
                            products: response.data
                        })
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
</style>