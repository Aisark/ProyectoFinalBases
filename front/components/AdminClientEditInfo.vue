<template>
    <div>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th colspan="2">
                                <h5>Informacion personal</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.nombre">
                            </td>

                        </tr>
                        <tr>
                            <td>Celular</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.celular">
                            </td>
                        </tr>
                        <tr>
                            <td>Mail</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.email">
                            </td>
                        </tr>
                        <tr>
                            <td>Tipo de Usuario</td>
                            <td>
                                <select v-model="usrInfo.tipoCliente" class="form-control">
                                    <option value="1">
                                        Preferencial
                                    </option>
                                    <option value="2">
                                        Ocasional
                                    </option>
                                    <option value="3">
                                        Público
                                    </option>
                                    <option value="4">
                                        Admin
                                    </option>
                                </select>
                            </td>                        
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colspan="2">
                                <h5>Direccion</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estado</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.estado">
                            </td>

                        </tr>
                        <tr>
                            <td>Municipio</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.municipio">
                            </td>
                        </tr>
                        <tr>
                            <td>Ciudad</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.ciudad">
                            </td>
                        </tr>
                        <tr>
                            <td>Codigo Postal</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.codigoPostal">
                            </td>
                        </tr>
                        <tr>
                            <td>Colonia</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.colonia">
                            </td>
                        </tr>
                        <tr>
                            <td>Calle</td>
                            <td>
                                <input type="text" class="form-control" v-model="usrInfo.calle">
                            </td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <td colspan="2">
                            <button class="btn btn-info" style="width: 100%;" @click="editInfo()">
                                Actualizar Informacion
                            </button>
                        </td>
                    </tfoot>
                </table>
            </div>
            <div class="col-sm-3"></div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: ['idUser'],
        //this.$route.params.id
        data: function () {
            return {
                usrInfo: ""
            }
        },
        created() {
            this.getUserInfo();
        },
        methods: {
            async editInfo() {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/actualizaInfo",
                    data: {
                        "user": this.usrInfo
                    }
                })
                    .then(function (response) {
                        this.$router.push({ name: 'login-adminDashboard-adminClients' })
                    }.bind(this))
                    .catch(function (error) {
                        console.log("Error:")
                        console.log(error)
                    })

            },
            async getUserInfo() {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/getUserInfo",
                    data: {
                        "id": this.idUser
                    }
                })
                    .then(function (response) {
                        this.usrInfo = response.data[0]
                    }.bind(this))
                    .catch(function (error) {
                        console.log("Error:")
                        console.log(error)
                    })
            }
        }
    }
</script>

<style>
</style>