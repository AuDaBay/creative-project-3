<template>
<div>
  <h1>Date Ideas</h1>

  <DatesList :Dates="dates" />
</div>
</template>

<script>
import DatesList from "../components/DatesList.vue"
export default {
  name: 'Dates',
  components: {
    DatesList
  },
  data() {
    return {
      
    }
  },
  computed: {
    dates() {
      return this.$root.$data.dates
    }
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
h1 {
  text-align: center;
  font-size:60px;
  
}
</style>