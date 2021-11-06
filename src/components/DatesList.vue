<template>
<div class="additions">
    <button @click="addToList()" class="auto">Add Date</button>
    <form v-if="adder" @submit.prevent="Add">
    <input v-model="name" placeholder="Name">
    <p></p>
    <input v-model="price" placeholder="Price">
    <p></p>
    <input v-model="location" placeholder="Location">
    <p></p>
    <input v-model="info" placeholder="URL">
    <button class="submit">Submit</button>
    </form>
    <div class="dates">
        <div class="date" v-for="date in Dates" :key="date.name">
            <div class="info">
            <h1>{{date.name}}</h1>
            <p>Price: {{date.price}}</p>
            <p>Location: {{date.location}}</p>
            <a :href="date.info">Info</a>
            <p></p>
            <button @click="remove(date)" class="auto"> Remove</button>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    name: 'DatesList',
    props: {
        Dates: Array
    },
    data() {
        return {
            adder: false,
            name: '',
            price: '',
            location: '',
            info: ''
        }
        
    },
    methods: {
        addToList() {
            this.adder = !this.adder
        },
        Add() {
            let date = {}
            date.name = this.name
            date.price = this.price
            date.location = this.location
            date.info = this.info

            this.$root.$data.dates.push(date)
            this.adder = !this.adder
            this.name = ""
            this.price = ""
            this.location = ""
            this.info = ""
            },
            remove(date) {
                this.$root.$data.dates.splice(this.$root.$data.dates.indexOf(date), 1);
            }

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