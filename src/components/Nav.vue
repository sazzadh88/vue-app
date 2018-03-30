<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
       
         <router-link class="navbar-brand" :to="{ name: 'home'}">Home</router-link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
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
                    <li>
                        <router-link class='nav-link' :to="{ name: 'logout'}">Logout</router-link>
                    </li>
                    
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    </div>
   



</template>
<script>
 
  export default{
   

   
    
  }
</script>