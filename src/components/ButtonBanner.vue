<template>
  <aside class="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
    <NuxtImg
      srcset="img/bg-people.webp 750w, img/bg-people.@2x.webp 1440w"
      sizes="(min-width: 750px) 1440px, 100vw"
      class="banner__background"
      src="img/bg-people.webp"
      alt=""
      role="none"
    />
    <div class="banner__left">
      <h2 class="banner__heading">
        Is there anyone else you would want us to add?
      </h2>
    </div>
    <div class="banner__right">
      <span class="banner__cta">Submit a name</span>
    </div>
  </aside>
  <hr role="separator" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.banner__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  opacity: 0.2;
  pointer-events: none;
}

.banner-bottom {
  flex-direction: column;
  padding: 1rem 3rem;
  margin-top: 2rem;
}

.banner-bottom .banner__heading {
  position: relative;
  margin: 0 0 1rem;
  color: var(--color-dark-gray);
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
}

.banner-bottom .banner__right {
  width: 100%;
}

.banner-bottom .banner__cta {
  position: relative;
  display: block;
  width: 100%;
  padding: 1rem 0;
  border: 2px solid var(--color-darker-background);
  background: transparent;
  color: var(--color-darker-gray);
  font-size: 1.5rem;
}

@media all and (min-width: 768px) {
  .banner-bottom {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .banner-bottom .banner__background {
    top: -230%;
  }

  .banner-bottom .banner__right {
    width: auto;
  }

  .banner-bottom .banner__heading {
    margin-bottom: 0;
    font-size: 1.5rem;
  }

  .banner-bottom .banner__cta {
    width: 16rem;
  }
}

@media all and (min-width: 1100px) {
  .banner-bottom .banner__cta {
    width: 20rem;
  }
}
</style>
