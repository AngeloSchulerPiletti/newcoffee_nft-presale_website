<template>
  <div class="container flex_r">
    <instructions-card
      :title="getCardsData[0].title"
      :paragraph="getCardsData[0].paragraph"
    />
    <instructions-card
      :title="getCardsData[1].title"
      :paragraph="getCardsData[1].paragraph"
    />
    <img id="burguer" class="foods" src="@/assets/images/game-itens/food12.png">
  </div>
</template>

<script>
import InstructionsCard from "./InstructionsCard.vue";

export default {
  computed: {
    getCardsData() {
      return require("@/data/instructionscards.json");
    },
  },
  components: {
    InstructionsCard,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 140px 70px 120px 70px;
  gap: 60px;
  position: relative;

  #burguer{
    left: 0;
    width: 35vw;
    height: 35vw;
    transform: translate(-80%, 80%);
  }
}
</style>
