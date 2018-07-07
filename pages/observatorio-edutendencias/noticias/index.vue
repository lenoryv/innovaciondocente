<template>
  <section>
    <h1>
      Noticias
    </h1>
    <div class="container">
      <div class="content"
           v-for="(d, i) in tempData"
           :key="i"
           :style="'background-image: url('+d.img+');'">
        <div class="overlay">
          <div class="data">
            <h3>Titulo -
              <span>{{i}}</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero sint repellendus animi ipsa facilis
              harum tenetur voluptatibus consequatur, quam itaque commodi quisquam necessitatibus, ad
              iusto architecto veritatis fugiat? Est.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData() {
    let tempData = [
      {
        img:
          "https://images.unsplash.com/photo-1513302052104-b818ed7324b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c1680610529d11d99aa771f7c53b5a5&auto=format&fit=crop&w=1350&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1495245495572-e43e6db5a478?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ccda7719bcd58c3c12d1695ad7557223&auto=format&fit=crop&w=1350&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6da2c9e985e56b6a43209d7b1d46c8ca&auto=format&fit=crop&w=2201&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68949c212865a1a514722f8bcaa364e9&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68a5d019fe3391a80d6c50ee66560d48&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06b711bca560770a868b2b830599c277&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a21f3a5b9d432b7fc04227e25769c37a&auto=format&fit=crop&w=2134&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=beb0f979ed2a7da134fb95a2ae6290c3&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e274a5d7028b3221db5de6cf0b39db6c&auto=format&fit=crop&w=634&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1485736982040-28ae1d52881d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5d770a8255d450eb36829d278e2b7f7&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1486028502991-23bca1717e62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a617c7f983a2785d877e4772d9d73c&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d19695422a0150c535cd6963fadae83&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1513302052104-b818ed7324b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c1680610529d11d99aa771f7c53b5a5&auto=format&fit=crop&w=1350&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1495245495572-e43e6db5a478?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ccda7719bcd58c3c12d1695ad7557223&auto=format&fit=crop&w=1350&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6da2c9e985e56b6a43209d7b1d46c8ca&auto=format&fit=crop&w=2201&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68949c212865a1a514722f8bcaa364e9&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68a5d019fe3391a80d6c50ee66560d48&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06b711bca560770a868b2b830599c277&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a21f3a5b9d432b7fc04227e25769c37a&auto=format&fit=crop&w=2134&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=beb0f979ed2a7da134fb95a2ae6290c3&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e274a5d7028b3221db5de6cf0b39db6c&auto=format&fit=crop&w=634&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1485736982040-28ae1d52881d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5d770a8255d450eb36829d278e2b7f7&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1486028502991-23bca1717e62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a617c7f983a2785d877e4772d9d73c&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d19695422a0150c535cd6963fadae83&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1513302052104-b818ed7324b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c1680610529d11d99aa771f7c53b5a5&auto=format&fit=crop&w=1350&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1495245495572-e43e6db5a478?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ccda7719bcd58c3c12d1695ad7557223&auto=format&fit=crop&w=1350&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6da2c9e985e56b6a43209d7b1d46c8ca&auto=format&fit=crop&w=2201&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68949c212865a1a514722f8bcaa364e9&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68a5d019fe3391a80d6c50ee66560d48&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06b711bca560770a868b2b830599c277&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a21f3a5b9d432b7fc04227e25769c37a&auto=format&fit=crop&w=2134&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=beb0f979ed2a7da134fb95a2ae6290c3&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e274a5d7028b3221db5de6cf0b39db6c&auto=format&fit=crop&w=634&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1485736982040-28ae1d52881d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5d770a8255d450eb36829d278e2b7f7&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1486028502991-23bca1717e62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a617c7f983a2785d877e4772d9d73c&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d19695422a0150c535cd6963fadae83&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1513302052104-b818ed7324b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c1680610529d11d99aa771f7c53b5a5&auto=format&fit=crop&w=1350&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1495245495572-e43e6db5a478?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ccda7719bcd58c3c12d1695ad7557223&auto=format&fit=crop&w=1350&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6da2c9e985e56b6a43209d7b1d46c8ca&auto=format&fit=crop&w=2201&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68949c212865a1a514722f8bcaa364e9&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68a5d019fe3391a80d6c50ee66560d48&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06b711bca560770a868b2b830599c277&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a21f3a5b9d432b7fc04227e25769c37a&auto=format&fit=crop&w=2134&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=beb0f979ed2a7da134fb95a2ae6290c3&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e274a5d7028b3221db5de6cf0b39db6c&auto=format&fit=crop&w=634&q=80"
      },
      {
        img:
          "https://images.unsplash.com/photo-1485736982040-28ae1d52881d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5d770a8255d450eb36829d278e2b7f7&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1486028502991-23bca1717e62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a617c7f983a2785d877e4772d9d73c&auto=format&fit=crop&w=500&q=60"
      },
      {
        img:
          "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d19695422a0150c535cd6963fadae83&auto=format&fit=crop&w=500&q=60"
      }
    ];
    return { tempData };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
$size: 250px;
.container {
  display: grid;
  grid-auto-rows: $size;
  grid-auto-flow: row dense;
  vertical-align: center;
  grid-template-columns: repeat(auto-fit, minmax($size, 1fr));
}
.content {
  background-color: $color-primary;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media (min-width: 768px) {
    &:nth-child(1) {
      grid-column-end: span 3;
      grid-row-end: span 2;
    }
    &:nth-child(5n + 0) {
      grid-column-end: span 2;
    }
    &:nth-child(11n + 0) {
      grid-row-end: span 2;
    }
  }
  &:hover {
    cursor: pointer;
    .overlay {
      background: rgba($color-dark, 0.7);
      .data {
        p {
          display: inline;
        }
      }
    }
  }
  .overlay {
    position: relative;
    height: 100%;
    width: 100%;
    color: $color-font-primary;
    background: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0),
      rgba(255, 0, 0, 0),
      $color-dark
    );
    .data {
      padding: 20px;
      position: absolute;
      bottom: 0px;
      max-width: 100%;
      max-height: 100%;
      overflow: auto;
      p {
        display: none;
      }
    }
  }
}
</style>
