import { createStore } from 'vuex'

export type State = {
  modalBoolState: boolean,
  hasMetaMask: boolean,
  walletAddress: string | null,
}

export const store = createStore({
  state: {
    modalBoolState: false,
    hasMetaMask: false,
    walletAddress: null,
  },
  mutations: {
    setWalletAddress(state: State, address: string){
      state.walletAddress = address;
    },
    setHasMetaMask(state: State, payload: boolean){
      state.hasMetaMask = payload;
    },
    openModal(state: State){
      state.modalBoolState = true;
    },
    closeModal(state: State){
      state.modalBoolState = false;
    },
  },
  actions: {
  },
  modules: {
  }
})
