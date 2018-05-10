<template>
<div>
  <header class="header content">
    <div class="header-video">
        <video src="../static/example.mp4" autoplay loop></video>
    </div>
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1>The drive to study</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <a href="#" class="btn">Go to Course</a>
    </div>
  </header>
</div>  
</template>

<script>
export default {
  data() {
    return {
      name: "jahurtado"
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  overflow-x: hidden;
}

.header {
  height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
}

.content {
  max-width: 40rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
}

.header-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -9999;
}

.header-video video {
  min-width: 100%;
  min-height: 100%;
}

.header-overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(87, 84, 84, 0.61);
  z-index: 1;
  opacity: .85;
}

.header-content {
  z-index: 2;
}

.header-content h1 {
  font-size: 50px;
  margin-bottom: 0;
}

.header-content p {
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
}

@media (max-width: 960px) {
  .content {
    padding: 0 3rem 0 3rem;
  }
}
</style>