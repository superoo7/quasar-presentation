<template>
  <section>
    <section>
      <h3>What is Quasar Framework?</h3>
      <img data-src="img/quasar.png" />
    </section>
    <section>
      <div class="full-width row justify-center">
        <blockquote
          class="twitter-tweet"
          data-lang="en"
          data-dnt="true"
          data-theme="dark"
        >
          <p lang="en" dir="ltr">
            Very impressive work from Quasar - one codebase for web, SSR, mobile
            and electron apps.
            <a href="https://t.co/dj26KSSPv5">https://t.co/dj26KSSPv5</a>
          </p>
          &mdash; Evan You (@youyuxi)
          <a
            href="https://twitter.com/youyuxi/status/1094033578239893504?ref_src=twsrc%5Etfw"
            >February 9, 2019</a
          >
        </blockquote>
      </div>
    </section>
    <section>
      <div style="height:60px;" class="row justify-center item-center cg-pb-3">
        <img class="cg-px-2" data-src="img/quasar.png" />
        <h5 class="cg-px-2">What is Quasar Framework?</h5>
        <img data-src="img/vue.svg" />
      </div>

      <ul>
        <li class="fragment">Framework</li>
        <li class="fragment">CLI</li>
        <li class="fragment">UI Library</li>
      </ul>
    </section>
    <section>
      <div style="height:60px;" class="row justify-center item-center cg-pb-3">
        <img class="cg-px-2" data-src="img/quasar.png" />
        <h5 class="cg-px-2">What is Quasar Framework?</h5>
        <img data-src="img/vue.svg" />
      </div>
      <div class="fragment box cg-px-4 cg-py-2 cg-mt-2">
        <p>
          Quasar Framework is a framework build on top of Vue.js , that allows
          you to build
          <span class="fragment">Modern Website (SPA, PWA, SSR), </span>
          <span class="fragment">Mobile App (iOS, Android), </span>
          <span class="fragment">and Desktop App (Windows, MacOS, Linux)</span>
        </p>
      </div>
    </section>
    <section>
      <h5>Web</h5>
      <div class="row">
        <q-card
          class="fragment bg-grey-8 cg-px-4 cg-mt-2 col-12"
          v-for="w in web"
          :key="w.id"
        >
          <q-card-section>
            <h5>
              {{ w.name }} <br />
              ({{ w.id }})
            </h5>
            <span>{{ w.description }}</span>
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section>
      <h5>Mobile App</h5>
      <img style="height:300px;" class="fragment" data-src="img/cordova.png" />
      <div class="row">
        <div class="fragment col-6 cg-px-2" v-for="m in mobile" :key="m.name">
          <q-card class="bg-grey-8 cg-px-4 cg-mt-2">
            <q-card-section>
              <q-icon :name="m.icon" />
              <h5>
                {{ m.name }}
              </h5>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section>
      <h5>Desktop App</h5>
      <img style="height:300px;" class="fragment" data-src="img/electron.svg" />
      <div class="row justify-center">
        <div class="fragment col-6 cg-px-2" v-for="d in desktop" :key="d.name">
          <q-card class="bg-grey-8 cg-px-4 cg-mt-2">
            <q-card-section>
              <q-icon :name="d.icon" />
              <h5>
                {{ d.name }}
              </h5>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  meta: {
    script: {
      twitter: { src: "https://platform.twitter.com/widgets.js" }
    }
  },
  data() {
    return {
      web: [
        {
          name: "Single Page Application",
          id: "SPA",
          description: "Client side routing, Vuex, IE11 support, i18n"
        },
        {
          name: "Server Side Rendering",
          id: "SSR",
          description: "Node.js, Express"
        },
        {
          name: "Progressive Web App",
          id: "PWA",
          description: "Service Worker, manifest.json"
        }
      ],
      mobile: [
        { name: "Android", icon: "fab fa-android" },
        { name: "iOS", icon: "fab fa-apple" }
      ],
      desktop: [
        { name: "Windows", icon: "fab fa-windows" },
        { name: "Linux", icon: "fab fa-linux" },
        { name: "Mac OS", icon: "fab fa-apple" }
      ]
    };
  }
};
</script>
