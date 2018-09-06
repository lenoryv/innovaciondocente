<template>
    <div class="container">
            <div>
                <h1>¿Quieres implementar nuevas estrategias de enseñanza-aprendizaje, potenciando el uso creativo de diferentes herramientas dentro y fuera del aula?</h1> 
                <p>Semestralmente los profesores de Modalidad Presencial, Abierta y de Postgrados, presentan propuestas de Buenas Prácticas Docentes que potencian el uso creativo de diferentes herramientas dentro y fuera del aula. En este proceso los estudiantes participan activamente en la fase de aprendizaje, planificando, desarrollando y evaluando las competencias necesarias para contribuir con el perfil de egreso de la titulación e incorporando, además, en el desarrollo de la docencia problemas reales del entorno.</p>
            </div>
        </div>
</template>

<script>
export default {
  async asyncData() {
    const description =
      "En este proceso los estudiantes participan activamente en la fase de aprendizaje, planificando, desarrollando y evaluando las competencias necesarias para contribuir con el perfil de egreso de la titulación e incorporando, además, en el desarrollo de la docencia problemas reales del entorno.";
    return {description };
  },
  head() {
    return {
      title: "Buenas Prácticas",
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
