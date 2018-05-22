<template>
    <div>
        <div class="embed-container">
            <embed name="plugin" id="plugin" :src="pdfs[0].url" type="application/pdf" internalinstanceid="423">
        </div> 
    </div>
</template>

<script>
import pdfs from "@/static/data/convocatorias.json"
export default {
    asyncData({params})
    {return{pdfs}}
}
</script>


