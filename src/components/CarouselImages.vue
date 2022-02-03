<template>
  <div class="container">
    <transition-group name="fade">
      <img
        :src="`/images/game-prints/${imageName}`"
        alt="Imagem do jogo"
        v-for="imageName in imagesCarousel"
        :key="imageName"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      imagesCarousel: ["print-1.png"],
      imagesName: [
        "print-1.png",
        "print-2.png",
        "print-cafe-1.png",
        "print-mineracao-2.png",
        "print-cafe-2.png",
      ],
    };
  },
  mounted() {
    const maxIndex = this.imagesName.length - 1;
    var counterActual = 0;
    setInterval(() => {
      counterActual += counterActual == maxIndex ? -maxIndex : 1;
      this.imagesCarousel[0] = this.imagesName[counterActual];
    }, 2800);
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.container {
  max-width: 900px;
  width: 80vw;
  margin-left: 120px;
  height: 50vw;
  max-height: 600px;
  margin-top: 200px;
  box-shadow: 2px 2px 12px #00000085;
  border: 4px solid #000;
  position: relative;

    img{
        position: absolute;
        max-height: 100%;
        width: 100%;
        object-fit: cover;

        &:nth-child(1){
            z-index: 10;
        }
    }
}
</style>
