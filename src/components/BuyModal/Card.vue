<template>
  <div class="container">
    <div class="card-bau">
      <img :src="`/images/game-images/${imageName}`" alt="Baú do jogo" />
    </div>
    <span class="price"> U${{ price }} </span>
  </div>
</template>

<script>
export default {
  props: {
    price: String,
    imageName: String,
  },
};
</script>

<style lang="scss" scoped>
.container {
  cursor: pointer;

  .card-bau {
    img {
    }
  }
}
</style>
