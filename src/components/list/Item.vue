<template>
  <div class="item" :class="{ 'item__grid-view': view === 'grid' }">
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
      <span class="item__icon">
        <item-reaction :type="typeReaction" />
      </span>
      <item-content :celebrity="celebrity" :view="view" />
      <item-progress :celebrity="celebrity" />
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
  view: {
    type: String as PropType<'grid' | 'list'>,
    required: true,
    default: 'list',
  },
});

const typeReaction = computed(() => {
  const { positive, negative } = props.celebrity.votes;
  return positive > negative ? 'like' : 'dislike';
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
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgb(0, 0, 0, 0) 40%, rgb(0, 0, 0) 100%);
}

.item__icon {
  position: absolute;
  top: 33%;
  left: 0;
}

@media all and (min-width: 768px) {
  .item__icon {
    position: absolute;
    top: 0;
    left: 0;
  }

  .item__body {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 10%,
      rgb(175, 175, 175, 1) 17%,
      rgb(102, 102, 102, 1) 100%
    );
  }

  .item__grid-view {
    .item__body {
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0, 0) 40%,
        rgb(0, 0, 0) 100%
      );
    }
    .item__icon {
      top: 40%;
    }
  }
}

@media all and (min-width: 1100px) {
  .item__icon {
    position: absolute;
    top: 0;
    left: 0;
  }

  .item__body {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 10%,
      rgb(175, 175, 175, 1) 17%,
      rgb(102, 102, 102, 1) 100%
    );
  }

  .item__grid-view {
    .item__body {
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0, 0) 40%,
        rgb(0, 0, 0) 100%
      );
    }
    .item__icon {
      top: 40%;
    }
  }
}
</style>
