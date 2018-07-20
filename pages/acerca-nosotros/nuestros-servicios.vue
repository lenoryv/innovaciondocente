<template>
    <div>
         <img src="~/static/servicios.jpg" alt="">
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