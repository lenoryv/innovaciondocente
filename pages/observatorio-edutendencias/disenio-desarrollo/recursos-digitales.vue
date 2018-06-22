<template>
  <div>
<button class="tablink" @click="openPage('Presentaciones', this, 'red')">Presentaciones Multimedia</button>
<button class="tablink" @click="openPage('Guardar', this, 'green')" id="defaultOpen">Guardar y compartir información</button>
<button class="tablink" @click="openPage('Videos', this, 'blue')">Trabajar con Videos</button>
<button class="tablink" @click="openPage('Evaluaciones', this, 'orange')">Generar evaluaciones, juegos</button>
<div id="Presentaciones" class="tabcontent">
<h1>{{recursos[0].titulo}}</h1>
  <div class="row">
    <div class="col-lg-3" v-for="(card,i) in recursos[0].cards" :key="i">
    <div class="card card__one link c">
      
     <figure class="card__img">
          <img :src="card.img">
     </figure>
      <div class="card__desc">
         <p>{{card.descripcion|slice(0,200)}}</p>
     </div>
    </div>
  </div> 
  </div>
</div>
<div id="Guardar" class="tabcontent">
<h1>{{recursos[1].titulo}}</h1>
  <div class="row">
    <div class="col-lg-3" v-for="(card,i) in recursos[1].cards" :key="i">
    <div class="card card__one link c">
      
     <figure class="card__img">
          <img :src="card.img">
     </figure>
      <div class="card__desc">
         <p>{{card.descripcion|slice(0,200)}}</p>
     </div>
    </div>
  </div> 
  </div>
</div>
<div id="Videos" class="tabcontent">
<h1>{{recursos[2].titulo}}</h1>
  <div class="row">
    <div class="col-lg-3" v-for="(card,i) in recursos[2].cards" :key="i">
    <div class="card card__one link c">
      
     <figure class="card__img">
          <img :src="card.img">
     </figure>
      <div class="card__desc">
         <p>{{card.descripcion|slice(0,200)}}</p>
     </div>
    </div>
  </div> 
  </div>
</div>
<div id="Evaluaciones" class="tabcontent">
  <h1>{{recursos[3].titulo}}</h1>
  <div class="row">
    <div class="col-lg-3" v-for="(card,i) in recursos[3].cards" :key="i">
    <div class="card card__one link c">
      
     <figure class="card__img">
          <img :src="card.img">
     </figure>
      <div class="card__desc">
         <p>{{card.descripcion|slice(0,200)}}</p>
     </div>
    </div>
  </div> 
  </div>
</div>
</div>
</template>

<style lang="scss" scoped>
@import "assets/card";
@import "assets/variables";

/* Style tab links */
.tablink {
    background-color: #555;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    width: 25%;
}
img{
  height: 250px !important;
}
.tablink:hover {
    background-color: #777;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
    color: rgb(22, 21, 21);
    display: none;
    padding: 100px 20px;
    height: 100%;
}

#Presentaciones {background-color: $col-white;}
#Guardar {background-color: $col-white;}



</style>
<script>
import recursos from"@/static/data/recursos-digitales.json"
export default {
  
  asyncData(){
    return{recursos}
  },
  methods:{
  openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent['Presentaciones'].style.display = "none";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
}
};
</script>