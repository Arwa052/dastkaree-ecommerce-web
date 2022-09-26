<template>
  <div class="home">
    <Slider></Slider>
    <shipStrip></shipStrip>
    <bestSeller></bestSeller>
    <bannerStrip></bannerStrip>
    <featureProduct></featureProduct>
    <instaStore></instaStore>
    <preFooter></preFooter>
  </div>
</template>

<script>
// @ is an alias to /src 
import Slider from '@/components/Slider.vue'
import shipStrip from '@/components/ship-strip.vue'
import bestSeller from '@/components/bestSeller.vue'
import bannerStrip from '@/components/bannerStrip.vue'
import featureProduct from '@/components/featureProduct.vue'
import instaStore from '@/components/instaStore.vue'
import preFooter from '@/components/preFooter.vue'

export default {
  name: 'Home',
  components: {
    Slider,
    shipStrip,
    bestSeller,
    bannerStrip,
    featureProduct,
    instaStore,
    preFooter,
  }
}
</script>
