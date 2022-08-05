<template>
  <div class="block md:hidden h-56 bg-secondary p-5">
    <form action="" class="h-full w-full flex">
        <input type="text" class="m-auto w-full p-2 rounded" placeholder="Part Number(s), Keywords, or VIN">
    </form>
  </div>
</template>

<script>
export default {
    name: "MobileBar",
    data() {
        return {
        search: "",
        };
    },
    methods: {
        searchProduct() {
        this.$router.push({
            name: "search",
            params: {
            search: this.search,
            },
        });
        },
    },
};
</script>

<style scoped>
input{
    width: 100%;
}
</style>