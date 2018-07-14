<template>
  <section>
    <div class="container">
      <div class="row">
        <card :nota="noticia"
              class="col-lg-4 col-md-6"/>
        <card :nota="curso"
              class="col-lg-4 col-md-6"/>
        <card :nota="tips"
              class="col-lg-4 col-md-12"/>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Index/Card";
import axios from "axios";

export default {
  data() {
    let noticia = {
      type: "Noticia",
      title: null,
      date: {
        dia: null,
        mes: null
      },
      description: null,
      img: null,
      key: {
        name: "formacion-docente-programa-formacion-id",
        id: null
      }
    };
    let curso = {
      type: "Curso",
      title: null,
      date: {
        dia: null,
        mes: null,
        full: null
      },
      description: null,
      img: null,
      key: {
        name: "formacion-docente-programa-formacion-id",
        id: null
      }
    };
    let tips = {
      type: "Tips",
      title: null,
      date: {
        dia: null,
        mes: null
      },
      description: null,
      img: null,
      key: {
        name: "formacion-docente-programa-formacion-id",
        id: null
      }
    };
    return {
      noticia,
      curso,
      tips
    };
  },
  async mounted() {
    axios
      .get(
        'https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/noticias.json?orderBy="%24key"&limitToLast=1'
      )
      .then(res => {
        for (const key in res.data) {
          this.noticia.title = res.data[key].nombre;
          let tempDate = res.data[key].date.split("-");
          this.noticia.date.dia = tempDate[2];
          this.noticia.date.mes = tempDate[1];
          this.noticia.description = res.data[key].description;
          this.noticia.img = res.data[key].img;
          return;
        }
      });
    axios
      .get(
        "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/programa-formacion/cursos.json?orderBy=%22$key%22&limitToLast=1"
      )
      .then(res => {
        for (const key in res.data) {
          console.log(res.data);
          this.curso.title = res.data[key].nombre;
          this.curso.date.full = res.data[key].fecha;
          let tempDate = res.data[key].fecha.split("-");
          this.curso.date.dia = tempDate[2];
          this.curso.date.mes = tempDate[1];
          this.curso.description = res.data[key].description;
          this.curso.img = res.data[key].img;
          this.curso.key.id = key;
          return;
        }
      });
  },
  components: {
    card: Card
  }
};
</script>