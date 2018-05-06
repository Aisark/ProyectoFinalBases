<template>
    <div>
        Dashboard del admin
        <NavBarAdmin :show="false"/>
    </div>
</template>

<script>
    import NavBarAdmin from '@/components/NavBarAdmin'
    export default {
        components: {
            NavBarAdmin
        }
    }
</script>

<style>

</style>