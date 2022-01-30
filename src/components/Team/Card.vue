<template>
  <div class="card flex_c">
    <!-- <picture> -->
    <!-- <source sizes="" srcset="" type="image/jpg" />  -->
    <img
      :src="`./images/team/${cardData?.pictureName}`"
      :alt="`foto de ${cardData?.name}`"
    />
    <!-- </picture> -->
    <div class="content flex_c">
      <h6 class="flex_c">
        {{ cardData?.name }}
        <span class="role">{{ cardData?.role }}</span>
      </h6>
      <p>{{ cardData?.about }}</p>
      <!-- <div class="social grid">
        <a :href="cardData?.linkedinUrl"
          ><linkedin-icon v-if="cardData?.linkedinUrl"
        /></a>
        <a :href="cardData?.instagramUrl"
          ><instagram-icon v-if="cardData?.instagramUrl"
        /></a>
        <a :href="cardData?.twitterUrl"
          ><twitter-icon v-if="cardData?.twitterUrl"
        /></a>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { CardInterface } from "./TeamContainer.vue";
// import InstagramIcon from "@/components/icons/InstagramIcon.vue";
// import TwitterIcon from "@/components/icons/TwitterIcon.vue";
// import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";

export default {
  props: {
    cardData: {
      type: Object as PropType<CardInterface>,
      required: true,
    },
  },
  components: {
    // InstagramIcon,
    // TwitterIcon,
    // LinkedinIcon,
  },
};
</script>

<style lang="scss" scoped>
$border: 8px;

.card {
  border-radius: $border;
  background-color: #f0f0f0;
  box-shadow: 0 0 12px #000000b0;

  img {
    border-top-left-radius: $border;
    border-top-right-radius: $border;
    max-width: 100%;
    object-fit: cover;
  }
  .content {
    flex-grow: 1;

    h6 {
      text-align: center;
      padding: 20px 20px 10px 20px;
      font-size: 24px;

      .role {
        font-size: 0.6em;
        margin-top: 0.4em;
        font-weight: 500;
      }
    }
    p {
      flex-grow: 1;
      padding: 10px 20px 20px 20px;
      text-align: justify;
      background-color: #9b6f5a;
      border-bottom-left-radius: $border;
      border-bottom-right-radius: $border;
      font-weight: 200;
      color: #f0f0f0;
    }
  }
}
</style>
