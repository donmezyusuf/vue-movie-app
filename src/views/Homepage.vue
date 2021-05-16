<template>
  <div class="Container">

    {{this.message}}
  </div>
</template>

<script>
export default {
  name: "Homepage",

};
</script>

<style scoped>
.Container{
  margin: auto;
  display: flex;
  background-color: red;
  min-width: 1200px;
  width: 85vw;
  min-height: 100vh;
}

</style>
