import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _829b1b6a = () => import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */).then(m => m.default || m)
const _2260f3d2 = () => import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */).then(m => m.default || m)
const _7a1e181c = () => import('../pages/login/dashboard/index.vue' /* webpackChunkName: "pages/login/dashboard/index" */).then(m => m.default || m)
const _12223cda = () => import('../pages/login/adminDashboard/index.vue' /* webpackChunkName: "pages/login/adminDashboard/index" */).then(m => m.default || m)
const _14c76464 = () => import('../pages/login/dashboard/orders/index.vue' /* webpackChunkName: "pages/login/dashboard/orders/index" */).then(m => m.default || m)
const _5da2786e = () => import('../pages/login/dashboard/cart/index.vue' /* webpackChunkName: "pages/login/dashboard/cart/index" */).then(m => m.default || m)
const _16b459ea = () => import('../pages/login/adminDashboard/adminClients/index.vue' /* webpackChunkName: "pages/login/adminDashboard/adminClients/index" */).then(m => m.default || m)
const _5705d582 = () => import('../pages/login/dashboard/userInfo/index.vue' /* webpackChunkName: "pages/login/dashboard/userInfo/index" */).then(m => m.default || m)
const _6ec0739a = () => import('../pages/login/adminDashboard/adminEnvios/index.vue' /* webpackChunkName: "pages/login/adminDashboard/adminEnvios/index" */).then(m => m.default || m)
const _66fc9e0d = () => import('../pages/login/dashboard/products/index.vue' /* webpackChunkName: "pages/login/dashboard/products/index" */).then(m => m.default || m)
const _4d700ed2 = () => import('../pages/login/adminDashboard/adminProducts/index.vue' /* webpackChunkName: "pages/login/adminDashboard/adminProducts/index" */).then(m => m.default || m)
const _fdb8e350 = () => import('../pages/login/dashboard/userInfo/editInfo.vue' /* webpackChunkName: "pages/login/dashboard/userInfo/editInfo" */).then(m => m.default || m)
const _9b697904 = () => import('../pages/login/adminDashboard/adminProducts/agregaProducto.vue' /* webpackChunkName: "pages/login/adminDashboard/adminProducts/agregaProducto" */).then(m => m.default || m)
const _6fdb04d4 = () => import('../pages/login/adminDashboard/adminEnvios/_orderDetails.vue' /* webpackChunkName: "pages/login/adminDashboard/adminEnvios/_orderDetails" */).then(m => m.default || m)
const _86607d22 = () => import('../pages/login/dashboard/orders/_orderDetails.vue' /* webpackChunkName: "pages/login/dashboard/orders/_orderDetails" */).then(m => m.default || m)
const _7544bfb5 = () => import('../pages/login/dashboard/products/_id.vue' /* webpackChunkName: "pages/login/dashboard/products/_id" */).then(m => m.default || m)
const _51279b7d = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/register",
			component: _829b1b6a,
			name: "register"
		},
		{
			path: "/login",
			component: _2260f3d2,
			name: "login"
		},
		{
			path: "/login/dashboard",
			component: _7a1e181c,
			name: "login-dashboard"
		},
		{
			path: "/login/adminDashboard",
			component: _12223cda,
			name: "login-adminDashboard"
		},
		{
			path: "/login/dashboard/orders",
			component: _14c76464,
			name: "login-dashboard-orders"
		},
		{
			path: "/login/dashboard/cart",
			component: _5da2786e,
			name: "login-dashboard-cart"
		},
		{
			path: "/login/adminDashboard/adminClients",
			component: _16b459ea,
			name: "login-adminDashboard-adminClients"
		},
		{
			path: "/login/dashboard/userInfo",
			component: _5705d582,
			name: "login-dashboard-userInfo"
		},
		{
			path: "/login/adminDashboard/adminEnvios",
			component: _6ec0739a,
			name: "login-adminDashboard-adminEnvios"
		},
		{
			path: "/login/dashboard/products",
			component: _66fc9e0d,
			name: "login-dashboard-products"
		},
		{
			path: "/login/adminDashboard/adminProducts",
			component: _4d700ed2,
			name: "login-adminDashboard-adminProducts"
		},
		{
			path: "/login/dashboard/userInfo/editInfo",
			component: _fdb8e350,
			name: "login-dashboard-userInfo-editInfo"
		},
		{
			path: "/login/adminDashboard/adminProducts/agregaProducto",
			component: _9b697904,
			name: "login-adminDashboard-adminProducts-agregaProducto"
		},
		{
			path: "/login/adminDashboard/adminEnvios/:orderDetails",
			component: _6fdb04d4,
			name: "login-adminDashboard-adminEnvios-orderDetails"
		},
		{
			path: "/login/dashboard/orders/:orderDetails",
			component: _86607d22,
			name: "login-dashboard-orders-orderDetails"
		},
		{
			path: "/login/dashboard/products/:id",
			component: _7544bfb5,
			name: "login-dashboard-products-id"
		},
		{
			path: "/",
			component: _51279b7d,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
