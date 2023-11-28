<template>
  <div id="app">

    <!-- navBar -->
    <navbar></navbar>

    <!-- router view -->
    <router-view></router-view>
      
    <!-- footer -->
    <footer-div></footer-div>

  </div>
</template>

<script>
import navbar from './components/nav/Navbar.vue'
import footerDiv from './components/footer/Footer.vue'
import store from './store/index'

export default {
  data() {
    return {
    };
  },
  watch: {
  },
  components: {
    navbar,
    footerDiv
  },
  created() {
    store.commit('SET_LANG', 'en')  
  }
};
</script>
<style scoped lang="scss">

  @font-face {
    font-family: "cairo-regular";
    src: url("../src/assets/fonts/Cairo-Regular.ttf");
  }
  body {
    font-family: "cairo-regular" !important;
    background-color: #f7f8f9;
  }</style>
