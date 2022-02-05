<template>
  <div class="container flex_r">
    <div class="images-wrapper shadow-3 pseudo-1 no-content">
      <transition-group name="fade">
        <img
          key="0"
          v-show="imageToShow == 0"
          src="/images/game-prints/print-cafe-1.png"
          alt="Imagem do jogo"
        />
        <img
          key="1"
          v-show="imageToShow == 1"
          src="/images/game-prints/print-mineracao-1.png"
          alt="Imagem do jogo"
        />
        <img
          key="2"
          v-show="imageToShow == 2"
          src="/images/game-prints/print-2.png"
          alt="Imagem do jogo"
        />
        <img
          key="3"
          v-show="imageToShow == 3"
          src="/images/game-prints/print-cafe-2.png"
          alt="Imagem do jogo"
        />
      </transition-group>
    </div>
    <div class="content flex_c">
      <h3 class="title-2">{{ getCardData.title }}</h3>
      <p v-for="(p, index) in getCardData.paragraphs" :key="index">{{ p }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface CardInterface {
  title: string;
  paragraphs: string[];
}

export default defineComponent({
  data() {
    return {
      imageToShow: 0,
    };
  },
  computed: {
    getCardData(): CardInterface {
      return require("@/data/card3.json");
    },
  },
  mounted() {
    setInterval(() => {
      this.imageToShow += this.imageToShow == 3 ? -3 : 1;
    }, 2800);
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container {
  padding: 200px 120px 0 120px;
  align-items: flex-end;

  .images-wrapper {
    max-width: 900px;
    width: 40vw;
    height: 50vw;
    max-height: 600px;
    border: 4px solid #000;
    flex-shrink: 0;

    &::before {
      height: 80%;
      bottom: 10%;
      right: -9px;
      width: 20px;
      background-color: #000;
      box-shadow: 2px 2px 12px #00000085;
      z-index: -1;
    }

    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;

      &:nth-child(1) {
        z-index: 10;
      }
    }
  }
  .content {
    padding: 45px;
    gap: 10px;
    justify-content: flex-end;

    h3 {
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      line-height: 1.15em;
      text-indent: 1em;
      text-align: justify;
    }
  }
}
</style>
