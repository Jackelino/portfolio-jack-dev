<template>
  <section>
    <div class="container">
      <div class="text-center pb-3">
        <h4 class="text-dark fw-bold">Portfolio</h4>
      </div>
      <div class="container p-0">
        <div class="row">
          <div class="col-lg-6  pb-4" v-for="work in informationWorks" :key="work">
            <CardWork :dataInformation="work"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardWork from "../components/CardWork.vue";

export default {
  name: 'Portfolio',
  components: {CardWork},
  data() {
    return {
      informationWorks: [
        {
          name: 'SIGEHO',
          description: 'It is an application that generates all possible combinations of available timetables for each subject.',
          pathImage: '/assets/SIGEHO.jpg',
          links: {
            deploy: 'https://sigeho-test-040522.netlify.app/',
            sourceCode: 'https://github.com/Jackelino/potro-horario-universitario'
          }
        },
        {
          name: 'SEGIT',
          description: 'Web application to schedule psychological appointments according to the schedule of the patient and the therapist.',
          pathImage: '',
          links: {
            deploy: '',
            sourceCode: 'https://github.com/cedillojimcris/SEGIT'
          }
        },
        {
          name: 'API Rycky and Morty',
          description: 'It is an application that consumes the api and displays its results.',
          pathImage: '/assets/rick&mortyApi.jpg',
          links: {
            deploy: 'https://rickmortyapi.surge.sh/',
            sourceCode: 'https://github.com/Jackelino/Rick-Morty-API-updated-'
          }
        },
      ]
    }
  }
}
</script>

<style>

</style>
