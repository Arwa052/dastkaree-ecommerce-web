<template>
  <div class="about">
    <div class="container">
      <div class="left-side">
        <div class="imgBox">
          <img src="contact.png" alt />
        </div>
        <div class="contact">
          <h1>contact</h1>
        </div>
      </div>
      <div class="right-side">
        <div class="main-right-container">
          <div class="line"></div>
          <h1>We would love to talk with our great customer</h1>
          <div class="grid">
            <div class="iconBox">
              <i class="material-icons">language</i>
            </div>
            <div class="grid-detail">
              <h3>Address Details</h3>
              <p>
                103 Tariq Block Garden Town Lahore, Lahore, Pakistan 54000
              </p>
            </div>
          </div>
          <div class="grid">
            <div class="iconBox">
              <i class="material-icons">mail_outline</i>
            </div>
            <div class="grid-detail">
              <h3>Email Affress</h3>
              <p>
                dastkareeoffical@gmail.com <br />
                info@dastkareeoffical.com
              </p>
            </div>
          </div>
          <div class="grid">
            <div class="iconBox">
              <i class="material-icons">call</i>
            </div>
            <div class="grid-detail">
              <h3>Teleohone number</h3>
              <p>+92 308 61 31 454</p>
            </div>
          </div>
          <div class="grid">
            <div class="iconBox">
              <i class="material-icons">av_timer</i>
            </div>
            <div class="grid-detail">
              <h3>hours of operation</h3>
              <p>
                +92 308 61 31 454
                <br />+92 308 61 31 454
              </p>
            </div>
          </div>
        </div>
        <div class="social">
          <p>Facebook</p>
          <p>Instragram</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
    <section class="contact-container">
      <div class="contact-container-inner">
        <div class="contct-left-side">
          <div class="left-side-inner">
            <div class="inner_wrapper">
              <div class="inner_wrapper-left">
                <div class="contact-line"></div>
                <h1>
                  We would love to talk with our great customer
                </h1>
                <p>
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days.
                </p>
                <p>
                  Email: info@dastkaree.com <br />
                  Phone: +92 308 61 31 454
                </p>
                <div class="section-heading">
                  customer
                </div>
              </div>
              <div class="inner_wrapper-right">
                <h2>
                  FILL OUT THE FORM AND WE'LL GET BACK SOON!
                </h2>
                <form>
                  <input type="text" name="name" placeholder="Name*" required />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                  />
                  <input type="subject" name="subject" placeholder="SUbject" />
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Your Message" class="textarea"
                  ></textarea>
                  <input type="submit" value="SEND MESSAGE" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="contct-right-side">
          <div class="right-side-inner">
            <div class="content">
              <h2>
                I love fashion
              </h2>
              <p>
                ’ve created a vocabulary of different styles. I draw from many
                different ways to take a picture. Sometimes I go back to
                reportage, to journalism.
              </p>
              <span>
                JOHN GRANT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <preFooter></preFooter> -->
  </div>
</template>

<script>
import preFooter from "@/components/preFooter.vue";

export default {
  name: "Home",
  components: {
    preFooter,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
}
.container .left-side {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.container .left-side .imgBox {
  height: 770px;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
  top: 0;
  left: 0;
}
.contact {
  z-index: -1;
}
.contact h1 {
  color: #ff5850e0;
  font-size: 250px;
  margin-top: -135px;
}

.container .right-side {
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 900px;
  background: #232323;
  justify-content: center;
  color: #fff;
  justify-content: center;
  align-items: center;
}
.main-right-container {
  width: 70%;
}
.main-right-container h1 {
  font-size: 23px;
  width: 75%;
  margin: 20px 0;
  font-weight: 400;
}
.main-right-container .grid {
  display: flex;
  width: 80%;
  margin: 30px 0px;
}
.grid .iconBox {
  display: flex;
  align-items: center;
}
.grid .grid-detail {
  margin: 0px 0px 10px 20px;
}
.grid .grid-detail h3 {
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
}
.grid .grid-detail p {
  color: #b7b7b7;
  font-size: 13px;
  margin-top: 5px;
}
.iconBox i {
  color: #ff7670;
}
.line {
  height: 3px;
  width: 100px;
  background: #ffb74f;
  border-radius: 20px;
  margin: 0px 0px 80px 0px;
}
.social {
  display: flex;
  width: 55%;
  justify-content: space-around;
  margin-top: 30px;
  /* margin-bottom: -75px; */
}
.social p {
  border-right: 1px solid #707070;
  padding: 0 10px;
  margin-top: 30px;
  font-weight: 500;
  text-transform: uppercase;
}
.social p:nth-child(1) {
  color: #284194;
}
.social p:nth-child(2) {
  color: #00aced;
}
.social p:nth-child(3) {
  color: #00aced;
}
.social p:last-child {
  border-right: none;
}
.contct-left-side{
    background: #fff;
    padding: 60px 60px 0px 60px;
    box-shadow: 0px -2px 5px 0px #e4e0e0
}


/* Section */
.contact-container {
  display: flex;
  justify-content: center;
  /* background-image: linear-gradient(#fff  50%, green 50%) */
  /* background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1)); */
  background-image: linear-gradient(#fff, #fff 50%, #f7f7f7 50%);
}
.contact-container-inner{
    width: 80%;
    display: flex;
    align-items: flex-end;
}
.inner_wrapper{
    display: flex;
}
.inner_wrapper-right{
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    padding: 30px 50px;
    width: 55%;
}
.inner_wrapper-right h2{
    font-size: 14px;
    font-weight: 500 ;
    margin-bottom: 30px ;
    line-height: 24px;
    color: #232323;
}
.inner_wrapper-right form{
    display: flex;
    flex-direction: column;
}
.contact-line{
    height: 3px;
    width: 60px;
    background: #ffb74f;
    border-radius: 20px;
    margin: 0px 0px 30px 0px;
}
.inner_wrapper-left{
    width: 45%;
}
.inner_wrapper-left h1{
    font-size: 20px;
    line-height: 25px;
    font-weight: 300;
    margin-top: 10%;
    margin-right: 25%;
    margin-bottom: 20px;
}
.inner_wrapper-left p{
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    color: #6f6f6f;
    margin-right: 25%;
    margin-bottom: 20px;
}
.section-heading{
    letter-spacing: 6px;
    font-weight: 600;
    font-size: 200px;
    margin-left: -460px;
    color: #232323;
}

input, textarea{
    border: 1px solid #e8e8e8;
    color: #212121;
    font-weight: 400;
    padding: 9px 15px 10px;
    width: 100%;
    margin: 0 0 20px 0;
    resize: none;
    outline: none;
    background-color: #fff;
    line-height: 22px;
}
textarea{
    height: 80px;
}

input[type="submit"]{
    font-weight: 500;
    font-size: 11px;
    padding: 7px 18px;
    line-height: 18px;
    width: 150px;
    color: #fff;
    background: #000;
    border: 2px solid #000;
    cursor: pointer;
}
input[type="submit"]:hover{
    border: 2px solid #000;
    background: #fff;
    color: #000;
}
.contct-right-side{
    width: 40%;
}
.contct-right-side{
    background: #FF7670;
    padding: 120px 75px;
}
.contct-right-side h2{
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #ffffff ;
}
.contct-right-side p{
    margin: 0 0 25px;
    font-size: 21px;
    font-weight: 300;
    line-height: 25px;
    color: #ffffff;
}
.contct-right-side span{
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 0;
    font-weight: 500;
    color: rgba(255,255,255,0.75);
}

@media screen and (max-width: 986px) {
  .container {
    flex-direction: column;
  }
  .container .left-side {
    width: 100%;
  }
  .container .left-side .imgBox {
    height: 630px;
  }
  .contact h1 {
    font-size: 200px;
    margin-top: -115px;
    text-align: center;
  }
  .container .right-side {
    width: 100%;
    height: 800px;
  }
  .main-right-container {
    width: 80%;
  }
}
@media screen and (max-width: 700px) {
  .container .left-side .imgBox {
    height: 500px;
  }
  .contact h1 {
    font-size: 70px;
    margin-top: 0px;
    line-height: 100px !important;
  }
}
@media screen and (max-width: 420px) {
}
</style>
