<template>
    <div class="foote">
        <div class="top-footer">
            <div class="cont">
                <h1>
                    Contact Info
                </h1>
                <p>
                    <b>Phone: </b> +92 308 61 31 454
                </p>
                <p>
                    <b>Address: </b> 103 Tariq Block Garden 
                        Town Lahore, Lahore, Pakistan 54000
                </p>
            </div>
            <div class="cont">
                <h1>
                    Get Help
                </h1>
                <p>
                    Delivery Information
                </p>
                <p>
                   Sale Terms & Conditions
                </p>
                <p>
                   Returns & Refunds
                </p>
                <p>
                   Privacy Notice
                </p>
                <p>
                   Shopping FAQs
                </p>
            </div>
            <div class="cont">
                <h1>
                    Popular Categories
                </h1>
                <p>
                    Kitchen Craft (45)
                </p>
                <p>
                   Jewellery (78)
                </p>
                <p>
                   Lamp(64)
                </p>
                <p>
                   Wooden Sclupture (129)
                </p>
            </div>
            <div class="cont">
                <h1>
                    Let’s stay in touch
                </h1>
                <form>
                    <input type="text" name="email" placeholder="Your email address">
                    <input type="submit" name="submit" value="Subscribe">
                </form>
                <p>
                   Keep up to date with our latest 
                   news and special offers.
                </p>
            </div>
        </div>
        <div class="bottom-footer">
            <p>
                Dastkaree &copy 2019. All Rights Reserved 
            </p>
            <p>
                <b>
                    Powered by Nextin
                </b>
            </p>
        </div>
    </div>
</template>

<style scoped>
.foote{
    width: 100%;
    /* height: 80vh; */
    background: #32353C;
    color: #F9F9F9;
    /* justify-content: center; */
    display: flex;
    align-items: center;
    flex-direction: column;
}
.top-footer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    margin-top: 35px;
    flex-wrap: wrap;
    margin-bottom: 50px;
}
.top-footer .cont{
    max-width: 390px;
    min-width: 350px;
    padding: 20px;
    height: 350px;
}

.bottom-footer{
    display: flex;
    width: 97%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0;
    border-top: 1px solid #707070;
}
.cont p{
    color:#c5c5c5;
    margin: 10px 0;
}
.cont h1{
    margin: 25px 0;
    font-size: 22px;
    font-weight: 500;
}
form input{
    width: 200px;
    padding: 10px;
    font-size: 15px;
}
form input:focus{
    border: none;
    outline: none;
}
form input[type="submit"]{
    width: 100px;
    padding: 10px;
    font-size: 15px;
    background: #32353C;
    color: #f9f9f9;
    border: none;
    box-shadow: 0 2px 4px #0000005c;
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
@media screen and (max-width: 600px){
    
}
@media screen and (max-width: 420px){
    .heading{
        margin: 35px 0;
    }
    .heading h1{
        font-size: 25px;
    }
    .top-footer {
        justify-content: flex-start;
    }
    .top-footer .cont{
        height: 210px;
    }
    .bottom-footer p b{
        display: none;
    }
    .bottom-footer{
        justify-content: center;
    }
}
</style>