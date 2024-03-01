<template>
  <div class="item">
      <NuxtImg
        :srcset="`img/celebrities/${celebrity.picture}.png     350w,
        img/celebrities/${celebrity.picture}@2x.png 750w`"
        sizes="(min-width: 750px) 350px, 50vw (min-width: 1100px) 400px"
        loading="lazy"
        class="item__image"
        :src="`/img/${celebrity.picture}.png`"
        :alt="celebrity.name"
      />
      <!-- <div>
      {{ celebrity.name }}
      </div> -->
  </div>
</template>

<script setup lang="ts">
import type { Celebrity } from '~/types/general.types';

const props = defineProps({
  celebrity: {
    type: Object as PropType<Celebrity>,
    required: true,
  },
  view: {
    type: String as PropType<'grid' | 'list'>,
    required: true,
    default: 'list',
  },
});
</script>

<style scoped lang="scss">
.item {
  position: relative;
  overflow: hidden;
}
.item__background {
  position: absolute;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
}
</style>
