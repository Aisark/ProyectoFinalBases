<template>
    <div>
        Edita Product 
        <NavBarAdmin :show="true"/>
        <AdminEditProduct :product="this.product"/>
    </div>
</template>

<script>
    import NavBarAdmin from '@/components/NavBarAdmin'
    import AdminEditProduct from '@/components/AdminEditProduct'
    export default {
        components: {
            NavBarAdmin,
            AdminEditProduct
        },
        props: ['show'],
        data: function () {
            return {
                product: {}
            }
        },
        created() {
            this.lookUpProduct(this.$route.params.editaProducto);
        },
        methods: {
            lookUpProduct(id) {
                var productArr = this.$store.state.products;
                for (var i = 0; i < productArr.length; i++) {
                    if (productArr[i].id == id) {
                        this.product = productArr[i]
                        return;
                    }
                }
            }
        }
    }
</script>

<style>
</style>