<template>
  <div class="container">
    <img
      id="donnut"
      class="foods"
      src="@/assets/images/game-itens/food18.png"
    />
    <img
      id="hotdog"
      class="foods"
      src="@/assets/images/game-itens/food11.png"
    />

    <div class="header"><slot></slot></div>
    <div class="right_nav">
      <a href="#">whitepaper</a>
    </div>
    <div class="video-container">
      <video
        src="@/assets/videos/trailer-example-720.mp4"
        autoplay
        loop
        muted
      ></video>
      <div class="blur in"></div>
      <div class="info-container in">
        <h6 class="title-1">Estamos em Pré-venda!</h6>
        <button class="btn-1">comprar baú</button>
      </div>
      <div class="mouse-container in">
        <mouse-scroll />
      </div>
    </div>
  </div>
</template>

<script>
import MouseScroll from "@/components/icons/MouseScroll.vue";
export default {
  components: {
    MouseScroll,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  #donnut {
    left: 0;
    width: 20vw;
    height: 20vw;
    transform: translate(-20%, 55%) rotate(-30deg);
  }
  #hotdog {
    right: 0;
    width: 30vw;
    height: 30vw;
    transform: translate(20%, 55%) rotate(30deg);
  }

  .header {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
  }
  .right_nav {
    position: absolute;
    z-index: 2;
    right: 0;
    border-bottom-left-radius: 10px;
    background-color: $black;
    color: $white;
    font-family: "Supermercado One", cursive;
    padding: 8px 20px;
    box-shadow: 0 0 10px #000000d0;
  }
  .video-container {
    position: relative;
    width: 100%;
    height: 100vh;

    video {
      position: absolute;
      object-fit: cover;
      height: 100vh;
      width: 100%;
    }
    .in {
      position: absolute;
    }
    .blur {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      backdrop-filter: blur(8px);
      background-color: #00000070;
    }
    .info-container {
      top: 45%;
      left: 10%;
      color: $white;
      background: radial-gradient(
        closest-side,
        #00000080 30%,
        #00000040 70%,
        transparent
      );
      padding: 30px 60px;

      button {
        margin-top: 18px;
      }
    }
    .mouse-container {
      bottom: 20px;
      right: 50%;
      transform: translateX(50%);

      svg:deep() {
        path,
        line {
          stroke: $white;
        }
      }
    }
  }
}
</style>
