<template>
  <section>
    <section>
      <h2>DEMO</h2>
      <p>SPA, PWA, SSR, Desktop, Mobile</p>
      <a
        href="https://github.com/superoo7/todo-app"
        target="_blank"
        rel="noopener noreferrer"
        >superoo7/todo-app</a
      >
    </section>
    <section v-for="(d, key) in demo" :key="key">
      <h2>{{ d.header }}</h2>
      <terminal
        :title="d.title"
        :comment="d.comment"
        :description="d.description"
      />
    </section>
  </section>
</template>

<script>
import TerminalVue from "../components/Terminal.vue";
export default {
  data() {
    return {
      demo: [
        {
          header: "Install Quasar Framework",
          title: "install",
          comment: "# Node.js >= 8.9.0 is required.",
          description: "npm install -g @quasar/cli"
        },
        {
          header: "Create Project",
          title: "create",
          comment: "# Create Project (for v1 onwards)",
          description: "quasar create newproject -b dev"
        },
        {
          header: "Progressive Web App",
          title: "PWA",
          comment: "# Add PWA",
          description: "quasar mode add pwa"
        },
        {
          header: "Server Side Rendering",
          title: "SSR",
          comment: "# Add SSR",
          description: "quasar mode add ssr"
        },
        {
          header: "Desktop App",
          title: "desktop",
          comment: "# Add Desktop",
          description: "quasar mode add electron"
        },
        {
          header: "Mobile App Setup",
          title: "mobile",
          comment: "# Mobile (Make sure cordova installed)",
          description: "quasar mode add cordova"
        },
        {
          header: "Android Setup",
          title: "android",
          comment: "# Android",
          description: "cordova platform add android"
        },
        {
          header: "iOS Setup",
          title: "iOS",
          comment: "# iOS",
          description: "cordova platform add ios"
        }
      ]
    };
  },
  components: {
    terminal: TerminalVue
  }
};
</script>
