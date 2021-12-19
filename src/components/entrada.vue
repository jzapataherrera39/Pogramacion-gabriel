<template>
<div id="principal">
 
      <v-tabs 
          right icons-and-text 
          slider-color="light-blue" 
          slider-size="3"
          fixed-tabs
          hide-slider
          >

          <v-tab :to="{ name: 'contenido' }">Contenido
            <v-icon  x-large class="mb-5"></v-icon>
          </v-tab>

          <v-tab :to="{ name: 'actividades' }" class="text-decoration-none mx-auto px-1 tabs_box">Actividades
            <v-icon x-large class="mb-5">fas fa-list-ol</v-icon>
          </v-tab>

        <v-tab :to="{ name: 'evaluacion' }" class="text-decoration-none mx-auto px-1 tabs_box">Evaluación
            <v-icon x-large class="mb-5">fas fa-clipboard-check</v-icon>
          </v-tab>
          
          <v-tab :to="{ name: 'creditos' }" class="text-decoration-none mx-auto px-1 tabs_box">Creditos
            <v-icon x-large class="mb-5">fas fa-clipboard-check</v-icon>
          </v-tab>
        </v-tabs>
    <!--   
 <v-img
      src="../assets/Ilustraciones/03.png"
      max-width="600"
     >
 </v-img>

      <div class="icon">
         <v-img
      src="../assets/Ilustraciones/02.png"
     max-width="800"
  >
           </v-img>
           -->
 
 
 <v-main>
      <transition name="bounce">
        <router-view> 
        </router-view>
      </transition>
    </v-main>

 </div>
  
  

</template>

<script>


export default {
  name: 'entrada', 
  components: {
    
  },

  data: () => {
  
    return {
          
    
    };
  }
};
</script>

<style>

#principal {
 /* background: url('../assets/Background/fondo_inicio2.png') no-repeat center center fixed !important;
  */
 /* background: url('../assets/Ilustraciones/02.png') no-repeat center center fixed !important;
 */ background-size: 25px 50px;
  
}

.title {
color:  white;
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
    padding-left: 50%;
    position: relative;
  bottom: 450px;
   right: -60px;
   font-size: 50px;
    

}

</style>
