<template>
  <div class="create_quote">
    <h1>Создать цитату</h1>
    <div class="d-flex">
      <button @click="modal = true" class="btn">Создать</button>
    </div>
  </div>

  <app-modal v-if="modal">
    <RequestQuote @create="modal = false" @close="modal = false" />
  </app-modal>
</template>

<script>
import AppModal from "./AppModal.vue";
import RequestQuote from "./RequestQuote.vue";
export default {
  data() {
    return {
      modal: false,
    };
  },

  components: { AppModal, RequestQuote },
};
</script>

<style lang="scss" scoped>
.create_quote {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
    color: white;
  }
}
</style>
