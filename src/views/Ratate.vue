<template>
    <div class="page">
        <Bird></Bird>
        <circl></circl>
    </div>
</template>


<style scoped>
.page{
    width: 100%;
    min-height: 100vh;
    /* background: #000; */
}
</style>


<script>
// @ is an alias to /src 
import Bird from '@/components/Preloader/Bird.vue'
import circl from '@/components/Preloader/circle.vue'

export default {
  name: 'Home',
  components: {
    Bird,
    circl
  }
}
</script>
