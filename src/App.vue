<template>
  <v-app>
    
    

    <v-main>
      <br>
    
      <h1 class="title"><span style="font-size: 58px;">COMPETENCIAS TIC</span> </h1>
      <h3 class="subtitle">DIDACTICA Y PEDAGOGIA EMERGENTE</h3>
      <br>
      
     <v-img
      src="../assets/Ilustraciones/01.png"
      max-width="600"
    
 
    >
        </v-img>
   
   
  
<div class="icon">
      <router-link to="/entrada">
      <v-btn
              y-large
              color="primary"
              large="15"
              elevation="30"
              fab
            >
              <v-icon color="white">start</v-icon>
            </v-btn>
            </router-link>
            </div>
         
  
            
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'inicio', 
  components: {
    
  },
  data: () => {
  
    return {
          
    
    };
  }
};
</script>

<style>
#app {
  background: url('../assets/Background/Fondo_inicio.png') no-repeat center center fixed !important;
  background-size: cover;
  
}
.title {
color:  rgb(255, 255, 255);
text-align: right;
position: relative;
  bottom: -200px;
   right: 200px;
}
.subtitle {
  color:  white;
text-align: right;
position: relative;
  bottom: -220px;
   right: 170px;
   font-size: 35px;
  
}
body{
  margin: 0; 
  padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.icon {
    align-content: right;
    align-items: right;
    padding-left: 85%;
    position: relative;
  bottom: -190px;
   right: 300px;
   font-size: 50px;
    
}
</style>