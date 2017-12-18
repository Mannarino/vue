<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <h2>Proyect Vue</h2>
    <div class="caja3">
    	En este proyecto, utilizando Vue creo esta sencilla apilacion donde consumo en tiempo real los datos de una api, para cargar dinamicamente los datos segun la opcion ques se escoja en el select
    </div>
    <div class="caja">
    <select v-model="selectedCountri">
    	<option v-for="countri in countries" v-bind:value="countri.value" >{{countri.name}}</option>
    </select>
    </div>
    <ul>
      <li v-for="artist in artists" >
      	<h2>{{artist.name}}</h2>
      	<img :src="artist.image[2]['#text']" />

      </li>
      
    </ul>
    
  </div>
</template>

<script>
import getArtists from './api';
export default {
  name: 'app',
  data () {
    return {
      
      artists: [
      
      ],
      countries: [
      	{name:'argentina', value:'argentina'},
      	{name:'colombia', value:'colombia'},
      	{name:'spain', value:'spain'}
      ],
      	selectedCountri:'argentina'
      }
    },
    methods:{
    	  refreshArtists(){
    	  const self = this
    	getArtists(this.selectedCountri)
    		.then(function (artists){
    		self.artists=artists
    		})
    		}
    },
    mounted(){
    this.refreshArtists()
    },
    watch:{
    selectedCountri(){
    this.refreshArtists()
    }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  width: 25%;
  margin: 10px 0;
}

a {
  color: #42b983;
}
.caja {
   margin:20px auto 40px auto;	
   border:1px solid #d9d9d9;
   height:30px;
   overflow: hidden;
   width: 230px;
   position:relative;
}
select {
   background: transparent;
   border: none;
   font-size: 14px;
   height: 30px;
   padding: 5px;
   width: 250px;
}
select:focus{ outline: none;}

.caja::after{
	content:"\025be";
	display:table-cell;
	padding-top:7px;
	text-align:center;
	width:30px;
	height:30px;
	background-color:#d9d9d9;
	position:absolute;
	top:0;
	right:0px;	
	pointer-events: none;
}
.caja3 {

font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;

color: #ffffff;
width: 80%;
margin:auto;
font-size: 18px;

font-weight: 400;

text-align: center;

background: #889ccf;

margin: 0 0 25px;

overflow: hidden;

padding: 20px;

border-radius: 35px 0px 35px 0px;

-moz-border-radius: 35px 0px 35px 0px;

-webkit-border-radius: 35px 0px 35px 0px;

border: 2px solid #5878ca;

margin:auto;
}


</style>
