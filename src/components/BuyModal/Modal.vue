<template>
  <transition name="fade">
    <div v-show="isShow" @click="closeModal($event)" class="container flex_c">
      <div
        :class="`modal shadow-3 flex_c pseudo-2 no-content opening-${isOpening}`"
      >
        <h2 class="title-1 shadow-3 pseudo-2 no-content">
          {{ titles[stage] }}
        </h2>
        <div v-show="stage == 0" class=" cards-container grid">
          <bau-card
            @choosed="choosed"
            v-for="data in bauData"
            :key="data.imageName"
            :imageName="data.imageName"
            :price="data.price"
            :type="data.type"
            :choosedBau="choosedBau.price"
          />
        </div>
        <div v-show="stage == 1" class=" payment-container grid">
          <div class="amount">
            <label for="amount">Amount</label>
            <input type="number" id="amount" />
          </div>
          <div class="selected-bau">
            <label>selected bau</label>
            <p>{{choosedBau.type}}</p>
          </div>
          <div class="total">
            <p>Total <span>U$ XX,XX</span></p>
          </div>
          <div class="connected-wallet">
            <label>Connected Wallet</label>
            <p>{{$store.state.walletAddress}}</p>
          </div>
          <div class="newcoffee-wallet">
            <label>NewCoffee Wallet</label>
            <p>{{$store.state.newcoffeeAddress}}</p>
          </div>
        </div>
        <div class="actions grid">
          <button
            :class="`button-back shadow-3 disabled-${backDisabled}`"
            @click="goBack"
          >
            back
          </button>
          <button
            :class="`button-next shadow-3 disabled-${bauNotSelected || lastStage} pseudo-2 no-content`"
            @click="goNext"
          >
            next
          </button>
          <button class="button-cancel shadow-3" @click="closeModal($event)">
            cancel
          </button>
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
  type: string;
}

export default defineComponent({
  data() {
    return {
      isOpening: false,
      bauData: null as [BauCards] | null,
      stage: 0,
      choosedBau: {
        type: "",
        price: "0,00",
      },
      titles: ["Choose your chest", "Checkout"],
    };
  },
  mounted() {
    this.bauData = require("@/data/baucards.json");
  },
  computed: {
    backDisabled() {
      return this.stage == 0;
    },
    bauNotSelected() {
      return this.choosedBau == "0,00";
    },
    lastStage(){
      return this.stage == 1;
    },
    isShow() {
      setTimeout(() => {
        this.isOpening = this.$store.state.modalBoolState;
      }, 0);
      return this.$store.state.modalBoolState;
    },
  },
  methods: {
    goNext() {
      if (!this.bauNotSelected && !this.lastStage) {
        this.stage++;
      }
    },
    goBack() {
      if (this.stage != 0) {
        this.stage--;
      }
    },
    choosed([price, type]: [string, string]) {
      this.choosedBau.price = price;
      this.choosedBau.type = type;
    },
    closeModal(event: any) {
      if (
        event.target.classList.contains("container") ||
        event.target.classList.contains("button-cancel")
      ) {
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
      justify-content: space-between;
    align-items: center;
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

    h2 {
      background-color: #000;
      color: $white;
      width: fit-content;
      padding: 8px 20px;

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

    .cards-container {
      grid-template-columns: 5fr 6fr 5fr;
      grid-auto-rows: min-content min-content;
      gap: 60px;
    }

    .payment-container {
      grid-template-areas:
        "a b c"
        "d d d"
        "e e e";
      
      .connected-wallet{
        grid-area: d;
      }
      .newcoffee-wallet{
        grid-area: e;
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

        &:hover {
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

        &:hover {
          box-shadow: 0 0 12px transparent !important;
          transform: scale(0.98);
          &::before,
          &::after {
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

      .disabled-true {
        cursor: default;
        opacity: 0.8 !important;
      }
    }
  }
}
</style>
