<template>
  <div class="container grid">
    <div class="line flex_c">
      <road-map-item
        v-for="(item, index) in getRoadMapData"
        :key="index"
        :data="item"
      />
    </div>
    <img id="cake" class="foods" src="@/assets/images/game-itens/Food1.png"/>
    <img id="pastel" class="foods" src="@/assets/images/game-itens/Food2.png"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoadMapItem from "@/components/RoadMap/RoadMapItem.vue";

export interface RoadMapInterface {
  year: number;
  month: string;
  title?: string;
  items?: [string];
}

export default defineComponent({
  computed: {
    getRoadMapData(): [RoadMapInterface] {
      return require("@/data/rodemap.json");
    },
  },
  components: {
    RoadMapItem,
  },
});
</script>

<style lang="scss" scoped>
.container {
  grid-template-columns: 7fr 3fr;
  padding-left: 200px;
  margin: 200px 0 150px 0;
  position: relative;

  .line {
    padding: 40px 0;
    border-left: 6px solid #000;
    position: relative;
    gap: 20px;
  }
  #cake {
    right: 0;
    top: 50%;
    width: 30vw;
    height: 30vw;
    transform: translate(40%, -50%) rotate(30deg);
  }
  #pastel{
    left: 0;
    width: 35vw;
    height: 35vw;
    transform: translateX(-50%) rotate(70deg);
  }
}
</style>
