<template>
  <div class="feedback flex_r shadow-2" @click="close">
    <div class="icon">
      <icon-error v-if="isError" />
      <icon-check v-else />
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
import IconCheck from "@/components/icons/IconCheck.vue";
import IconError from "@/components/icons/IconError.vue";

export default {
  data() {
    return {
      closeTimeout: setTimeout,
    };
  },
  mounted() {
    this.closeTimeout = setTimeout(() => {
      this.$store.commit("removeFeedback", this.index);
    }, 6000);
  },
  methods: {
    close() {
      clearTimeout(this.closeTimeout);
      this.$store.commit("removeFeedback", this.index);
    },
  },
  props: {
    isError: Boolean,
    description: String,
    index: Number,
  },
  components: {
    IconCheck,
    IconError,
  },
};
</script>

<style lang="scss" scoped>
.feedback {
  outline: 3px solid #000;
  width: 300px;
  padding: 7px 30px 7px 7px;
  gap: 10px;
  background-color: $bege-fraco;
  cursor: pointer;

  .description {
    padding-top: 5px;
    font-weight: 500;
  }
}
</style>
