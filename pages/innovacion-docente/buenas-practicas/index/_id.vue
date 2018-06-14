<template>
  <div>
    <div class="card card__two link">
     <figure class="card__img">
         <img src="~/static/img/innovacion/proyecto-mentores.png" alt="">
     </figure>
     <div class="card__desc">
         <p>HELLO WORLD</p>
     </div>
 </div>
        <div class="embed-container">
            <embed name="plugin" id="plugin" :src="pdf.url" type="application/pdf" internalinstanceid="423">
        </div> 
    </div>
</template>



<script>
import buenas from "@/static/data/buenas-practicas.json";
export default {
    asyncData({ params }) {
    let buenas = null;
    for (let i = 0; i < buenas.length; i++) {
      for (let j = 0; j < buenas[i].repositorio.length; j++) {
          for (let k = 0; k < buenas[i].repositorio[j].practica.length; k++){
              if (cursos[i].months[j].practica[k].id == params.id)
                buenas = buenas[i].repositorio[j].practica[k];
          }
      }
    }
    return { buenas };
    },
    validate({ params }) {
    for (let i = 0; i < buenas.length; i++)
      for (let j = 0; j < buenas[i].repositorio.length; j++)
        for (let k = 0; k < buenas[i].repositorio[j].practica.length; k++)
          if (buenas[i].repositorio[j].practica[k].id == params.id) return true;
    return false;
  }
};
</script>