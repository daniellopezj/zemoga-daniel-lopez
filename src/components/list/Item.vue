<template>
  <div class="item">
    <NuxtImg
      :srcset="`img/celebrities/${celebrity.picture}.png     350w,
        img/celebrities/${celebrity.picture}@2x.png 750w`"
      sizes="50vw md:55vw xl:400px"
      loading="lazy"
      class="item__image"
      :src="`/img/${celebrity.picture}.png`"
      :alt="celebrity.name"
    />
    <div class="item__body">
      <span class="item__icon">hola</span>
      <item-content :celebrity="celebrity" />
      <item-progress />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Celebrity } from '~/types/general.types';

defineProps({
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
.item__body {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

.item__icon {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
}
</style>
