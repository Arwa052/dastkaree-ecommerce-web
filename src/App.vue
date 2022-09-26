<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <footter></footter>
  </div>
</template>

<style lang="scss">
</style>



<script>
// @ is an alias to /src 
import Header from '@/components/Header.vue'
import footter from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    footter
  }
}
</script>
