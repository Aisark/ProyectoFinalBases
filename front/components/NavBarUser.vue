<template>
    <div>
        <div v-if="show == true">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th>
                            <nuxt-link :to="{ name: 'login-dashboard-cart', params: { a: 1 }}" replace>
                                <button class="btn btn-dark" style="width: 100%">
                                    Cart
                                </button>
                            </nuxt-link>
                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-dashboard-orders', params: { a: 1 }}" replace>
                                <button class="btn btn-dark" style="width: 100%">
                                    Orders
                                </button>
                            </nuxt-link>
                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-dashboard-products', params: { a: 1 }}" replace>
                                <button class="btn btn-dark" style="width: 100%">
                                    Products
                                </button>
                            </nuxt-link>

                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-dashboard-userInfo', params: { a: 1 }}" replace>
                                <button class="btn btn-dark" style="width: 100%">
                                    User info
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
                            <nuxt-link :to="{ name: 'login-dashboard-cart', params: { a: 1 }}" :show="true">
                                <button class="btn btn-dark" style="width: 100%">
                                    Cart
                                </button>
                            </nuxt-link>
                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-dashboard-orders', params: { a: 1 }}" :show="true">
                                <button class="btn btn-dark" style="width: 100%">
                                    Orders
                                </button>
                            </nuxt-link>

                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-dashboard-products', params: { a: 1 }}" :show="true">
                                <button class="btn btn-dark" style="width: 100%">
                                    Products
                                </button>
                            </nuxt-link>
                        </th>
                        <th>
                            <nuxt-link :to="{ name: 'login-dashboard-userInfo', params: { a: 1 }}" :show="true">
                                <button class="btn btn-dark" style="width: 100%">
                                    User info
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