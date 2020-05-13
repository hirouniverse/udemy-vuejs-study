<template>    
    <div class="row">
        <header class="col-xs-12 col-sm-12 col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <router-link to="/">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                        Stock Trader
                    </a>
                </router-link>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link to="/portfolio">
                                <a class="nav-link" href="#">Portfolio</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/stocks">
                                <a class="nav-link" href="#">Stocks</a>
                            </router-link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Fund: ${{ saving }}
                    </span>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    props: ['saving']
}
</script>