<template>
    <div>
        {{ this.$route.params.editaCliente}}
        <NavBarAdmin :show="true"/>
        <AdminClientEditInfo :idUser="editaCliente" />
    </div>
</template>

<script>
    import NavBarAdmin from '@/components/NavBarAdmin'
    import AdminClientEditInfo from '@/components/AdminClientEditInfo'
    
    export default {
        data: function () {
            return {
                editaCliente: this.$route.params.editaCliente
            }
        },
        components: {
            AdminClientEditInfo,
            NavBarAdmin
        }
    }
</script>

<style>

</style>