<template>
  <div class="container mx-auto py-10">
    <BreadCrumbs/>
    <div class="flex">
      <FilterBar class="sticky top-4 w-72" />
      <div class="window px-5">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-2">
          <div v-for="prod in products" :key="prod.id" class="">
              <LongProductCard
                :id="prod.id"
                :title="prod.name"
                :description="prod.description"
                :price="prod.price"
                :category="prod.category"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import vueStickySidebar from "vue-sticky-sidebar";
import { mapGetters, mapActions } from "vuex";
import LongProductCard from "@/components/Products/LongProductCard.vue";
import BreadCrumbs from "@/components/Base/BreadCrumbs.vue";

import FilterBar from "@/components/Products/FilterBar.vue";
export default {
  name: "Product-Listing",
  components: {
    FilterBar,
    LongProductCard,
    BreadCrumbs
  },
  data() {
    return {
      products: [],
      categories: [],
      brands: [],
      filters: {
        category: "",
        brand: "",
        price: "",
      },
    };
  },
  methods: {
    ...mapActions("products", ["getProducts"]),
  },
  async created() {
    this.products = await this.$store.state.products.products;
    this.categories = this.$store.state.categories;
    this.brands = this.$store.state.products.brands;
  },
  mounted() {
    this.getProducts();
    this.products = this.$store.state.products.products;
  },
};
</script>

<style scoped>
.data {
  display: unset !important;
}
</style>