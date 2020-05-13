<template>
    <div>
        <button class="btn btn-primary" @click="toggleComp">SHOW ALERT</button>
        <br><br>
        <transition name="fade" mode="out-in">
            <component :is="selectedComponent"></component>
        </transition>
    </div>
</template>

<script>
import SuccessAlert from './SuccessAlert.vue';
import DangerAlert from './DanderAlert.vue';
export default {
    data() {
        return {
            selectedComponent: 'add-danger-alert',
        }
    },
    methods: {
        toggleComp() {
            this.selectedComponent = this.selectedComponent == 'add-danger-alert' ? 'add-success-alert' : 'add-danger-alert';
        }
    },
    components: {
        addSuccessAlert: SuccessAlert,
        addDangerAlert: DangerAlert
    }
}
</script>