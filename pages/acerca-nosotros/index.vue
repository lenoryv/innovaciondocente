<template>
    <div>
        <header class="parallax">
            <div class="header-content">
                <h1>
                    Quienes somos
                </h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <p>
                                Enmarcado en el Plan Estratégico de Desarrollo Institucional 2011 - 2020, el Vicerrectorado Académico,
                                a través de su Dirección de Innovación, Formación y Evaluación Docente,
                                trabaja e impulsa actividades innovadoras en la docencia y en la planificación
                                docente; define un modelo integral para todas las titulaciones en el
                                programa de innovación académica.
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <img src="~/static/sello.png"
                                 alt="logo">
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="container">
            <p>A través de iniciativas como Encuentro Café Científico, Jornadas de Reflexión Académica,
                el Plan de Formación Docente, entre otras, busca instaurar un sello de calidad para todos
                los programas formativos de la Universidad Técnica Particular de Loja.</p>
            <h3>Objetivos de la innovación docente</h3>
            <ul>
                <li>Mejorar la calidad educativa de las titulaciones de grado y postgrado.</li>
                <li>Generar movilidad docente hacia otras universidades con las cuales se pueda compartir
                    las experiencias de las buenas prácticas docentes.</li>
                <li>Crear espacios para identificar, valorar, sistematizar, normalizar, aplicar y difundir
                    las experiencias novedosas que contribuyan a la solución de problemas educativos
                    que estén afectando la calidad de los aprendizajes.</li>
                <li>Estimular la investigación como un elemento cotidiano determinante de la formación profesional
                    continua de los docentes a partir de su propia práctica educativa.</li>
                <li>Documentar las experiencias de las buenas prácticas docentes innovadoras.</li>
            </ul>
            <hr>
            <h2>Saludo del Vicerrector</h2>
            <div class="row">
                <div class="col-lg-6"><img src="https://innovaciondocente.utpl.edu.ec/sites/default/files/images/1(1).jpg"
                
                         alt="vice"></div>
                <div class="col-lg-6">
                    <h5>Estimados docentes:</h5>
                    <p>Les doy la bienvenida al portal de innovación docente del Vicerrectorado Académico,
                        a la vez que al inicio del presente ciclo académico. Este sitio busca poner al
                        alcance de todos las iniciativas que tenemos en marcha para estimular la reflexión,
                        actualización y mejora de nuestras prácticas docentes. La colaboración de ustedes
                        y las sugerencias que nazcan de la misma, serán de gran ayuda para hacer de este
                        portal un medio vivo y dinámico de interacción entre el Vicerrectorado Académico
                        y el cuerpo docente de la Universidad.</p>
                    <h6>Santiago Acosta Aide</h6>
                    <h6>Vicerrector Académico</h6>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/variables";
.parallax {
  height: 100vh;
  background-color: $color-primary;
  background-image: url("https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bcd2bf5b6271090e70ea12980ddb02d7&auto=format&fit=crop&w=1067&q=80");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
header {
  height: 100vh;
  width: 100%;
  display: flex;
}

.header-content {
  text-align: center;
  h1 {
    font-weight: 400;
    color: $color-font-primary;
  }
  margin: auto;
  .col-lg-6 p {
    text-align: justify;
    padding-top: 100px;
    color: $color-font-primary;
  }
}
@media screen and (min-width: 768px) {
  .header-content {
    text-align: center;
    h1 {
      font-size: 300%;
      letter-spacing: 0.5em;
    }
  }
}
h2{
    text-align: center;
}
</style>
