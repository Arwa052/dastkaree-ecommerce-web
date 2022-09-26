<template>
    <div>
        <div class="container">
            <div class="box">
                <div class="imgBox">
                    <i class="material-icons">unarchive</i>
                </div>
                <div class="details">
                    <h1>
                        Pickup at any Store
                    </h1>
                    <p>
                        Free shipping on all orders
                    </p>
                </div>
            </div>
            <div class="box">
                <div class="imgBox">
                    <i class="material-icons">rotate_left</i>
                </div>
                <div class="details">
                    <h1>
                        Free returns
                    </h1>
                    <p>
                        30-days free return policy
                    </p>
                </div>
            </div>
            <div class="box">
                <div class="imgBox">
                    <i class="material-icons">vpn_lock</i>
                </div>
                <div class="details">
                    <h1>
                        Secured payments
                    </h1>
                    <p>
                        We accept all major credit cards
                    </p>
                </div>
            </div>
            <div class="box">
                <div class="imgBox">
                    <i class="material-icons">support_agent</i>
                </div>
                <div class="details">
                    <h1>
                        Customer service
                    </h1>
                    <p>
                        Top notch customer service.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    /* background: rgb(138, 129, 129); */
    /* height: 225px; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.container .box{
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D4D4D4;
    margin: 50px 0;
}
.container .box:last-child{
    border-right: none;
}
.box .imgBox i{
    font-size: 50px;
    margin-bottom: 10px;
}
.box .details{
    text-align: center;
    color: #32353C;
}
h1{
    font-size: 25px;
    font-weight: 500;
}
.details p{
        font-size: 15px;
}



@media screen and (max-width: 1280px){
    .top-footer{
        margin-bottom: 0;
    }
    .top-footer .cont{
        height: 275px;
        min-width: 209px;
        max-width: 350px;
    }
}
@media screen and (max-width: 750px){
    .container .box{
        width: 284px;
    }
    .details h1{
        font-size: 22px;
    }
    .details p{
        font-size: 14px;
    }
}
@media screen and (max-width: 420px){
    .container .box{
        margin: 35px 0;
        border: none;
    }
}
</style>