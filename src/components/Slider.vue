<template>
    <div class="slider">
        <!-- <img src="banner.png" alt=""> -->
        <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
            <slide class="slide"
             style="background-image: url('Banner 1.png'); background-size: cover;">
                <!-- <div class="carousel-content carousel-content-right">
                    <p class="subtitle">ARE YOU READY?</p>
                    <h3 class="heading"><b>Start Selling Online Successfully</b></h3>
                    <p class="subtitle">Creative, Flexible and High Performance</p>
                    <a href="#" class="btnWrap btn">Shop Now</a>
                </div> -->
            </slide>
            <!-- <slide class="slide"
             style="background-image: url('https://elasticbeanstalk-ap-south-1-905351406809.s3.ap-south-1.amazonaws.com/avone/dome1-bnr2.jpg');background-size: cover;">
                <div class="carousel-content carousel-content-left">
                    <h3 class="heading"><b>The Powerful Theme You can Trust</b></h3>
                    <p class="subtitle">High Performance Delivered</p>
                    <a href="#" class="btnWrap btn"> Shop Now</a>
                </div>
            </slide> -->
        </carousel>
    </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
</style>