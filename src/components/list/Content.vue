<template>
  <div class="list__container">
    <div class="list__element" v-for="celebrity in celebrities">
    
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '@/assets/data/data.json';
import type { Celebrity } from '@/types/general.types';

const props = defineProps({
  typeView: {
    type: String,
    required: true,
  },
});

const columns =  computed(()=> props.typeView === 'list' ? 1 : 2);

const celebrities: Ref<Celebrity[]> = ref(data.data);
</script>

<style scoped lang="scss">
.list{
  &__container{
    display: grid;
    grid-template-columns: repeat(v-bind(columns), 1fr);
    gap: 1rem;
  }
}

</style>
