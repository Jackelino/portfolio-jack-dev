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
          description: 'Es una aplicación que genera todas las posibles combinaciones de horarios disponibles, de cada materia.',
          pathImage: './src/assets/img/SIGEHO.jpg',
          links: {
            deploy: 'https://sigeho-test-040522.netlify.app/',
            sourceCode: 'https://github.com/Jackelino/potro-horario-universitario'
          }
        },
        {
          name: 'SEGIT',
          description: 'sfdfsdfsd sdfdsfs',
          pathImage: 'dfsdf',
          links: {
            deploy: '',
            sourceCode: ''
          }
        },
        {
          name: 'API Rycky and Morty',
          description: 'sfdfsdfsd sdfdsfs',
          pathImage: 'dfsdf',
          links: {
            deploy: '',
            sourceCode: ''
          }
        },
      ]
    }
  }
}
</script>

<style>

</style>
