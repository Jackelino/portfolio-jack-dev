import { createStore } from 'vuex'

export default createStore({
  state: {
    setting: {
      theme: 'bg-light',
      stateTheme : false
    }
  },
  mutations: {
    changeTheme(state){
      if(state.setting.stateTheme == false){
        state.setting.stateTheme = true;
        state.setting.theme = 'bg-dark';
        localStorage.setItem('theme',true);
      }else{
        state.setting.stateTheme = false;
        state.setting.theme = 'bg-light';
        localStorage.setItem('theme',false);
      }

    },
    theme(state, payload){
      state.setting.stateTheme = payload;
    }

  },
  actions: {
    actionChangeTheme({commit}){
      commit('changeTheme');
    },
    acctionTheme({commit}, t){
      commit('theme',t);
    }
  },
  modules: {
  }
})
