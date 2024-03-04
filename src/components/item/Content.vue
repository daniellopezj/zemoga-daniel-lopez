<template>
  <div class="itemContent__container">
    <h1 class="itemContent__title">
      {{ celebrity.name }}
    </h1>
    <span class="itemContent__description">
      {{ celebrity.description }}
    </span>
    <div>
      <span class="itemContent__last-date">
        1 month ago in {{ celebrity.category }}
      </span>
    </div>
    <div class="itemContent__reactions">
      <item-reaction />
      <item-reaction />
      <item-vote />
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
});
</script>

<style scoped lang="scss">
.itemContent {
  &__container {
    position: absolute;
    bottom: 15%;
    left: 38px;
    right: 38px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__title {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }

  &__description {
    font-size: 15px;
    margin: 0;
  }

  &__title,
  &__description {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__reactions {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
  }

  &__last-date {
    justify-content: flex-end;
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
