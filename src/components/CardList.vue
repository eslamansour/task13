<template>
  <b-container class="section-container intro-container">
    
    <b-row>
      <b-col xl="12" lg="12" md="12" sm="12" v-for="(p, i) in products" :key="p.name">
        <listItem :product="p" :index="i"></listItem>
      </b-col>

      <b-col xl="12" lg="12" md="12" sm="12" v-if="products.length == 0">
        <h5 style="text-align: center;">Empty cart</h5>
      </b-col>

    </b-row>
  </b-container>  
</template>
<script setup>
  import listItem from './cards/CardCart.vue';
  import store from '../store';
  import { ref, watch, onMounted } from 'vue'


  // products
  const products = ref([]);
  function getData() {
    products.value = store.getters.getCardData
  };


  onMounted(() => {
    getData();
  })

</script>
<style >

  .intro-container{
    padding: 100px 0px;
  }
  .filter-box-r{
    float: right;
  }
  @media (max-width: 850px) {
    
  }
</style>