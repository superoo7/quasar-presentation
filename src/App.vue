<template>
  <div id="app">
    script
    <div class="reveal">
      <div class="slides">
        <template v-for="(s, key) in slides">
          <component :is="s" :key="key" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/js/reveal";
import Vue from "vue";

const req = require.context("./slides/", true, /\.(js|vue)$/i);
const slides = req.keys().map(key => {
  const name = key.match(/\w+/)[0];
  return Vue.component(name, req(key).default);
});

export default {
  name: "app",
  data() {
    return {
      slides
    };
  },
  async mounted() {
    Reveal.initialize({
      history: true
    });
    window.hljs.initHighlightingOnLoad();
  }
};
</script>
<style lang="stylus">
@import url('../node_modules/reveal.js/css/reveal.css');
@import url('../node_modules/reveal.js/css/theme/black.css');
@import "styles/general"
@import "styles/quasar"

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
