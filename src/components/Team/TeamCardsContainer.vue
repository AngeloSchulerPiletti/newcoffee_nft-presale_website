<template>
  <div class="container flex_c">
    <h3 class="title-1">Meet the Team</h3>
    <div class="cards-container grid">
      <team-card
        v-for="(card, index) in getTeamData"
        :key="index"
        :cardData="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TeamCard from "@/components/Team/TeamCard.vue";

export interface CardInterface {
  name: string;
  role: string;
  about: string;
  pictureName: string;
  linkedInUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
}

export default {
  computed: {
    getTeamData(): [CardInterface] {
      return require("@/data/teamcards.json");
    },
  },
  components: {
    TeamCard,
  },
};
</script>

<style lang="scss" scoped>
.container {
  gap: 60px;
  align-items: center;

  h3 {
    border: 3px solid #000;
    width: fit-content;
    padding: 5px 18px;
    box-shadow: 0 0 10px #00000070;
    position: relative;
    background-color: $bege-fraco;
    transition: transform 400ms;
    transform-style: preserve-3d;

    &:hover {
      // Remove it and change to scroll event
      transform: scale(1.03);
      &::before {
        left: -40px;
      }
      &::after {
        right: -40px;
      }
    }

    &::before,
    &::after {
      position: absolute;
      content: "";
      height: 80%;
      width: 50px;
      border: 4px solid #000;
      top: 50%;
      transform: translateY(-50%) translateZ(-1px);
      z-index: -1;
      transition: left 400ms, right 400ms;
      background-color: #00000020;
      box-shadow: 0 0 5px #000000b0;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }
  .cards-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    padding: 0 60px;
    position: relative;
  }
}
</style>
