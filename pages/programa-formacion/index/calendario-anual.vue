<template>
  <div>
    <h2>Calendario anual</h2>
    <p>
        El Programa de Formación se desarrolla por medio de la articulación de varios módulos, los cuales están integrados por itinerarios. En esta estructura se reflejen las líneas de capacitación de toda la comunidad universitaria. De acuerdo a los ejes formativos: académia e investigación, e identidad y excelencia, se podrán ordenar el tipo de capacitación requerida por módulos e itinerarios, garantizando que el alcance de una formación, cumpla los objetivos deseados.
    </p>
    <ul>
        <li v-for="(eje,i) in ejeFormativo" :key="i">
            {{eje.name}}
            <ul>
            <li v-for="(mod, j) in eje.modulos" :key="j">
                {{mod.name}}
                <ul>
                    <li v-for="(itinerario,k) in mod.itinerario" :key="k">
                    {{itinerario}}
                    </li>
                </ul>
            </li>
            </ul>
        </li>
    </ul>
    <p><a href="">Mira el calendario anual del Programa de Formación Docente 2018</a></p>
  </div>
</template>

<script>
import ejeFormativo from "@/static/data/eje-formativo.json";

export default {
  asyncData ({ params }) {
    return { ejeFormativo };
  }
};
</script>

