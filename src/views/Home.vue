<template>
<div>
  <div id="nav">
    
      <router-link to="/games">
      <div class="image">
        <img id="img" src="../../public/images/smashbanner.png">
        <div class="text">Games</div>
        </div>
      </router-link> 

      <router-link to="/dates">
      <div class="image">
        <img src="../../public/images/hannah.jpg">
        <div class="text">Dates</div>
        </div>
      </router-link>
  
      <router-link to="/postgrad">
      <div class="image">
        <img src="../../public/images/projects.jpeg">
        <div class="text">Projects</div>
        </div>
      </router-link>
     
    </div>
    <div class="content">
    <router-view/>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
   data() {
    return {}
  },
}
</script>

<style scoped>
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
  background: #571845;
  padding: 10px 100px;
  color: white;
}

.image {
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  width: 80%;
  height: 500px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 10%;
  transition: all 0.5s;
}
.text {
  position: absolute;
  line-height: 500px;
  font-size: 40px;
  width: 100%; 
  height:100%;
  opacity:0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
}
.image:hover .text{
    opacity: 1;  
}
.image:hover {
  transform: scale(1.1);
}
img {
  width: 100%;
}

#nav {
  padding: 30px;
  width: 100%;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: rgb(252, 252, 252);
  text-align: center;
}
.content {
  padding: 10px 100px;
}
</style>
