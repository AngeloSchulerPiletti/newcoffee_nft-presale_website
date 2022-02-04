<template>
  <div class="home flex_c">
    <presentation><logo-component /></presentation>
    <instruction-cards-container />
    <buy-button :web3="web3Instance" />
    <carousel-images />
    <road-map-container />
    <team-cards-container />
    <footer-component />
    <img
      id="chicken"
      class="foods"
      src="@/assets/images/game-itens/food13.png"
    />
    <buy-modal/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "@/components/LogoComponent.vue";
import Presentation from "@/components/Presentation.vue";
import InstructionCardsContainer from "@/components/Instructions/InstructionCardsContainer.vue";
import BuyButton from "@/components/BuyButton.vue";
import RoadMapContainer from "@/components/RoadMap/RoadMapContainer.vue";
import TeamCardsContainer from "@/components/Team/TeamCardsContainer.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CarouselImages from "@/components/CarouselImages.vue";
import Modal from "@/components/BuyModal/Modal.vue";
import Web3 from "web3";

declare interface HomeData {
  web3Instance: Web3 | null;
}

export default defineComponent({
  name: "Home",
  data(): HomeData {
    return {
      web3Instance: null,
    };
  },
  components: {
    LogoComponent,
    Presentation,
    InstructionCardsContainer,
    BuyButton,
    CarouselImages,
    RoadMapContainer,
    TeamCardsContainer,
    FooterComponent,
    "buy-modal": Modal,
  },
  mounted() {
    this.$store.commit("setHasMetaMask", false);
    if (window.ethereum && window.ethereum.isMetaMask) {
      this.$store.commit("setHasMetaMask", true);
      this.web3Instance = new Web3(window.ethereum);
    }
  },
});
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  position: relative;

  #chicken {
    right: 0;
    width: 28vw;
    height: 28vw;
    transform: translate(0, 26%) rotate(-15deg);
    z-index: -1;
  }
}
</style>
