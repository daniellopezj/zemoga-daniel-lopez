<template>
  <client-only>
    <div
      class="listContent__container"
      :class="{ 'listContent__grid-view': typeView === 'grid' }"
    >
      <list-item
        class="listContent__element"
        v-for="celebrity in celebrities"
        :key="celebrity.id"
        :celebrity="celebrity"
        :view="typeView"
      />
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { useCelebrityStore } from '~/store/useCelebrityStore';
import type { Celebrity } from '~/types/general.types';

defineProps({
  typeView: {
    type: String as PropType<'grid' | 'list'>,
    required: true,
  },
});

const useCelebrity = useCelebrityStore();
const { fetchCelebrities } = useCelebrity;
const celebrities: Ref<Celebrity[]> = ref([]);

onBeforeMount(() => {
  celebrities.value = fetchCelebrities();
});
</script>

<style scoped lang="scss">
.listContent {
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
  .listContent {
    &__container {
      overflow-x: initial;
      flex-direction: column;
    }
    &__element {
      height: 150px;
    }
    &__grid-view {
      display: grid;
      grid-template-columns: repeat(2, 1fr) !important;
      .listContent__element {
        height: initial;
        min-width: initial;
      }
    }
  }
}

@media all and (min-width: 1100px) {
  .listContent {
    &__container {
      overflow-x: initial;
      flex-direction: column;
    }
    &__element {
      height: 200px;
    }
    &__grid-view {
      display: grid;
      overflow-x: initial;
      grid-template-columns: repeat(3, 1fr) !important;
      .listContent__element {
        height: initial;
        min-width: initial;
      }
    }
  }
}
</style>
