<template>
    <header>
            <nav class="position-fixed filter">
                <div class="container">
                    <ul class="nav justify-content-center" >
                        <li class="nav-item" >
                            <router-link to="/" class="nav-link" href="#">
                                <img src="{{ url('/img/logo.png') }}" width="60" alt=""> Jack
                            </router-link>
                        </li>
                        <li class="nav-item" >
                            <router-link to="/portfolio" class="nav-link ">Portafolio</router-link>
                        </li>
                        <li>
                            <button type="button"  :class="buttonTheme" @click="toogleTheme" >
                                <i v-if="!theme" class="bi bi-moon-stars"></i>
                                <i  v-if="theme" class="bi bi-brightness-high"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data(){
        return{
            theme: false,
        }  
    },
    methods: {
        toogleTheme : function (){
            (this.theme==false) ? this.theme = true : this.theme = false ;
        }
    },
    computed: {
        buttonTheme: function (){
            return (this.theme == true) ? 'btn btn-light' : 'btn btn-dark';
        }
    }

}
</script>
<style scoped>
    .filter{
        width: 100% !important;
        background-color: rgba(255, 255, 255, 0.3);
        line-height: 1;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 20px 40px;
}
</style>