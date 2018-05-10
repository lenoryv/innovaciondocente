<template>
  <div class="container">
      <h1>{{evento.tema}}</h1>
      <img src="/img/banner-cafe-cientifico.png" alt="banner-cafe-cientifico">
      <button>leer mas></button>
      <h2>Invitados</h2>
      <hr>
      <div class="row">
          <div class="col-lg-3" v-for="(invitado, index) in evento.invitados" :key="index">
              <b>{{invitado.name}}:</b> {{invitado.desc}}
            </div>
      </div>
      <hr>
        <h3>Café científico</h3>
        <p>Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos, dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad de escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior y que ayuden a fomentar inquietudes que despierten una entretenida discusión.</p>
      <hr>

      <div class="row">
            <div class="col-md-6">
                <h3>Inscríbete</h3>
                <form action="/action_page.php" method="get">
                    Evento<br>
                    <input type="radio" name="evento" value="true" checked>Derecho de familia y complejidad en Ecuador: una perspectiva actual<br>
                    Nombres<br>
                    <input type="text" name="nombre"><br>
                    Apellidos<br>
                    <input type="text" name="apellido"><br>
                    Titulación<br>
                    <input type="text" name="titulacion"><br>
                    Email<br>
                    <input type="text" name="email"><br>
                    Teléfono Celular<br>
                    <input type="text" name="telefono"><br>
                    Ciudad<br>
                    <select name="ciudad">
                        <option value="volvo">Seleccionar</option>
                        <option value="Loja">Loja</option>
                        <option value="Cuenca">Cuenca</option>
                        <option value="Quito">Quito</option>
                        <option value="Guayaquil">Guayaquil</option>
                    </select><br>
                    ¿Desearías que la información de los eventos de formación e innovación docente te lleguen por medio de WhatsApp?<br>
                    <input type="text" name="telefono"><br>
                    Ingresa tu número
                    <br>
                    <input type="submit" value="Submit">
                </form>
          </div>
          <div class="col-md-6">
            <a>Tweets sobre #CaféCientíficoUTPL</a>
          </div>
      </div>
      <h3>Encuentros</h3>
  </div>
</template>


<script>
export default {
  data: () => {
    return {
      evento: {
        fecha: "26/04/2018",
        tema:
          "Derecho de familia y complejidad en Ecuador: una perspectiva actual",
        desc: `El modelo de familia instaurado en el Estado ecuatoriano se construyó sobre la fusión entre el matrimonio romano y el derecho canónico. La evolución de instituciones como la familia, tiene nuevas perspectivas y variaciones, que en muchos casos se debe a cuestiones demográficas, económicas, políticas, sociales y culturales, etc. Esto ha permitido considerar a la familia como un problema interdisciplinario de estudio desde todos los ámbitos de las ciencias sociales y humanas, así la familia como un grupo pre-formado dinámico abierto a la sociedad, con una determinada estructura interna y externa, alrededor del cual se establecen una serie de relaciones y funciones.
        Particularmente la Psicología, el Derecho, la Teología y las Ciencias de la Complejidad han realizado interesantes aportes para la comprensión de lo que es y debería ser la familia. Por ejemplo, desde la Teología el Papa Francisco regala al mundo entero, la maravillosa encíclica: Amoris Laetitia (La alegría del amor), una oración conclusiva dirigida a la Sagrada Familia.
        Las ciencias de la complejidad creen que dentro de la autoorganización de los elementos que conforman en particular la vida humana se encuentra la familia, ya no como un "núcleo esencial" (ni vertical) de la sociedad, sino altamente conectado dentro de la gran red que conforma la sociedad, con mecanismos de retroalimentación que se relacionan para que emerja la vida humana.`,
        invitados: [
          {
            name: "PhD. Jorge Benítez Hurtado",
            desc:
              "Investigador del Departamento de Ciencias Jurídicas de la Universidad Técnica Particular de Loja. Profesor de Filosofía del Derecho y Lógica Jurídica en la misma universidad. Diplomado en Humanismo y Espiritualidad, Máster en Derecho Administrativo por la UTPL y Maestro en Derecho por la Universidad Nacional Autónoma de México (UNAM). Doctor (Ph.D.) en Derecho por el Departamento de Filosofía del Derecho, Moral y Política de la Universidad Complutense de Madrid."
          },
          {
            name: "Mgtr. Rolando Andrade Hidalgo",
            desc:
              "Abogado de los Juzgados y Tribunales de la República del Ecuador por la Universidad Técnica Particular de Loja. Magíster en Derecho Civil y Procesal Civil por la Universidad Técnica Particular de Loja. Doctorando en Ciencias Sociales y Jurídicas por la Universidad de Cádiz, España. Docente Titular del Departamento de Ciencias Jurídicas de la Universidad Técnica Particular de Loja. Coordinador de la Maestría y Especialidad en Derecho Empresarial de la Universidad Técnica Particular de Loja."
          },
          {
            name: "Padre Vicente Delgado Flores",
            desc:
              "Delegado del Departamento de Familia de la Diócesis de Loja. Capellán de la Unidad Educativa Particular Santa Mariana de Jesús de Loja. Capellán de SOLCA-núcleo de Loja. Vicario Adscrito de la Parroquia El Sagrario-La Catedral. Licenciado en Ciencia de la Educación, mención: Ciencias Humanas y Religiosas. Magíster en Educación y orientación familiar."
          },
          {
            name: "Dra. Ruth Maldonado Rivera",
            desc:
              "Dra. en Psicorehabilitación y Educación Especial-Universidad Nacional de Loja. Magíster en Ciencias de la Familia, especialidad: Terapia Familia. USC-España. Magíster en Desarrollo de la Inteligencia y Educación. UTPL. Magíster en Evaluación, Gestión y Dirección de la Calidad Educativa-Universidad de Sevilla. Especialidad en Diagnóstico Intelectual. Docente Universitario."
          }
        ]
      }
    };
  }
};
</script>


<style lang="scss" scoped>

</style>
