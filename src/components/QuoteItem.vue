<template>
  <div class="quote_wrapper">
    <div class="quote">
      <div class="quote_item_title">
        Текст:
        <div class="quote_item">{{ quote.title }}</div>
      </div>
      <div class="quote_item_title">
        Автор:
        <div class="quote_item">{{ quote.author }}</div>
      </div>
      <div class="quote_item_title">
        Жанр :
        <div class="quote_item">{{ quote.genre }}</div>
      </div>
      <div class="quote_item_title">
        Время создания :
        <div class="quote_item_time">{{ quote.date }}</div>
      </div>

      <router-link
        @click="modalQ = true"
        class="btn btn_quote_btn"
        :to="{ name: 'Quote', params: { id: quote.id } }"
        >Открыть</router-link
      >
      <app-modal v-if="modalQ">
        <AppQuote :quote="quote" @closeQuote="modalQ = false" />
      </app-modal>
    </div>
  </div>
</template>

<script>
import AppModal from "./AppModal.vue";
import AppQuote from "./AppQuote.vue";
export default {
  components: { AppModal, AppQuote },
  props: {
    quote: {},
  },
  data() {
    return {
      modalQ: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.quote_wrapper {
  background-color: #fff;
  border-radius: 30px;
  padding: 15px 15px;
  color: black;
  margin-bottom: 20px;
}
.quote {
  align-items: center;
  justify-content: space-between;
  .quote_item_title {
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .quote_item {
    font-weight: 400;
    font-size: 18px;
    margin-left: 15px;
  }
  .quote_item_time {
    font-size: 14px;
    font-weight: 400;
    margin-left: 15px;
  }
}
.time {
  font-size: 10px;
}
.btn_quote_btn {
  margin-top: 20px;
  display: block;
  font-size: 12px;
}
</style>
