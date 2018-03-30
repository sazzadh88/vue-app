<template>
	<div>
	Welcome Dashboard  , {{name}}
	</div>
</template>

<script>
export default {
	data: () => ({
		name:''
	}),
	mounted(){

		let authUser = JSON.parse(localStorage.getItem('authUser'));
		if(authUser){
			this.name = authUser.name;
		}
    }
}
</script>