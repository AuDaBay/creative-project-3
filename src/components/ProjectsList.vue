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
            <h1>{{project.title}}</h1>
            <p> Idea: {{project.description}}</p>
            <a :href="project.path">Tutorial</a>
            <p></p>
            <button @click="deleteItem(project)" class="auto"> Remove</button>
            <button @click="editOn()" class="auto"> Edit</button>

            <div class="edit">
            <form v-if="editer" @submit.prevent="editItem(project)">
            <input v-model="editName" placeholder="Name">
            <p></p>
            <input v-model="editLocation" placeholder="Release Date">
            <p></p>
            <input v-model="editInfo" placeholder="URL">
            <button class="submit">Submit</button>
            </form>
            </div>

            </div>
        </div>
    </div>
    
    
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ProjectList',
    props: {
        projects: Array
    },
    data() {
        return {
            addItem: null,
            adder: false,
            editer: false,
            name: '',
            description: '',
            reference: '',
            editName: '',
            editLocation: '',
            editInfo: '',
        }
        
    },
    created() {
    this.getItems();
    },
    methods: {
        async upload() {
            console.log("we are here")
        let r2 = await axios.post('/api/projects', {
          title: this.name,
          description: this.description,
          path: this.reference
        });
        this.addItem = r2.data;
    },
    async getItems() {
      
        let response = await axios.get("/api/projects");
        this.projects = response.data;
        return true;
         
    },
        addToList() {
            this.adder = !this.adder
        },
        editOn() {
           this.editer = !this.editer 
        },
        Add() {
            let project = {}
            project.name = this.name
            project.description = this.description
            project.reference = this.reference

            this.upload();
            this.getItems();
            this.adder = !this.adder
            this.name = ""
            this.description = ""
            this.reference = ""
            },

           async deleteItem(item) {
      
        await axios.delete("/api/projects/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
    },
    async editItem(item) {
      
        await axios.put("/api/projects/" + item._id, {
          title: this.editName,
          description: this.editLocation,
          path: this.editInfo
        });
        this.findItem = null;
        this.getItems();
        this.editer = !this.editer

        return true;
      
    },
    
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
