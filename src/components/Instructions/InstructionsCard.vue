<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <div class="info shadow-3">
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    paragraph: String,
    title: String,
  },
});
</script>

<style lang="scss" scoped>
.card {
  transition: transform 400ms;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.08);
    cursor: default;
  }
  h3 {
    font-size: 34px;
    margin-bottom: 22px;
  }
  .info {
    background-color: $bege-fraco;
    border: 2px solid #000;
    position: relative;
    padding: 16px 32px;

    p {
      font-size: 19px;
      text-align: justify;
      text-indent: 2em;
      line-height: 1.3em;
    }
  }
}
</style>
