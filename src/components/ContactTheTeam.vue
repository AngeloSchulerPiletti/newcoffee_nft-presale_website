<template>
  <div class="button-container flex_c">
    <button @click="sendEmail" class="contact-button pseudo-1 title-1">
      contact the team
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    sendEmail() {
      window.location.href = "mailto:suporte@new-coffee.io";
    },
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  align-items: center;
  .contact-button {
    margin-top: 150px;
    border: 3px solid #000;
    padding: 6px 20px;
    color: transparent;
    background: #00000020;

    &::before {
      content: "contact the team";
      color: #000;
      outline: 3px solid #000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
      background-color: $bege-fraco;
    }

    &:hover::before {
      transform: translate(12px, -12px);
    }
  }
}
</style>
