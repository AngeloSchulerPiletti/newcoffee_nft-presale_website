<template>
  <div class="home flex_c">
    <presentation><logo-component /></presentation>
    <instruction-cards-container />
    <buy-button :web3="web3Instance" v-if="!isSmallScreen" />
    <h6 v-else id="go-to-desktop" class="title-2 shadow-3 pseudo-2 no-content">
      To buy your chest, open it on your desktop
    </h6>
    <carousel-images />
    <road-map-container />
    <team-cards-container :anim="animation.team" />
    <contact-the-team />
    <footer-component />
    <img
      id="chicken"
      class="foods"
      src="@/assets/images/game-itens/food13.png"
    />
    <!-- MODALS -->
    <feedback-container />
    <buy-modal :web3="web3Instance" />
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
import ContactTheTeam from "@/components/ContactTheTeam.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CarouselImages from "@/components/CarouselImages.vue";
import Modal from "@/components/BuyModal/Modal.vue";
import FeedbackContainer from "@/components/Feedback/FeedbackContainer.vue";
import Web3 from "web3";

declare interface HomeData {
  web3Instance: Web3 | null;
  animation: {
    team: boolean;
  };
}

export default defineComponent({
  name: "Home",
  data(): HomeData {
    return {
      web3Instance: null,
      animation: {
        team: false,
      },
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
    ContactTheTeam,
    FooterComponent,
    FeedbackContainer,
    "buy-modal": Modal,
  },
  computed: {
    isSmallScreen() {
      return window.innerWidth < 800;
    },
  },
  mounted() {
    this.$store.commit("setHasMetaMask", false);
    if (window.ethereum && window.ethereum.isMetaMask) {
      this.$store.commit("setHasMetaMask", true);
      this.web3Instance = new Web3(window.ethereum);
    }

    const margin = (3 * window.innerHeight) / 4;
    var meetTheTeamTop =
      window.document.getElementById("team-title")?.offsetTop;

    window.addEventListener("scroll", () => {
      let actual = window.scrollY + margin;
      if (actual > meetTheTeamTop!) {
        this.animation.team = true;
      }
    });
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
  #go-to-desktop {
    padding: 10px 20px;
    width: 70vw;
    margin: auto;
    text-align: center;
    color: $white;
    background-color: #000;
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
</style>
