<template>
    <div>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th colspan="2">
                                <h5>Agregar producto</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre del producto</td>
                            <td>
                                <input type="text" class="form-control" v-model="nuevoProducto.nombreProducto">
                            </td>

                        </tr>
                        <tr>
                            <td>Descripción</td>
                            <td>
                                <input type="text" class="form-control" v-model="nuevoProducto.descripcion">
                            </td>
                        </tr>
                        <tr>
                            <td>Tipo de producto</td>
                            <td>
                                <select v-model="nuevoProducto.tipoProducto" class="form-control">
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
                                <input type="number" step="any" class="form-control" v-model="nuevoProducto.precioPreferencial">
                            </td>
                        </tr>
                        <tr>
                            <td>Precio Ocasional</td>
                            <td>
                                <input type="number" step="any" class="form-control" v-model="nuevoProducto.precioOcasional">
                            </td>
                        </tr>
                        <tr>
                            <td>Precio Público</td>
                            <td>
                                <input type="number" step="any" class="form-control" v-model="nuevoProducto.precioPublico">
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td colspan="2">
                            <button class="btn btn-info" style="width: 100%;" @click="agregarProducto()">
                                Agregar Producto
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
        //this.$route.params.id
        data: function () {

            return {
                nuevoProducto: {
                    nombreProducto: "",
                    descripcion: "",
                    tipoProducto: 0,
                    precioPreferencial: 0,
                    precioOcasional: 0,
                    precioPublico: 0
                }
            }

        },
        methods: {
            async agregarProducto() {
                if (this.nuevoProducto.nombreProducto == "" || this.nuevoProducto.descripcion == "" || this.nuevoProducto.tipoProducto == 0 || !this.evaluaCamposDePrecio() )  {
                    alert("Faltan campos por llenar")
                }
                else {
                    await axios({
                        method: "post",
                        url: "http://localhost:8080/insertProducto",
                        data: {
                            "product": this.nuevoProducto
                        }
                    })
                        .then(function (response) {
                            this.$router.push({ name: 'login-adminDashboard-adminProducts' })
                        }.bind(this))
                        .catch(function (error) {
                            console.log("Error:")
                            console.log(error)
                        })
                }
            }, 
            evaluaCamposDePrecio(){
                return (this.nuevoProducto.precioPreferencial > 0 && this.nuevoProducto.precioOcasional >= 0 && this.nuevoProducto.precioPublico >= 0) 
                || (this.nuevoProducto.precioPreferencial >= 0 && this.nuevoProducto.precioOcasional > 0 && this.nuevoProducto.precioPublico >= 0) 
                || (this.nuevoProducto.precioPreferencial >= 0 && this.nuevoProducto.precioOcasional >= 0 && this.nuevoProducto.precioPublico > 0)

            }

        }
    }
</script>

<style>
</style>