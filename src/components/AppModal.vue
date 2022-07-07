<template>
  <div class="modal-backdrop">
    <div class="modal-modal">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style lang="scss" scoped>
.modal-modal {
  background-color: #c8c8c8;
  max-width: 450px;
  min-height: 100%x;
  margin: 100px auto;
  border-radius: 20px;
  padding: 10px 20px;
}
</style>
