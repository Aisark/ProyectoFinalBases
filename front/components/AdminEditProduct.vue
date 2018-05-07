<template>
    <div>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th colspan="2">
                                <h5>Informacion de jabon</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre</td>
                            <td>
                                <input type="text" class="form-control" v-model="product.nombreProducto">
                            </td>
                        </tr>
                        <tr>
                            <td>Descripcion</td>
                            <td>
                                <textarea class="form-control" v-model="product.descripcion" rows="5" cols="30">
                                    {{ product.descripcion }}
                                </textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>Tipo de Producto</td>
                            <td>
                                <select v-model="product.tipoProducto" class="form-control">
                                    <option value="1">
                                        Jabón
                                    </option>
                                    <option value="2">
                                        Aceite
                                    </option>
                                    <option value="3">
                                        Otro
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Precio Preferencial</td>
                            <td>
                                <input type="number" step="any" class="form-control" v-model="product.precioPreferencial">
                            </td>
                        </tr>
                        <tr>
                            <td>Precio Ocasional</td>
                            <td>
                                <input type="number" step="any" class="form-control" v-model="product.precioOcasional">
                            </td>
                        </tr>
                        <tr>
                            <td>Precio Publico</td>
                            <td>
                                <input type="number" step="any" class="form-control" v-model="product.precioPublico">
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
        props: ['product'],
        methods: {
            async editInfo() {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/updateProducto",
                    data: {
                        "product": this.product
                    }
                })
                    .then(function (response) {
                        this.$router.push({
                            name: 'login-adminDashboard-adminProducts'
                        })
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