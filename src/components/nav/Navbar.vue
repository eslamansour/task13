<template>
  <div class="navBar">
    <b-navbar toggleable="md" variant="faded" type="light" class="mt-3">
      <!-- logo -->
      <b-navbar-brand href="/">
        <b>Logo</b>
      </b-navbar-brand>
      <b-navbar-toggle style="font-size:15px" target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class=" ml-auto nav-items">
          <!-- Home -->
          <b-nav-item @click="goToRoute('landingPage')"><b>Home</b></b-nav-item>
          <!-- Card -->
          <b-nav-item @click="goToRoute('card')"><b>Card</b></b-nav-item>
          <!-- Help -->
          <b-nav-item><b>Help</b></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    goToRoute(name) {
      this.$router.push({
        name,
      });
    },
  },
  created() {
  }
};
</script>

<style scoped>
  .navBar{
    margin: 0px 160px;
    padding: 0px 20px;
    background-color: #f7f8f9; 
  }
  .nav-items li{
    margin: 0px 20px;
  }
  .nav-item a, span{
    color: #183B56 !important;
    font-weight: bold;
  }
  @media (max-width: 1100px) {
    .navBar{
      margin: 0px 0px;
      padding: 0px 0px;
    }
  }
</style>