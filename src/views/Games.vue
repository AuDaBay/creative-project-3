<template>
<div>
  <h1>Games To Play</h1>

  <GamesList :Games="games" />
</div>
</template>

<script>
import GamesList from "../components/GamesList.vue"
export default {
  name: 'Games',
  components: {
    GamesList
  },
  data() {
    return {
      
    }
  },
  computed: {
    games() {
      return this.$root.$data.games
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