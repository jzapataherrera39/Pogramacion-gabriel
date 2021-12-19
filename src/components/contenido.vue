<template>

     <v-row no-gutters>
         <v-col align="center">
          <div>
            <video controls width="80%">
              <source src="../assets/multimedia/contenido.mp4" type="video/mp4">
            </video>
          </div>
         </v-col>
       </v-row>
      
      
    
</template>

<script>
export default {
  name: "contenido",
  data: () => ({
    //
  }),

  beforeDestroy() {
    },
};
</script>