<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    enable-background="new 0 0 64 64"
    xml:space="preserve"
  >
    <path
      fill="none"
      stroke="#000000"
      stroke-width="2"
      stroke-miterlimit="10"
      d="M48,17c0-8.836-7.164-16-16-16S16,8.164,16,17v30
	c0,8.836,7.164,16,16,16s16-7.164,16-16V17z"
    />
    <line
      fill="none"
      stroke="#000000"
      stroke-width="2"
      :class="moveIt"
      stroke-miterlimit="10"
      x1="32"
      y1="10"
      x2="32"
      y2="18"
    />
  </svg>
</template>

<script>
export default {
    data(){
        return{
            moveIt: "",
        }
    },
    mounted(){
        this.moveIt = "moveIt";
    }
};
</script>

<style lang="scss" scoped>
@keyframes scrolling{
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(15%);
    }
    100%{
        transform: translateY(0);
    }
}

svg{
    line.moveIt{
        animation: scrolling 800ms ease 1s 8 normal both;
    }
}
</style>
