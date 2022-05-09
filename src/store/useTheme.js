import {defineStore} from "pinia";

let flagTheme = localStorage.getItem('flagTheme');
export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: flagTheme,
        stateTheme: false
    }),
    getters: {},
    actions: {
        changeTheme(){
            if(this.theme === 'bg-dark'){
                this.theme = 'bg-light';
                this.stateTheme = false;
                localStorage.setItem('flagTheme', this.theme)
            }else{
                this.theme = 'bg-dark';
                this.stateTheme = true;
                localStorage.setItem('flagTheme', this.theme)
            }
        }
    }
});
