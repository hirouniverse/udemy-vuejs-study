<template>
    <div>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br><br>
        <ul class="list-group">
            <transition-group name="my-slide">
                <li
                    class="list-group-item"
                    v-for="(number, i) in numbers"
                    :key="number"
                    style="cursor: pointer;"
                    @click="removeItem(i)"> {{ number }}
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numbers: [1,2,3,4,5,6,7,8,9,10],
        }
    },
    methods: {
        addItem() {
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length + 1);
        },
        removeItem(index) {
            this.numbers.splice(index, 1);
        }
    },
}
</script>

<style scoped>
    
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
        position: absolute; /* This attribute is important to animate element smoothly */
    }
    .my-slide-move {
        transition: transform 1s;
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