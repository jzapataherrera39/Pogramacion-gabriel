<template>
  <v-container>
   <div id="h5p-container2">

   </div>
 
  </v-container>
  
</template>

<script>
import { H5P } from 'h5p-standalone';
export default {  
 data: () => ({
    //
  }),
  mounted(){
    const el = document.getElementById('h5p-container2');
    const options = {
    h5pJsonPath: "/actividades/acti2",
    frameJs: "/actividades/frame.bundle.js",
    frameCss: "/actividades/styles/h5p.css",
     };
      new H5P(el, options);
  },
}
</script>