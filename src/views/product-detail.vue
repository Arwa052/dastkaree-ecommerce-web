<template>
  <div class="home">
    <div class="container">
        <div class="left-side">
            <div class="product-img">
                <img src="product 1.png" alt="">
            </div>
            <div class="more-img">
                <img src="product 1.png" alt="">
                <img src="banner 3.png" alt="">
                <img src="product 1.png" alt="">
            </div>
        </div>
        <div class="right-side">
            <div class="detail">
                <h1>
                    Lamp
                </h1>
                <span>PKR 1,350  <del>PKR 1,600</del> </span>
                <p>
                    Dastkaree.com has the largest collection and variety from all over
                    Pakistan and increasing day by day. We have professional experienced
                    labor who has finest skills in making good Quality articles and we insure
                    best quality standards.
                </p>
                <div class="line"></div>
            </div>
            <div class="btns">
                <div class="add-cart">
                    <input type="text" placeholder="-    1    +">
                    <button>Add to cart</button>
                </div>
                <p>
                    Categories: wooden lamp, seesham wood, lacquer art, export quality  
                </p>
            </div>
        </div>
    </div>
    <preFooter class="preFooter"></preFooter>
  </div>
</template>

<script>
// @ is an alias to /src 
import preFooter from '@/components/preFooter.vue'

export default {
  name: 'Home',
  components: {
    preFooter,
  }
}
</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    margin-top: 110px;
    padding-bottom: 100px;
    border-bottom: 1px solid #D4D4D4;
}
.product-img{
    width: 400px;
    height: 500px;
}
.more-img{
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    margin-top: -30px;
    
}
.more-img img,
.product-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    padding: 2px;
}
.left-side,
.right-side{
    flex: 1;
}


.left-side{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.right-side{
    display: flex;
    flex-direction: column;
}
.detail{
    width: 75%;
}
.detail span{
    color: #32353C;
    line-height: 35px;
}
.detail span del{
    color: #FF5850;
}
.detail p{
    color: #32353C;
    line-height: 24px;
    margin-top: 20px;
}
.detail .line{
    height: 1px;
    width: 80%;
    background: #B7B7B7;
    box-shadow: 0px 0px 3px 0px #0000002e;
    margin-top: 100px;
}
.btns{
    margin-top: 20px;
    width: 75%;
}
.btns .add-cart{
    display: flex;
    width: 50%;
}
.add-cart input{
    padding: 12px;
    font-size: 16px;
    margin-right: 10px;
    width: 80px;
    text-align: center;
    box-shadow: 0 1px 1px 2px #0000001a;
    border: none;
}
.add-cart button{
    font-size: 16px;
    width: 150px;
    background: #343538;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
}
.btns p{
    margin-top: 20px;
    color:#4e4e50;
    width: 80%;
    font-weight: 400;
}

@media screen and (max-width: 986px) {
    .container{
        flex-direction: column;
    }
    .right-side{
        align-items: center;
         margin-top: 30px;
    }
}
@media screen and (max-width: 700px) {
    .add-cart button{
        width: 300px;
    }
    .preFooter{
        display: none;
    }
}
@media screen and (max-width: 420px) {
    .product-img{
        width: 350px;
        height: 450px;
    }
    .btns .add-cart {
        display: flex;
        width: 100%;
    }
}
</style>
