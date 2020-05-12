<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>UserName</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br><br>
                <button class="btn btn-primary" @click="fetch">Get</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users" :key="u.id">{{ u.name }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                /**
                 * This is an example how to use vue-resource method
                 */
                // this.$http.post('data.json', this.user)
                //     .then(res => {
                //         console.log(res);
                //     }, error => {
                //         console.log(error);
                //     });
                
                /**
                 * This is the example how to use resource of vue-resource
                 */
                // this.resource.save({}, this.user);

                /**
                 * This is an example how to use custom resource
                 */
                this.resource.saveAlt({node: this.node}, this.user);
            },
            fetch() {
                /**
                 * This is an example how to use vue-resource method (get)
                 */
                // this.$http.get('data.json')
                //     .then(res => {
                //         return res.json();
                //     })
                //     .then(data => {
                //         const resultArray = [];
                //         for (let key in data) {
                //             resultArray.push({
                //                 id: key,
                //                 name: data[key].name,
                //                 email: data[key].email
                //             });
                //         }
                //         this.users = resultArray;
                //         console.log(this.users);
                //     });
                
                /**
                 * This is the example how to use resource of vue-resource
                 */
                // this.resource.get()
                //     .then(res => {
                //         return res.json();
                //     })
                //     .then(data => {
                //         const resultArray = [];
                //         for (let key in data) {
                //             resultArray.push({
                //                 id: key,
                //                 name: data[key].name,
                //                 email: data[key].email
                //             });
                //         }
                //         this.users = resultArray;
                //     });
                
                /**
                 * this is an example how to use custom action
                 */
                this.resource.getData({node: this.node})
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push({
                                id: key,
                                name: data[key].name,
                                email: data[key].email
                            });
                        }
                        this.users = resultArray;
                    });
            }
        },
        created() {
            /**
             * this is the alternative way to set up how to access external resource
             * setting up this resource is perfectly option and depends on your usecase
            */ 
            const customActions = {
                saveAlt: { method: 'POST' },
                getData: { method: 'GET' }
            };
            /**
             * after create custom action, you can set the action to resource
             */
            // this.resource = this.$resource('data.json', {}, customActions);
            /**
             * this is an example how to make url flexible
             */
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
