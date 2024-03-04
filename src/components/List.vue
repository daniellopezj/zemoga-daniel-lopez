<template>
  <div class="list__container">
    <list-header v-model="typeView" />
    <list-content v-model="typeView" :type-view="typeView" />
  </div>
</template>

<script setup lang="ts">
const typeView: Ref<'list' | 'grid'> = ref('list');
</script>

<style scoped lang="scss">
.list__container{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
