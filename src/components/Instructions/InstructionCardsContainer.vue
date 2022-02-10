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
    <img
      id="burguer"
      class="foods"
      src="@/assets/images/game-itens/food12.webp"
    />
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

  #burguer {
    left: 0;
    width: 35vw;
    height: 35vw;
    transform: translate(-80%, 80%);
  }
}

@media (max-width: 950px) {
  .container {
    padding: 140px 30px 120px 30px;
    gap: 30px;

    #burguer {
      width: 55vw;
      height: 55vw;
    }
  }
}

@media (max-width: 550px) {
  .container {
    #burguer {
      width: 500px;
      height: 500px;
    }
  }
}

@media (max-width: 650px) {
  .container {
    padding: 140px 20px 80px 20px;
    flex-direction: column;
  }
}
</style>
