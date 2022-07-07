<template>
  <div class="container">
    <CreateQuote />
    <QuoteList />
  </div>
</template>

<script>
import CreateQuote from "./components/CreateQuote.vue";
import QuoteList from "./components/QuoteList.vue";
export default {
  name: "App",
  components: { CreateQuote, QuoteList },
};
</script>

<style lang="scss">
body {
  color: white;
}
</style>
