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
}
</style>
