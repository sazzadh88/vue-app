<template>
    <div>
        Welcome Dashboard  , {{name}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
	data: () => ({
		name:''
	}),
	mounted(){
		let token = localStorage.getItem('token');
		if(token){
			axios.get("https://app.web/api/me?token="+token)
			.then(response =>{
				this.name = response.data.name;
			})
			.catch(()=>{
				localStorage.removeItem('token');
				this.$router.push('/login');
			})
		}
    }
}
</script>