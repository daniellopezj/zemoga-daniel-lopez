<template>
  <div
    class="list__container"
    :class="{ 'list__grid-view': typeView === 'grid' }"
  >
    <list-item
      class="list__element"
      v-for="celebrity in celebrities"
      :key="celebrity.id"
      :celebrity="celebrity"
      :view="typeView"
    />
  </div>
</template>

<script setup lang="ts">
import data from '@/assets/data/data.json';
import type { Celebrity } from '@/types/general.types';

const props = defineProps({
  typeView: {
    type: String as PropType<'grid' | 'list'>,
    required: true,
  },
});

const celebrities: Ref<Celebrity[]> = ref(data.data);
</script>

<style scoped lang="scss">
.list {
  &__container {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow-x: scroll;
  }

  &__element {
    min-width: 300px;
    height: 300px;
    display: flex;
  }
}

@media all and (min-width: 768px) {
  .list {
    &__container {
      overflow-x: initial;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    &__element {
      height: 200px;
    }
    &__grid-view {
      display: grid;
      grid-template-columns: repeat(2, 1fr) !important;
      .list__element {
        height: initial;
        min-width: initial;
      }
    }
  }
}

@media all and (min-width: 1100px) {
  .list {
    &__container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    &__element {
      height: 200px;
    }
    &__grid-view {
      display: grid;
      overflow-x: initial;
      grid-template-columns: repeat(3, 1fr) !important;
      .list__element {
        height: initial;
        min-width: initial;
      }
    }
  }
}
</style>
