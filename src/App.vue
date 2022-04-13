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
import { useStore, mapState, mapActions} from 'vuex';
import { onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
        if(localStorage.getItem('theme') == null){
          localStorage.setItem('theme', store.state.setting.stateTheme )
          
        }else{
          let flagTheme = localStorage.getItem('theme');
          store.dispatch('acctionTheme',flagTheme);

        }
    })
  },
  computed: {
    ...mapState(['setting'])
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/main.scss"
</style>