<template>
  <button
    class="reaction__container icon-button"
    :class="{ reaction__active: action === type }"
    @click="action = type"
    :aria-label="typeThumb"
  >
    <NuxtImg class="reaction__icon" :src="typeImage" :alt="typeThumb" />
  </button>
</template>

<script setup lang="ts">
const action = defineModel();

const props = defineProps({
  type: {
    type: String as PropType<'like' | 'dislike'>,
    required: true,
    default: 'like',
  },
});

const typeThumb = computed(() =>
  props.type === 'like' ? 'thumbs up' : 'thumbs down',
);

const typeImage = computed(() =>
  props.type === 'like' ? 'img/thumbs-up.svg' : 'img/thumbs-down.svg',
);
</script>

<style scoped lang="scss">
.reaction {
  &__container {
    width: 30px;
    height: 30px;
  }
  
  &__active{
    border: 2px solid white;
  }

  &__icon {
    width: 100%;
    height: 100%;
    max-width: 18px;
  }
}
</style>
