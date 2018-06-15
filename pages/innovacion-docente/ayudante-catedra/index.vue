<template>
    <div>
        <header class="parallax"></header>
        <section class="container">

            <h1>Proyecto Ayudante de Catedra</h1>
            <hr>
            <p>La necesidad de apoyo al profesorado en la UTPL conlleva a que los estudiantes de pregrado
                puedan realizar tareas de soporte a la docencia en calidad de Ayudantes de Cátedra. Con
                estos proyectos se pretende contribuir a la formación de estudiantes que tienen un perfil
                profesional de investigación, docencia y que podrían contribuir en el futuro como docentes.</p>
            <h3>¿Quién es el ayudante de cátedra?</h3>
            <p>El ayudante de cátedra es un estudiante que por sus méritos académicos será seleccionado
                para cumplir funciones concretas y específicas relacionadas con actividades de docencia,
                investigación y prácticum.</p>
            <h3>Estos son los requisitos que debes cumplir:</h3>
            <ul>
                <li>Ser alumno matriculado en el período académico en curso.</li>
                <li>Haber aprobado la (s) materia (s) motivo de la convocatoria con una nota mínima de 34
                    puntos sobre 40, requisito establecido en el Artículo 28 literal b del Reglamento
                    de carrera y escalafón del profesor investigador del sistema de Educación Superior.</li>
                <li>Demostrar un rendimiento académico en la titulación, cuyo promedio sea de 30 o mayor.</li>
                <li>Debes haber aprobado o estar matriculado en el componente académico de Gestión Productiva
                    3.
                </li>
                <li>Debes ser un alumno con perfil de investigador, liderazgo, vocación de servicio, iniciativa,
                    compromiso y mantener buenas relaciones interpersonales.</li>
                <li>No registrar ninguna sanción disciplinaria.</li>
            </ul>
            <h3>Reconocimiento</h3>
            <p>El estudiante que sea seleccionado para colaborar como Ayudante de Cátedra gozará de una
                beca de Responsabilidad Universitaria, cuyo porcentaje va del 40% al 70%, la misma que
                será acreditada en el semestre siguiente previa evaluación positiva de su desempeño como
                ayudante de cátedra.</p>
            <hr>
            <h4>¿Quieres fortalecer el vinculo docente - estudiante?</h4>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <a class="enlace" href="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/ANEXO%201%20PLANIFICACIO%CC%81N%20DE%20ACTIVIDADES%20(1).docx">
                        <i class="fas fa-file-word"></i>Planificación de actividades de Ayudante de Cátedra (Anexo I)
                    </a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <a class="enlace" href="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/ANEXO%202%20EVALUACIO%CC%81N%20DE%20DESEMPEN%CC%83O%20DEL%20AYUDANTE%20DE%20CA%CC%81TEDRA(1).docx">
                        <i class="fas fa-file-word"></i>Planificación de actividades de Ayudante de Cátedra (Anexo 2)
                    </a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <a class="enlace" target="_blank" href="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/Proyecto%20ayudante%20de%20ca%CC%81tedra%20abril-agosto%202018.pdf">
                        <i class="fas fa-file-pdf"></i>Conoce el proyecto completo
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/variables";
h4 {
  text-align: center !important;
}
.enlace{
    text-align: center;
}
.parallax {
  height: 100vh;
  background-color: $color-primary;
  background-image: url("~/static/img/banner-ayudante-catedra.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>





