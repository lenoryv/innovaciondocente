<template>
  <div>
    <h1>Edutendencias</h1>
    <div class="container-fluid">
      <div class="row">
        <pre>
{{videos}}
              </pre>
        <!--
                <div div v-for="(video, key) in videos"
             :key="key" class="col-lg-3">
                    <div class="card card__one link">
                        <figure class="card__img">
                            <a :href="video.data.vid">
                            <img :src="video.data.img"
                                 alt=""></a>
                        </figure>
                        <div class="card__desc">
                            <h3>{{video.data.title}}</h3>
                            <p>{{video.data.desc|slice(0,80)}}</p>
                        </div>
                    </div>
                </div>
              -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/observatorio-edutendencias/tips-innovacion/tips.json"
    );
    return { videos: data };
  },
  computed: {
    videos() {
      let videos = [];
      for (const key in this.data) {
        videos.push({ key: key, data: this.data[key] });
      }
      videos.sort(function(a, b) {
        return ("" + b.key).localeCompare(a.key);
      });
      return videos;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
img {
  height: 150px !important;
}
p {
  font-size: 15px !important;
}
.card__desc {
  padding-bottom: 0px;
}
</style>
