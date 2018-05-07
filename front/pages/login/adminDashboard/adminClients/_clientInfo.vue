<template>
    <div>
        {{ this.$route.params.clientInfo }}
        <NavBarAdmin :show="true"/>
        <AdminClientInfo :idUser="clientInfo" />
    </div>
</template>

<script>
    import NavBarAdmin from '@/components/NavBarAdmin'
    import AdminClientInfo from '@/components/AdminClientInfo'
    
    export default {
        data: function () {
            return {
                clientInfo: this.$route.params.clientInfo
            }
        },
        components: {
            AdminClientInfo,
            NavBarAdmin
        }
    }
</script>

<style>

</style>