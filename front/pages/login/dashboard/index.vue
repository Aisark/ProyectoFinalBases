<template>
    <div>
        Dashboard de usuario
        <NavBarUser :show="false"/>


    </div>
</template>

<script> 
    import NavBarUser from '@/components/NavBarUser'
    export default {
        components: {
            NavBarUser
        }
    }
</script>
<style>
</style>