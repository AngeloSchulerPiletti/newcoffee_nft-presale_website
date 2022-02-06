import { createStore } from "vuex";

export type State = {
  modalBoolState: boolean;
  hasMetaMask: boolean;
  walletAddress: string | null;
  newcoffeeAddress: string;
  feedbacks: [{ description: String; isError: boolean }] | Array<Object>;
};

export const store = createStore({
  state: {
    modalBoolState: false,
    hasMetaMask: false,
    walletAddress: null,
    newcoffeeAddress: "0xc82c591e93245f2425079F63CE711bD1864248EF",
    feedbacks: [],
  },
  mutations: {
    setWalletAddress(state: State, address: string) {
      state.walletAddress = address;
    },
    setHasMetaMask(state: State, payload: boolean) {
      state.hasMetaMask = payload;
    },
    openModal(state: State) {
      state.modalBoolState = true;
    },
    closeModal(state: State) {
      state.modalBoolState = false;
    },
    addFeedback(
      state: State,
      feedback: { description: String; isError: boolean }
    ) {
      state.feedbacks.push(feedback);
    },
    removeFeedback(state: State, index: number) {
      state.feedbacks.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
