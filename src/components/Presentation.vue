<template>
  <div class="container">
    <img
      id="donnut"
      class="foods"
      src="@/assets/images/game-itens/food18.webp"
    />
    <img
      id="hotdog"
      class="foods"
      src="@/assets/images/game-itens/food11.webp"
    />

    <div class="header"><slot></slot></div>
    <div class="right_nav shadow-3">
      <a target="_blank" href="https://suporte-2.gitbook.io/new-coffee/"
        >whitepaper</a
      >
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
        <h6 class="title-1">Pre sale available!</h6>
        <button @click="buyModal" class="btn-1 pseudo-1 no-content">
          buy your chest
        </button>
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
  methods: {
    buyModal() {
      if (this.$store.state.walletAddress) {
        this.$store.commit("openModal");
      } else {
        let button = window.document.querySelector("#buy-container");
        button = button
          ? button
          : window.document.querySelector("#go-to-desktop");

        var screenHeight = window.innerHeight;
        var buttonY = button.offsetTop;
        var buttonHeight = button.offsetHeight;
        const finalY = buttonY - (screenHeight / 2 - buttonHeight / 2);

        var y = 1;
        const multiple = 1.03;
        var interval = setInterval(() => {
          window.scrollTo(0, y);
          y *= multiple;
          y++;
          y >= finalY ? clearInterval(interval) : null;
        }, 1);
      }
    },
  },
  mounted() {
    var video = this.$el.querySelector("video");
    video.play();
  },
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

      .btn-1 {
        margin-top: 18px;
        border: 3px solid $white;
        font-size: 25px;
        color: $white;
        font-weight: 400;
        padding: 8px 16px;
        cursor: pointer;

        &::before {
          left: 0;
          top: 0;
          bottom: 0;
          right: 100%;
          background-color: $white;
          transition: right 400ms;
        }

        &:hover::before {
          right: 0;
        }
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

@media (max-width: 750px) {
  .container {
    #donnut {
      width: 42vw;
      height: 42vw;
    }
    #hotdog {
      width: 54vw;
      height: 54vw;
    }

    .video-container {
      .info-container {
        padding: 20px;

        .btn-1 {
          font-size: 20px;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .container {
    #donnut {
      width: 58vw;
      height: 58vw;
    }
    #hotdog {
      width: 70vw;
      height: 70vw;
    }

    .video-container {
      .info-container {
        padding: 10px;
      }
    }
  }
}
</style>
