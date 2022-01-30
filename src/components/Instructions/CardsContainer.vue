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
  padding: 140px 70px 120px 70px;
  gap: 60px;
  position: relative;

  &::before {
    content: "";
    background: url("/images/game-images/food12.png");
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35vw;
    height: 35vw;
    transform: translate(-80%, 80%);
  }
}
</style>
