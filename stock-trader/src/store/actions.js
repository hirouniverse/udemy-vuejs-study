import Vue from 'vue';

export const load = ({commit}) => {
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

                commit('SET_STOCK', stocks);
                commit('SET_PORTOFOLIO', portfolio);
            }
        })
};

export default load;