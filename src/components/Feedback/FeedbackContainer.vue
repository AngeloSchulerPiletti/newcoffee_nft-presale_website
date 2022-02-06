<template>
  <transition-group name="feedback" tag="div" class="container">
    <feedback-modal
      v-for="(feedback, index) in getFeedbacks"
      :key="index"
      :description="feedback.description"
      :isError="feedback.isError"
      :index="index"
    />
  </transition-group>
</template>

<script>
import FeedbackModal from "./FeedbackModal.vue";
export default {
  computed: {
    getFeedbacks() {
      return this.$store.state.feedbacks;
    },
  },
  components: {
    FeedbackModal,
  },
};
</script>

<style lang="scss" scoped>
.feedback-enter-active,
.feedback-leave-active {
  transition: transform 400ms;
}
.feedback-enter-from,
.feedback-leave-to {
  transform: translateX(110%);
}

.container {
  position: fixed;
  z-index: 100000;
  top: 40px;
  right: 0;
}
</style>
