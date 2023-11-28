<template>
  <div>
    <b-card no-body class="card-product p-3">
      <b-row no-gutters>        
        <b-col md="12">
          <div class="image-header">
            <b-img width="100px" height="100px" style="object-fit: contain;" :src="product.image"></b-img>
          </div>
        </b-col>
        <b-col md="12">
          <b-card-body class="product-body">
            <div class="product-details">
              <b>
                <p class="product-name">{{product.name}}</p>
              </b>
            </div>
            <b-card-text>
              <p class="product-price">
                {{ product.price }} 
                EGP
              </p>
              <b-button class="add-card-btn" @click="addItemToCard(product)" variant="outline-primary">Add to card</b-button>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";
import store from '../../store';


const emit = defineEmits(['showAlertMessage'])


defineProps({
  product: Object,
})
function addItemToCard(product) {
  product.quantity = 0
  store.commit('SetItemInCard', product)
  
  emit("showAlertMessage", 'Added to cart')
}


</script>
<style scoped>

  /* cards */
  .card{
    border: transparent !important;
  }
  .product-card{
    transition: 0.3s;
  }
  .card-product{
    max-height: 350px;
    min-height: 350px;
    height: 350px;
    margin-bottom: 30px;
  }
  .image-header {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }
  .card-body{
    margin: 0px !important;
    padding: 0 !important;
  }
  .product-details{
    margin-top: 20px;
  }
  .product-name{
    color: #183B56;
    font-size: 18px;
    font-weight: 700;
    height: 60px !important;
    min-height: 60px;
    max-height: 60px;
  }
  .product-price{
    color: #36B37E;
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
  }
  .add-card-btn{
    border-radius: 70px;
    font-size: 13px;
  }
</style>