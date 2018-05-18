<template>
    <div>
        <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <a href="#">Actual</a>
                    <a href="#">Abril-Agosto 2018</a>
                    <a href="#">Octubre 2017-Febrero 2018</a>
                    <a href="#">Abril-Agosto 2017</a>
                    <button class="btn btn-large" @click="closeNav()">Cerrar</button>
                </div>

    
    <section id="main">
        <div class="container">
                
                    <button class="btn" @click="openNav()">Otras Convocatorias</button>
                <div >
                        <h1>Convocatoria de Proyectos de Innovación Docente</h1>
                        
                    <div class="embed-container">
                            <embed name="plugin" id="plugin" src="https://innovaciondocente.utpl.edu.ec/sites/default/files/files/Instructivo_validacio%CC%81n_formacio%CC%81n_SIAC(1).pdf" type="application/pdf" internalinstanceid="423">
                    </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
export default {
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    },

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.body.style.backgroundColor = "white";
    }
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";
.sidenav {
  height: 100%;
  width: 0; 
  position: fixed; 
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: $color-primary-light;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: $color-font-primary;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: $color-warning;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
.embed-container {
  position: relative;
  padding-bottom: 100%;
  height: 0;
  overflow: hidden;
}

.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
