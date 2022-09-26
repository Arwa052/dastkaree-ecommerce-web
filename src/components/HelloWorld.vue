<template>
  <div class="hello">
    <h2 class="f-hl" style="display: flex">
      <div class="f-hl-char">
          E
      </div>
      <div class="f-hl-char">
          v
      </div>
      <div class="f-hl-char">
          e
      </div>
      <div class="f-hl-char">
          r
      </div>
      <div class="f-hl-char">
          y
      </div>
      <div class="f-hl-char">
          t
      </div>
      <div class="f-hl-char">
          h
      </div>
        <div class="f-hl-char">
          i
      </div>
        <div class="f-hl-char">
          n
      </div>
        <div class="f-hl-char">
          g
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.f-hl-char{
    transform: translateY(-450px);
    animation: come-in-fade 2s ease forwards;
}
.f-hl-char:nth-child(1){
    animation-delay: .01s;
}
.f-hl-char:nth-child(2){
    animation-delay: .02s;
}
.f-hl-char:nth-child(3){
    animation-delay: .03s;
}
.f-hl-char:nth-child(4){
    animation-delay: .04s;
}
.f-hl-char:nth-child(5){
    animation-delay: .05s;
}
.f-hl-char:nth-child(6){
    animation-delay: .06s;
}
.f-hl-char:nth-child(7){
    animation-delay: .07s;
}
.f-hl-char:nth-child(8){
    animation-delay: .08s;
}
.f-hl-char:nth-child(9){
    animation-delay: .09s;
}
.f-hl-char:nth-child(10){
    animation-delay: .10s;
}
@keyframes come-in-fade {
  to { 
      transform: translateY(0); 
    }
    0%{ opacity: 0 }
    100%  { opacity: 1 }
}
</style>
