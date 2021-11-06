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
            <h1>{{game.name}}</h1>
            <p>Release: {{game.rdate}}</p>
            <a :href="game.trailer">{{game.trailer}}</a>
            <p></p>
            <button @click="remove(game)" class="auto"> Remove</button>
        </div>
    </div>
</div>
    
    
</div>
</template>

<script>
export default {
    name: 'GamesList',
    props: {
        Games: Array
    },
    data() {
        return {
            adder: false,
            name: '',
            rdate: '',
            trailer: ''
        }
        
    },
    methods: {
        addToList() {
            this.adder = !this.adder
        },
        Add() {
            let game = {}
            game.name = this.name
            game.rdate = this.rdate
            game.trailer = this.trailer

            this.$root.$data.games.push(game)
            this.adder = !this.adder
            this.name = ""
            this.rdate = ""
            this.trailer = ""
            },
            remove(game) {
                this.$root.$data.games.splice(this.$root.$data.games.indexOf(game), 1);
            }

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