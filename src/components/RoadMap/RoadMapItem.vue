<template>
  <div class="item-container flex_c">
    <h5 class="date">
      {{ `${data.month}, ${data.year}` }}
    </h5>
    <div v-if="data.title && data.items" class="content">
      <h6 class="float-title">{{ data.title }}</h6>
      <ul class="flex_c">
        <li v-for="(event, index) in data.items" :key="index">{{ event }}</li>
      </ul>
    </div>
    <h6 v-else class="blocked-title"></h6>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "@vue/runtime-core";
import { RoadMapInterface } from "@/components/RoadMap/RoadMapContainer.vue";

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<RoadMapInterface>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.item-container {
  transform: translateX(-20px);
  .date {
    position: relative;
    width: fit-content;
    padding: 8px 18px;
    font-size: 48px;
    outline: 3px solid #000;
    background-color: $bege-fraco;
    box-shadow: 3px 3px 8px #00000080;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      outline: 3px solid #000;
      background-color: #00000020;
      transform: translate(8px, 8px);
      z-index: -1;
    }
  }
  .content {
    border: 3px solid #000;
    width: 500px;
    padding: 38px 0 14px 15px;
    margin-left: 200px;
    transform: translateY(-20px);
    position: relative;
    z-index: -1;
    background-color: $bege-fraco;
    box-shadow: 3px 3px 8px #00000070;

    .float-title {
      position: absolute;
      background-color: #000;
      color: $white;
      font-size: 19px;
      padding: 8px 12px;
      top: 0;
      right: 0;
      border-bottom-left-radius: 6px;
    }
    ul {
      font-size: 20px;
      gap: 5px;
      font-weight: 300;
    }
  }
    .blocked-title {
    }
}
</style>
