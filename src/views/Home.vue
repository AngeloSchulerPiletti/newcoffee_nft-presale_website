<template>
  <div class="home">
    <presentation><Logo-component /></presentation>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";
import Presentation from "@/components/Presentation.vue";

export default defineComponent({
  name: "Home",
  components: {
    "Logo-component": Logo,
    Presentation,
  },
});
</script>
