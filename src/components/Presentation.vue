<template>
  <div class="container">
    <div class="header"><slot></slot></div>
    <div class="video-container">
      <video
        src="@/assets/videos/trailer-example-720.mp4"
        type="video/mp4"
        autoplay
        loop
        muted
      ></video>
      <div class="blur in"></div>
      <div class="info-container in">
        <h6>Estamos em Pré-venda!</h6>
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

  .header {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
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
      color: #f0f0f0;
      font-size: 50px;
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
          stroke: #f0f0f0;
        }
      }
    }
  }
}
</style>
