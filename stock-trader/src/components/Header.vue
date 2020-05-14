<template>    
    <div class="row">
        <header class="col-xs-12 col-sm-12 col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <router-link to="/">
                    <a class="navbar-brand">
                        <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                        Stock Trader
                    </a>
                </router-link>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li">
                            <a class="nav-link">Portfolio</a>
                        </router-link>
                        <router-link to="/stocks" class="nav-item" activeClass="active" tag="li">
                            <a class="nav-link">Stocks</a>
                        </router-link>
                    </ul>
                    <ul class="navbar-nav ml-atuo">
                        <li class="nav-item">
                            <a class="nav-link" @click="endDay">End Day
                            </a>
                        </li>
                        <li class="nav-item" style="padding-right: 10px;">
                            <button class="btn btn-primary" @click="save">
                                Save
                            </button>
                        </li>
                        <li class="nav-item" style="padding-left: 10px;">
                            <button class="btn btn-primary" @click="load">
                                Load
                            </button>
                        </li>
                    </ul>
                    <strong class="navbar-text" style="margin-left: 30px;">
                        Fund: {{ funds | currency }}
                    </strong>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            isDropdownOpen: false,
        }
    },
    computed: {
        ...mapGetters({
            funds: 'myFunds'
        })
    },
    methods: {
        ...mapActions({
            randmizeStocks: 'randmizeStocks',
            fetch: 'load'
        }),
        endDay() {
            this.randmizeStocks();
        },
        show(el) {
            console.log(el)
        },
        save() {
            const data = {
                stocks: this.$store.getters.stocks,
                funds: this.$store.getters.myFunds,
                myStocks: this.$store.getters.myStocks,
            };
            this.$http.put('data.json', data);
        },
        load() {
            this.fetch();
        }
    }
}
</script>