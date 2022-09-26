<template>
    <div class='container'>
        <div class="rotating"
            style="width: 100px; height: 100px; line-height: 100px; text-align: center;">
            Rotate
        </div>
    <div class='line'></div>
</div>
</template>


<style scoped>

.page{
    width: 100%;
    height: 100vh;
    background: #000;
}
@keyframes rotating {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

.rotating {
    animation: rotating 10s linear infinite;
}
</style>