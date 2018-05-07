<template>
    <div>
        Info de usuario
        <NavBarUser :show="true"/>
        <UserInfo :idUser="this.$store.state.userInfo.id"/>
    </div>
</template>

<script>
    import NavBarUser from '@/components/NavBarUser'
    import UserInfo from '@/components/UserInfo'
    export default {
        components: {
            NavBarUser,
            UserInfo
        },
        props: ['show']
    }
</script>

<style>
</style>