<template>
  <section>
    <div class="container">
      <div class="row">
        <card :nota="noticia"
              class="col-lg-4 col-md-6" />
        <card :nota="curso"
              class="col-lg-4 col-md-6" />
        <card :nota="noticia"
              class="col-lg-4 col-md-12" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Index/Card";
export default {
  data() {
    return {
      noticia: {
        type: "Noticia",
        title: "Nueva pagina Innovación",
        subtitle: "Conoce a la nueva imagen",
        description:
          "Tras dias y dias de trabajo y del equipo de desarrollo sidoso se abre las puertas a nuevas ideas y bases a la nueva pagina",
        img:
          "https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
      },
      curso: {
        type: "Curso",
        title: "Nueva pagina Innovación",
        subtitle: "Conoce a la nueva imagen",
        description:
          "Tras dias y dias de trabajo y del equipo de desarrollo sidoso se abre las puertas a nuevas ideas y bases a la nueva pagina",
        img:
          "https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
      },
    };
  },
  components: {
    'card': Card
  }
};
</script>