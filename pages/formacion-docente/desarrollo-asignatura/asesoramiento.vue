<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
    <section class="container">
      <p>{{description}}</p>
      <h2>Filmación de tu clase.</h2>
      <p>Poder analizar el desarrollo de tu propia docencia te permitirá diagnosticar las áreas que necesitas
        mejorar. Por medio de MediaLab nos encargamos de la filmación de tu clase y de enviarte el vídeo
        para el análisis respectivo.</p>
      <h2>Observación de tu clase.</h2>
      <p>Si necesitas el criterio de un par sobre el desarrollo de tu docencia, esta metodología te servirá
        mucho. Solicita al LiiD un par instructor para que observe el desarrollo de tu docencia, sin
        utilizar cámara de vídeo. El par instructor te ayudará diagnosticando áreas que necesites mejorar.</p>
      <h2>Asesoramiento personalizado.</h2>
      <p>Con ayuda de los laboratorios de MediaLab y de E-Learning te asesoraremos sobre aspectos relacionados
        al uso de recursos didáctico que se puedan utilizar en el desarrollo de tu docencia, creación
        de materiales, medios audiovisuales, etc.</p>
      <h2>Grabación de Vídeos.</h2>
      <p>Con ayuda de MediaLab te asesoramos en el diseño, elaboración y grabación de vídeos que serán de
        mucha utilidad para Modalidad Abierta y sin Distancia y para Modalidad Presencial.</p>
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    let title = "Asesoramiento Pedagógico";
    let description =
      "Desde el Laboratorio de Innovación e Investigación Docente (LiiD) te ofrecemos varios servicios personalizados que te servirán para mejorar tu práctica docente";
    return { title, description };
  },
  head() {
    return {
      title: this.title  ,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
</style>

