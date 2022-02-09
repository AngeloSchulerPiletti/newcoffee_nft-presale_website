<template>
  <div class="card flex_c">
    <h3 class="title-2">{{ title }}</h3>
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
  width: 50%;

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.08);
    cursor: default;
  }
  h3 {
    margin-bottom: 22px;
  }
  .info {
    background-color: $bege-fraco;
    border: 2px solid #000;
    position: relative;
    padding: 16px 32px;
    height: 100%;

    p {
      font-size: 19px;
      text-align: justify;
      text-indent: 2em;
      line-height: 1.3em;
    }
  }
}

@media (max-width: 750px) {
  .card {
  width: 100%;
    h3 {
      margin-bottom: 16px;
    }
    .info {
      padding: 8px 18px;

      p {
        font-size: 16px;
      }
    }
  }
}
</style>
