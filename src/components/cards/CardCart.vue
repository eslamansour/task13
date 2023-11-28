<template>
  <div class="card-div">
    <b-card no-body class="">
      <b-row no-gutters>
        <b-col lg="3" md="3" sm="3">
          <img width="100px" height="100px" style="object-fit: contain;" :src="product.image">
        </b-col>
        <b-col lg="9" md="9" sm="9">
          <b-card-body>
            <div class="product-name">
              <b>
                {{product.name}}
              </b>
            </div>
            <b-card-text>
              <p class="product-price">
                {{ product.price }} EGP
                <b-button class="add-card-btn" @click="removeItemFromCard(product, index)" variant="outline-danger">Remove</b-button>
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>

    </b-card>
  </div>
</template>
<script setup>
import store from '../../store';

defineProps({
  product: Object,
  index: Number
})

function removeItemFromCard(product, index) {
  product['index'] = index
  store.commit('removeItemInCard', product)  
}


</script>
<style scoped>

  /* cards */
  .card{
    border: transparent !important;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 5px;
  }
  .card-body{
    padding: 0px 0px !important;
  }
  .product-price{
    font-size: 14px;
    color: #36B37E;
    font-size: 16px;
    font-weight: 400;
    bottom: 0;
    left: 0;
    width: 100%;
    position: absolute;
  }
  .product-price button{
    bottom: 0;
    right: 0;
    position: absolute;
    font-size: 13px;
  }
  .add-card-btn{
    border-radius: 70px;
  }
  @media (max-width: 850px) {
    .product-price{
      font-size: 14px;
      position: relative;
  }
  }
</style>