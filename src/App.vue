<template>
  <div :class="setting.theme">
    <Header/>
    <Main/>
    <Footer/>
  </div>
  
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import {mapState, mapActions} from 'vuex';
 
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
  mounted() {
    if(localStorage.getItem('theme') == null){
      localStorage.setItem('theme', this.setting.stateTheme )
    }else{
      if(localStorage.getItem('theme') == false){
        alert(localStorage.getItem('theme'));
      }else{
        alert(localStorage.getItem('theme'));
      }
    }
  },
  methods: {
    ...mapActions(['acctionTheme'])
  },
  computed: {
    ...mapState(['setting'])
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/main.scss"
</style>