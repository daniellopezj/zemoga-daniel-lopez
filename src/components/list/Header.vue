<template>
  <div class="list__header">
    <h3 class="list__header-title">Previous Rulings</h3>
    <div clas>
      <select class="list__header-select" v-model="selected">
        <option
          class="list__header-option"
          v-for="option in options"
          :value="option.value"
          :key="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
const selected = defineModel();
const options = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
];
</script>

<style scoped lang="scss">
.list__header {
  display: flex;
  justify-content: space-between;

  &-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }
  &-select {
    background-color: white;
    border: 2px solid black;
    padding: 0 0.5em;
    width: 150px;
    height: 40px;
    text-align: center;
    font-size: 1em;
  }
}

@media all and (max-width: 768px) {
  .list__header {
    &-select {
      display: none;
    }
  }
}
</style>
