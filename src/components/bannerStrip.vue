<template>
    <div class="bannerStrip">
        <div class="grid">
            <div class="imge grid-img2">
                <a href="#">
                    <img src="Banner 1.png" alt="">
                </a>
            </div>
             <div class="imge grid-img1">
                <a href="#">
                    <img src="Banner 2.png" alt="">
                </a>
            </div>
             <div class=" imge grid-img1">
                <a href="#">
                    <img src="Banner 3.png" alt="">
                </a>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.bannerStrip{
    background: #F2F2F2;
    /* height: 400px; */
}
.grid{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    /* background: #f55555; */
}
.imge{
    /* margin: 40px 10px; */
}
.grid-img2{
    /* width: 620px; */
    width: 50%;
    height: 300px;
    background: #F2F2F2;
}
.grid-img1{
    /* width: 300px; */
    width: 25%;
    height: 300px;
    background: #F2F2F2;
}
.grid-img1 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
}
.grid-img2 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
}

.imge:hover{
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.212);
}

@media screen and (max-width: 10240px){
    .imge{
        /* margin: 30px 15px 30px 0px; */
    }
    .imge:first-child{
        /* margin-top: 30px; */
    }
}
@media screen and (max-width: 800px){
    .imge{
        /* margin: 0px 15px 30px 0px; */
    }
    .imge:first-child{
        /* margin-top: 30px; */
    }
}
@media screen and (max-width: 420px){
    .imge{
        /* margin: 0px 15px 30px 0px; */
    }
    .imge:first-child{
        /* margin-top: 30px; */
    }
}
</style>