<template>
  <section class="container">
    <div class="row">
      <div class="col-md-4">
        <!--form-->
        <!--TODO: prevent default submit-->
        <h3>Valora la jornada:</h3>
        <div class="form-group">
          <label for="preg_1">1. En relación a la jornada ¿Qué valoración le daría?</label>
          <fieldset class="rating"
                    name="preg_1">
            <input type="radio"
                   id="preg_1_star5"
                   name="preg_1_rating"
                   v-model="forma.preg_1"
                   value="5" />
            <label class="full"
                   for="preg_1_star5"
                   title="Excelente"></label>
            <input type="radio"
                   id="preg_1_star4"
                   name="preg_1_rating"
                   v-model="forma.preg_1"
                   value="4" />
            <label class="full"
                   for="preg_1_star4"
                   title="Muy bueno"></label>
            <input type="radio"
                   id="preg_1_star3"
                   name="preg_1_rating"
                   v-model="forma.preg_1"
                   value="3" />
            <label class="full"
                   for="preg_1_star3"
                   title="Bueno"></label>
            <input type="radio"
                   id="preg_1_star2"
                   name="preg_1_rating"
                   v-model="forma.preg_1"
                   value="2" />
            <label class="full"
                   for="preg_1_star2"
                   title="Regular"></label>
            <input type="radio"
                   id="preg_1_star1"
                   name="preg_1_rating"
                   v-model="forma.preg_1"
                   value="1" />
            <label class="full"
                   for="preg_1_star1"
                   title="Malo"></label>
          </fieldset>
        </div>
        <div class="form-group">
          <label for="preg_2">2.1 ¿En que aspectos te resulta aplicable el tema?</label>
          <select v-model="forma.preg_2"
                  class="form-control"
                  id="preg_2"
                  name="preg_2"
                  v-validate="'required|not_in:Choose'">
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
          <span v-show="errors.has('preg_2')"
                class="invalid-feedback">Es requerido</span>
        </div>
        <div class="form-group">
          <label for="preg_2_1">2.1 ¿En que aspectos te resulta aplicable el tema?</label>
          <select v-model="forma.preg_2_1"
                  class="form-control"
                  id="preg_2_1"
                  name="preg_2_1"
                  v-validate="'required|not_in:Choose'">
            <option value="Aspectos de docencia">Aspectos de docencia</option>
            <option value="Aspectos de investigacion">Aspectos de investigacion</option>
            <option value="Aspectos de vinculación con la sociedad">Aspectos de vinculación con la sociedad</option>
          </select>
          <span v-show="errors.has('preg_2_1')"
                class="invalid-feedback">Es requerido</span>
        </div>
        <div class="form-group">
          <label>3. Valore los siguientes aspectos contemplados en la jornada:</label>
          <div class="form-group">
            <label for="preg_3_1">3.1 Valore el contenido, metodología y organización general de la Jornada
            </label>
            <fieldset class="rating"
                      name="preg_3_1">
              <input type="radio"
                     id="preg_3_1_star5"
                     name="preg_3_1_rating"
                     v-model="forma.preg_3_1"
                     value="5" />
              <label class="full"
                     for="preg_3_1_star5"
                     title="Excelente"></label>
              <input type="radio"
                     id="preg_3_1_star4"
                     name="preg_3_1_rating"
                     v-model="forma.preg_3_1"
                     value="4" />
              <label class="full"
                     for="preg_3_1_star4"
                     title="Muy bueno"></label>
              <input type="radio"
                     id="preg_3_1_star3"
                     name="preg_3_1_rating"
                     v-model="forma.preg_3_1"
                     value="3" />
              <label class="full"
                     for="preg_3_1_star3"
                     title="Bueno"></label>
              <input type="radio"
                     id="preg_3_1_star2"
                     name="preg_3_1_rating"
                     v-model="forma.preg_3_1"
                     value="2" />
              <label class="full"
                     for="preg_3_1_star2"
                     title="Regular"></label>
              <input type="radio"
                     id="preg_3_1_star1"
                     name="preg_3_1_rating"
                     v-model="forma.preg_3_1"
                     value="1" />
              <label class="full"
                     for="preg_3_1_star1"
                     title="Malo"></label>
            </fieldset>
          </div>
          <div class="form-group">
            <label for="preg_3_2">3.2 Valore el contenido y metodología de la charla magistral "Un docente aprendiendo"
            </label>
            <fieldset class="rating"
                      name="preg_3_2">
              <input type="radio"
                     id="preg_3_2_star5"
                     name="preg_3_2_rating"
                     v-model="forma.preg_3_2"
                     value="5" />
              <label class="full"
                     for="preg_3_2_star5"
                     title="Excelente"></label>
              <input type="radio"
                     id="preg_3_2_star4"
                     name="preg_3_2_rating"
                     v-model="forma.preg_3_2"
                     value="4" />
              <label class="full"
                     for="preg_3_2_star4"
                     title="Muy bueno"></label>
              <input type="radio"
                     id="preg_3_2_star3"
                     name="preg_3_2_rating"
                     v-model="forma.preg_3_2"
                     value="3" />
              <label class="full"
                     for="preg_3_2_star3"
                     title="Bueno"></label>
              <input type="radio"
                     id="preg_3_2_star2"
                     name="preg_3_2_rating"
                     v-model="forma.preg_3_2"
                     value="2" />
              <label class="full"
                     for="preg_3_2_star2"
                     title="Regular"></label>
              <input type="radio"
                     id="preg_3_2_star1"
                     name="preg_3_2_rating"
                     v-model="forma.preg_3_2"
                     value="1" />
              <label class="full"
                     for="preg_3_2_star1"
                     title="Malo"></label>
            </fieldset>
          </div>
          <div class="form-group">
            <label for="preg_3_3">3.3 Valore el taller práctico"ADN Innovador".</label>
            <fieldset class="rating"
                      name="preg_3_3">
              <input type="radio"
                     id="preg_3_3_star5"
                     name="preg_3_3_rating"
                     v-model="forma.preg_3_3"
                     value="5" />
              <label class="full"
                     for="preg_3_3_star5"
                     title="Excelente"></label>
              <input type="radio"
                     id="preg_3_3_star4"
                     name="preg_3_3_rating"
                     v-model="forma.preg_3_3"
                     value="4" />
              <label class="full"
                     for="preg_3_3_star4"
                     title="Muy bueno"></label>
              <input type="radio"
                     id="preg_3_3_star3"
                     name="preg_3_3_rating"
                     v-model="forma.preg_3_3"
                     value="3" />
              <label class="full"
                     for="preg_3_3_star3"
                     title="Bueno"></label>
              <input type="radio"
                     id="preg_3_3_star2"
                     name="preg_3_3_rating"
                     v-model="forma.preg_3_3"
                     value="2" />
              <label class="full"
                     for="preg_3_3_star2"
                     title="Regular"></label>
              <input type="radio"
                     id="preg_3_3_star1"
                     name="preg_3_3_rating"
                     v-model="forma.preg_3_3"
                     value="1" />
              <label class="full"
                     for="preg_3_3_star1"
                     title="Malo"></label>
            </fieldset>
          </div>
        </div>
        <div class="form-group">
          <label for="preg_4">4. ¿Que temáticas consideras importante que se traten en próximas jornadas?</label>
          <textarea v-model="forma.preg_4"
                    type="text"
                    name="preg_4"
                    class="form-control"
                    v-validate="'required'" />
          <span v-show="errors.has('preg_4')"
                class="invalid-feedback">Es requerido</span>
        </div>
        <div class="form-group">
          <label for="preg_5">5. Sugerencias</label>
          <textarea v-model="forma.preg_5"
                    type="text"
                    name="preg_5"
                    class="form-control" />
        </div>
        <button @click="validateBeforeSubmit"
                class="btn btn-primary btn-large">
          Valorar
        </button>
      </div>
      <div class="col-md-8">
        <div v-html="jornada.html"></div>
        <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores'}"
                   class="btn btn-large btn-outline-primary">
          Jornadas Anteriores
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import jornadas from "@/static/data/jornadas.json";
export default {
  asyncData({ params }) {
    let jornada = jornadas[0];
    return { jornada };
  },
  data() {
    let forma = {
      preg_1: 1,
      preg_2: "",
      preg_2_1: "",
      preg_3_1: 1,
      preg_3_2: 1,
      preg_3_3: 1,
      preg_4: "",
      preg_5: ""
    };
    return {
      forma
    };
  },
  methods: {
    validateBeforeSubmit(e) {
      this.$validator
        .validateAll()
        .then(x => {
          console.log(x);
        })
        .catch(e => {
          console.log(e);
        });
      console.log(this.forma);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
@import "assets/variables";
@import "assets/button";

.form-group {
  margin-bottom: 1rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: $color-font;
  background-color: $color-background;
  background-clip: padding-box;
  border: 1px solid $color-primary;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control:focus {
  color: $color-font;
  outline: 0;
  box-shadow: 0 0 0 0.2rem lighten($color: $color-primary-dark, $amount: 60);
}

.form-control::placeholder {
  color: $color-font-light;
}

.invalid-feedback {
  color: $color-danger;
}

fieldset,
label {
  margin: 0;
  padding: 0;
}
body {
  margin: 20px;
}
h1 {
  font-size: 1.5em;
  margin: 10px;
}

/****** Style Star Rating Widget *****/

.rating {
  border: none;
  float: left;
}

.rating > input {
  display: none;
}
.rating > label:before {
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > label {
  color: $color-font-light;
  float: right;
}

.rating > input:checked ~ label,
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: $color-primary;
}

.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
  color: lighten($color: $color-primary, $amount: 40);
}
</style>

    