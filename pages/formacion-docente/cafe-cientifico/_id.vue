<template>
  <div>
    <div v-if="encuentro">
      <header class="parallax"
              :style="'background-image: url('+encuentro.img+');'"></header>
      <section class="container">
        <h1>{{encuentro.name}}</h1>
        <small>
          <i class="fas fa-calendar-alt"></i> {{encuentro.date | date}}</small>
        <hr>
        <p>{{encuentro.description}}</p>
        <div v-if="encuentro.guests">
          <h2>
            <i class="fas fa-users"></i> Invitados
          </h2>
          <div class="row">
            <div class="col-md-6"
                 v-for="(guest, index) in encuentro.guests"
                 :key="index">
              <strong>{{guest.name}}: </strong>
              <p>{{guest.description}}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div :class="[{'col-6': canIncribe}, {'col-12': !canIncribe}]">
            <button @click="$router.go(-1)"
                    class="btn btn-outline-primary btn-large">Regresar</button>
          </div>
          <div class="col-6"
               v-if="canIncribe">
            <nuxt-link class="btn btn-primary btn-large"
                       :to="{name: 'formacion-docente-cafe-cientifico-inscripcion', query: {id: key}}">Inscríbete</nuxt-link>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js";
export default {
  data() {
    return {
      encuentro: null,
      canIncribe: false,
      docRef: db
        .collection("/formacion-docente/cafe-cientifico/encuentros")
        .doc(this.$route.params.id)
    };
  },
  async mounted() {
    try {
      let doc = await this.docRef.get();
      this.loaded = true;
      if (doc.exists) {
        this.encuentro = { ...doc.data(), id: doc.id };
        // validate date
        // let fecha = new Date(res.data.postulacion);
        // let canIncribe = fecha.getTime() >= new Date().getTime();
      }
    } catch (error) {}
  }
  // head() {
  //   return {
  //     title: this.encuentro.nombre,
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: this.encuentro.contenido
  //       }
  //     ]
  //   };
  // }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/parallax";
</style>
