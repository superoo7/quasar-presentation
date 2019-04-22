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
      <span v-if="!highlight" class="col-1 text-purple cg-pr-1">$</span>
      <div :class="highlight ? 'col-12' : 'col-11'">
        <input
          v-if="!highlight"
          ref="terminal"
          readonly
          class="full-width terminal-input"
          :value="description"
        />
        <pre v-else ref="highlight">
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
    highlight: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    copy() {
      if (this.highlight) {
        const str = this.$refs.highlight.querySelector(".hljs").innerText;
        this.copyToClipboard(str);
      } else {
        this.$refs.terminal.select();
        document.execCommand("copy");
        // to exit terminal so that slides can continue to scroll
        this.$refs.terminal.blur();
      }
      this.$q.notify("Copied!");
    },
    copyToClipboard(str) {
      // https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
      const el = document.createElement("textarea"); // Create a <textarea> element
      el.value = str; // Set its value to the string that you want copied
      el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
      el.style.position = "absolute";
      el.style.left = "-9999px"; // Move outside the screen to make it invisible
      document.body.appendChild(el); // Append the <textarea> element to the HTML document
      const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0) // Store selection if found
          : false; // Mark as false to know no selection existed before
      el.select(); // Select the <textarea> content
      document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el); // Remove the <textarea> element
      if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
      }
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
