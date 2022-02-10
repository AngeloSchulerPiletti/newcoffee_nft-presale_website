<template>
  <header class="flex_r">
    <img
      class="shadow-3"
      src="@/assets/images/transparent-logo.webp"
      alt="logo da new coffee"
    />
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  justify-content: center;

  img {
    width: 100px;
    object-fit: cover;
    background-color: $black;
    padding: 4px 12px 6px 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}

@media (max-width: 500px) {
  header {
    justify-content: flex-start;
    img {
      border-bottom-left-radius: 0;
    }
  }
}
</style>
