<template>
  <transition name="fade">
    <div v-if="isShow" @click="closeModal($event)" class="container flex_c">
      <div :class="`modal opening-${isOpening}`">
        <div class="choose-bau">
          <h2 class="title-1">escolha seu baú</h2>
          <div class="cards-container flex_r">
            <bau-card
              v-for="data in bauData"
              :key="data.imageName"
              :imageName="data.imageName"
              :price="data.price"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";

declare interface BauCards {
  imageName: string;
  price: string;
}

export default defineComponent({
  data() {
    return {
      isOpening: false,
      bauData: null as [BauCards] | null,
    };
  },
  mounted() {
    this.bauData = require("@/data/baucards.json");
  },
  computed: {
    isShow() {
      setTimeout(() => {
        this.isOpening = this.$store.state.modalBoolState;
      }, 0);
      return this.$store.state.modalBoolState;
    },
  },
  methods: {
    closeModal(event: any) {
      if (event.target.classList.contains("container")) {
        this.isOpening = false;
        setTimeout(() => {
          this.$store.commit("closeModal");
        }, 410);
      }
    },
  },
  components: {
    "bau-card": Card,
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
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
    border: 3px solid #000;
    background-color: $bege-fraco;
    box-shadow: 0 0 16px 8px #00000085;
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 60%;
      bottom: 20%;
      width: 60px;
      border: 3px solid #000;
      background-color: $bege-fraco-2;
      z-index: -1;
      box-shadow: 0 0 10px 3px #00000080;
      transition: left 400ms, right 400ms;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }

    &.opening-true {
      &::before {
        left: -55px;
      }
      &::after {
        right: -55px;
      }
    }
  }
}
</style>
