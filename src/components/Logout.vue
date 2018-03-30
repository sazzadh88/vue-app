<template>
    <div>
        Logged Out :)
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        created() {
            let authUser = window.localStorage.getItem('authUser');
            
            if (authUser) {
                axios.post('https://app.web/api/logout', {
                        token: authUser.access_token
                    })
                    .then(response => {
                        console.log(response.data)
                        window.localStorage.removeItem('authUser');
                    })
                    .catch(() => {
                       console.log('erorr from logout');
                    })
                    window.localStorage.removeItem('authUser');
            } else {
                this.$router.push('/login');
            }
        }
    }
</script>