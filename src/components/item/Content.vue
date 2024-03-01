<template>
  <div class="itemContent__container">
    <h1>
      {{ celebrity.name }}
    </h1>
    <span>
      {{ celebrity.description }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Celebrity } from '~/types/general.types';

defineProps({
  celebrity: {
    type: Object as PropType<Celebrity>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.itemContent__container {
  position: absolute;
  top: 60%;
  left: 38px;
  right: 38px;
  color: white;
  transform: translate(0, -50%);
  h1{
font-size: 30px;
font-weight: bold;
  }
}
</style>
