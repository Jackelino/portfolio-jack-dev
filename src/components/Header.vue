<template>
  <header>
    <nav class="position-fixed filter">
      <div class="container">
        <ul class="nav justify-content-center">

          <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">
              Jack
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link ">Portafolio</router-link>
          </li>
          <li>
            <button type="button" :class="buttonTheme" @click="changeTheme">
              <i v-if="stateTheme" class="fa-solid fa-sun"></i>
              <i v-else class="bi bi-moon-stars"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import {mapState, mapActions} from 'pinia';
import {useThemeStore} from '../store/useTheme';

export default {
  name: 'Header',
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(useThemeStore, ['changeTheme']),
  },
  computed: {
    ...mapState(useThemeStore, ['theme', 'stateTheme']),
    buttonTheme: function () {
      return this.theme === 'bg-dark' ? 'btn btn-light' : 'btn btn-dark';
    }
  }

}
</script>
<style scoped>
.filter {
  width: 100% !important;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 20px 40px;
}

.nav-item a.router-link-exact-active {
  font-weight: bold;
}
</style>
