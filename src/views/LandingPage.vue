<template>
  <div>
    <!-- intro section -->
    <section class="grey-section">
        <ListSection></ListSection>
    </section>

  </div>
</template>

<script setup>
    import ListSection from '../components/landingPage/List.vue'
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