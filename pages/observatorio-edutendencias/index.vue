<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <nuxt-link tag="div"
                   style="cursor:pointer"
                   class="col-lg-3 col-md-6 obTec obTec-1 img-container"
                   :to="{}">
          <div class="title">
            <h2>AULA DIVERTIDA</h2>
          </div>
          <div class="overlay"></div>
          <div class="nav-img">
          </div>
        </nuxt-link>
        <nuxt-link tag="div"
                   style="cursor:pointer"
                   class="col-lg-3 col-md-6 obTec obTec-2 img-container"
                   :to="{}">
          <div class="title">
            <h2>DOCENTES DEL FUTURO</h2>
          </div>
          <div class="overlay"></div>
          <div class="nav-img">
          </div>
        </nuxt-link>
        <nuxt-link tag="div"
                   style="cursor:pointer"
                   class="col-lg-3 col-md-6 obTec obTec-3 img-container"
                   :to="{}">
          <div class="title">
            <h2>PODCAST</h2>
          </div>
          <div class="overlay"></div>
          <div class="nav-img">
          </div>
        </nuxt-link>
        <nuxt-link tag="div"
                   style="cursor:pointer"
                   class="col-lg-3 col-md-6 obTec obTec-4 img-container"
                   :to="{}">
          <div class="title">
            <h2>VIDEOS</h2>
          </div>
          <div class="overlay"></div>
          <div class="nav-img">
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/variables";
@import "assets/style";

h2 {
  color: $col-mustard-light;
}
.obTec-1 {
  background-image: url("/static/img/fun.jpg");
}
.obTec-2 {
  background-image: url("/static/img/docfut.jpg");
}
.obTec-3 {
  background-image: url("/static/img/pod.jpg");
}
.obTec-4 {
  background-image: url("/static/img/video.jpg");
}
.obTec {
  background-position: center center;
  text-align: center;
  height: 100vh;
  -ms-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  &:hover {
    background: $color-warning !important;
    h2 {
      color: $color-primary;
    }
  }
  img {
    display: none;
    position: absolute;
  }
}
.img-container {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>



