<template>
    <div>
        Productos
        <NavBarUser :show="true" />
        <EditUserInfo/>
    </div>
</template>

<script>
    import EditUserInfo from '@/components/EditUserInfo'
    import NavBarUser from '@/components/NavBarUser'
    export default {
        components: {
            EditUserInfo,
            NavBarUser
        },
        props: ['show']
    }
</script>

<style>
</style>