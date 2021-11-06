<template>
<div class="additions">
    <button @click="addToList()" class="auto">Add Project</button>
    <form v-if="adder" @submit.prevent="Add">
    <input v-model="name" placeholder="Name">
    <p></p>
    <textarea v-model="description"></textarea>
    <p></p>
    <input v-model="reference" placeholder="URL">
    <button class="submit">Submit</button>
    </form>
    <div class="projects">
        <div class="project" v-for="project in projects" :key="project.name">
            <div class="info">
            <h1>{{project.name}}</h1>
            <p> Idea: {{project.description}}</p>
            <a :href="project.reference">Tutorial</a>
            <p></p>
            <button @click="remove(project)" class="auto"> Remove</button>
            </div>
        </div>
    </div>
    
    
</div>
</template>

<script>
export default {
    name: 'ProjectList',
    props: {
        projects: Array
    },
    data() {
        return {
            adder: false,
            name: '',
            description: '',
            reference: ''
        }
        
    },
    methods: {
        addToList() {
            this.adder = !this.adder
        },
        Add() {
            let project = {

            }
            project.name = this.name
            project.description = this.description
            project.reference = this.reference

            this.$root.$data.projects.push(project)
            this.adder = !this.adder
            this.name = ""
            this.description = ""
            this.reference = ""
            },
            remove(project) {
                this.$root.$data.projects.splice(this.$root.$data.projects.indexOf(project), 1);
            }

    }

}
</script>

<style scoped>
.projects {
    display: flex;
    flex-wrap:wrap;
    
}
.project {
  margin: 10px;
  margin-top: 50px;
  
}

.info {
    border: solid  rgb(0,0,0,.9) 3px;
    background-color: rgb(0,0,0,.1);
    border-radius:8px;
    padding-left: 50px;
    padding-right: 50px;
}
.info p {
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.info a:link, a:visited {
    color:black;
}
</style>
