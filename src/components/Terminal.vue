<template>
  <div class="fullWidth" ref="wrapper">
    <q-bar class="terminal-header" @click="copy">
      <q-btn dense flat round icon="lens" size="8.5px" color="red"></q-btn>
      <q-btn dense flat round icon="lens" size="8.5px" color="yellow"></q-btn>
      <q-btn dense flat round icon="lens" size="8.5px" color="green"></q-btn>
      <div class="col text-center text-weight-bold">
        {{ title }}
      </div>
    </q-bar>
    <div class="bg-black terminal-field row" @click="copy">
      <span class="col-12 text-grey">{{ comment }}</span>
      <span class="col-1 text-purple cg-pr-1">$</span>
      <div class="col-11">
        <input
          ref="terminal"
          readonly
          class="full-width terminal-input"
          :value="description"
        />
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
    }
  },
  methods: {
    copy() {
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
.terminal-header {
  border-radius: 2% 2% 0 0;
}

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
