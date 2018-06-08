<template>
  <div class="container">
    <h1>
      Café Científico
    </h1>
    <section>
      <h2>Banner</h2>
      <div class="row">
        <div class="col-md-6">
          <img src=""
               alt="Banner">
        </div>
        <div class="col-md-6">
          <h3>Nuevo Banner</h3>

        </div>
      </div>
    </section>
    <section>
      <h3>Portafolio de Encuentros</h3>
      <div style="overflow-x:auto;">
        <!--
        <table>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Descripcion</th>
            <th>Opciones</th>
          </tr>
          <tr>
            <td>Will</td>
            <td>Smith</td>
            <td>50</td>
            <td>50</td>
          </tr>
        </table>
        -->
      </div>
    </section>
    <section>
      <h2>
        Suscriptores
      </h2>
      Generar archivo
    </section>
  </div>
</template>

<script>
export default {
  layout: "admin"
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid $color-primary;
}
th {
  background-color: $color-primary;
  color: $color-font-primary;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #ddd;
}
</style>
