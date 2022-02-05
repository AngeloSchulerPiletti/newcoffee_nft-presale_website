import { ComponentCustomProperties } from "vue";

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    stage: number | null,
    choosedBau: {price: string | null, type: string | null},
  }
}