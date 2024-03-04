<template>
  <button :disabled="disabled" class="vote" @click="emit('voted')">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['voted']);

defineProps({
  disabled: {
    type: Boolean,
    required: true,
    default: true,
  },
  text: {
    type: String,
    required: true,
    default: '',
  },
});
</script>

<style scoped lang="scss">
.vote {
  cursor: pointer;
  width: 115px;
  height: 38px;
  color: white;
  white-space: nowrap;
  border: 2px solid white;
  text-transform: capitalize;
  background: rgba(0, 0, 0, 0.4);
}

.vote:disabled {
  opacity: 0.7;
  cursor: initial !important;
}

@media all and (min-width: 768px) {
  .vote {
    font-size: 18px;
  }
}
</style>
