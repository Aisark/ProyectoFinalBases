<template>
        <div>
            Route: {{ orderDetails }}
            <NavBarAdmin :show="true"/>
            <OrderDetails :idOrder="orderDetails" />
        </div>
    </template>
    
    <script>
        import OrderDetails from '@/components/OrderDetails'
        import NavBarAdmin from '@/components/NavBarAdmin'
    
        export default {
            data: function () {
                return {
                    orderDetails: this.$route.params.orderDetails
                }
            },
            components: {
                OrderDetails,
                NavBarAdmin
            }
        }
    </script>
    
    <style>
    </style>