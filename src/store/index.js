import { createStore } from "vuex";

export default createStore({
  state: {
    quotes: [
      {
        id: 1,
        date: "2022-06-07T12:13:40.524Z",
        title:
          "Как мы можем знать, что такое смерть, когда мы не знаем еще, что такое жизнь?",
        author: "Конфуций",
        genre: "Жизнь",
      },
      {
        id: 2,
        date: "2022-06-07T12:13:40.524Z",
        title:
          "Не тот велик, кто никогда не падал, а тот велик — кто падал и вставал.",
        author: "Конфуций",
        genre: "Философия",
      },
      {
        id: 3,
        date: "2022-06-07T12:13:40.524Z",
        title:
          "Счастье — это когда тебя понимают, большое счастье — это когда тебя любят, настоящее счастье — это когда любишь ты.",
        author: "Конфуций",
        genre: "Счастье",
      },
    ],
  },
  getters: {
    allQuote: (state) => state.quotes,
    validQuote(state) {
      return state.quotes.filter((q) => {
        return q.title && q.author && q.genre;
      });
    },
  },
  mutations: {
    add_quote(state, quote) {
      state.quotes.push(quote);
    },
    delete_quote(state, id) {
      state.quotes = state.quotes.filter((quote) => quote.id != id);
    },
    update_quote(state, quote) {
      let index = state.quotes.findIndex((t) => t.id == quote.id);
      if (index != -1) {
        state.quotes[index] = quote;
      }
    },
  },
  actions: {
    addQuote({ commit }, quote) {
      commit("add_quote", quote);
    },
    deleteQuote({ commit }, id) {
      commit("delete_quote", id);
    },
    updateQuote({ commit }, quote) {
      commit("update_quote", quote);
    },
  },
  modules: {},
});
