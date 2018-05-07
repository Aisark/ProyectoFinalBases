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
                            <td>{{ usrInfo.nombre }}</td>
                        </tr>
                        <tr>
                            <td>Celular</td>
                            <td>{{ usrInfo.celular }}</td>
                        </tr>
                        <tr>
                            <td>Mail</td>
                            <td>{{ usrInfo.email }}</td>
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
                            <td>{{ usrInfo.estado }}</td>
                        </tr>
                        <tr>
                            <td>Municipio</td>
                            <td>{{ usrInfo.municipio }}</td>
                        </tr>
                        <tr>
                            <td>Ciudad</td>
                            <td>{{ usrInfo.ciudad }}</td>
                        </tr>
                        <tr>
                            <td>Codigo Postal</td>
                            <td>{{ usrInfo.codigoPostal }}</td>
                        </tr>
                        <tr>
                            <td>Colonia</td>
                            <td>{{ usrInfo.colonia }}</td>
                        </tr>
                        <tr>
                            <td>Calle</td>
                            <td>{{ usrInfo.calle }}</td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <td colspan="2">
                            <button class="btn btn-success" style="width: 100%;" @click="editInfo()">
                                Editar Informacion
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
        data: function () {
            return {
                usrInfo: ""
            }
        },
        created() {
            this.getUserInfo();
        },
        methods: {
            async getUserInfo() {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/getUserInfo",
                    data: {
                        "id": this.idUser
                        //"id": 1
                    }
                })
                    .then(function (response) {
                        this.usrInfo = response.data[0]
                    }.bind(this))
                    .catch(function (error) {
                        console.log("Error:")
                        console.log(error)
                    })
                 
            },
            editInfo() {
                this.$router.push({ name: 'login-dashboard-userInfo-editInfo', params:{usrInfo:this.usrInfo}})
            }
        }
    }
</script>

<style>
</style>