<template>
  <div id="app">
    <el-row></el-row>
  </div>
</template>

<script>
import ElRow from '@element/Row.vue';

export default {
  name: 'App',
  components: {
    ElRow,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
