<template>
  <footer class="flex_c">
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
  background-color: #303030;
  box-shadow: 0 0 14px #000000d0;
  color: #f0f0f0;
  font-weight: 200;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 30px;

  .developed-by {
    font-weight: 300;
    a {
      font-weight: 400;
      color: #d89483;
    }
  }
}
</style>
