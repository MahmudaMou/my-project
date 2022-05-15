<template>
<div id="app">
           <todo-app></todo-app>
           <section class="product">

           </section>
  </div>
</template>

<script>
import Product from '/components/Product.vue'
import TodoApp from './components/TodoApp.vue'


export default {
  name: 'App',
  components: {
    TodoApp,
    Product
  },
  data(){
    return {
      products:[
        {
        title:'Nike Air Max',
        color:'green',
        bgtext:'Nike',
        sre: require('./assets/products/shoe1.jpg')
        },
        {
        title:'Nike Flex',
        color:'Blue',
        bgtext:'Air',
        sre: require('./assets/products/shoe2.jpg')
        },
        {
        title:'Nike Roche Runs',
        color:'Pink',
        bgtext:'MAX',
        sre: require('./assets/products/shoe3.jpg')
        }
      ]
    }
  }
}
</script>
<style>

</style>


