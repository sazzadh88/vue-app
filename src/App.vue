<template>

  <div id="app">

    <Nav></Nav>

    <div class="container">

      <router-view></router-view>	

    </div>

  </div>

</template>

<script>

import Nav from './components/Nav.vue'



export default {
  name: 'app',

  components: {
    Nav
  }
  
}
</script>
