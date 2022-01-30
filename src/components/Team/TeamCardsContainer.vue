<template>
  <div class="container grid">
    <team-card
      v-for="(card, index) in getTeamData"
      :key="index"
      :cardData="card"
    />
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
.container{
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 150px 60px;
  position: relative;
}
</style>
