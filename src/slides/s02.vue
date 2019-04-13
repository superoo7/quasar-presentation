<template>
  <section data-background-image="img/quasar-cover.jpg">
    <div class="box">
      <h3>About Me</h3>
      <div class="flex justify-center cg-my-2">
        <q-avatar size="100px" class="cg-mx-2">
          <img data-src="img/profile.png" />
        </q-avatar>
        <img
          data-src="img/coingecko.png"
          class="image-none gecko-image cg-mx-2"
        />
      </div>
      <h4>Johnson Lai (@superoo7)</h4>
      <p class="text-subtitle">Software Engineer @ CoinGecko</p>

      <div class="flex justify-around icon-wrapper">
        <a
          href="https://twitter.com/jlwhoo7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon name="fab fa-2x fa-twitter-square" />
        </a>
        <a
          href="https://github.com/superoo7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon name="fab fa-2x fa-github-square" />
        </a>
        <a
          href="https://www.linkedin.com/in/superoo7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon name="fab fa-2x fa-linkedin" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
.reveal {
  .gecko-image {
    height: 100px;
  }
  .icon-wrapper i {
    color: #fff;

    &:hover, &:active {
      color: #dfdfdf
    }
  }
}
</style>
