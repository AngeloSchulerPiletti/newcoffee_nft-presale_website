<template>
  <div class="card">
    <h3>{{title}}</h3>
    <div class="info">
      <p>{{paragraph}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props:{
        paragraph: String,
        title: String,
    }
});
</script>

<style lang="scss" scoped>
.card{
    h3{
        font-size: 30px;
        margin-bottom: 18px;
    }
    .info{
        background-color: #d1a794;
        border-radius: 15px;
        padding: 16px 32px;

        p{
            font-size: 18px;
            text-align: justify;
            text-indent: 2em;
            line-height: 1.3em;
        }
    }
}
</style>
