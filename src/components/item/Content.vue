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
        {{ timeAgo(celebrity.lastUpdated) }} in {{ celebrity.category }}
      </span>
    </div>
    <div class="itemContent__reactions">
      <item-reaction />
      <item-reaction :type="'dislike'" />
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

const timeAgo = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);
  const miliSeconds = now.getTime() - date.getTime();
  const minutes = Math.floor(miliSeconds / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (years) return `${years} years ago`;
  if (months) return `${months} months ago`;
  if (days) return `${days} days ago`;
  if (hours) return `${hours} hours ago`;
  if (minutes) return `${minutes} minutes ago`;
  return 'Just now';
};
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
