<template>
<!-- <div class="container"> -->
  
<div class="product container">
            
       <div :class="'product-inner ' + product.color ">
         <div class="product-text-wrap">
           <h2 class="bg-text">{{product.bgtext}}</h2>
         </div>
         <div class="product-image-wrap">
           <img :src="product.image" class="image" style="height:140px;width:170px;">
         </div>
         <div class="product-detail">
           <h2>{{product.title}}</h2>
           <p>{{product.detail}}</p>
         </div>
       </div>
</div>
    
</template>
<script>
export default{
  mane: 'product',
  props: ['product']
}
</script>
<style>
.product{
  display: flex;
  flex: 1 1 3.33% ;
  width: 50px;
  padding: 25px;
  flex-wrap: wrap;
    

}
.product-inner{
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0,0.25);

}
.product-inner.red{
    background-image: linear-gradient(to bottom right, #cd534b,#d34127);

}
.product-inner.green{
    background-image: linear-gradient(to bottom right, #2ef445,#0b3714);

}
.product-inner.blue{
    background-image: linear-gradient(to bottom right, #503098,#2fb0ae );

}
.product-inner.pink{
    background-image: linear-gradient(to bottom right, #e86cbf,#3599c7 );

}
.product-image-wrap .image{
  width: 100%;
  filter: drop-shadow(0px 0px 12px rgba(0,0,0,0.25));
}
.product-image-wrap{
  position: relative;
  z-index: 1;
  transform-origin: center;
}
.product-text-wrap{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}
.product-text-wrap h2{
  color: #313131;
  font-size: 128px;
  font-weight: 900;
  opacity: 0.2;
  transform-origin: center;
}
.product-detail {
    background-color: #FFF;
    padding: 25px;
    margin: 0px -25px -25px;
  }
  .product-detail h2 {
    font-size: 24px;
    font-weight: 700;
    color: #676767;
    margin-bottom: 15px;
  }
  .product-detail p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    color: #676767;
  }

</style>
