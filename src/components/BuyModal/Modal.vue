<template>
  <transition name="fade">
    <div v-show="isShow" @click="closeModal($event)" class="container flex_c">
      <div
        :class="`modal shadow-3 flex_c pseudo-2 no-content opening-${isOpening}`"
      >
        <h2 class="title-1 shadow-3 pseudo-2 no-content">
          {{ titles[stage] }}
        </h2>
        <div
          v-show="stage == 0 && transactionLoading == false"
          class="cards-container grid"
        >
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
        <div
          v-show="stage == 1 && transactionLoading == false"
          class="payment-container grid"
        >
          <div class="flex_c amount">
            <label for="amount">Amount</label>
            <input
              type="number"
              step="1"
              min="1"
              max="100"
              v-model="amount"
              id="amount"
              @focusout="calculateTotal"
            />
          </div>
          <div class="flex_c selected-bau">
            <label>selected bau</label>
            <p>{{ choosedBau.type }}</p>
          </div>
          <div>
            <label
              >Total: <span>U$ {{ total }}</span></label
            >
          </div>
          <div class="flex_c connected-wallet">
            <label>Connected Wallet</label>
            <p>{{ $store.state.walletAddress }}</p>
          </div>
          <div class="flex_c newcoffee-wallet">
            <label>NewCoffee Wallet</label>
            <p>{{ $store.state.newcoffeeAddress }}</p>
          </div>
          <div class="price-check">
            <p class="warn">
              The price paid in BNB will be checked in the game's server
              considering the date and time of your purchase. Don't try to
              change it.
            </p>
          </div>
        </div>
        <div v-show="transactionLoading" class="loading flex_c">
          <div class="loader"><img src="/favicon/favicon.png" /></div>
          <p class="warn">{{ loadingPhrases[loadingPhraseIndex] }}</p>
        </div>
        <div class="actions grid">
          <button
            :class="`button-back shadow-3 disabled-${backDisabled}`"
            @click="goBack"
          >
            back
          </button>
          <button
            :class="`button-next shadow-3 disabled-${bauNotSelected} pseudo-2 no-content`"
            @click="goNext"
          >
            <span v-show="apiError" class="ops"
              >ops, an error ocurred, try again</span
            >
            {{ apiError ? "try again" : "next" }}
          </button>
          <button class="button-cancel shadow-3" @click="closeModal(true)">
            cancel
          </button>
        </div>
        <span class="warn advice"
          >don't forget to connect your metamask to
          <a
            target="_blank"
            href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
            >binance smart chain</a
          ></span
        >
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
import axios from "axios";

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
      amount: 1,
      choosedBau: {
        type: "",
        price: "0,00",
      },
      total: "0,00",
      titles: ["Choose your chest", "Checkout"],
      apiError: false,
      transactionLoading: false,
      loadingPhraseInterval: null as any,
      loadingPhrases: [
        "Sending transaction",
        "Listening to Globs Globs",
        "Taking some rest",
        "Almost there...",
        "Wait, Globs Globs are back!",
      ],
      loadingPhraseIndex: 0,
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
      return this.choosedBau.price == "0,00";
    },
    lastStage() {
      return this.stage == 1;
    },
    isShow() {
      setTimeout(() => {
        this.isOpening = this.$store.state.modalBoolState;
      }, 0);
      return this.$store.state.modalBoolState;
    },
  },
  watch: {
    transactionLoading(newV) {
      if (newV) {
        this.loadingPhraseInterval = setInterval(() => {
          this.loadingPhraseIndex +=
            this.loadingPhraseIndex == this.loadingPhrases.length - 1
              ? -(this.loadingPhrases.length - 1)
              : 1;
        }, 3500);
      } else {
        clearInterval(this.loadingPhraseInterval);
      }
    },
    stage(newV) {
      this.apiError = false;
      if (newV == 1) {
        this.calculateTotal();
      }
    },
  },
  methods: {
    calculateTotal() {
      let amount = this.amount;
      this.amount = amount <= 0 ? 1 : amount;
      this.amount = amount > 200 ? 200 : amount;
      this.total = (Number.parseInt(this.choosedBau.price) * amount)
        .toFixed(2)
        .toString();
    },
    sendBuyTransaction() {
      axios
        .get("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")
        .then((res) => {
          this.apiError = false;
          var BNBPrice = this.web3!.utils.toWei(
            (
              Math.ceil(
                (Number.parseInt(this.total) / res.data.price) * 10 ** 6
              ) /
              10 ** 6
            ).toString()
          );

          this.transactionLoading = true;
          this.web3!.eth.sendTransaction({
            from: this.$store.state.walletAddress,
            to: this.$store.state.newcoffeeAddress,
            value: BNBPrice, // "0000020000000000000", // BNBPrice, //
          })
            .then((res: any) => {
              this.transactionLoading = false;
              this.closeModal(true);
              this.$store.commit("addFeedback", {
                description: "Your chest is being sent to our stock",
                isError: false,
              });
            })
            .catch((err: any) => {
              this.transactionLoading = false;
              this.apiError = true;
              this.$store.commit("addFeedback", {
                description: "There is a problem with your wallet",
                isError: true,
              });
            });
        })
        .catch((err) => {
          this.apiError = true;
          this.$store.commit("addFeedback", {
            description: "We couldn't complete it, try again soon",
            isError: true,
          });
        });
    },
    goNext() {
      if (this.lastStage) {
        this.sendBuyTransaction();
      } else if (!this.bauNotSelected) {
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
      if (event === true || event.target.classList.contains("container")) {
        this.isOpening = false;
        this.apiError = false;
        this.transactionLoading = false;
        setTimeout(() => {
          this.$store.commit("closeModal");
        }, 410);
      }
    },
  },
  components: {
    "bau-card": Card,
  },
  props: {
    web3: Object,
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
        "e e e"
        "f f f";
      width: 100%;
      gap: 20px;

      .price-check {
        grid-area: f;
        .warn {
          border: 2px solid #000;
          padding: 11px;
          font-size: 16px;
          font-weight: 400;
        }
      }

      .connected-wallet {
        grid-area: d;
      }
      .newcoffee-wallet {
        grid-area: e;
      }
      label {
        font-family: "Supermercado One", cursive;
        font-size: 23px;
      }
      .try-container {
        position: relative;

        .error-button {
          position: absolute;
          font-size: 22px;
          background-color: #000;
          padding: 5px 15px;
          color: $white;
          transition: transform 200ms;
          white-space: nowrap;
          &:hover {
            transform: scale(1.02);
          }
        }
        label {
          position: absolute;
          span {
            white-space: nowrap;
          }
        }
      }
      p {
        font-weight: 500;
        font-size: 19px;
      }
      input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #000;
        font-size: 20px;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
          opacity: none;
          display: none;
        }
        &:focus,
        &:active {
          outline: none;
        }
      }
    }

    @keyframes brief {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.035);
      }
      100% {
        transform: scale(1);
      }
    }

    .loading {
      width: 80%;
      gap: 30px;
      align-items: center;
      .loader {
        img {
          width: 120px;
          opacity: 0.8;
          animation: brief 950ms ease 0ms infinite normal both;
        }
      }
      p {
        font-size: 18px;
        font-weight: 300;
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

        .ops {
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translate(-50%, -100%);
          color: #860101;
          font-size: 12px;
          white-space: nowrap;
        }

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
    .advice {
      position: absolute;
      font-size: 12px;
      bottom: 3px;
      left: 10px;
    }
  }
}
</style>
