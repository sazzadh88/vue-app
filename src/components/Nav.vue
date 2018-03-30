<template>
    <div>
         <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <router-link class='navbar-brand' :to="{ name: 'home'}">Vue App</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
                <router-link class='nav-link' :to="{ name: 'login'}">Login</router-link>
            </li>
                    <li>
                        <router-link class='nav-link' :to="{ name: 'register'}">Register</router-link>
                    </li>
                    <li>
                        <router-link class='nav-link' :to="{ name: 'me'}">Dashboard</router-link>
                    </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    </div>
   



</template>
<script>
 
  export default{
   

   created(){
        console.log('Hit From Nav');
      }
    
  }
</script>