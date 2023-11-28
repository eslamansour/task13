<template>
  <b-container class="section-container intro-container">
    <b-alert v-show="showAlert" variant="success" show>{{ alertMessage }}</b-alert>
    <!-- header -->
    <b-row>
      <b-col xl="6" lg="6" md="12" sm="12">
        <div class="filter-box filter-box-l">
          <b-form-group>
            <b-form-radio-group
              id="btn-radios-listType"
              v-model="selectedListType"
              :options="listTypes"
              name="radios-btn-default"
              buttons
              button-variant="outline-primary"
            ></b-form-radio-group>
          </b-form-group>
          {{ products.length + ' product'  + ((products.length > 1) ? 's':'')}}
        </div>
      </b-col>
      <b-col xl="6" lg="6" md="12" sm="12">
        <div class="filter-box filter-box-r">
          <b-form-group>
            <b-form-radio-group
              id="btn-radios-filters"
              v-model="selectedFilter"
              :options="listFilters"
              name="radios-btn-default"
              buttons
              button-variant="outline-primary"
            ></b-form-radio-group>
          </b-form-group>
        </div>
      </b-col>
      
    </b-row>


    <b-row>
      <b-col :xl="lgSize" lg="6" md="6" sm="12" v-for="p in products" :key="p.id">
        <boxItem @showAlertMessage='showAlertMessage' v-if="selectedListType=='boxes'" :product="p"></boxItem>
        <listItem @showAlertMessage='showAlertMessage' v-else :product="p"></listItem>
      </b-col>


    </b-row>
  </b-container>  
</template>
<script setup>
  import boxItem from '../cards/VerticalCard.vue'
  import listItem from '../cards/HorizontalCard.vue'
  import { ref, watch, onMounted } from 'vue'

  const showAlert = ref(false);
  const alertMessage = ref('');

  // filters
  const selectedFilter = ref('');
  const listFilters = ref([
    {
      text: 'All', value: '',
    },
    {
      text: 'Food', value: 'food',
    },
    {
      text: 'Non food', value: 'nonFood',
    },
    {
      text: 'Fashion', value: 'fashion',
    }
  ]);
  watch(selectedFilter, (val) => {
    getData();
  });


  // list type
  const lgSize = ref(3);
  const selectedListType = ref('boxes');
  const listTypes = ref([
    {
      text: 'Boxes', value: 'boxes',
    },
    {
      text: 'List', value: 'list',
    }
  ]);
  watch(selectedListType, (val) => {
    console.log(val);
    if(val == 'boxes')
      lgSize.value = 3
    else if(val == 'list')
      lgSize.value = 6
  });


  // products
  const products = ref([]);
  function getData() {
    let response = [
      {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFBem2dTqdOwafnMciy0bXkUwrqYJU7I4U_41nRW15g&s',
        price: 3.95,
        name: 'Spinneys Value Sponge For Glass Cookware',
        type: 'nonFood',
        category: 'sponge',
      },
      {
        id: 2,
        image: 'https://gardenerspath.com/wp-content/uploads/2018/01/Guide-to-Understanding-Seed-Packets-Pin2.jpg',
        price: 14.95,
        name: 'Spinneys Black Eyed Peas, 500Gm',
        type: 'food',
        category: 'seed',
      },
      {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/91-vhJZxKqL.__AC_SY300_SX300_QL70_ML2_.jpg',
        price: 34.95,
        name: 'Abu Auf Alkafela Kamar Aldin',
        type: 'food',
        category: 'ramadan',
      },
      {
        id: 4,
        image: 'https://s3.us-west-2.amazonaws.com/com.disco/crawling/items/262737_Choice-Pineapple-Slices-in-Light-Syrup--820-gr-adeb65e7-5a5f-44af-ad98-e289d32b56e1.jpg',
        price: 59.95,
        name: 'Spinneys Sliced Pineapple, 820g',
        type: 'food',
        category: 'fruit',
      },
      {
        id: 5,
        image: 'data:image/jpeg;base64,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',
        price: 15.95,
        name: 'Spinneys Value Grooved Sponge Scrubber, 3pcs',
        type: 'nonFood',
        category: 'sponge',
      },
      {
        id: 6,
        image: 'https://png.pngtree.com/png-clipart/20211116/original/pngtree-red-dress-png-image_6942757.png',
        price: 350.95,
        name: 'Dress, red and White - XL',
        type: 'fashion',
        category: 'dress',
      }
    ]
    products.value = response.filter((p) => filterResponse(p))
  };
  function filterResponse(p){
    if(selectedFilter.value != ''){
      return p.type == selectedFilter.value
    }
    else{
      return true
    }
  };

  function showAlertMessage(message){
    showAlert.value = true;
    alertMessage.value = message;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);
  }


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