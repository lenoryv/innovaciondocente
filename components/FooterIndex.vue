<template>
    <footer class="container">
        <div class="footer-commo container">
            <div class="row">
                <div class="col-md-2 footer-outro-icon">
                    <img :src="require('@/static/icon.png')"
                         alt="icon-innova">
                </div>
                <div class="col-md-4">
                    <div class="list-vertical">
                        <h3>Acerca de Nosotros</h3>
                        <ul>
                            <li>Quienes Somos</li>
                            <li>Nuestro Equipo</li>
                            <li>Nuestros Servicios</li>
                        </ul>
                    </div>
                    <div class="col-md-12 footer-icons networks">
                        <ul class="social-networks square spin-icon">
                            <li>
                                <a href=""
                                   class="fab fa-facebook-f"></a>
                            </li>
                            <li>
                                <a href=""
                                   class="fab fa-twitter"></a>
                            </li>
                            <li>
                                <a href=""
                                   class="fab fa-youtube"></a>
                            </li>
                            <li>
                                <a href=""
                                   class="fab fa-instagram"></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="list-vertical">
                        <h3>Contactos</h3>
                        <ul>
                            <li>Teléfono: 370 1444 – Ext. 2316</li>
                            <li>Correo electrónico:
                                <a href="mailto:vacademico@utpl.edu.ec">vacademico@utpl.edu.ec</a>
                            </li>
                            <li>Campus San Cayetano Alto.</li>
                            <li>Loja – Ecuador.</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
        <div class="col-md-12 footer-outro container">
            <ul class="mb">
                <li class="mr">© 2018
                    <a href="https://www.utpl.edu.ec/">UTPL</a>
                </li>
                <li>With
                    <a class="footer-heart"
                       href=""
                       title="With love by InDevelopmentCompany">
                        <i class="fas fa-heart" />
                    </a>by InDevelopmentCompany
                </li>
            </ul>
        </div>
    </footer>

</template>

<style lang="scss">
@import "assets/variables";
footer {
  padding: 2rem;
  .footer-outro {
    margin-top: 1rem;
    margin-bottom: 1rem;
    ul {
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      padding-left: 0;
      margin-top: 0.2rem;
      margin-bottom: 0;
      justify-content: space-between !important;
      a {
        margin-left: 0.2rem;
        margin-right: 0.3rem;
        color: $color-primary;
      }
      li {
        font-size: 80%;
      }
    }
  }
  .list-vertical {
    padding: 10px;
    li {
      list-style: none;
      padding: 0;
      border: 0;
      font-size: 90%;
      vertical-align: baseline;
      margin: 0 0 0 10px;
    }
    h3 {
      font-weight: bold;
      text-align: left !important;
    }
  }
}

.social-networks {
  li {
    display: inline-block;
    padding: 1px;
  }
  a {
    display: block;
    position: relative;
    width: 35px;
    height: 35px;
    font-size: 0;
    line-height: 0;
    text-align: center;
    text-decoration: none;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      margin-top: -30%;
      margin-left: -50%;
      border-radius: 100px;
      background-color: #1f2027;
      transition: all 400ms;
    }

    &:after {
      position: relative;
      display: block;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      color: #fff;
      font-size: 15px;
      line-height: 50px;
    }

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  &.spin-icon a:hover:after,
  &.spin-icon a:focus:after {
    transition: transform 0.4s ease-out;
    transform: rotateZ(360deg);
  }

  &.square a:hover:before,
  &.square a:focus:before {
    border-radius: 0;
  }

  $networks: facebook-f "\f39e" #3b5998, twitter "\f099" #00b0ed,
    github "\eab1" #4183c4, instagram "\f16d" #3f729b, youtube "\f167" #cc2127;

  @each $network in $networks {
    .fa-#{nth($network, 1)} {
      &:after {
        content: "#{nth($network, 2)}";
      }

      &:hover:before,
      &:focus:before {
        background: nth($network, 3);
      }
    }
  }
}

.footer-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

footer ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding-left: 10px;
  margin-top: 0;
  margin-right: 16px;
  margin-bottom: 0;
  color: $color-font-light;
}
footer li {
  margin-left: 1rem;
}
</style>

