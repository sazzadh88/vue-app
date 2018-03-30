<template>
    <div class="col-md-6 col-md-offset-3  form-signin">
                <div class="account-wall">
                    <div id="my-tab-content" class="tab-content">
                            <div class="tab-pane active" id="login">
                            <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                        alt="">
                            <form class="form-signin m2">
                                <input type="text" v-model='email' class="form-control" placeholder="Email" required autofocus>
                                <input type="password" v-model='password' class="form-control" placeholder="Password" required>
                                
                                <button type="button"  v-on:click="login" class="btn btn-primary">Sign In</button>
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
            login(){
                let authUser = {};
                axios.post('https://app.web/api/login', {
                    email: this.email,
                    password: this.password,
                })
                .then(response =>{
                    // this.success=true;
                    // this.error=false;
                    // let token = response.data.access_token;
                    // localStorage.setItem('token',token);
                    // this.$router.push('/me');
                    // console.log(response.data);

                   authUser.access_token = response.data.access_token;
                    window.localStorage.setItem('authUser', JSON.stringify(authUser));
                    axios.get("https://app.web/api/me?token="+authUser.access_token)
                    .then(userData =>{
                        authUser.email = userData.data.email;
                        authUser.name = userData.data.name;
                         window.localStorage.setItem('authUser', JSON.stringify(authUser))
                         this.$router.push('/me');
                    })
                    .catch((err) => {
                        console.log(err);
                        this.$swal('Login Failed');
                    })
                    
                })
                .catch((err) => {
                    console.log(err);
                    this.$swal('Login Failed');
                })

            },
            clear() {
                this.$refs.form.reset()
            }
        }
    }
</script>