<template>
  <div class="quote_title">Цитата</div>

  <div class="quote_item" v-if="!editing">{{ quote.title }}</div>
  <div class="quote_item" v-if="!editing">{{ quote.author }}</div>
  <div class="quote_item" v-if="!editing">{{ quote.genre }}</div>

  <form v-else class="form_quote">
    <div class="form-control">
      <input v-model="titleQ" type="text" class="form-control" />
    </div>
    <div class="form-control">
      <input v-model="authorQ" type="text" class="col form-control" />
    </div>
    <div class="form-control">
      <input v-model="genreQ" type="text" class="col form-control" />
    </div>
  </form>
  <div class="wrapper_btns">
    <button @click="updateQuoteI(quote)" class="btn primary mx-2">
      {{ editing ? "Update" : "Edit" }}
    </button>
    <button @click="deleteModal = true" class="btn danger">Delete</button>
    <router-link
      @click="$emit('closeQuote')"
      to="/"
      class="btn warning btn_closeapp"
      >Закрыть</router-link
    >
  </div>
  <app-modal v-if="deleteModal">
    <div class="delete_form">
      <h1>Вы точно хотетие удалить цитату?</h1>
      <button @click="deleteQuote(quote.id)" class="btn primary">Да</button>
      <button @click="$emit('closeQuote')" class="btn danger">Нет</button>
    </div>
  </app-modal>
</template>

<script>
import { mapActions } from "vuex";
import AppModal from "./AppModal.vue";
export default {
  components: { AppModal },
  emits: ["closeQuote"],
  data() {
    return {
      titleQ: "",
      editing: false,
      authorQ: "",
      genreQ: "",
      deleteModal: false,
    };
  },
  props: {
    quote: {},
  },
  methods: {
    ...mapActions(["deleteQuote", "updateQuote"]),

    updateQuoteI(quote) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.titleQ = quote.title;
        this.authorQ = quote.author;
        this.genreQ = quote.genre;
        this.updateQuote(quote);
      } else {
        quote.title = this.titleQ;
        quote.author = this.authorQ;
        quote.genre = this.genreQ;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.quote_title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
}
.quote_item {
  font-size: 20px;
}
.form_quote {
  flex-direction: column;
}
.btn_closeapp {
  font-size: 12px;
}
.wrapper_btns {
  margin-top: 25px;
  button {
    font-size: 12px;
  }
}
.delete_form {
  h1 {
    font-size: 20px;
  }
}
</style>
