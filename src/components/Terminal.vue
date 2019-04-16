<template>
  <div class="fullWidth" ref="wrapper">
    <q-bar @click="copy" class="terminal-header">
      <q-btn dense flat round icon="lens" size="8.5px" color="red"></q-btn>
      <q-btn dense flat round icon="lens" size="8.5px" color="yellow"></q-btn>
      <q-btn dense flat round icon="lens" size="8.5px" color="green"></q-btn>
      <div class="col text-center text-weight-bold">{{ title }}</div>
    </q-bar>
    <div class="bg-black terminal-field row" @click="copy">
      <span v-if="comment !== ''" class="col-12 text-grey">{{ comment }}</span>
      <span v-if="enableCopy" class="col-1 text-purple cg-pr-1">$</span>
      <div :class="enableCopy ? 'col-11' : 'col-12'">
        <input
          v-if="enableCopy"
          ref="terminal"
          readonly
          class="full-width terminal-input"
          :value="description"
        />
        <pre v-else>
          <code class="hljs">{{description}}</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    comment: {
      type: String,
      default: ""
    },
    enableCopy: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    copy() {
      if (!this.enableCopy) return;
      this.$refs.terminal.select();
      document.execCommand("copy");
      this.$q.notify("Copied!");
      // to exit terminal so that slides can continue to scroll
      this.$refs.terminal.blur();
    }
  }
};
</script>

<style lang="stylus" scoped>
.terminal-field {
  padding: 30px;
  text-align: left;
}

.terminal-input {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
}
</style>
