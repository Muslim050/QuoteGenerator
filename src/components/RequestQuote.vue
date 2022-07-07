<template>
  <div class="card-title">
    <h3>Создать цитату</h3>
    <button @click="$emit('close')" class="btn btn_close">X</button>
  </div>

  <form @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="Qtitle">Текст Цитаты</label>
      <input type="text" id="Qtitle" v-model.trim="Qtitle" />
    </div>

    <div class="form-control">
      <label for="Qauthor" class="bg-orange-500">Автор Цитаты</label>
      <input type="text" id="Qauthor" v-model.trim="Qauthor" />
    </div>

    <div class="form-control">
      <label for="Qgenre">Жанр Цитаты</label>
      <input type="text" id="Qgenre" v-model.trim="Qgenre" />
    </div>
    <button @click="addQuoteI" class="btn btn_request">Создать Цитату</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  emits: ["create", "close"],
  data() {
    return {
      Qtitle: "",
      Qauthor: "",
      Qgenre: "",
    };
  },
  methods: {
    ...mapActions(["addQuote"]),
    addQuoteI() {
      this.addQuote({
        id: v1(),
        title: this.Qtitle,
        author: this.Qauthor,
        genre: this.Qgenre,
        date: new Date().toJSON(),
      });

      this.Qtitle = "";
      this.Qauthor = "";
      this.Qgenre = "";
      this.$emit("create");
      console.log(this.addQuoteI);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn_close {
  padding: 5px 10px;
  margin-right: 0;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  color: #42b983;
  border: 1px solid #42b983;
}

.btn_request {
  margin: 10px 0;
}
</style>
