module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'

  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'La Istmeña Brava', //title in global html
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/a.ico' }, //icon globally
      { rel: 'stylesheet', href:'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i' }
      

    ],
    script: [
      {src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'},
      {src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'}
      
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
 
    vendor: ['axios']
    
  }
}
