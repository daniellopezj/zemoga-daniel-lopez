<template>
  <div>
    <list-header v-model="typeView" />
    <list-content v-model="typeView" :type-view="typeView" />
  </div>
</template>

<script setup lang="ts">
const typeView: Ref<'list' | 'grid'> = ref('list');
</script>

<style scoped lang="scss"></style>
