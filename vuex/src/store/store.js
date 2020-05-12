/**
 * setup Vuex (Central State)
 */
import Vue from 'vue';
import Vuex from 'vuex';

// module
import counter from './modules/counter';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import * as state from './state';


Vue.use(Vuex);
export const store = new Vuex.Store({
    // all of state, getters, mutations and actions should be unique name!!!
    state: {
        value: 0,
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});