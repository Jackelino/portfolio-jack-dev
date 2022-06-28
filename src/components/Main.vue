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

</style>
