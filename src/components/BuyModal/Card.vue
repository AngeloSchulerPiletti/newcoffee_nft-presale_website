<template>
  <div class="card-container flex_c" @click="choosed">
    <h6 class="type">{{ type }}</h6>
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
      this.$emit("choosed", [this.price, this.type]);
    },
  },
  props: {
    price: String,
    imageName: String,
    choosedBau: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  cursor: pointer;
  align-items: center;
  gap: 12px;

  &:hover {
    .card-bau {
      transform: scale(1.04);
    }
  }

  .type{
    font-size: 20px;
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

    .currency {
      font-weight: 500;
      font-size: 0.7em;
    }
  }
}
</style>
