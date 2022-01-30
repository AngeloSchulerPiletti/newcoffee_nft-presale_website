import { createStore } from 'vuex'

export type State = {
  modalBoolState: boolean,
}

export const store = createStore({
  state: {
    modalBoolState: false,
  },
  mutations: {
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
