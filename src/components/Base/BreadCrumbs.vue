<template>
    <div class="flex my-5">
        <div class="crumb bg-dark-gray rounded-lg hover:underline cursor-pointer text-xs font-normal"><p class="link">Home</p></div>
        <span class="mx-2 nav">></span>
        <div class="crumb bg-dark-gray rounded-lg hover:underline cursor-pointer text-xs font-normal"><p class="link">Products</p></div>
        <!-- <div class="crumb bg-dark-gray rounded-lg hover:underline cursor-pointer"><p class="link">Home</p></div> -->
    </div>
</template>

<script>
export default {
    name: "BreadCrumbs",
    props: {
        crumbs: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>

.crumb{
    padding: 5px;
    min-width:80px;
}
</style>