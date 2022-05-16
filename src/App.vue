<template>
<div id="app" class="container">
   <div class="row">
            
           <div class="col-md-8 product">
             
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
      products:[
        {
        title:'Nike Air Max',
        color:'green',
        bgtext:'Nike',
        detail:'Use a computed to rearrange the items array into an object whose keys are the category names. The corresponding value for each key will be an array of the items for that category.',
        sre: require('./assets/products/shoe1.jpg')
        },
        {
        title:'Nike Flex',
        color:'blue',
        bgtext:'Air',
        detail:'Use a computed to rearrange the items array into an object whose keys are the category names. The corresponding value for each key will be an array of the items for that category.',
        sre: require('./assets/products/shoe2.jpg')
        },
        {
        title:'Nike Roche Runs',
        color:'pink',
        bgtext:'MAX',
        detail:'Use a computed to rearrange the items array into an object whose keys are the category names. The corresponding value for each key will be an array of the items for that category.',
        sre: require('./assets/products/shoe3.jpg')
        },
        {
        title:'Nike Flex',
        color:'blue',
        bgtext:'Air',
        detail:'Use a computed to rearrange the items array into an object whose keys are the category names. The corresponding value for each key will be an array of the items for that category.',
        sre: require('./assets/products/shoe2.jpg')
        },
        {
        title:'Nike Flex',
        color:'blue',
        bgtext:'Air',
        detail:'Use a computed to rearrange the items array into an object whose keys are the category names. The corresponding value for each key will be an array of the items for that category.',
        sre: require('./assets/products/shoe2.jpg')
        },

        
      ]
    }
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
     /* width:100vw; */
     min-height: 100vh;
     overflow: hidden;
     background-color: aqua;
     display: flex;
   
   }
   .product{
     display: flex;
     /* max-width: 1280px; */
     width: 100px;
  
     padding: 25px;
     margin: 0 auto;
    flex-wrap: wrap;
   }
   
</style>


