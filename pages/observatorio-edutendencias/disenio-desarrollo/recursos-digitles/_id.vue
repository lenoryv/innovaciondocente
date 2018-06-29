<template>
  <div>
    {{$router.params.id}}
  <pre>{{recursos}}</pre>
  </div>
</template>
<script>
import data from"@/static/data/recursos-digitales.json"
export default { 
  asyncData({params}){
    return{recursos:data[params.id]}
  }
};
</script>
