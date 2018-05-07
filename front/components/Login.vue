<template>
    <div class="bColor">
        <!-- named route -->
        <!--nuxt-link :to="{ name: 'dashboard', params: { usrToken: email }}"></nuxt-link-->
        <div class="logBox">
            <img src="~/static/loginImg/user.png" class="user">
            <h2>¡Ingresa aquí!</h2>
            <p>Email</p>
            <input type="text" name="" placeholder="Ingresa tu Email" v-model="email">
            <p>Contraseña</p>
            <input type="password" name="" placeholder="Ingresa tu contraseña" v-model="pwd">
            <input type="submit" name="" value="Ingresar" @click="validateValues()">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    var bcrypt = require('bcryptjs');

    export default {
        data: function () {
            return {
                email: "",
                pwd: ""
            }
        },
        methods: {
            async validateValues() {
                await axios({
                    method: "post",
                    url: "http://localhost:8080/validate",
                    data: {
                        "mail": this.email,
                        "pwd": this.pwd
                    }
                })
                    .then(function (response) {
                        console.log("Response:")
                        console.log(response.data.userInfo)
                        this.$store.commit({
                            type: 'setUserInfo',
                            userInfo: response.data.userInfo
                        })

                        console.log(this.$store.state.userInfo)

                        if (this.$store.state.userInfo.tipoCliente == 4) {
                            this.$router.push({ name: 'login-adminDashboard-adminEnvios' })
                        }
                        else {
                            this.$router.push({ name: 'login-dashboard-products' })
                        }

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
    .bColor {
        background-image: url('~/static/loginImg/bg2.jpg');
        height: 100vh;
    }

    .logBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        height: 420px;
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

    .logBox h2 {
        margin: 0;
        padding: 0 0 20px;
        color: #ffffff;
        text-align: center;
    }

    .logBox p {
        margin: 0;
        padding: 0;
        font-weight: bold;
        color: #fff;
    }

    .logBox input {
        width: 100%;
        margin-bottom: 20px;
    }

    .logBox input[type="text"],
    .logBox input[type="password"] {
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

    .logBox input[type="submit"] {
        border: none;
        outline: none;
        height: 40px;
        color: #fff;
        font-size: 16px;
        background: #161315f6;
        cursor: pointer;
        border-radius: 20px;
    }

    .logBox input[type="submit"]:hover {
        background: #d84d16;
        color: #f7f4f4;
    }

    .logBox a {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
    }
</style>