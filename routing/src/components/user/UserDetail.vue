<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <hr>
        <router-link
            tag="button" 
            class="btn btn-secondary" 
            :to="'/user/' + $route.params.id + '/edit'">Edit
        </router-link> <!-- this way is a little messy -->
        <hr>
        <!-- you can write the above simply -->
        <!-- to do this, you need to set up the name of route in router.js -->
        <!-- and this includes how to pass the query parameter -->
        <router-link 
            tag="button"
            class="btn btn-primary"
            :to="link"> Edit User {{ $route.params.id }}
        </router-link>
        <hr>
        <router-link 
            class="btn btn-primary" 
            tag="button" 
            to="/user">Back
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: 'userEdit', 
                params: { 
                    id: this.$route.params.id 
                },
                query: {
                    locale: 'en',
                    q: 100
                },
                hash: '#extra'
            }
        }
    },
    beforeRouteEnter (to, from, next) {
        /**
         * this doesn't work since the instance is still not created
         */
        // this.link;

        if (true) {
            next();
        } else {
            next(false);
        }
    },
    created() {
        console.log('user-detail is created');
    }
}
</script>