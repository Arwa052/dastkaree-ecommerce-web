<template>
    <div class='container'>
        <div class="nov_preload">
			<div class="process-loading active">
	            <div class="loader">
	                <div class="dot"></div>
	                <div class="dot"></div>
	                <div class="dot"></div>
	                <div class="dot"></div>
	                <div class="dot"></div>
	            </div>
	        </div>
		</div>
    </div>
</template>


<style scoped>

.page{
    width: 100%;
    height: 100vh;
    background: #000;
}
.nov_preload {
    height: 650px;
}

.nov_preload {
    position: relative;
    width: 100%;
    display: block;
    z-index: 9999;
    top: 100px;
    left: 0;
}
.nov_preload .process-loading {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
}
.process-loading.active {
    height: 50px;
    filter: alpha(opacity=100);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-opacity: 1;
    -moz-opacity: 1;
    -ms-opacity: 1;
    -o-opacity: 1;
    opacity: 1;
}
.nov_preload .process-loading .loader {
    top: 50%;
    margin-top: -10px;
}

.process-loading .loader .dot {
    width: 20px;
    height: 20px;
    background: #e8e8e8;
    border-radius: 100%;
    display: inline-block;
    animation: nov-slide 1s infinite;
}
.process-loading .loader .dot:nth-child(1) {
    animation-delay: 0.1s;
    background: #e8e8e8;
}
.process-loading .loader .dot:nth-child(2) {
    animation-delay: 0.2s;
    background: #d7d7d7;
}
.process-loading .loader .dot:nth-child(3) {
    animation-delay: 0.3s;
    background: #bdbdbd;
}
.process-loading .loader .dot:nth-child(4) {
    animation-delay: 0.4s;
    background: #a0a0a0;
}
.process-loading .loader .dot:nth-child(5) {
    animation-delay: 0.5s;
    background: #717171;
}
.rotating {
    animation: rotating 10s linear infinite;
}
</style>