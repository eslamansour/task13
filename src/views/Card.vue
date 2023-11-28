<template>
  <div>
    <!-- card section -->
    <section class="grey-section">
        <CardList></CardList>
    </section>

  </div>
</template>

<script setup>
    import CardList from '../components/CardList.vue'
</script>
<style>
  .grey-section{
    background-color: #f7f8f9; 
  }
  .white-section{
    background-color: #fff;
  }
  .green50-section{
    background: linear-gradient(to bottom, #c4e6d8 50%, white 50%);
  }
  .orange-section{
    background-color: #FAAD13;
  }
</style>