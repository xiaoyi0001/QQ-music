import Vue from 'vue'
import Vuex from 'vuex'
import {getPageData} from '../common/js/data'

Vue.use(Vuex);

let pageData = getPageData();

const state = {
  pageData
}

const mutations = {

}
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
