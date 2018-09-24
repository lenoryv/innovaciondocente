<template>
  <section>
    <div class="container">
      <div class="row">
        <card :nota="noticia"
              v-if="noticia"
              class="col-lg-4 col-md-6" />
        <card :nota="curso"
              v-if="curso"
              class="col-lg-4 col-md-6" />
        <card :nota="tips"
              v-if="tips"
              class="col-lg-4 col-md-12" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Index/Card";
import axios from "axios";
import { CursosCollection } from "~/plugins/firebase.js";

export default {
  data() {
    let noticia = {
      type: "Noticia",
      title: null,
      date: {
        dia: "",
        full: ""
      },
      description: null,
      img: null,
      key: {
        name: "observatorio-edutendencias-noticias-id",
        id: null
      }
    };
    let curso = {
      type: "Curso",
      title: null,
      date: {
        dia: "",
        mes: "",
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
        dia: "",
        mes: ""
      },
      description: null,
      img: null,
      key: {
        name: "https://www.utpl.edu.ec",
        key: null
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
          this.noticia.date.full = res.data[key].date;
          this.noticia.description = res.data[key].description;
          this.noticia.img = res.data[key].img;
          this.noticia.key.id = key;
          return;
        }
      });
    let cursosSnap = await CursosCollection.limit(1).get();
    cursosSnap.docs.map(doc => {
      let curso = { id: doc.id, ...doc.data() };
      let tempDate = curso.date.split("-");
      this.curso.title = curso.name;
      this.curso.date.full = curso.date;
      this.curso.date.dia = tempDate[2];
      this.curso.date.mes = tempDate[1];
      this.curso.description = curso.description;
      this.curso.img = curso.img;
      this.curso.key.id = curso.id;
      return;
    });
    axios
      .get(
        "https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/tips-innovacion.json?orderBy=%22$key%22&limitToLast=1"
      )
      .then(res => {
        for (const key in res.data) {
          this.tips.title = res.data[key].title;
          this.tips.date.full = res.data[key].date;
          let tempDate = res.data[key].date.split("-");
          this.tips.date.dia = tempDate[2];
          this.tips.date.mes = tempDate[1];
          this.tips.description = res.data[key].description;
          this.tips.key.name = res.data[key].url;
          this.tips.img = res.data[key].img;
          return;
        }
      });
  },
  components: {
    card: Card
  }
};
</script>
