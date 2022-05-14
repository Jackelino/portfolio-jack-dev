<template>
    <div class="container position-static pad mvh-100">
        <div class="container p-5">
            <transition mode="out-in">
              <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: "Main",
};
</script>

<style scoped lang="scss">

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
