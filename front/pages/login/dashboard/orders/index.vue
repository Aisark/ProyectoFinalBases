<template>
    <div>
        Pedidos
        <NavBarUser :show="true"/>
        <Orders/>
    </div>
</template>

<script>
    import NavBarUser from '@/components/NavBarUser'
    import Orders from '@/components/Orders'
    export default {
        components: {
            NavBarUser,
            Orders
        },
        props: ['show']
    }
</script>

<style>
    
</style>