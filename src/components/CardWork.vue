<template>
  <div class="card text-center shadow">
    <img :src="dataInformation.pathImage" class="card-img-top" height="300" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ dataInformation.name }}</h5>
      <p class="card-text">{{dataInformation.description}}</p>
      <a v-show="dataInformation.links.sourceCode !== ''" :href="dataInformation.links.sourceCode" target="_blank" class="btn btn-primary m-2 text-light"><i class="fas fa-code"></i> Source</a>
      <a v-show="dataInformation.links.deploy !== ''" :href="dataInformation.links.deploy" target="_blank" class="btn btn-primary text-light"><i class="fas fa-eye"></i> Show more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWork",
  props: {
    dataInformation: Object
  }
}
</script>

<style scoped>

</style>
