<template>
  <div id="app">
    <Nav></Nav>
     <router-view></router-view>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'



export default {
  name: 'app',

  components: {
    Nav
  },
  created () {
            console.log('hits from app.vue');
        }
}
</script>
