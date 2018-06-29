<template>
<div>
    <div class="container-fluid">
    
        <div class="row">
            <div class="col-lg-3">
                <div class="overlay"></div>
                <img src="@/static/img/fun.jpg" alt="aula-divertida" class="image">
                <div class="middle">
                    <div>
                    <h2 class="text">AULA DIVERTIDA</h2>
                </div>
                    <a href="https://www.youtube.com/watch?v=_GaXvp4EB-E" target="_blank" class="btn btn-outline-dark">Ver mas</a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="overlay"></div>
                <img src="@/static/img/docfut.jpg" alt="docentes-futuro" class="image">
                <div class="middle">
                    <div>
                    <h2 class="text">DOCENTES DEL FUTURO</h2>
                </div>
                     <a href="https://www.youtube.com/watch?v=_GaXvp4EB-E" target="_blank" class="btn btn-outline-dark">Ver mas</a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="overlay"></div>
                <img src="@/static/img/pod.jpg" alt="podcast" class="image">
                <div class="middle">
                    <div>
                    <h2 class="text">PODCAST</h2>
                </div>
                     <a href="https://www.youtube.com/watch?v=_GaXvp4EB-E" target="_blank" class="btn btn-outline-dark">Ver mas</a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="overlay"></div>
                <img src="@/static/img/video.jpg" alt="videos" class="image">
                <div class="middle">
                    <div>
                    <h2 class="text">VIDEOS</h2>
                </div>
                     <a href="https://www.youtube.com/watch?v=_GaXvp4EB-E" target="_blank" class="btn btn-outline-dark">Ver mas</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@import "assets/variables";
@import "assets/style";

.col-lg-3 {
  padding: 0;
  margin: 0;
  height: 87vh;
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
.text{
    color: $col-mustard-light;
}

.col-lg-3:hover .overlay {
  opacity: 0.4;
}
.col-lg-3:hover .middle {
  display: block;
}
.image {

  height: 100%;
}
.menu{
    opacity: 1;
}
</style>



