const state = {
    funds: 10000,
    stocks: [],
};

const getters = {
    myFunds: state => {
        return state.funds;
    },
    myStocks: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
            };
        });
    }
};

const mutations = {
    'BUY_STOCK' (state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * record.quantity;
    },
    'SET_PORTOFOLIO' (state, { myStocks, funds }) {
        state.funds = funds;
        state.stocks = myStocks ? myStocks : [];
    }
};

const actions = {
    /**
     * This action is duplicated so that 'BUY_STOCK' is called two times
     *
     * buyStock({commit}, order) {
     *   commit('BUY_STOCK', order);
     * },
     */
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};