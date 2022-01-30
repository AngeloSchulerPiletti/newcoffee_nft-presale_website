<template>
  <div class="home flex_c">
    <presentation><logo-component /></presentation>
    <cards-container />
    <button class="buy-button" @click="buyModal">comprar baú</button>
    <team-container/>
    <footer-component/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";
import Presentation from "@/components/Presentation.vue";
import CardsContainer from "@/components/Instructions/CardsContainer.vue";
import TeamContainer from "@/components/Team/TeamContainer.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    "logo-component": Logo,
    Presentation,
    CardsContainer,
    TeamContainer,
    "footer-component": Footer,
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
  .buy-button {
    position: relative;
    border: 3px solid #000;
    padding: 6px 20px;
    font-size: 50px;
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
      background-color: #d8b7a1;
    }

    &:hover::before{
      transform: translate(12px, -12px);
    }
  }
}
</style>
