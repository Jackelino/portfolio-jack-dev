<template>
    <div class="container position-static pad">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "Main",
};
</script>

<style scoped>
    
    .home{
        min-height: 100vh;   
        padding-top: 90px;
        background: rgb(66,185,131);
        background: linear-gradient(0deg, rgba(66,185,131,1) 0%, rgba(52,73,94,1) 50%);
    }
    .About {
    min-height: 100vh;
    padding-top: 90px;
    }
    .Services {
    min-height: 100vh;
    padding-top: 90px;
    }
    .Portafolio {
    min-height: 100vh;
    padding-top: 90px;
    }
    .Contact {
    min-height: 100vh;
    padding-top: 90px;
    background-image: url("/img/layered-peaks-haikei.svg");
    background-attachment: scroll;
    background-size: cover;
    background-position: center;
    }
    .btn-primar {
    background-color: none;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-radius: 0px;

    color: white;
    }
    .btn-primar:hover {
    background-color: #fff;

    transition: ease-in 0.3s;
    }
    .icon {
    font-size: 50px;
    }

    .html {
    color: #e34c26;
    }
    .css {
    color: #264de4;
    }
    .javascript {
    color: #f8da4e;
    }
    .git {
    color: #f44d27;
    }
    .vue {
    color: #41b883;
    }
    .laravel {
    color: #ff2d20;
    }
    .bootstrap {
    color: #7952b3;
    }
    .php {
    color: #8892bf;
    }
    .python{
        color: #3B77A8;
    }
    .guitar {
    color: #b57049;
    }
    .microphone {
    color: #596775;
    }
    .headphones {
    color: #3f88be;
    }
    .gmail {
    color: #d62d20;
    }
    .gmail:hover {
    color: #d62d20;
    }
    .github {
    color: rgb(14, 14, 14);
    }
    .github:hover {
    color: rgb(14, 14, 14);
    }
    .linkedin {
    color: #0a66c2;
    }
    .linkedin:hover {
    color: #0a66c2;
    }
    .twitter {
    color: #1d9bf0;
    }
    .twitter:hover {
    color: #1d9bf0;
    }
    .imag {
    border-radius: 50%;
    }
    .type{
    color: #3d8bfd;
}
.tippy-box[data-theme~='tomato'] {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.26) ;
    color: rgb(0, 0, 0);
  }
    /*Animaciones*/ 
    /* Grow */
    .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
    }

    .hvr-grow:hover,
    .hvr-grow:focus,
    .hvr-grow:active {
    transform: scale(1.1);
    }
    /* Grow Rotate */
    .hvr-grow-rotate {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    }
    .hvr-grow-rotate:hover,
    .hvr-grow-rotate:focus,
    .hvr-grow-rotate:active {
    -webkit-transform: scale(1.1) rotate(50deg);
    transform: scale(1.1) rotate(50deg);
    }

    /* Wobble To Bottom Right */
    @-webkit-keyframes hvr-wobble-to-bottom-right {
    16.65% {
        -webkit-transform: translate(8px, 8px);
        transform: translate(8px, 8px);
    }
    33.3% {
        -webkit-transform: translate(-6px, -6px);
        transform: translate(-6px, -6px);
    }
    49.95% {
        -webkit-transform: translate(4px, 4px);
        transform: translate(4px, 4px);
    }
    66.6% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
    }
    83.25% {
        -webkit-transform: translate(1px, 1px);
        transform: translate(1px, 1px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    }
    @keyframes hvr-wobble-to-bottom-right {
    16.65% {
        -webkit-transform: translate(8px, 8px);
        transform: translate(8px, 8px);
    }
    33.3% {
        -webkit-transform: translate(-6px, -6px);
        transform: translate(-6px, -6px);
    }
    49.95% {
        -webkit-transform: translate(4px, 4px);
        transform: translate(4px, 4px);
    }
    66.6% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
    }
    83.25% {
        -webkit-transform: translate(1px, 1px);
        transform: translate(1px, 1px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    }

    .hvr-wobble-to-bottom-right:hover,
    .hvr-wobble-to-bottom-right:focus,
    .hvr-wobble-to-bottom-right:active {
    -webkit-animation-name: hvr-wobble-to-bottom-right;
    animation-name: hvr-wobble-to-bottom-right;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    }
</style>
