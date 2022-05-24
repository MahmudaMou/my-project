<template>
<div id="app" class="container">
   <div class="row">
             
           <div class="product">
             
      <ProductPage
      v-for="product in products"
      :key="product.color"
      :product = "product"
      />  
      
      </div> 
      <div class="col-md-4">
           <todo-app></todo-app>
           </div>   
  </div>
  </div>
  
</template>

<script>
import axios from 'axios';

import TodoApp from './components/TodoApp.vue'
import ProductPage from './components/ProductPage.vue'



export default {
  name: 'App',
  components: {
    ProductPage,
    TodoApp
   
    
  },
  data(){
    return {
      products:[],
      info: null
    }
  },
  created(){
            axios.get(`http://127.0.0.1:8000/api/items`)
       .then(res => console.log(res))
       .catch(error => console.log(error))
  }
      
}
</script>
<style>
   *{
     margin:0;
     padding: 0;
     box-sizing: border-box;

   }
   body{
     font-family: 'montseratt', sans-serif;
   }
   main{
     width:100vw;
     min-height: 100vh;
     overflow: hidden;
     background-color: aqua;
     /* display: flex; */
   
   }
   .product{
   
     /* max-width: 1280px; */
     /* width: 100px; */
  
     padding: 25px;
     margin: 0 auto;

     
  
   }
   
</style>


