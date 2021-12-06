<template>
<div class="additions">
    <button @click="addToList()" class="auto">Add Game</button>
    <form v-if="adder" @submit.prevent="Add">
    <input v-model="name" placeholder="Name">
    <p></p>
    <input v-model="rdate" placeholder="Release Date">
    <p></p>
    <input v-model="trailer" placeholder="URL">
    <button class="submit">Submit</button>
    </form>
    <div class="games">
        <div class="game" v-for="game in Games" :key="game.name">
            <div class="info">
            <h1>{{game.title}}</h1>
            <p>Release: {{game.description}}</p>
            <a :href="game.path">{{game.path}}</a>
            <p></p>
            <button @click="deleteItem(game)" class="auto"> Remove</button>
            <button @click="editOn()" class="auto"> Edit</button>

            <div class="edit">
            <form v-if="editer" @submit.prevent="editItem(game)">
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
    name: 'GamesList',
    props: {
        Games: Array
    },
    data() {
        return {
            addItem: null,
            adder: false,
            editer:false,
            name: '',
            rdate: '',
            trailer: '',
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
        let r2 = await axios.post('/api/games', {
          title: this.name,
          description: this.rdate,
          path: this.trailer
        });
        this.addItem = r2.data;
    },
    async getItems() {
      
        let response = await axios.get("/api/games");
        this.Games = response.data;
        return true;
         
    },
        addToList() {
            this.adder = !this.adder
        },
        editOn() {
           this.editer = !this.editer 
        },
        Add() {
            let game = {}
            game.name = this.name
            game.rdate = this.rdate
            game.trailer = this.trailer

            this.upload();
            this.getItems();
            this.adder = !this.adder
            this.name = ""
            this.rdate = ""
            this.trailer = ""
            },
           async deleteItem(item) {
      
        await axios.delete("/api/games/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
    },
    async editItem(item) {
      
        await axios.put("/api/games/" + item._id, {
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
.games {
    display: flex;
    flex-wrap:wrap;
    
}
.game {
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