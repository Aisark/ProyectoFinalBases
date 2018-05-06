<template>
    <div>
        <div v-if="show == true">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th>
                            <nuxt-link :to="{ name: 'login-adminDashboard-adminEnvios', params: { a: 1 }}" replace>
                                <button class="btn btn-dark" style="width: 100%">
                                    Envios
                                </button>
                            </nuxt-link>
                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-adminDashboard-adminProducts', params: { a: 1 }}" replace>
                                <button class="btn btn-dark" style="width: 100%">
                                    Productos
                                </button>
                            </nuxt-link>
                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-adminDashboard-adminClients', params: { a: 1 }}" replace>
                                <button class="btn btn-dark" style="width: 100%">
                                    Clientes
                                </button>
                            </nuxt-link>

                        </th>
                        <th>
                            <LogOut/>
                        </th>

                    </tr>
                </thead>
            </table>
        </div>
        <div v-else>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th>
                            <nuxt-link :to="{ name: 'login-adminDashboard-adminEnvios', params: { a: 1 }}" :show="true">
                                <button class="btn btn-dark" style="width: 100%">
                                    Envios
                                </button>
                            </nuxt-link>
                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-adminDashboard-adminProducts', params: { a: 1 }}" :show="true">
                                <button class="btn btn-dark" style="width: 100%">
                                    Productos
                                </button>
                            </nuxt-link>

                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-adminDashboard-adminClients', params: { a: 1 }}" :show="true">
                                <button class="btn btn-dark" style="width: 100%">
                                    Clientes
                                </button>
                            </nuxt-link>
                        </th>
                        <th>
                            <LogOut/>
                        </th>

                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
    import LogOut from '@/components/LogOut'
    export default {
        components: {
            LogOut
        },
        props: ['show']
    }
</script>

<style>
</style>