<template>
  <div class="home flex_c">
    <presentation><logo-component /></presentation>
    <instruction-cards-container />
    <button class="buy-button title-1" @click="buyModal">comprar baú</button>
    <team-cards-container />
    <footer-component />
    <img id="chicken" class="foods" src="@/assets/images/game-itens/food13.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "@/components/LogoComponent.vue";
import Presentation from "@/components/Presentation.vue";
import InstructionCardsContainer from "@/components/Instructions/InstructionCardsContainer.vue";
import TeamCardsContainer from "@/components/Team/TeamCardsContainer.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "Home",
  components: {
    LogoComponent,
    Presentation,
    InstructionCardsContainer,
    TeamCardsContainer,
    FooterComponent,
  },
  methods: {
    buyModal() {
      this.$store.commit("openModal");
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  overflow: hidden;

  .buy-button {
    position: relative;
    border: 3px solid #000;
    padding: 6px 20px;
    color: transparent;
    cursor: pointer;
    width: fit-content;
    margin: auto;
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

    &:hover::before {
      transform: translate(12px, -12px);
    }
  }

  #chicken {
    right: 0;
    width: 28vw;
    height: 28vw;
    transform: translate(0, 26%) rotate(-15deg);
    z-index: -1;
  }
}
</style>
