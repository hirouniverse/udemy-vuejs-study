import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(res => res.json())
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const myStocks = data.myStocks;

                const portfolio = {
                    myStocks,
                    funds
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTOFOLIO', portfolio);
            }
        });
};