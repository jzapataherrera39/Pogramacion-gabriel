import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/inicio'
import contenido from "../components/contenido";
import creditos from "../components/creditos";
import entrada from "../components/entrada.vue";
import actividades from"../components/actividades";
import evaluacion from"../components/evaluacion";
Vue.use(VueRouter)

const routes = [
     {
        path: '/',
        name: 'inicio',
        component: Inicio
     },
    {
        path: '/entrada',
        name: 'entrada',
        component : entrada,
       
        children: [
         {
          path: '/contenido',
          name: 'contenido',
          component: contenido,
         },
         {
          path: '/actividades',
          name: 'actividades',
          component: actividades,
          children: [

        ],
        },
        {
          path: '/evaluacion',
          name: 'evaluacion',
          component: evaluacion,
          children: [

        ],
          },
        {
         path: '/creditos',
         name: 'creditos',
         component: creditos,
         },
        ],
    }
 ]

const router = new VueRouter({
    mode: "history",
  base: process.env.BASE_URL,
    routes
})
 
export default router