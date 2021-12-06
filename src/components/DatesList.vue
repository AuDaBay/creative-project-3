<template>
<div class="additions">
    <button @click="addToList()" class="auto">Add Date</button>
    <form v-if="adder" @submit.prevent="Add">
    <input v-model="name" placeholder="Name">
    <p></p>
    <input v-model="location" placeholder="Location">
    <p></p>
    <input v-model="info" placeholder="URL">
    <button class="submit">Submit</button>
    </form>
    <div class="dates">
        <div class="date" v-for="date in Dates" :key="date.name">
            <div class="info">
            <h1>{{date.title}}</h1>
            <p>Location: {{date.description}}</p>
            <a :href="date.path">Info</a>
            <p></p>
            <button @click="deleteItem(date)" class="auto"> Remove</button>
            <button @click="editOn()" class="auto"> Edit</button>
            </div>

            <div class="edit">
            <form v-if="editer" @submit.prevent="editItem(date)">
            <input v-model="editName" placeholder="Name">
            <p></p>
            <input v-model="editLocation" placeholder="Location">
            <p></p>
            <input v-model="editInfo" placeholder="URL">
            <button class="submit">Submit</button>
            </form>
        </div>
    </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'DatesList',
    props: {
        Dates: Array
    },
    data() {
        return {
            addItem: null,
            adder: false,
            editer:false,
            name: '',
            location: '',
            info: '',
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
        let r2 = await axios.post('/api/dates', {
          title: this.name,
          description: this.location,
          path: this.info
        });
        this.addItem = r2.data;
    },
    async getItems() {
      
        let response = await axios.get("/api/dates");
        this.Dates = response.data;
        return true;
         
    },
        addToList() {
            this.adder = !this.adder
        },
        editOn() {
           this.editer = !this.editer 
        },
        Add() {
            let date = {}
            date.name = this.name
            date.location = this.location
            date.info = this.info

            this.upload();
            this.getItems();
            this.adder = !this.adder
            this.name = ""
            this.location = ""
            this.info = ""
            },
           async deleteItem(item) {
      
        await axios.delete("/api/dates/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
    },
    
    async editItem(item) {
      
        await axios.put("/api/dates/" + item._id, {
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
.dates {
    display: flex;
    flex-wrap:wrap;
    
}
.date {
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