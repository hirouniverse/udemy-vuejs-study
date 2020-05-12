<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <!-- <label for="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            class="form-control"
                            v-model="user.firstName">
                        <label for="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            class="form-control"
                            v-model="user.lastName"> -->
                        <name-input
                            v-model="user.fullName"
                            @input="user.fullName = $event"></name-input>
                        <label for="email">Mail</label>
                        <input
                            type="email"
                            id="email"
                            class="form-control"
                            v-model="user.email">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="user.password">
                        <label for="save">
                            <input
                                type="radio"
                                id="save"
                                value="true"
                                v-model="isSave"> YES
                        </label>
                        <label for="notSave">
                            <input
                                type="radio"
                                id="notSave"
                                value="false"
                                v-model="isSave"> NO
                        </label>

                    </div>
                    
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
                <div class="col-xs-12 col-ms-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                        class="btn btn-primary"
                        @click.prevent="submit">Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.firstName }} {{ user.lastName }}</p>
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Store in Database?: {{ isSave }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NameInput from './components/NameInput.vue';
    export default {
        data() {
            return {
                user: {
                    fullName: '',
                    email: '',
                    password: ''
                },
                isSave: true,
                isSubmitted: false,
            };
        },
        methods: {
            submit() {
                this.isSubmitted = true;
            }
        },
        components: {
            NameInput,
        }
    }
</script>

<style>
</style>
