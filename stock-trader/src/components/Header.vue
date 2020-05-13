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
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link">End Day</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <!--
                    <span class="navbar-text" style="margin-left: 30px;">
                        Fund: ${{ saving }}
                    </span>
                    -->
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