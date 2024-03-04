<template>
  <div
    class="itemContent__container"
    :class="{ 'itemContent__grid-view': view === 'grid' }"
  >
    <div class="itemContent__first-line">
      <h1 class="itemContent__title">
        {{ celebrity.name }}
      </h1>
      <span class="itemContent__description">
        {{ celebrity.description }}
      </span>
    </div>
    <div class="itemContent__second-line">
      <span class="itemContent__last-date">
        {{ EyebrowText }}
      </span>
      <div class="itemContent__reactions">
        <item-reaction
          v-if="pendingVoted"
          v-model="actionSelected"
          :type="'like'"
        />
        <item-reaction
          v-if="pendingVoted"
          v-model="actionSelected"
          :type="'dislike'"
        />
        <item-vote
          @voted="addVote"
          :text="textButton"
          :disabled="actionSelected === '' && pendingVoted"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCelebrityStore } from '~/store/useCelebrityStore';
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

const addVote = () => {
  pendingVoted.value = !pendingVoted.value;
  if (pendingVoted) {
    vote(currentCelebrity.value, actionSelected.value)
    actionSelected.value = '';
  }
};
const storeCelebrities =  useCelebrityStore()
const { vote } = storeCelebrities
const actionSelected = ref<'like' | 'dislike' | ''>('');
const currentCelebrity = ref<Celebrity>(props.celebrity);
const pendingVoted = ref(true);

const textButton = computed(() =>
  pendingVoted.value ? 'Vote Now' : 'Vote Again',
);
const EyebrowText = computed(() => {
  return pendingVoted.value
    ? `${timeAgo(props.celebrity.lastUpdated)} in ${props.celebrity.category}`
    : 'Thank you for your vote!';
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
    gap: 0.75rem;
  }

  &__first-line,
  &__second-line {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
    display: flex;
    white-space: nowrap;
  }
}

@media all and (min-width: 768px) {
  .itemContent {
    &__container {
      top: 5%;
      left: 150px;
      right: 16px;
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
    &__title {
      font-size: 28px;
      -webkit-line-clamp: 1;
      font-weight: initial;
    }
    &__last-date {
      font-size: 14px;
    }
  }
  .itemContent__grid-view {
    bottom: 15% !important;
    left: 38px !important;
    right: 38px !important;
    flex-direction: column;
    top: initial;
  }
}

@media all and (min-width: 1100px) {
  .itemContent {
    &__container {
      top: 5%;
      left: 220px;
      right: 16px;
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
    &__title {
      font-size: 28px;
      -webkit-line-clamp: 1;
      font-weight: initial;
    }
    &__last-date {
      font-size: 14px;
    }
  }
  .itemContent__grid-view {
    bottom: 17% !important;
    left: 38px !important;
    right: 38px !important;
    flex-direction: column;
    top: initial;
    .itemContent__title {
      font-size: 28px;
      -webkit-line-clamp: 2 !important;
      font-weight: initial;
    }
  }
}
</style>
