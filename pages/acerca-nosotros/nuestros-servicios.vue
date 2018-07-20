<template>
    <div>
         <img src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/acerca-nosotros%2Fservicios.jpg?alt=media&token=c18db257-471b-4ba5-a91a-f8a3a6ae1a1b" alt="">
    </div>
</template>

<script>
export default {
  async asyncData() {
    const title = "Vicerrectorado Académico";
    const description =
      "Enmarcado en el Plan Estratégico de Desarrollo Institucional 2011 - 2020, el Vicerrectorado Académico, a través de su Dirección de Innovación, Formación y Evaluación Docente, trabaja e impulsa actividades innovadoras en la docencia y en la planificación docente; define un modelo integral para todas las titulaciones en el programa de innovación académica";
    return {
      title,
      description
    };
  },
  head() {
    return {
      title: this.title + " | Proyecto Ascendere",
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