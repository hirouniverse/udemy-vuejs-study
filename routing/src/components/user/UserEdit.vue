<template>
    <div>
        <h3>Edit the User {{ $route.params.id }}</h3>
        <p>Locale : {{ $route.query.locale }}</p>
        <p>q : {{ $route.query.q }}</p> <!-- how to load query parameter -->
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="extra">extra data</p>
        <router-link tag="button" class="btn btn-primary" to="/user">Back</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave (to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm('Are you sure?')) {
                next();
            } else {
                next(false);
            }
        }
    },
    created() {
        console.log('user-edit is created');
    }
}
</script>