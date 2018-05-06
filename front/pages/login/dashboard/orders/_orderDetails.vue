<template>
    <div>
        Route: {{ orderDetails }}
        <NavBarUser :show="true"/>
        <OrderDetails :idOrder="orderDetails" />
    </div>
</template>

<script>
    import OrderDetails from '@/components/OrderDetails'
    import NavBarUser from '@/components/NavBarUser'

    export default {
        data: function () {
            return {
                orderDetails: this.$route.params.orderDetails
            }
        },
        components: {
            OrderDetails,
            NavBarUser
        }
    }
</script>

<style>
</style>