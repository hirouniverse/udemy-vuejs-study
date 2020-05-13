<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <div id="demo">
                    <button v-on:click="show = !show">
                        Toggle
                    </button>
                    <!-- appear triggers the transition/animation on the initial render -->
                    <transition name="fade" type="transition" appear>
                        <p v-if="show">hello appear attribute is applied to this transition</p>
                    </transition>
                    <transition name="slide-fade" type="transition">
                        <p v-if="show">hello</p>
                    </transition>
                    <transition name="bounce" type="animation">
                        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
                    </transition>
                    <transition
                        name="custom-classes-transition"
                        enter-active-class="animated tada"
                        leave-active-class="animated bounceOutRight"
                    >
                        <p v-if="show">hello</p>
                    </transition>
                </div>
            </div>
        </div>
        <add-my-animation></add-my-animation>
    </div>
</template>

<script>
    import MyAnimation from './components/MyAnimation.vue';
    export default {
        data() {
            return {
                show: true
            }
        },
        components: {
            addMyAnimation: MyAnimation,
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

    .bounce-enter-active {
    animation: bounce-in .5s;
    }
    .bounce-leave-active {
    animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }
    
</style>

<!-- Transition Classes of Vuejs
    v-enter
        Starting state for enter. Added before element is inserted, removed one frame after element is inserted.
    v-enter-active
        Active state for enter. Applied during the entire entering phase.
        Added before element is inserted, removed when transition/animation finishes.
        This class can be used to define the duration, delay and easing curve for the entering transition.
    v-enter-to : Only available in versions 2.1.8+
        Ending state for enter. Added one frame after element is inserted
        (at the same time v-enter is removed), removed when transition/animation finishes.
    v-leave
        Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.
    v-leave-active
        Active state for leave. Applied during the entire leaving phase.
        Added immediately when leave transition is triggered, removed when the transition/animation finishes.
        This class can be used to define the duration, delay and easing curve for the leaving transition.
    v-leave-to : Only available in versions 2.1.8+
        Ending state for leave. Added one frame after a leaving transition is triggered
        (at the same time v-leave is removed), removed when the transition/animation finishes.

    v-enter -- 1 frame after -> v-enter-active - (remove active when transition/animation finishes) -> v-enter-to (added at last one frame, remove v-enter)
    v-leave -- 1 frame after -> v-leave-active - (remove active when transition/animation finishes) -> v-leave-to (added at last one frame, remove v-leave)


    'v-' prefix is the default which is applied when you don't provide any transition name to dom
    <transition name="name"></transition>
    in this case the 'v-' prefix is replaced and the class will be .name-enter.
-->

<!-- Custom Transition Classes
    These classes are useful when you want to combine Vue's transition system with an existing CSS animation.
    These will override the conventional class names.

    enter-class
    enter-active-class
    enter-to-class (2.1.8+)
    leave-class
    leave-active-class
    leave-to-class (2.1.8+)
-->