<template>
    <div>
        Carrito de compras
        <NavBarUser :show="true"/>
        <Cart/>
    </div>
</template>

<script>
    import NavBarUser from '@/components/NavBarUser'
    import Cart from '@/components/Cart'
    export default {
        components: {
            NavBarUser,
            Cart
        },
        props: ['show']
    }
</script>

<style>
    
</style>