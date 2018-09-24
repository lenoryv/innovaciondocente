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
  async asyncData({ params }) {
    let encuentro = null;
    try {
      let doc = await db
        .collection("/formacion-docente/cafe-cientifico/encuentros")
        .doc(params.id)
        .get();
      if (doc.exists) {
        encuentro = { ...doc.data(), id: doc.id };
        // validate date
        // TODO: add date
        // let fecha = new Date(res.data.postulacion);
        // let canIncribe = fecha.getTime() >= new Date().getTime();
      }
    } catch (error) {}
    return {
      encuentro,
      canIncribe: false
    };
  },
  async validate({ params }) {
    // TODO: validate perdormance
    let doc = await db
      .collection("/formacion-docente/cafe-cientifico/encuentros")
      .doc(params.id)
      .get();
    return doc.exists;
  },
  head() {
    return {
      title: this.encuentro
        ? this.encuentro.name
        : "No se encontro el encuentro",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.encuentro
            ? this.encuentro.description
            : "No se encontro el encuentro"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/parallax";
</style>
