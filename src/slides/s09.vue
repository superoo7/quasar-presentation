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
      <terminal
        :title="d.title"
        :comment="d.comment"
        :description="d.description"
        :enableCopy="d.enableCopy"
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
          title: "Setup testing",
          comment: "# setup quasar-testing",
          description: "quasar ext add @quasar/testing",
          enableCopy: true
        },
        {
          title: "Write some test",
          comment: "# test in vue component",
          description: `<test lang="jest">
  describe("test vue component", () => {
    it("snapshot vue component", () => {
      const vueEl = mount(SomeVueComponent);
      expect(vueEl).toMatchSnapshot();
    })
  })
</test>`,
          enableCopy: false
        }
      ]
    };
  }
};
</script>
