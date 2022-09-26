<template>
  <div class="about">
    <div class="banner-cont">
      <img src="about-banner.png" alt />
      <div class="details">
        <span>Crafted with care from quality</span>
        <h1>About us</h1>
      </div>
    </div>
    <div class="about-grid">
      <div class="grid">
        <div class="imgBox">
          <img src="about-map.png" alt />
        </div>
        <div class="details">
          <span>Check our limited edition product</span>
          <h1>Welcome to Dastkaree</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s
            standard dummy text ever since. Lorem Ipsum has been
            the industry. Lorem Ipsum has been the industry’s standard
            dummy text since. Lorem Ipsum is simply dummy text of the
            typesetting industry lorem Ipsum has been the industry’s
            standard.
          </p>
          <a href="#">About Serivces</a>
        </div>
      </div>
    </div>
    <div class="about-cont">
      <h1>Dastkaree</h1>
      <div class="grid-cont">
        <div class="about-cont-grid">
          <div class="card">
            <h2>Our Vission</h2>
            <p>
              Offers you all handicraft articles at your doorstep
              anywhere and every where in the world. The amateurs
              are always looking for unique & precious craft items
              for their home and business places.
            </p>
          </div>
          <div class="card">
            <h2>Our Mission</h2>
            <p>
              Offers you all handicraft articles at your doorstep
              anywhere and every where in the world. The amateurs
              are always looking for unique & precious craft items
              for their home and business places.
            </p>
          </div>
          <div class="card">
            <h2>Our Goal</h2>
            <p>
              Offers you all handicraft articles at your doorstep
              anywhere and every where in the world. The amateurs
              are always looking for unique & precious craft items
              for their home and business places.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <preFooter></preFooter> -->
  </div>
</template>


<script>
import preFooter from "@/components/preFooter.vue";

export default {
  name: "Home",
  components: {
    preFooter,
  }
};
</script>

<style scoped>
.banner-cont {
  height: 55vh;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
}
.banner-cont .details {
  position: relative;
  top: -60%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  color: #fff;
}
.banner-cont .details span {
  background: #ff5850;
  padding: 5px 20px;
  font-size: 14px;
}
.banner-cont .details h1 {
  font-size: 70px;
}
.about-grid {
  /* height: 55vh; */
  width: 100%;
  /* background: #f3f3f3; */
  display: flex;
  justify-content: center;
}
.about-grid .grid {
  width: 80%;
  margin: 100px 0;
  /* background: #888686; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.about-grid .imgBox {
  /* background: rgb(152, 160, 44); */
  width: 450px;
  height: 400px;
  /* order: 2; */
}
.about-grid .details {
  /* background: rgb(153, 153, 146); */
  width: 450px;
  height: 400px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  color: #32353c;
}
.about-grid .details span {
  color: #ffb74f;
  font-size: 12px;
  text-transform: uppercase;
}
.about-grid .details h1 {
  font-size: 27px;
  margin: 10px 0;
}
.about-grid .details a {
  background: #32353c;
  width: 154px;
  text-align: center;
  padding: 10px 10px;
  color: #fff;
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 14px;
}
.about-cont {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about-cont h1 {
  font-size: 125px;
  color: #f2f2f2;
  margin-bottom: -35px;
}
.grid-cont{
   background: #f2f2f2;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.about-cont-grid {
  /* background: #f2f2f2; */
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 75px 0;
  flex-wrap: wrap;
}

.card {
  width: 400px;
  height: 200px;
  background: #fff;
  padding: 20px;
  margin: 10px 0;
}
.card h2{
  text-align: center;
  margin: 15px 0;
}


@media screen and (max-width: 850px) {
}
@media screen and (max-width: 600px) {
  .about-cont h1 {
    font-size: 75px;
    margin-bottom: -20px;
  }
}
@media screen and (max-width: 420px) {
  .about-grid .grid {
    margin: 0;
  }
  .about-grid .imgBox {
    height: 270px;
    order: 2;
  }
  
}
</style>
