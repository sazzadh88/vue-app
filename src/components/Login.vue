<template>
    <div class="col-sm-6 col-md-4 col-md-offset-4">
                <div class="account-wall">
                    <div id="my-tab-content" class="tab-content">
                            <div class="tab-pane active" id="login">
                            <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                        alt="">
                            <form class="form-signin">
                                <input type="text" v-model='email' class="form-control" placeholder="Email" required autofocus>
                                <input type="password" v-model='password' class="form-control" placeholder="Password" required>
                                <input v-on:click="login" class="btn btn-lg btn-default btn-block" value="Sign In" />
                                <br>
                                  <div class="alert alert-success pad-2" v-if="success" role="alert">Login Succesful</div>
                           <div class="alert alert-danger pad-2" v-if="error" role="alert">Login Failed</div>
                            </form>
                          
                           </div> 
                           
                       </div>
                </div>
            </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data: () => ({
            email:'',
            password:'',
            success:false,
            error:false
        }),

        methods: {
            login() {
                    
                        axios.post('https://app.web/api/login', {
                            email: this.email,
                            password: this.password,
                        })
                        .then(response =>{
                            
                            this.success=true;
                            this.error=false;
                            // this.$swal('Login Succesful');
                        })
                        .catch(error =>{
                            
                            this.$swal('Login Failed');
                        })
                    
                },
                clear() {
                    this.$refs.form.reset()
                }
        }
    }
</script>