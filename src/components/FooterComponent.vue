<template>
  <footer class="flex_c shadow-3">
    <span class="developed-by"
      >Developed by
      <a href="https://www.linkedin.com/in/angelo-schuler-piletti/"
        >Angelo Schuler Piletti</a
      >, and its company
      <a href="https://www.linkedin.com/company/78373464">SchPil</a></span
    >
    <span class="copyright">&copy; NewCoffee - All rights reserved</span>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: $black;
  color: $white;
  font-weight: 200;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 180px;
  padding: 30px;

  .developed-by {
    font-weight: 300;
    text-align: center;

    a {
      font-weight: 400;
      color: #d89483;
    }
    transition: transform 100ms;

    &:hover {
      transform: scale(1.025);
    }
  }
}
</style>
