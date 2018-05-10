<template>
  <div>
      <h2>¡Potencia tu formación docente!</h2>
      <p>
          Mes a mes, el Plan de Formación Docente Pedagógica ofrece cursos al profesorado de la UTPL para la mejora de su formación académica. Te presentamos los testimonios de los expertos que han visitado el Campus UTPL para trabajar en temáticas que benefician la preparación de los docentes.
      </p>
      <div>
          <div v-for="(curso, index) in cursos" :key="index">
              <h3>{{curso.title}}</h3>
              <p>{{curso.desc}}</p>
              <div class="embed-container">
                <iframe :src="curso.vid" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
              <hr>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      cursos: [
        {
          title: "#5TipsPara: enseñanza libre de improvisación",
          desc:
            "Ramón Ferreiro, experto que ha colaborado en la UTPL con 2 ediciones del curso Aprendizaje Colaborativo - Método ELI (Enseñanza Libre de Improvisación) nos da 5 tips para una enseñanza planificada que permita obtener buenos resultados en la formación universitaria.",
          vid: "https://www.youtube.com/embed/0_FzDP1fkis"
        },
        {
          title: "#mannequinchallenge en la UTPL",
          desc:
            "Los docentes participantes del curso Aprendizaje Cooperativo - Método ELI, dictado por el Dr. Ramón Ferreiro, se atrevieron a participar del #mannequinchallenge, un reto que pretende retratar de forma diferente, algunas experiencias de colectivos que se reunen por diversos temas. En este caso, la idea fue dar un giro a la experiencia de formación docente, que enmarcó la  enseñanza libre de improvisación.",
          vid: "https://www.youtube.com/embed/vJUHtF8Tag4"
        },
        {
          title: "Café Científico: Energía e Internet",
          desc:
            'Docentes de la UTPL, Universidad Nacional de Loja (UNL) y administrativos gubernamentales participaron del tema: "Energías Renovables en la Región Sur del Ecuador",  Jorge Maldonado docente investigador de Electroníca y Telecomunicaciones- UTPL, Carlos Samaniego docente especializando en Deficiencia Energética - UNL y Edith Carrión Jefe de la Central Eólica Villonaco compartieron sus posturas en torno a la generación de energías a través de recursos renovables.',
          vid: "https://www.youtube.com/embed/sP8i6QZcOXg"
        },
        {
          title: "#5TipsPara: Una buena práctica docente",
          desc:
            "Ramón Ferreiro Profesor de Nova Southeastern University, nos habla sobre 5 tips para una buena práctica docente y nos señala la importancia de desarrollar competencias como profesor universitario. ",
          vid: "https://www.youtube.com/embed/og6V_b1mwLo"
        },
        {
          title: "#5TipsPara: Introducir Tecnologías en el Aula",
          desc:
            "Carmen Lloret Catalá experta en tecnologías educativas y pedagogías innovadoras nos comparte 5 tips para una educación más interactiva en el aula.",
          vid: "https://www.youtube.com/embed/ktndeWADkhA"
        },
        {
          title:
            "Café Científico: Química y propiedades de las plantas medicinales",
          desc:
            "Docentes del departamento de química, estudiantes y acompañantes permanentes fueron quienes con una taza de café en la mano abordaron temas en fotoquímica desde distintas perspectivas.",
          vid: "https://www.youtube.com/embed/Fl6jPjHGOhA"
        },
        {
          title: "Café Científico: El prisma de la lectura",
          desc:
            "El prisma de la lectura un evento en el que docentes y profesionales dialogaron y problematizaron la temática, Carlos María Vacacela  señala que el tema de la lectura puede ser abordada por diferentes perspectivas, por otro lado Sandra Ochoa docente del Colegio San Gerardo nos habla de la importancia que tiene la familia para fomentar los habitos de lectura los cuales mejoraran con el paso del tiempo para así tener jovenes verdaderamente críticos y refelxivos.",
          vid: "https://www.youtube.com/embed/0_FzDP1fkis"
        },
        {
          title: "#5TipsPara: Aprendizaje activo y uso de rea´s",
          desc:
            "María Soledad Ramirez profesora del TEC de Monterrey comparte con los docentes de la UTPL el aprendizaje y el uso de las rea's y señala que un docente innovador es aquel que está en toda la capacidad de generar un cambio con su conocimiento y con su corazón para modificar y mejorar los procesos educativos.",
          vid: "https://www.youtube.com/embed/k4LKPLdhlW8"
        },
        {
          title:
            "Curso: Metodologías actividades en los procesos de enseñanza y aprendizaje",
          desc:
            "Paulino Murillo, comparte los objetivos de su curso dentro del plan de formación, señala que los problemas educativos se resuelven en cooperación: docente-estudiante-institución, y que el profesor debe organizar una propuesta innovadora de metodología activa que le permita comprender y mejorar el proceso de enseñanza aprendizaje con convicción, conocimiento del tema y con valentía.",
          vid: "https://www.youtube.com/embed/T-18X75R7RM"
        },
        {
          title: "Curso: Innovación docente en el aula universitaria",
          desc:
            'Carlos Marcelo, profesor de la Universidad de Sevilla, estuvo en la Universidad para compartir su experiencia de metodologías de innovación docente. En el video define a los docentes innovadores y explica que la universidad debe crear condiciones que provoquen cambios significativos. "Los cambios con éxito en Europa son aquellos apoyados por una política, y que han dotado a la docencia de la importancia necesario que muchas veces ha quedado oculta" expresa.',
          vid: "https://www.youtube.com/embed/DIRGvvt-jIY"
        },
        {
          title:
            "Curso: La construcción de la visibilidad científica nacional e internacional del investigador. Aplicaciones web y usos.",
          desc:
            "El Ph. D. Santiago Mengual visitó la Universidad para compartir con los docentes acerca de la importancia de las visibilidad de la investigación científica; señala que esto debe ser una política de dos posturas, tanto desde los docentes como desde la dirección de la institución.",
          vid: "https://www.youtube.com/embed/ybNoMSvU6RM"
        },
        {
          title:
            "Curso: Orientaciones para el diseño de administración de evaluaciones",
          desc:
            "José Daniel Bogoya, experto en la evaluación de la calidad educativa en en latinoamerica, compartió su experiencia con docentes de la UTPL respecto de la evaluación de aprendizajes y metodologías innovadoras para la inclusión de los estudiantes en educación superior.",
          vid: "https://www.youtube.com/embed/Z2rXvmU5WMo"
        },
        {
          title:
            "Curso: Elaboración de rúbricas y su aplicación en la Evaluación",
          desc:
            '"Cuándo no somos transparentes en los criterios de evaluación, disminuimos el éxito de empatía con nuestros estudiantes".\nNos visitó la Dra. Beatríz Tancredi, consultora académica, experta en evaluación de aprendizajes. En este resumen nos habla sobre la valoración personal de los estudiantes para que ellos sepan en que niveles serán evaluados, a través de la aplicación de rúbricas que generan transparencia y perfeccionan el aprendizaje.',
          vid: "https://www.youtube.com/embed/iSITsgO3Yyo"
        },
        {
          title: "Curso: Aprendizaje Activo",
          desc:
            "María Soledad Ramírez, profesora investigadora titular de la Escuela de Educación, Humanidades y Ciencias Sociales en y docente del Tecnológico de Monterrey, visitó la UTPL para dirigir el curso que tenía como objetivo diseñar una experiencia formativa con aprendizaje activo, a partir de trabajar en taller con metodologías activas de enseñanza y aprendizaje, así como tecnologías, recursos y evaluaciones, acorde con los objetivos pedagógicos los planes académicos, con el fin de que facilite la implementación de prácticas de aprendizaje activo dentro de su organización.",
          vid: "https://www.youtube.com/embed/XqddPbJjcl8"
        },
        {
          title: "Curso: Utilización de REA's",
          desc:
            "María Soledad Ramírez, también nos habla sobre la utilización de los recursos educativos abiertas, las TIC's y la potenciación de la relación docente-estudiante.",
          vid: "https://www.youtube.com/embed/b5luLVJe89U"
        },
        {
          title:
            "Curso: Aprender a cooperar en red como proyecto educativo digital",
          desc:
            "El Dr. Cristóbal Suárez Guerrero, docente de la Universidad de Valencia (España), visitó la UTPL para dirigir el curso que ayudó a comprender a los docentes que la cooperación es una forma de coordinación humana que se extiende en Internet y que puede ser esencial en la educación superior. Además, dentro de las temáticas se identificó la importancia de la necesidad educativa de Internet a la luz de las posibilidades cooperativas.",
          vid: "https://www.youtube.com/embed/W_zHA6noPbU"
        },
        {
          title: "Curso: Métodos de enseñaza para la innovación emprendedora",
          desc:
            "Liderar un proyecto propio de desarrollo personal/profesional, comprometido con el aprendizaje, también es importante dentro del proceso de enseñanza. Es por esto que el Dr. Francisco Javier Ruiz Fernández, docente de la Universidad de Bilbao (España) compartió con los docentes de la UTPL diferentes estrategias para cumplir este objetivo.",
          vid: "https://www.youtube.com/embed/hGN7bD8rwLE"
        },
        {
          title: "Curso: Métodología de aprendizaje experiencial ",
          desc:
            "La Dra. Concepción Yániz, de la Universidad de Bilbao (España), compartió con los docentes de la UTPL algunos métodos para hacer del aprendizaje un espacio que posibilite la vivencia y momentos de reflexión para convertirlo en expereciencia. El aprendizaje experencial apunta a ofrecer oportunidades individuales para internalizar ideas que provienen de la vivencia. ",
          vid: "https://www.youtube.com/embed/5RIjsXSEO-Q"
        },
        {
          title:
            "Seminario: Evaluación de aprendizajes (valor académico agregado) ",
          desc:
            "En días anteriores, el Ph.D. José Daniel Bogoya, de la Universidad Nacional de Colombia, visitó nuestro campus para dictar a los coordinadores de todas las titulaciones y a los responsables de sección, un taller sobre la importancia del valor académico agregado para lograr niveles destacados de calidad de educación, además del impulso a la equidad intelectual de los estudiantes.",
          vid: "https://www.youtube.com/embed/rlkUyZR-GGc"
        },
        {
          title: "Curso: Liderazgo pedagógico centrado en el aprendizaje",
          desc:
            "Este curso estuvo a cargo del Dr. Paulino Murillo, catedrático de la Universidad de Sevilla - España. En el mismo el profesorado de la UTPL aclaró los conceptos sobre autoridad, liderazgo y poder. Estudió la evolución de los enfoques sobre liderazgo y los estilos de liderazgo y su relación con los proceso de cambio. Además, las fases y pasos para el diseño y desarrollo de procesos de mejora pedagógica fueron otra temática de estudio. ",
          vid: "https://www.youtube.com/embed/MEhY4v-wu2k"
        },
        {
          title: "Curso: Diseñar actividades de aprendizaje con tecnologías ",
          desc:
            "Los contenidos de este curso fueron dictados por el Dr. Carlos Marcelo García, catedrático de la Universidad de Sevilla - España. En esta actividad, los profesores estudiaron las tecnologías como recursos y medios para el aprendizaje; además del diseño de la enseñanza en la universidad para un aprendizaje autónomo. Los tipos de actividades de aprendizaje en la enseñanza universitaria tambien fueron parte de la planificación.",
          vid: "https://www.youtube.com/embed/b5Th9agPZSY"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}
.embed-container iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
