<template>
  <div class="container flex_r">
    <card-component
      :title="getCardsData[0].title"
      :paragraph="getCardsData[0].paragraph"
    />
    <card-component
      :title="getCardsData[1].title"
      :paragraph="getCardsData[1].paragraph"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  computed: {
    getCardsData() {
      return require("@/data/instructionscards.json");
    },
  },
  components: {
    "card-component": Card,
  },
};
</script>

<style lang="scss" scoped>
.container {
    margin: 140px 70px 120px 70px;
    gap: 60px;
}
</style>
