<template>
  <header>
    <nav class="position-fixed filter">
      <div class="container">
        <ul class="nav justify-content-center">
          <li class="nav-item" v-for="route in routers" :key="route">
            <router-link :to="route.router" class="nav-link" @click.prevent="resetScroll">
              {{ route.name }}
            </router-link>
          </li>
          <li class="nav-item">
            <button type="button" class="mx-2" :class="buttonTheme" @click="changeTheme">
              <i v-show="stateTheme" class="fa-solid fa-sun hvr-grow-rotate"></i>
              <i v-show="!stateTheme" class="bi bi-moon-stars hvr-grow-rotate"></i>
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
      routers: [
        {
          name: 'Jack',
          router: '/',
        },
        {
          name: 'Portfolio',
          router: '/portfolio',
        }
      ]
    }
  },
  methods: {
    ...mapActions(useThemeStore, ['changeTheme']),
    resetScroll() {
      window.scroll(0, 0);
    }

  },
  computed: {
    ...mapState(useThemeStore, ['theme', 'stateTheme']),
    buttonTheme: function () {
      return this.theme === 'bg-dark' ? 'btn btn-light' : 'btn btn-dark';
    }
  }

}
</script>
<style>


</style>
