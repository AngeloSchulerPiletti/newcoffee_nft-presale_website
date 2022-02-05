import { createStore } from "vuex";

export type State = {
  modalBoolState: boolean;
  hasMetaMask: boolean;
  walletAddress: string | null;
  newcoffeeAddress: string;
};

export const store = createStore({
  state: {
    modalBoolState: false,
    hasMetaMask: false,
    walletAddress: null,
    newcoffeeAddress: "0xc82c591e93245f2425079F63CE711bD1864248EF",
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
  },
  actions: {},
  modules: {},
});
