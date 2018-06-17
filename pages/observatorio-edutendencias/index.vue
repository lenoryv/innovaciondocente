<template>
<div>
    <div class="container-fluid">
    
        <div class="row">
            <div class="col-lg-3">
                <div class="overlay"></div>
                <img src="@/static/img/aula.jpg" alt="aula-divertida" class="image">
                <div class="middle">
                    <a href="https://www.youtube.com/watch?v=_GaXvp4EB-E" target="_blank" class="btn btn-outline-primary">Ver mas</a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="overlay"></div>
                <img src="@/static/img/docente2.jpg" alt="docentes-futuro" class="image">
                <div class="middle">
                     <a href="https://www.youtube.com/watch?v=_GaXvp4EB-E" target="_blank" class="btn btn-outline-primary">Ver mas</a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="overlay"></div>
                <img src="@/static/img/podcast.jpg" alt="podcast" class="image">
                <div class="middle">
                     <a href="https://www.youtube.com/watch?v=_GaXvp4EB-E" target="_blank" class="btn btn-outline-primary">Ver mas</a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="overlay"></div>
                <img src="@/static/img/videos.jpg" alt="videos" class="image">
                <div class="middle">
                     <a href="https://www.youtube.com/watch?v=_GaXvp4EB-E" target="_blank" class="btn btn-outline-primary">Ver mas</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@import "assets/variables";

.col-lg-3 {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
}

.middle {
  transition: .5s ease;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background: black;
}

.col-lg-3:hover .overlay {
  opacity: 0.9;
}
.col-lg-3:hover .middle {
  display: block;
}
.image {
  width: 100%;
  height: 100%;
}
.menu{
    opacity: 1;
}
</style>



