<template>
  <transition name="fade">
    <div v-show="isShow" @click="closeModal($event)" class="container flex_c">
      <div
        :class="`modal shadow-3 flex_c pseudo-2 no-content opening-${isOpening}`"
      >
        <div class="cards-container grid">
          <h2 class="title-1 shadow-3 pseudo-2 no-content">Escolha seu Baú</h2>
          <bau-card
            class="bau-card"
            v-for="data in bauData"
            :key="data.imageName"
            :imageName="data.imageName"
            :price="data.price"
          />
        </div>
        <div class="actions grid">
          <button class="button-back shadow-3">back</button>
          <button class="button-next shadow-3 pseudo-2 no-content">next</button>
          <button class="button-cancel shadow-3" @click="closeModal($event)">cancel</button>
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
      if (event.target.classList.contains("container") || event.target.classList.contains("button-cancel")) {
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
.fade-enter-from,
.fade-leave-to {
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
    padding: 36px 60px;
    box-sizing: border-box;
    border: 3px solid #000;
    background-color: $bege-fraco;

    &::before,
    &::after {
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

    .cards-container {
      flex-grow: 1;
      grid-template-areas:
        "a a a"
        "b c d";
      grid-template-columns: 5fr 6fr 5fr;
      grid-auto-rows: min-content min-content;
      justify-items: center;
      gap: 60px;

      h2 {
        background-color: #000;
        color: $white;
        width: fit-content;
        padding: 8px 20px;
        grid-area: a;

        &::before,
        &::after {
          width: 80%;
          height: 8px;
          left: 10%;
          border: 2px solid #000;
        }
        &::before {
          top: -6px;
        }
        &::after {
          bottom: -6px;
        }
      }
    }

    .actions {
      grid-template-columns: 1fr 3fr 1fr;
      justify-items: center;
      align-items: center;

      .button-back,
      .button-cancel {
        background-color: #000;
        color: $white;
        width: fit-content;
        font-size: 20px;
        padding: 5px 14px;
        height: fit-content;
        transition: opacity 200ms;

        &:hover{
            opacity: 0.9;
        }

      }

      .button-next {
        background-color: #000;
        color: $white;
        width: fit-content;
        font-size: 35px;
        padding: 3px 14px;
        transition: box-shadow 260ms, transform 150ms;

        &:hover{
            box-shadow: 0 0 12px transparent !important;
            transform: scale(0.98);
            &::before, &::after{
                opacity: 0;
            }
        }

        &::before,
        &::after {
          height: 70%;
          width: 5px;
          bottom: 15%;
          outline: 2px solid #000;
          transition: opacity 260ms;
        }
        &::before {
          left: -4px;
        }
        &::after {
          right: -4px;
        }
      }
    }
  }
}
</style>
