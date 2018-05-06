<template>
    <div>
        <button class="btn btn-warning" @click="logOut()" style="width: 100%">
            Log Out
        </button>   
    </div>
</template>

<script>
    export default {
        methods: {
            logOut() {
                this.$store.commit({
                    type: 'destroySession'
                })

                this.$router.push({
                    name: 'index'
                })
            }
        }
    }
</script>

<style>

</style>