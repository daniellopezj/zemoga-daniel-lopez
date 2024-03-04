<template>
  <button class="reaction__container icon-button" aria-label="thumbs up">
    <NuxtImg class="reaction__icon" src="img/thumbs-up.svg" alt="thumbs up" />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.reaction {
  &__container {
    width: 30px;
    height: 30px;
  }
  
  &__icon {
    width: 100%;
    height: 100%;
    max-width: 18px;
  }
}
</style>
