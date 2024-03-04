<template>
  <div class="progress__container">
    <div class="progress__like" :style="{ width: likePercentage }">
      <NuxtImg class="progress__icon" src="img/thumbs-up.svg" alt="thumbs up" />
      <span>{{ likePercentage }}</span>
    </div>
    <div class="progress__dislike" :style="{ width: disLikePercentage }">
      <NuxtImg
        class="progress__icon"
        src="img/thumbs-down.svg"
        alt="thumbs down"
      />
      <span>{{ disLikePercentage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Celebrity } from '~/types/general.types';

const props = defineProps({
  celebrity: {
    type: Object as PropType<Celebrity>,
    required: true,
  },
});

const likes = computed(() => props.celebrity.votes.positive);
const dislikes = computed(() => props.celebrity.votes.negative);
const allVotes = computed(() => likes.value + dislikes.value);
const likePercentage = computed(() => widthProgress(likes.value));
const disLikePercentage = computed(() => widthProgress(dislikes.value));

const widthProgress = (votes: number) =>
  `${((votes * 100) / allVotes.value).toFixed(1)}%`;
</script>

<style scoped lang="scss">
.progress {
  &__container {
    position: absolute;
    bottom: 0;
    display: flex;
    left: 0;
    width: 100%;
    height: 3rem;
  }

  &__like,
  &__dislike {
    display: flex;
    color: white;
    font-size: 18px;
    gap: 4px;
    align-items: center;
    padding: 0.5rem 0.75rem;
  }

  &__like {
    justify-content: flex-start;
    background-color: rgba(var(--color-green-positive), 0.8);
  }
  &__dislike {
    flex-direction: row-reverse;
    background-color: rgba(var(--color-yellow-negative), 0.8);
  }
  &__icon {
    width: 100%;
    height: 100%;
    max-width: 18px;
    max-height: 18px;
    aspect-ratio: 1;
  }
}
</style>
