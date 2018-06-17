<template>
  <div>
  <p>Click the "Try it" button to toggle between hiding and showing the DIV element:</p>

<button @click="myFunction">Try it</button>

<div id="myDIV">
This is my DIV element.
</div>

<p><b>Note:</b> The element will not take up any space when the display property set to "none".</p>

  </div>
</template>
<style lang="scss" scoped>
#myDIV {
    width: 100%;
    padding: 50px 0;
    text-align: center;
    background-color: lightblue;
    margin-top: 20px;
    display: none;
}
</style>
<script>
export default {
  methods:{
  myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
  }
  };
</script>