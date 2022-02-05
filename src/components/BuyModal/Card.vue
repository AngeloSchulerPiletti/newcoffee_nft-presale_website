<template>
  <div class="card-container" @click="choosed">
    <div :class="choosedBau == price ? 'card-bau choosed' : 'card-bau'">
      <img :src="`/images/game-images/${imageName}`" alt="Baú do jogo" />
    </div>
    <p class="price"><span class="currency">U$</span>{{ price }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    choosed() {
      this.$emit("choosed", this.price);
    },
  },
  props: {
    price: String,
    imageName: String,
    choosedBau: String,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  cursor: pointer;

  &:hover {
    .card-bau {
      transform: scale(1.04);
    }
  }

  .card-bau {
    img {
      max-width: 100%;
      -webkit-filter: drop-shadow(0 0 8px #000000d0);
      filter: drop-shadow(0 0 8px #000000d0);
    }
    transition: transform 200ms;
  }
  .choosed {
    transform: scale(1.04);
    img {
      -webkit-filter: drop-shadow(0 0 8px #ffffff);
      filter: drop-shadow(0 0 18px #ffffff);
    }
  }
  .price {
    font-family: "Supermercado One", cursive;
    font-size: 35px;
    // border: 3px solid #000;
    width: fit-content;
    margin: 12px auto 0 auto;
    padding: 2px 10px;

    .currency {
      font-weight: 500;
      font-size: 0.7em;
    }
  }
}
</style>
