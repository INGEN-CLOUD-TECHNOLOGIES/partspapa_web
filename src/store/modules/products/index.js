import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '@/utils/apis/axios'
Vue.use(Vuex)
// const token = localStorage.getItem('access_token');

const state = {
    products: [],
    product: {},
    cart: [],
    cartTotal: 0,
    cartTotalItems: 0,
    cartTotalQty: 0,
    brands: [],
    categories: [],
    parts:[],
    latest_products: [],
}

const mutations = {
    GET_BRANDS(state, brands) {
        state.brands = brands;
    },
    GET_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    GET_PARTS(state, parts) {
        state.parts = parts;
    },
    GET_PRODUCTS(state, products) {
        state.products = products;
    },
    GET_LATEST_PRODUCTS(state, latest_products) {
        state.latest_products = latest_products;
    }
}

const actions = {
    getBrands({ commit }) {
        getAPI('/api/products/brands').then(res => {
            commit('GET_BRANDS', res.data);
        }).catch(err => {
            console.log(err);
        });
    },

    getParts({commit}){
        getAPI('/api/products/parts').then(res => {
            commit('GET_PARTS', res.data);
        }).catch(err => {
            console.log(err);
        });
    },

    getLatestProducts({ commit }) {
        getAPI('/api/products/latest').then(res => {
            commit('GET_LATEST_PRODUCTS', res.data);
        }).catch(err => {
            console.log(err);
        });
    }
}

const getters = {
    getBrands: state => state.brands,
    getParts: state => state.parts,
    getLatestProducts: state => state.latest_products,
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}