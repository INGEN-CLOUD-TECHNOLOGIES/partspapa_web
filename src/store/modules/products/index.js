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
    }
}

const getters = {
    getBrands: state => state.brands,
    getParts: state => state.parts,
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}