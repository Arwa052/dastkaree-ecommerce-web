<template>
    <div class="shipStrip">
        <div class="detail">
            <i class="material-icons">local_shipping</i>
            <p><b>Free Worldwide Shipping:</b> get free shipping with our 
                Special Service and not redeemable for cash or credit.<a href="#"> See Details</a> </p>
            
        </div>
    </div>
</template>

<style scoped>
.shipStrip{
    display: flex;
    height: 50px;
    width: 100%;
    background: #F2F2F2;
}
.shipStrip .detail{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}
.detail p{
    font-size: 15px;
}
.detail a{
    color: #32353C;
    font-weight: 600;
    margin: 0 5px;
}
.detail i{
    margin: 0 15px;
}
@media screen and (max-width: 780px){
    .shipStrip{
        display: none
    }
}
@media screen and (max-width: 600px){

}
</style>