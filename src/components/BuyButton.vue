<template>
  <div class="container flex_c">
    <span class="warn" v-if="connection == 'not-available'"
      >Instale a
      <a target="_blank" href="https://metamask.io/">MetaMask</a> para
      prosseguir</span
    >
    <button :class="`in buy-button title-1 ${connection}`" @click="buyModal">
      comprar baú
    </button>
    <button
      @click="connectWallet"
      :class="`in shadow-3 connect-button ${connection}`"
    >
      {{ $store.state.walletAddress ? "wallet conectada" : "conectar wallet" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      connection: "not-connected",
    };
  },
  mounted() {
    setTimeout(() => {
      if (!this.hasMetaMask) {
        this.connection = "not-available";
        console.log("não tem metamask");
      }
    }, 0);
  },
  methods: {
    buyModal() {
      this.connection == "connected" ? this.$store.commit("openModal") : null;
    },
    async connectWallet() {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.connection = "not-connected";
      if (accounts && accounts[0]) {
        this.$store.commit("setWalletAddress", accounts[0]);
        this.connection = "connected";
      }
    },
  },
  computed: {
    hasMetaMask(): boolean {
      return this.$store.state.hasMetaMask;
    },
  },
  props: {
    web3: Object,
  },
});
</script>

<style lang="scss" scoped>
@keyframes negar {
  0% {
    transform: translate(0);
  }
  25% {
    transform: translate(5%);
  }
  75% {
    transform: translate(-5%);
  }
  100% {
    transform: translate(0);
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

.container {
  align-items: center;
  gap: 20px;
  .in {
    width: fit-content;
  }
  .buy-button {
    position: relative;
    border: 3px solid #000;
    padding: 6px 20px;
    color: transparent;
    background: #00000020;

    &::before {
      position: absolute;
      content: "comprar baú";
      color: #000;
      outline: 3px solid #000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
      background-color: $bege-fraco;
    }

    &.connected:hover::before {
      transform: translate(12px, -12px);
    }
    &.not-connected,
    &.not-available {
      cursor: default;
      &:hover {
        animation: negar 230ms ease 0ms 2 normal both;
      }
    }
  }

  .connect-button {
    font-size: 18px;
    color: $white;
    background-color: #000;
    padding: 5px 12px;

    transition: box-shadow 500ms;

    &.not-connected {
      animation: brief 950ms ease 0ms infinite normal both;
    }
    &.not-available {
      box-shadow: 0 0 8px transparent !important;
      opacity: 0.8;
      cursor: default;
      &:hover {
        animation: negar 230ms ease 0ms 2 normal both;
      }
    }
    &.connected {
      cursor: default;
    }
    &:hover {
      box-shadow: 0 0 0 #000000e0;
      animation-name: brief;
      animation-play-state: paused;
    }
  }
}
</style>
