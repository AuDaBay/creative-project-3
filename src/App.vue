<template>
  <div id="app">
    <div class="header">
      <h1>
        <a>
        <router-link class="myapp" to="/">Hobby Tracker</router-link>
        </a>
      </h1>
    </div>
    <div class="content">
    <router-view/>
    <div class=footer>
    <a href="https://github.com/AuDaBay/creative-project-3">Github</a>
  </div>
  </div>
  </div>
</template>
<script>
export default {
   name: 'App',
   data () {
     return {

     }
   },
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #000000;
  padding: 10px 100px;
  color: white;
}

.myapp {
  text-decoration: none;
  color:rgb(255, 255, 255);
}


.content {
  padding: 10px 100px;
}

.footer {
   background-color: white;
  width: 100%;
  height: 20px;
  position: fixed;
  bottom: 0;
  left:0;
}
</style>
