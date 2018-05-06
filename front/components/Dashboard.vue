<template>
    <div>
        <h1> {{ user.pwd }} </h1>
        <h1> {{ user.mail }} </h1>
    </div>
</template>

<script>
    export default {
        props: ['user'],
        validate({ params }) {
            return /^\d+$/.test(params.id)
        }

    }


</script>

<style>
</style>