<template>
    <div class="landingBody">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Istmeña brava</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <nuxt-link :to="{ name: 'register'}">                                
                                <a class="nav-link" href="#">Sign Up</a>
                            </nuxt-link>                            
                        </li>
                        <li class="nav-item">
                            <nuxt-link :to="{ name: 'login'}">
                                <a class="nav-link" href="#">Log In</a>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="masthead text-center text-white">
            <div class="masthead-content">
                <div class="container">
                    <h1 class="masthead-heading mb-0">La Istmeña Brava</h1>
                    <h2 class="masthead-subheading mb-0">- Cerca de ti -</h2>
                    <a href="https://www.facebook.com/jaboneslaistmenabrava/" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
                </div>
            </div>
            
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
        </header>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5">
                            <img class="img-fluid rounded-circle" src="/landingImg/01.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Para el cuidado de tu piel...</h2>
                            <p>Hace ya más de 3 años se creo la idea de generar un producto para higiene personal que fuera completamente órganico y natural. Nuestro producto principal, el cual tiene todas las propiedades especiales para tener el cuidado más delicado de tu piel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5">
                            <img class="img-fluid rounded-circle" src="~/static/landingImg/02.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">Un delicioso aroma...</h2>
                            <p>Nuestros aceite tienen diversas propiedades, las cuales van desde esencias con un aroma delicioso para relajar hasta un cuidado más especial tu cabello.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5">
                            <img class="img-fluid rounded-circle" src="~/static/landingImg/03.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Y para que no falte...</h2>
                            <p>Además contamos con diversos productos tales como cremas (para el cuidado de tu cutis), tónicos (para el cuidado del cabello) y demás, dependiendo de lo que necesites ¡nosotros nos encontramos a tu servicio!.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-5 bg-black">
            <div class="container">
                <p class="m-0 text-center text-white small">Copyright &copy; Your Website 2018</p>
            </div>
            <!-- /.container -->
        </footer>

        <!-- Bootstrap core JavaScript -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
    </div>
</template>

<script>

</script>

<style scoped>
    .landingBody {
        font-family: 'Lato';
    }

    .landingBody h1,
    .landingBody h2,
    .landingBody h3,
    .landingBody h4,
    .landingBody h5,
    .landingBody h6 {
        font-family: 'Catamaran';
        font-weight: 800 !important;
    }

    .btn-xl {
        text-transform: uppercase;
        padding: 1.5rem 3rem;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
    }

    .bg-black {
        background-color: #000 !important;
    }

    .rounded-pill {
        border-radius: 5rem;
    }

    .navbar-custom {
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .navbar-custom .navbar-brand {
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        font-weight: 700;
    }

    .navbar-custom .navbar-nav .nav-item .nav-link {
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
    }

    header.masthead {
        position: relative;
        overflow: hidden;
        padding-top: calc(7rem + 72px);
        padding-bottom: 7rem;
        background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
        background-size: cover;
    }

    header.masthead .masthead-content {
        z-index: 1;
        position: relative;
    }

    header.masthead .masthead-content .masthead-heading {
        font-size: 4rem;
    }

    header.masthead .masthead-content .masthead-subheading {
        font-size: 2rem;
    }

    header.masthead .bg-circle {
        z-index: 0;
        position: absolute;
        border-radius: 100%;
        background: linear-gradient(0deg, #ee0979 0%, #ff6a00 100%);
    }

    header.masthead .bg-circle-1 {
        height: 90rem;
        width: 90rem;
        bottom: -55rem;
        left: -55rem;
    }

    header.masthead .bg-circle-2 {
        height: 50rem;
        width: 50rem;
        top: -25rem;
        right: -25rem;
    }

    header.masthead .bg-circle-3 {
        height: 20rem;
        width: 20rem;
        bottom: -10rem;
        right: 5%;
    }

    header.masthead .bg-circle-4 {
        height: 30rem;
        width: 30rem;
        top: -5rem;
        right: 35%;
    }

    @media (min-width: 992px) {
        header.masthead {
            padding-top: calc(10rem + 55px);
            padding-bottom: 10rem;
        }
        header.masthead .masthead-content .masthead-heading {
            font-size: 6rem;
        }
        header.masthead .masthead-content .masthead-subheading {
            font-size: 4rem;
        }
    }

    .bg-primary {
        background-color: #ee0979 !important;
    }

    .btn-primary {
        background-color: #ee0979;
        border-color: #ee0979;
    }

    .btn-primary:active,
    .btn-primary:focus,
    .btn-primary:hover {
        background-color: #bd0760 !important;
        border-color: #bd0760 !important;
    }

    .btn-primary:focus {
        box-shadow: 0 0 0 0.2rem rgba(238, 9, 121, 0.5);
    }

    .btn-secondary {
        background-color: #ff6a00;
        border-color: #ff6a00;
    }

    .btn-secondary:active,
    .btn-secondary:focus,
    .btn-secondary:hover {
        background-color: #cc5500 !important;
        border-color: #cc5500 !important;
    }

    .btn-secondary:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 106, 0, 0.5);
    }
</style>