<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'This is v-text'"></p>
                <p v-html="'<strong>This is v-html</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">First Custom Directive</p>
                <p v-local-highlight:background.delayed.blink="{firstColor: 'red', secondColor: 'green', delay: 500}">Second Custom Directive</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                    delay = 3000;
                    }

                    if (binding.modifiers['blink']) {
                        let firstColor = binding.value.firstColor;
                        let secondColor = binding.value.secondColor;
                        let blinkDuration = binding.value.delay;
                        let currentColor = firstColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = firstColor : currentColor = secondColor;
                                if (binding.arg === 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, blinkDuration);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg === 'background') {
                                el.style.backgroundColor = binding.value.firstColor;
                            } else {
                                el.style.color = binding.value.firstColor;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
