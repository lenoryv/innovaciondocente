<template>
    <section>
        <div class="menu">
        <div id="mySidenav" class="sidenav">
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:'1'}}" id="biologia">Biológica</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:'11'}}" id="tecnica">Técnica</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:'23'}}" id="social">Sociohumanística</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias-index-id',params:{id:'11'}}" id="admin">Administrativa</nuxt-link>
        </div>
        </div>
        <div class="container">
            <nuxt-child/>
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

