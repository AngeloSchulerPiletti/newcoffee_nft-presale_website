<template>
  <div class="home flex_c">
    <presentation><logo-component /></presentation>
    <instruction-cards-container />
    <buy-button :web3="web3Instance" v-if="!isMobile" />
    <h6 v-else id="go-to-desktop" class="title-2 shadow-3 pseudo-2 no-content">
      To buy your chest, open it on your desktop
    </h6>
    <carousel-images v-if="secondaryLoads" />
    <road-map-container v-if="secondaryLoads" />
    <team-cards-container :anim="animation.team" v-if="tertiaryLoads" />
    <contact-the-team v-if="tertiaryLoads" />
    <footer-component v-if="tertiaryLoads" />
    <img
      v-if="tertiaryLoads"
      id="chicken"
      class="foods"
      src="@/assets/images/game-itens/food13.webp"
      alt="food icon"
    />
    <!-- MODALS -->
    <feedback-container v-if="!isMobile" />
    <!-- Colocar async import pra isso -->
    <buy-modal :web3="web3Instance" v-if="!isMobile && secondaryLoads" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import LogoComponent from "@/components/LogoComponent.vue";
import Presentation from "@/components/Presentation.vue";
import InstructionCardsContainer from "@/components/Instructions/InstructionCardsContainer.vue";
// import BuyButton from "@/components/BuyButton.vue";
// import RoadMapContainer from "@/components/RoadMap/RoadMapContainer.vue";
// import TeamCardsContainer from "@/components/Team/TeamCardsContainer.vue";
// import ContactTheTeam from "@/components/ContactTheTeam.vue";
// import FooterComponent from "@/components/FooterComponent.vue";
// import CarouselImages from "@/components/CarouselImages.vue";
// import Modal from "@/components/BuyModal/Modal.vue";
// import FeedbackContainer from "@/components/Feedback/FeedbackContainer.vue";
// import Web3 from "web3";

declare interface HomeData {
  web3Instance?: any | null;
  animation: {
    team: boolean;
  };
  secondaryLoads: boolean;
  tertiaryLoads: boolean;
}

export default defineComponent({
  name: "Home",
  data(): HomeData {
    return {
      web3Instance: null,
      animation: {
        team: false,
      },
      secondaryLoads: false,
      tertiaryLoads: false,
    };
  },
  components: {
    LogoComponent,
    Presentation,
    InstructionCardsContainer,
    BuyButton: defineAsyncComponent(() => import("@/components/BuyButton.vue")),
    CarouselImages: defineAsyncComponent(
      () => import("@/components/CarouselImages.vue")
    ),
    RoadMapContainer: defineAsyncComponent(
      () => import("@/components/RoadMap/RoadMapContainer.vue")
    ),
    TeamCardsContainer: defineAsyncComponent(
      () => import("@/components/Team/TeamCardsContainer.vue")
    ),
    ContactTheTeam: defineAsyncComponent(
      () => import("@/components/ContactTheTeam.vue")
    ),
    FooterComponent: defineAsyncComponent(
      () => import("@/components/FooterComponent.vue")
    ),
    FeedbackContainer: defineAsyncComponent(
      () => import("@/components/Feedback/FeedbackContainer.vue")
    ),
    "buy-modal": defineAsyncComponent(
      () => import("@/components/BuyModal/Modal.vue")
    ),
  },
  computed: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          navigator.userAgent
        ) ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform) ||
        window.innerWidth < 400
      ) {
        return true;
      }
      import("web3").then((web3Module) => {
        if (window.ethereum && window.ethereum.isMetaMask) {
          this.$store.commit("setHasMetaMask", true);
          this.web3Instance = new web3Module.default(window.ethereum);
        }
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.secondaryLoads = true;
    }, 2000);

    setTimeout(() => {
      this.tertiaryLoads = true;
      setTimeout(() => {
        const margin = (3 * window.innerHeight) / 4;
        var meetTheTeamTop =
          window.document.getElementById("team-title")?.offsetTop;

        window.addEventListener("scroll", () => {
          let actual = window.scrollY + margin;
          if (actual > meetTheTeamTop!) {
            this.animation.team = true;
          }
        });
      }, 100);
    }, 3500);
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
