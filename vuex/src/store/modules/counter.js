const state = {
  counter: 0,
};

const getters = {
  doubleCounter: state => {
      return state.counter * 2;
  },
  stringCounter: state => {
      return state.counter + ' Clicks!';
  },
};

const mutations = {
  increment: state => {
      state.counter++;
  },
  decrement: state => {
      state.counter--;
  },
  incrementWithPayload: (state, payload) => {
      state.counter += payload;
  },
  decrementWithPayload: (state, payload) => {
      state.counter -= payload;
  },
};

const actions = {
  increment: (context, payload) => {
      context.commit('increment', payload);
  },
  decrement: ({ commit }) => {
      commit('decrement');
  },
  asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
          commit('incrementWithPayload', payload.amount);
      }, payload.by)
  },
  asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
          commit('decrementWithPayload', payload.amount);
      }, payload.by)
  },
};


export default {
  state,
  getters,
  mutations,
  actions,
};