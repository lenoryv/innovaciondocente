<template>
    <section>
        <div class="menu">
        <div id="mySidenav" class="sidenav">
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index'}" id="biologia">Biológica</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index'}" id="tecnica">Técnica</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index'}" id="social">Sociohumanística</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index'}" id="admin">Administrativa</nuxt-link>
        </div>
        </div>
        <div class="container">
            <div>
                <h1>¿Quieres implementar nuevas estrategias de enseñanza-aprendizaje, potenciando el uso creativo de diferentes herramientas dentro y fuera del aula?</h1> 
                <p>Semestralmente los profesores de Modalidad Presencial, Abierta y de Postgrados, presentan propuestas de Buenas Prácticas Docentes que potencian el uso creativo de diferentes herramientas dentro y fuera del aula. En este proceso los estudiantes participan activamente en la fase de aprendizaje, planificando, desarrollando y evaluando las competencias necesarias para contribuir con el perfil de egreso de la titulación e incorporando, además, en el desarrollo de la docencia problemas reales del entorno.</p>
                
                <nuxt-child/>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "assets/variables";
.menu{
    position: sticky;
}
#mySidenav a {
    position: absolute; 
    left: -150px; 
    transition: 0.3s; 
    padding: 15px; 
    width: 200px; 
    text-decoration: none; 
    font-size: 17px;
    color: $color-font-primary; 
    border-radius: 0 5px 5px 0;
    opacity: 0.85; 
    
}

#mySidenav a:hover {
    left: 0; 
}

#biologia {
    top: 80px;
    background-color: $color-success;
}

#tecnica {
    top: 140px;
    background-color: $color-tecnica; 
}

#social {
    top: 200px;
    background-color: $color-danger;
}

#admin {
    top: 260px;
    background-color: $color-administrativa 
}

</style>

