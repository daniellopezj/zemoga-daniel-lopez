<template>
  <button class="vote">vote Now</button>
</template>

<script setup lang="ts"></script>

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


@media all and (min-width: 768px) {
  .vote {
  font-size: 18px;
}
}

</style>
