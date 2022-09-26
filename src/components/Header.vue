<template>
    <div class="header">
        <div class="logo">
            <router-link to="/"><img src="logo.png" alt=""></router-link>
            
        </div>
        <div class="menu">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/product-listing">New Arrival</router-link></li>
                <li><router-link to="/product-listing">Sale</router-link></li>
                <li><router-link to="/about">About us</router-link></li>
                <li><router-link to="/contact">Contact us</router-link></li>
                <li><router-link to="/"><i class="material-icons">search</i></router-link></li>
                <li><router-link to="/"><i class="material-icons">favorite_border</i></router-link></li>
                <li class="cart"><router-link to="/"><i class="material-icons">shopping_bag</i></router-link></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 80px;
    top: 0;
    width: 100%;
    /* position: fixed; */
    /* z-index: 999; */
    padding: 0 30px;
    background: #fdfdfd;
}
.menu ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.menu ul li a{
    padding: 10px 20px;
    color: #333;
    font-weight: 300;
}
.menu ul li a:hover{
    /* color: #333; */
}

.menu .cart{
    background: #ff5850e6;;
    margin: auto;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu .cart i{
    color: #f9f9f9;
}
.logo img{
    width: 75%;
}

@media screen and (max-width: 1024px){
    .logo img{
        width: 70%;
    }
}
@media screen and (max-width: 890px){
    .logo img{
        width: 70%;
    }
    .menu{
        display: none;
    }
}
@media screen and (max-width: 600px){
    
}
@media screen and (max-width: 420px){
    .logo img{
        width: 50%;
    }
    .header{
        height: 63px;
        background: rgba(236, 236, 236, 0.918);
        box-shadow: 0 2px 3px #e3e1e1;
    }
}
</style>