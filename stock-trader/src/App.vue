<template>
    <div class="container">
        <app-header saving="900"></app-header>
        <div class="col-xs-12">
            <transition name="slide" mode="out-in">
                <router-view></router-view>        
            </transition>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header,
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-enter-to {
        opacity: 1;
    }

    .slide-leave {
        animation: slide-out 200ms ease-out forwards;
    }

    .slide-leave-active {
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(30px);
            opacity: 0;
        }
    }
</style>
