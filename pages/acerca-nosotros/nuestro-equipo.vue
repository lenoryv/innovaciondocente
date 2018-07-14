<template>
    <section>
        <div class="container we-team">
            <div class="row">
                <img src="~/static/sello.png"
                     alt="logo">
                <h1>ASCENDERE PROJECT</h1>
            </div>
        </div>
        <div class="background"
             id="about-ascendere">
        </div>
        <section class="container">
            <div class="section-text">
                <h2>Innovando Cambios</h2>
                <p>
                    La Universidad Técnica Particular de Loja fue fundada por la Asociación Marista Ecuatoriana (AME) el
                    3 de mayo de 1971. Oficialmente reconocida por el Estado Ecuatoriano bajo el Decreto
                    Ejecutivo 646, publicado en el Registro Oficial Nro. 217 del 5 de mayo de 1971, con
                    el cual se constituye como persona jurídica autónoma al amparo del convenio de “Modus
                    Vivendi” celebrado entre la Santa Sede y el Ecuador, teniendo en cuenta las normas
                    de la Iglesia en su organización y gobierno.
                </p>
            </div>
            <section class="row">
                <div class="col-lg-4 col-md-6">
                    <figure class="column-img">
                        <img src="https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c508869d7645131d98c453dd9ce0ae6&auto=format&fit=crop&w=620&q=80"
                    
                             alt="img-avatar" />
                        <figcaption>
                            <h5>Dirección de Innovación, Formación y Evaluación Docente</h5>
                            <h3>PhD. María Isabel Loaiza</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6">
                    <figure class="column-img">
                        <img src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad57f7ca5832f3f72ee2c1c243c72f5c&auto=format&fit=crop&w=750&q=80"
                    
                             alt="img-avatar" />
                        <figcaption>
                            <h5>Formación Docente</h5>
                            <h3>Ing. Nuve Briceño</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6">
                    <figure class="column-img">
                        <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-0.3.5&s=091e1246b8fbf6ad4a6b7df9b98454c1&auto=format&fit=crop&w=334&q=80"
                    
                             alt="img-avatar" />
                        <figcaption>
                            <h5>Innovación Docente</h5>
                            <h3>Mgtr. Angela Salazar</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-6">
                    <figure class="column-img">
                        <img src="https://images.unsplash.com/photo-1490905461158-067f4895ea9d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec12d476aa884c9ff23d2169cc359a09&auto=format&fit=crop&w=752&q=80"
                    
                             alt="img-avatar" />
                        <figcaption>
                            <h5>Evaluación Docente</h5>
                            <h3>Mgtr. Lourdes Cueva</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
            </section>
            <div class="section-text">
                <h2>InDevelomenpt Company</h2>
                <p>
                    La Universidad Técnica Particular de Loja fue fundada por la Asociación Marista Ecuatoriana (AME) el
                    3 de mayo de 1971. Oficialmente reconocida por el Estado Ecuatoriano bajo el Decreto
                    Ejecutivo 646, publicado en el Registro Oficial Nro. 217 del 5 de mayo de 1971, con
                    el cual se constituye como persona jurídica autónoma al amparo del convenio de “Modus
                    Vivendi” celebrado entre la Santa Sede y el Ecuador, teniendo en cuenta las normas
                    de la Iglesia en su organización y gobierno.
                </p>
            </div>
            <div>
                <figure class="column-img">
                    <img src="https://images.unsplash.com/photo-1520127877998-122c33e8eb38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a45ca2052a4522614afac29c1d5ed5c&auto=format&fit=crop&w=749&q=80"
                
                         alt="img-avatar" />
                    <figcaption>
                        <h3>With
                            <a class="footer-heart"
                               href=""
                               title="With love by InDevelopmentCompany">
                                <i class="fas fa-heart" />
                            </a> by InDevelopmentCompany</h3>
                    </figcaption>
                    <a href="#"></a>
                </figure>
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
@import "assets/variables";
p {
  column-count: 2;
  column-gap: 2.25rem;
  line-height: 2.25;
}
section {
  padding-top: 25px;
  padding-bottom: 0;
}
.background {
  background: url("../../static/IMG_8386.jpg") center center / cover no-repeat;
  z-index: 0;
  padding: 0;
  min-height: 60vh;
  background-color: $color-primary;
  background-attachment: fixed;
}
.section-text {
  padding: 1rem 8rem 1rem 8rem;
}
.we-team {
  text-align: center;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  img {
    height: 150px;
    width: 150px;
  }
  h1 {
    margin: 0;
    padding: 1rem;
    border-left: 2px $color-warning solid;
  }
}
.row {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  align-content: center;
}
figure.column-img {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
  color: $color-primary;
  text-align: center;
  -webkit-perspective: 50em;
  perspective: 50em;
  img {
    min-width: 100%;
    min-height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
  figcaption {
    top: 50%;
    left: 20px;
    right: 20px;
    padding: 0.8rem;
    position: absolute;
    opacity: 0;
    z-index: 1;
  }
  h3,
  h5 {
    margin: 0;
  }
  h3 {
    font-weight: 600;
  }
  h5 {
    font-weight: 400;
  }
  &:after {
    background-color: #ffffff;
    position: absolute;
    content: "";
    display: block;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    opacity: 0;
  }
  a {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  &:hover figcaption {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  &:hover:after {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 0.9;
  }
}
@media (max-width: 992px) {
  p {
    column-count: 1;
  }
  .section-text {
    padding: 1rem 1rem 1rem 1rem;
  }
}
</style>