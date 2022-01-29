<template>
    <header class="flex_r">
        <img src="@/assets/images/transparent-logo.png" alt="logo da new coffee">
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
    justify-content: center;

    img{
        width: 100px;
        object-fit: cover;
        background-color: #303030;
        padding: 4px 12px 6px 12px;
        box-shadow: 0 0 10px #000000D0;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
}
</style>