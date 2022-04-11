<template>
    <section>
        <div class="container">
            <Name/>
            <About/>
            <Education/>
            <Skills/>
            <Hobbies/>
            <Contact/>
        </div>
    </section>
</template>

<script>
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Education from '../components/Education.vue'
import Hobbies from '../components/Hobbies.vue'
import Name from '../components/Name.vue'
import Skills from '../components/Skills.vue'

export default {
    name: 'Home',
    components:{
        Name,
        About,
        Education,
        Skills,
        Hobbies,
        Contact,
    }

    }
</script>

<style>

</style>