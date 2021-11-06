<template>
<div>
  <h1>Learning Interests</h1>

  <ProjectList :projects="projects" />
</div>
</template>

<script>
import ProjectList from "../components/ProjectsList.vue"
export default {
  name: 'PostGrad',
  components: {
    ProjectList
  },
  data() {
    return {
      
    }
  },
  computed: {
    projects() {
      return this.$root.$data.projects
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