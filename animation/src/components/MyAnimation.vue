<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-ms-offset-2 col-md-6 col-md-offset-3">
            <hr>
            <select v-model="alertAnimation" class="form-control">
                <option value="my-fade">Fade</option>
                <option value="my-slide">Slide</option>
            </select>
            <br>
            <button class="btn btn-primary" @click="show = !show">Show Alert</button>
            <br><br>
            <transition :name="alertAnimation">
                <div class="alert alert-info" v-if="show">This is my first animation.</div>
            </transition>
            <transition name="my-slide" appear>
                <div class="alert alert-info" v-if="show">This is my first animation. And the initial animation is turned on.</div>       
            </transition>
            <transition
                appear
                enter-active-class="animate__animated animate__bounce"
                leave-active-class="animate__animated animate__shakeX">
                    <div class="alert alert-info" v-if="show">This is my first animation. Animate.css is attached.</div>       
            </transition>
            <br><br>
            <!--
                mode="out-in": animate current component and animate new component
                mode="in-out": animate new component and animate current component
            -->
            <transition :name="alertAnimation" mode="out-in">
                <!-- need to add key attribute to differenciate the elements -->
                <div class="alert alert-info" v-if="show" key="info">This is my first animation.</div>
                <div class="alert alert-warning" v-else key="warn">This is my first animation.</div>
            </transition>

            <hr>

            <!-- Transition JS Hooks -->
            <button class="btn btn-primary" @click="load = !load">TOGGLE</button>
            <br><br>
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
                :css="false"> <!-- :css="false" tells vue not to look css -->
                <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
            </transition>

            <hr>
            
            <!-- animate dynamic component -->
            <add-dynamic-component-animation></add-dynamic-component-animation>

            <hr>

            <!-- transition-group -->
            <add-list-animation></add-list-animation>

            <add-wallie></add-wallie>
            <hr>
        </div>
    </div>
</template>

<script>
    import DynamicComponentAnimation from './DynamicComponentAnimation.vue';
    import ListAnimation from './ListAnimation.vue';
    import Wallie from './Wallie.vue';
    export default {
        data() {
            return {
                show: true,
                load: false,
                alertAnimation: 'fade',
                elementWidth: 100,
            };
        },
        components: {
            addDynamicComponentAnimation: DynamicComponentAnimation,
            addListAnimation: ListAnimation,
            addWallie: Wallie
        },
        methods: {
            // --------
            // ENTERING
            // --------

            beforeEnter: function (el) {
                // ...
                console.log('beforeEnter');

                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            // the done callback is optional when
            // used in combination with CSS
            enter: function (el, done) {
                // ...
                console.log('enter');

                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = this.elementWidth + (round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
                /**
                 * tell animation is finished
                 * if you don't call done() the animation will be crush
                 */
                // done();
            },
            afterEnter: function (el) {
                // ...
                console.log('afterEnter');

                el.style.width = '300px';

            },
            enterCancelled: function (el) {
                // ...
                console.log('enter cancelled');
            },

            // --------
            // LEAVING
            // --------

            beforeLeave: function (el) {
                // ...
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            // the done callback is optional when
            // used in combination with CSS
            leave: function (el, done) {
                // ...
                console.log('leave');

                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - (round * 10)) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);

                /**
                 * tell animation is finished
                 * if you don't call done() the animation will be crush
                 */
                done()
            },
            afterLeave: function (el) {
                // ...
                console.log('afterLeave');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            // leaveCancelled only available with v-show
            leaveCancelled: function (el) {
                // ...
                console.log('leave cancelled');
            } 
        },
    }
</script>

<style scoped>
    .my-fade-enter {
        opacity: 0;
    }
    .my-fade-enter-active {
        transition: opacity 1s;
    }
    .my-fade-leave {
        /**
         * This is default so you don't need to set explicitly
         */
        /* opacity: 1; */
    }
    .my-fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
    /**
     * or you can set the opacity like
     * this is same with set the opacity: 0 to .my-fade-leave-active class
     */
    .my-fade-leave-to {
        opacity: 0;
    }


    .my-slide-enter {
        transform: translateX(30px);
        opacity: 0;
    }
    .my-slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }
    .my-slide-leave {
        transform: translateX(0);
    }
    .my-slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }
    @keyframes slide-in {
        from {
            transform: translateX(30px);
        }
        to {
            transform: translateX(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(30px);
        }
    }
</style>