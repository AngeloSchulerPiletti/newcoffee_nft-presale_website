<template>
  <div class="card shadow-3 flex_c">
    <div class="img-container">
      <img
        :src="`./images/team/${cardData?.pictureName}`"
        :alt="`foto de ${cardData?.name}`"
      />
    </div>
    <div class="content flex_c">
      <h6 class="flex_c">
        {{ cardData?.name }}
        <span class="role">{{ cardData?.role }}</span>
      </h6>
      <p>{{ cardData?.about }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { CardInterface } from "./TeamCardsContainer.vue";

export default {
  props: {
    cardData: {
      type: Object as PropType<CardInterface>,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$border: 8px;

.card {
  border-radius: $border;
  background-color: $white;
  cursor: default;

  .img-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 400px;

    img {
      position: absolute;
      border-top-left-radius: $border;
      border-top-right-radius: $border;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    h6 {
      text-align: center;
      padding: 20px;
      font-size: 24px;

      .role {
        font-size: 0.6em;
        margin-top: 0.4em;
        font-weight: 500;
      }
    }
    p {
      flex-grow: 1;
      padding: 10px 20px 20px 20px;
      text-align: justify;
      background-color: $black;
      border-bottom-left-radius: $border;
      border-bottom-right-radius: $border;
      font-weight: 200;
      color: $white;
    }
  }
}

@media (max-width: 950px) {
  .card {
    .img-container {
      height: 300px;
    }
  }
}
</style>
