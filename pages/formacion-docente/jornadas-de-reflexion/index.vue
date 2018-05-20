<template>
<div>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <input type="radio" name="1" id="op">
                </div>
                <div class="col-md-8">
                    <h1>Titulo</h1>
                </div>
            </div>
        </div>
    </section>
    <section id="anteriores">
        <div class="container">
            <h2>Jornadas de reflexión</h2>
            <p>
                Consolidadas como instancias de diálogo, análisis y reflexión, las Jornadas de Reflexión son encuentros centrados en temas en los que se conjugan ciencia y filosofía institucional, están dirigidos al personal docente y administrativo, contando con una parte académica y otra humanística.
            </p>
            <p>
                En lo que tiene que ver a las Jornadas Académicas, se generan espacios durante cada ciclo académico, donde los docentes de todas las áreas hacen una reflexión académica para mejorar procesos y elaborar propuestas que optimicen la educación. Bajo la dirección del Vicerrectorado Académico en un trabajo compartido con los otros Vicerrectorados y Direcciones Generales que forman parte de la universidad, los participantes comparten valiosas experiencias, exponen temas relacionados con innovaciones aplicadas en sus materias, ensayos, investigaciones aplicadas, reflexiones sobre su profesión y herramientas pedagógicas. Además estos encuentros son aprovechados para difundir información académica actual y de interés a la comunidad docente de la institución.
            </p>
            <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores'}" class="btn btn-large btn-inverse">Jornadas Anteriores</nuxt-link>
        </div>
    </section>
</div>
</template>


<style lang="scss" scoped>
@import "assets/variables";

#anteriores {
  background-color: $color-primary;
  color: $color-font-primary;
}
</style>

    