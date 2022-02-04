<template>
  <transition name="fade">
    <div v-if="isShow" @click="closeModal($event)" class="container flex_c">
      <div class="modal"></div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    isShow() {
      return this.$store.state.modalBoolState;
    },
  },
  methods: {
    closeModal(event) {
      event.target.classList.contains("container") ? this.$store.commit("closeModal") : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: #000000a0;
  z-index: 1000;

  .modal {
    width: 70vw;
    max-width: 800px;
    height: 80vh;
    max-height: 700px;
    background-color: red;
  }
}
</style>
