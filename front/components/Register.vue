<template>
    <div class="backColor">
        <!-- named route -->
        <!--nuxt-link :to="{ name: 'dashboard', params: { usrToken: email }}"></nuxt-link-->
        <div class="loginBox">
            <img src="~/static/loginImg/user.png" class="user">
            <h2>¡Registrate!</h2>
            <p>Nombre</p>
            <input type="text" name="" placeholder="Ingresa tu Nombre" v-model="nombre">
            <p>Celular</p>
            <input type="text" name="" placeholder="Ingresa tu Celular" v-model="celular">
            <p>Email</p>
            <input type="text" name="" placeholder="Ingresa tu Email" v-model="email">
            <p>Contraseña</p>
            <input type="password" name="" placeholder="Ingresa tu contraseña" v-model="pwd">
            <p>Estado</p>
            <input type="text" name="" placeholder="Ingresa tu Estado" v-model="estado">
            <p>Municipio</p>
            <input type="text" name="" placeholder="Ingresa tu Municipio" v-model="municipio">
            <p>Ciudad</p>
            <input type="text" name="" placeholder="Ingresa tu Ciudad" v-model="ciudad">
            <p>Código Postal</p>
            <input type="text" name="" placeholder="Ingresa tu Código Postal" v-model="codigoPostal">
            <p>Colonia</p>
            <input type="text" name="" placeholder="Ingresa tu Colonia" v-model="colonia">
            <p>Calle</p>
            <input type="text" name="" placeholder="Ingresa tu Calle" v-model="calle">
            <input type="submit" name="" value="Ingresar" @click="registerUser()">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data: function () {
            return {
                nombre: "",
                celular: "",
                email: "",
                pwd: "",
                estado: "",
                municipio: "",
                ciudad: "",
                codigoPostal: "",
                colonia: "",
                calle: ""
            }
        },
        methods: {
            async registerUser() {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/registraInfo",
                    data: {
                        "nombre": this.nombre,
                        "celular": this.celular,
                        "email": this.email,
                        "pwd": this.pwd,
                        "estado": this.estado,
                        "municipio": this.municipio,
                        "ciudad": this.ciudad,
                        "codigoPostal": this.codigoPostal,
                        "colonia": this.colonia,
                        "calle": this.calle
                    }
                })
                    .then(function (response) {
                        console.log("Response:")
                        console.log(response.data.token)
                        this.$router.push({ name: 'login' })
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
    .backColor {
        background-color: #d84d16;
        height: 210vh;
    }

    .loginBox {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -2%);
        width: 550px;
        height: 1050px;
        padding: 80px 40px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
    }

    .user {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: calc(-100px/2);
        left: calc(50% - 50px);
    }

    .loginBox h2 {
        margin: 0;
        padding: 0 0 20px;
        color: #ffffff;
        text-align: center;
    }

    .loginBox p {
        margin: 0;
        padding: 0;
        font-weight: bold;
        color: #fff;
    }

    .loginBox input {
        width: 100%;
        margin-bottom: 20px;
    }

    .loginBox input[type="text"],
    .loginBox input[type="password"] {
        border: none;
        border-bottom: 1px solid #fff;
        background: transparent;
        outline: none;
        height: 40px;
        color: #fff;
        font-size: 16px;
    }

    ::placeholder {
        color: rgba(255, 255, 255, .5);
    }

    .loginBox input[type="submit"] {
        border: none;
        outline: none;
        height: 40px;
        color: #fff;
        font-size: 16px;
        background: #161315f6;
        cursor: pointer;
        border-radius: 20px;
    }

    .loginBox input[type="submit"]:hover {
        background: #d84d16;
        color: #f7f4f4;
    }

    .loginBox a {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
    }
</style>