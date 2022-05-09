<template>
  <div :class="classTheme">
    <Header/>
    <Main/>
    <Footer/>
  </div>

</template>

<script>
import {mapState } from 'pinia';
import {useThemeStore} from './store/useTheme';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
  computed: {
    ...mapState(useThemeStore, ['theme']),
    classTheme() {
      return this.theme === 'bg-dark' ? 'bg-dark' : 'bg-light';
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss"
</style>
