<template>
    <div class="flex my-5">
        <!-- <div class="crumb bg-dark-gray rounded-lg hover:underline cursor-pointer text-xs font-normal"><p class="link">Home</p></div>
        <span class="mx-2 nav">></span>
        <div class="crumb bg-dark-gray rounded-lg hover:underline cursor-pointer text-xs font-normal"><p class="link">Products</p></div> -->

        <div v-for="crumb in crumbs" :key="crumb.id" class="flex my-5">
            <span class="mx-2 nav" v-if="crumb.id != 0">></span>
            <div class="crumb bg-dark-gray rounded-lg hover:underline cursor-pointer text-xs font-normal"><p class="link">{{ crumb.name }}</p></div>

        </div>
    </div>
</template>

<script>
export default {
    name: "BreadCrumbs",
    props: {
        crumbs: {
            type: Array,
            default: () => [
                {   
                    id: 0,
                    name: "Home",
                    link: "/",
                },
                {
                    id: 1,
                    name: "Products",
                    link: "/products",
                },
            ],
        }
    },
    methods:{
    }
}
</script>

<style scoped>

.crumb{
    padding: 5px;
    min-width:80px;
}
</style>