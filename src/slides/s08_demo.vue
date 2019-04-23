<template>
  <section>
    <section>
      <h2>DEMO</h2>
      <p>Testing with Jest and Cypress</p>
      <p>Lighthouse, Snyk and more</p>
      <a
        href="https://github.com/quasarframework/quasar-testing"
        target="_blank"
        rel="noopener noreferrer"
        >quasarframework/quasar-testing</a
      >
    </section>
    <section v-for="(d, key) in demo" :key="key">
      <h2>{{ d.header }}</h2>
      <terminal
        :title="d.title"
        :comment="d.comment"
        :description="d.description"
        :highlight="d.highlight"
      />
    </section>
  </section>
</template>

<script>
import TerminalVue from "../components/Terminal.vue";

export default {
  components: {
    terminal: TerminalVue
  },
  data() {
    return {
      demo: [
        {
          header: "Setup testing extension",
          title: "Setup testing",
          comment: "# setup quasar-testing",
          description: "quasar ext add @quasar/testing",
          highlight: false
        },
        {
          header: "Testing Vue SFC",
          title: "Write some test",
          comment: "# Snapshot testing with Jest",
          description: `<test lang="jest">
  import SomeVueComponent from "../SomeVueComponent.vue";
  import { mount } from "@vue/test-utils";
  describe("test vue component", () => {
    it("snapshot vue component", () => {
      const vueEl = mount(SomeVueComponent);
      expect(vueEl.html()).toMatchSnapshot();
    })
  })
</test>`,
          highlight: true
        },
        {
          header: "Run Jest testing command",
          title: "Jest",
          comment: "",
          description: "quasar test --unit jest --dev",
          highlight: false
        },
        {
          header: "E2E testing with Cypress",
          title: "cypress",
          comment: "",
          description: "",
          highlight: false
        }
      ]
    };
  }
};
</script>
