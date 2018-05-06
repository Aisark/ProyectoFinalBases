<template>
    <div>
        Productos
        <NavBarUser :show="true"/>
        <Products/>
    </div>
</template>

<script>
    import Products from '@/components/Products'
    import NavBarUser from '@/components/NavBarUser'
    export default {
        components: {
            Products,
            NavBarUser
        },
        props: ['show']
    }
</script>

<style>
</style>