<template>
  <div class="container flex_c">
    <button :class="`in buy-button title-1 ${connection}`" @click="buyModal">
      comprar baú
    </button>
    <button :class="`in connect-button ${connection}`">conectar wallet</button>
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
  methods: {
    buyModal() {
      this.$store.commit("openModal");
    },
  },
});
</script>

<style lang="scss" scoped>
@keyframes negar{
  0%{
    transform: translate(0);
  }
  25%{
    transform: translate(10px);
  }
  75%{
    transform: translate(-10px);
  }
  100%{
    transform: translate(0);
  }
}

@keyframes brief {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.035);
  }
  100%{
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
    &.not-connected{
      cursor: default;
      &:hover {
      animation: negar 200ms ease 0ms 2 normal both;
    }}
  }

  .connect-button {
    font-size: 18px;
    color: $white;
    background-color: #000;
    padding: 5px 12px;
    box-shadow: 0 0 8px #000000e0;

    transition: box-shadow 500ms;

    &.not-connected{
      animation: brief 950ms ease 0ms infinite normal both;
    }
    &:hover {
      box-shadow: 0 0 0 #000000e0;
      animation-name: brief;
      animation-play-state: paused;
    }
  }
}
</style>
