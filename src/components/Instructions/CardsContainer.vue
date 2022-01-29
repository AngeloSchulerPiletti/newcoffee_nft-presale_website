<template>
    <div class="container">
        <card-left/>
        <card-right/>
    </div>
</template>

<script>
import CardLeft from "./CardLeft.vue";
import CardRight from "./CardRight.vue";

export default {
    components:{
        CardLeft,
        CardRight,
    }
}
</script>

<style>

</style>