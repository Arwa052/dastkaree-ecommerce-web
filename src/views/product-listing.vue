<template>
  <div class="home">
    <div class="heading">
      <h1>PRODUCTS</h1>
    </div>
    <div class="product-grid">
      <div class="product">
        <div class="card">
          <a href="#">
              <div class="imgBox">
                  <img src="product 1.png" alt />
              </div>
          </a>
          <div class="details">
            <div class="info">
                <a href="#">
                    <h2>Small Matka Lacquer Art</h2>
                </a>
                <div class="price">
                <p>
                    <del>PKR 1,000</del>
                </p>
                <p>PKR 900</p>
                </div>
            </div>
            <div class="wishlist">
              <span class="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div class="card">
          <a href="#">
            <div class="imgBox">
                <img src="product 8.png" alt />
            </div>
          </a>
          <div class="details">
            <div class="info">
                <a href="#">
                    <h2>Loh E Qurani</h2>
                </a>
                <div class="price">
                <p>
                    <del>PKR 2,200</del>
                </p>
                <p>PKR 1,920</p>
                </div>
            </div>
            <div class="wishlist">
              <span class="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div class="card">
          <a href="#">
            <div class="imgBox">
                <img src="product 6.png" alt />
            </div>
          </a>
          <div class="details">
            <div class="info">
                <a href="#">
                    <h2>Wooden Camel</h2>
                </a>
                <div class="price">
                <!-- <p><del>PKR 1,000</del></p> -->
                <p>PKR 900</p>
                </div>
              </div>
            <div class="wishlist">
              <span class="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div class="card">
          <a href="#">
            <div class="imgBox">
                <img src="product 7.png" alt />
            </div>
          </a>
          <div class="details">
            <div class="info">
                <a href="#">
                    <h2>Kitchen Craft</h2>
                </a>
                <div class="price">
                <p>
                    <del>PKR 1,600</del>
                </p>
                <p>PKR 1,350</p>
                </div>
            </div>
            <div class="wishlist">
              <span class="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div class="card">
          <a href="#">
              <div class="imgBox">
                  <img src="product 3.png" alt />
              </div>
          </a>
          <div class="details">
            <div class="info">
                <a href="#">
                    <h2>King Cobra Snake</h2>
                </a>
                <div class="price">
                <p>
                    <!-- <del>PKR 1,000</del> -->
                </p>
                <p>PKR 1,000</p>
                </div>
            </div>
            <div class="wishlist">
              <span class="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div class="card">
          <a href="#">
            <div class="imgBox">
                <img src="product 4.png" alt />
            </div>
          </a>
          <div class="details">
            <div class="info">
                <a href="#">
                    <h2>Wooden Eagle Sclupture</h2>
                </a>
                <div class="price">
                <p>
                    <!-- <del>PKR 2,200</del> -->
                </p>
                <p>PKR 1,200</p>
                </div>
            </div>
            <div class="wishlist">
              <span class="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div class="card">
          <a href="#">
            <div class="imgBox">
                <img src="product 1.png" alt />
            </div>
          </a>
          <div class="details">
              <div class="info">
                <a href="#">
                    <h2>Lamp</h2>
                </a>
                <div class="price">
                <p><del>PKR 2,000</del></p>
                <p>PKR 1,750</p>
                </div>
              </div>
            <div class="wishlist">
              <span class="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
        <div class="card">
          <a href="#">
            <div class="sale"></div>
            <div class="imgBox">
                <img src="product 2.png" alt />
            </div>
          </a>
          
          <div class="details">
            <div class="info">
              <a href="#">
                <h2>Sugar Pot</h2>
              </a>
              <div class="price">
              <p>
                  <del>PKR 1,000</del>
              </p>
              <p>PKR 850</p>
              </div>
            </div>
            <div class="wishlist">
              <span class="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src 
import Slider from '@/components/Slider.vue'
import productList from '@/components/productList.vue'
import preFooter from '@/components/preFooter.vue'

export default {
  name: 'Home',
  components: {
    Slider,
    productList,
    preFooter,
  }
}
</script>

<style scoped>
  .product-grid{
      display: flex;
      margin: 0 auto;
      width: 90%;
  }
  .product{
      display: flex;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 50px;
  }
  .card{
      width: 280px;
      /* height: 400px; */
      margin: 0 15px 30px 15px;
  }
  
  .imgBox{
      width: 280px;
      height: 280px;
  }
  .imgBox img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* position: absolute; */
      top: 0;
      left: 0;
  }
  .details{
      display: flex;
      justify-content: space-between;
      padding: 10px;
  }
  .details .info{
      display: flex;
      flex-direction: column;
  }
  .info .price{
      display: flex;
  }
  .info h2{
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
      color: #32353C;
  }
  .info p{
      font-size: 14px;
      font-weight: 400;
      color: #32353C;
  }
  .info p del{
      color: #FF2B2B;
      margin-right: 10px;
  }
  .wishlist{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .wishlist span{
      font-size: 30px;
      color: #FF2B2B;
  }
  .sale{
      /* height: 73px;
      width: 50px;
      background: #FF2B2B;
      position: absolute;
      left: 50%;
      border-radius: 0 0 5px 5px; */
  }
  
  .card:hover{
    /* opacity: .6; */
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.212);
  }
  </style>
