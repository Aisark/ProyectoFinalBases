import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: "",
            idUser: -1,
            typeUser: -1,
            products: [],
            userInfo: [],
            shoppingCart: [],
            ordersAndProducts: []
        },
        //modification of values
        mutations: {
            destroySession(state, payload){
                state.token = ""
                state.idUser = -1
                state.typeUser = -1
                state.userInfo = []

            },
            setUserCredentials(state, payload) {
                state.token = payload.token
                state.idUser = payload.idUser
                state.typeUser = payload.typeUser
            },
            setProducts(state, payload) {
                state.products = payload.products
            },
            setUserInfo(state, payload) {
                state.userInfo = payload.userInfo
            },
            //we KNOW that the product is not on the array
            addToShoppingCart(state,payload){
                //receive product and quantity
                //obj contains{ product: {}, quantity}
                state.shoppingCart.push(payload.obj)
            },
            //we KNOW that the product is on the array
            deleteFromShoppingCart(state,payload){
                //receive index. data contains
                state.shoppingCart.splice(payload.index,1)
            },
            //we receive an index
            increaseQuantityShoppingCart(state,payload){
                //index and quantty
                state.shoppingCart[payload.index].quantity+=payload.quantity
            },
            decreaseQuantityShoppingCart(state,payload){
                if(state.shoppingCart[payload.index].quantity > 1){
                    state.shoppingCart[payload.index].quantity-=payload.quantity
                }
            },
            setOrdersAndProducts(state,payload){
                state.ordersAndProducts = payload.ordersAndProducts
            }
        },
        getters: {
            getToken(state){
                return token;
            },
            getProducts(state){
                return products;
            },
            getUserInfo(state){
                return state.userInfo[0];
            },
            getShoppingCart(state){
                return state.shoppingCart;
            },
            getShoppingCartProduct(state,id){
                return state.shoppingCart[id];
            }
        }
    })
}

export default createStore


//Get: store.state.THING 
//set:  store.commit('functionInMutation', payload) <-- payload should be object with all params
/**
 * also valid: 
  store.commit({
  type: 'setToken',
  token: 'algo'
})& */