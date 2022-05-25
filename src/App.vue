<template>
<div>
  <HeaderPart/>
</div>
<div id="app" class="container">
 
   <div class="row">
               <h2 class="text-center" style="margin-top:20px; margin-left:-200px">Tasks To Do</h2>
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
import HeaderPart from './components/HeaderPart.vue'



export default {
  name: 'App',
  components: {
    ProductPage,
    HeaderPart,
    TodoApp,

},
  data(){
    return {
      products:[],
      info: []
    }
  },

  
  created(){
              
        axios.get(`http://127.0.0.1:8000/api/items`)
       .then(res => {
                   this.products = res.data.data;
                  //  this.info = products.title
                   })
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
     margin-top: 10px;
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


