<template>
    <Head>
    <Title>Zenoga Daniel López</Title>
    <Meta name="author" content="Daniel López" />
    <Meta
      name="description"
      content="Zemoga interview  Daniel López"
    />
    <Meta
      property="og:title"
      content="Zemoga  Daniel López"
    />
    <Meta
      property="og:description"
      content="Zemoga interview  Daniel López"
    />
    <Meta
      property="og:image"
      content="https://zemoga-daniel-lopez-daniellopezj01.vercel.app/img/main.webp"
    />
    <Meta property="og:url" content="https://zemoga-daniel-lopez-daniellopezj01.vercel.app/" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta
      name="twitter:title"
      content="Zemoga Daniel López"
    />
    <Meta
      name="twitter:description"
      content="Zemoga interview Daniel López"
    />
    <Meta
      name="twitter:image"
      content="https://zemoga-daniel-lopez-daniellopezj01.vercel.app/img/main.webp"
    />
    <Meta name="twitter:url" content="https://zemoga-daniel-lopez-daniellopezj01.vercel.app/" />
    <Meta
      name="keywords"
      content="Zemoga, JavaScript, html, css, vue, nuxt"
    />
  </Head>
  <Header />
  <Nav />
  <div class="max-centered">
    <top-banner />
    <main role="main">
      <List />
    </main>
    <button-banner />
  <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://zemoga-daniel-lopez-daniellopezj01.vercel.app/',
    },
  ],
});
</script>

<style scoped></style>
