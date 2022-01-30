<template>
  <div class="home">
    <presentation><Logo-component /></presentation>
    <cards-container/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";
import Presentation from "@/components/Presentation.vue";
import CardsContainer from "@/components/Instructions/CardsContainer.vue";

export default defineComponent({
  name: "Home",
  components: {
    "Logo-component": Logo,
    Presentation,
    CardsContainer,
  },
});
</script>
