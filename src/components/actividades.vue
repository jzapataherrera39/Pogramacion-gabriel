<template>
  <v-container fluid class="background-contenido height">
    <v-row no-gutters >
      <v-row class="mr-5">
      <!--  <v-col align="center">
          <v-btn :to="{ name: 'decimal' }" color="indigo" class="btn_background mx-5" block outlined dark rounded x-large>
            
            <h1>decimal</h1>
          </v-btn>
        </v-col> -->
        <v-col align="center">
          <v-btn :to="{ name: 'acti1' }"  color="blue" >
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-up </v-icon> -->
            <h1>ACTIVIDAD 1</h1>
          </v-btn>
        </v-col>
      <v-col align="center">
          <v-btn :to="{ name: 'acti2' }"  color="greend" >
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-up </v-icon> -->
            <h1>ACTIVIDAD 2</h1>
          </v-btn>
        </v-col>
       <!--  <v-col align="center">
          <v-btn :to="{ name: 'hexadecimal' }" color="deep-orange" class="btn_background mx-5" block outlined dark rounded x-large>
            <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-down</v-icon>
            <h1>hexadecimal</h1>
          </v-btn>
        </v-col -->
      </v-row>
    </v-row>
    <v-row no-gutters>
      <v-col align="center">
        <v-main style="padding: 10px 0px 0px">
                <router-view></router-view>
            
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.btn_background{
  background-color: rgba(0, 0, 0, 0.5); 
   /* border-bottom:4px solid rgb(255, 255, 255) ; */
}
</style>


<script>
export default {
  name: "actividades",
  data: () => ({
    //
  }),

  beforeDestroy() {
  },
};
</script>
