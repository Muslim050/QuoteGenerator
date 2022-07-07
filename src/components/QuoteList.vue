<template>
  <div v-for="quote in validQuote" :key="quote.id">
    <QuoteItem :quote="quote" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import QuoteItem from "./QuoteItem.vue";
export default {
  components: { QuoteItem },
  computed: {
    ...mapGetters(["validQuote"]),
  },
};
</script>

<style lang="scss" scoped></style>
