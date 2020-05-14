import stocks from '../../data/stocks';

const state = {
    stocks: [],
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RAND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            // let newPrice = Math.floor(Math.random() * 200);
            let newPrice = Math.round(stock.price * (1 + Math.random() - 0.5));
            stock.price = newPrice;
        });
    }
};

const actions = {
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randmizeStocks: ({commit}) => {
        commit('RAND_STOCKS');
    },
    buyStock: ({commit}, order) => {
        // you can commit 'BUT_STOCK' of other actions (global)
        commit('BUY_STOCK', order);
    },
};


export default {
    state,
    getters,
    mutations,
    actions,
};