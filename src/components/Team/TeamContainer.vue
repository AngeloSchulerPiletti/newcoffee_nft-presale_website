<template>
  <div class="container grid">
    <member-card
      v-for="(card, index) in getTeamData"
      :key="index"
      :cardData="card"
    />
  </div>
</template>

<script lang="ts">
import Card from "@/components/Team/Card.vue";

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
    "member-card": Card,
  },
};
</script>

<style lang="scss" scoped>
.container{
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 150px 60px;
  position: relative;

  &::before {
    content: "";
    background: url("/images/game-images/food13.png");
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 28vw;
    height: 28vw;
    transform: translate(30%, 16%) rotate(-20deg);
  }

  *{
    position: relative;
  }
}
</style>
