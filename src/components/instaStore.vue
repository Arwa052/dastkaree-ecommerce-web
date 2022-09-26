<template>
    <div class="instaStore">
        <div class="header">
            <h1>
                Share your home with #dastkaree
            </h1>
            <span>
                Follow <b>@Dastkaree</b> for  inspiration.
            </span>
        </div>
        <div class="img-container">
            <div class="imgBox">
                <img src="insta 1.png" alt="">
            </div>
            <div class="imgBox">
                <img src="insta 2.png" alt="">
            </div>
            <div class="imgBox">
                <img src="insta 3.png" alt="">
            </div>
            <div class="imgBox">
                <img src="insta 4.png" alt="">
            </div>
            <div class="imgBox">
                <img src="insta 5.png" alt="">
            </div>
            <div class="imgBox">
                <img src="insta 6.png" alt="">
            </div>
            <div class="imgBox">
                <img src="insta 7.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.instaStore{
    width: 100%;
    height: 400px;
    background: #F2F2F2;
}
.instaStore .header{
    text-align: center;
    padding: 50px 0;
    color: #32353C;
}
.header h1{
    font-size: 28px;
}
.header span{
    font-size: 14px;
}
.img-container{
    display: flex;
    overflow: scroll;
    margin-bottom: 35px;
    justify-content: flex-start;
}
.imgBox{
    height: 200px;
    width: 200px;
    margin: 0 5px;
}
.imgBox img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
}
.imgBox:hover{
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.212);
}


@media screen and (max-width: 1024px){
    .img-container{
        display: flex;
        margin-bottom: 35px;
        justify-content: start;
        overflow: scroll;
    }
    .imgBox{
        min-width: 200px;
    }
}
@media screen and (max-width: 720px){
    .header h1{
        font-size: 25px;
    }
    .header span{
        font-size: 16px;
    }
}
@media screen and (max-width: 420px){
    .header h1{
        font-size: 22px;
    }
    .header span{
        font-size: 14px;
    }
}
</style>