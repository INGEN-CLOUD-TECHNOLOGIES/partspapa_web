<template>
  <div class="md:container mx-auto py-10">
    <loader v-if="showloader" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2.5" bg="#343a40" objectbg="#999793" opacity="99" disableScrolling="false" name="dots"></loader>
    <BreadCrumbs :crumbs="crumbs" />
    <div class="flex">
      <FilterBar class="sticky top-4" />
      <div class="window px-5 w-full">
        <p class="text-left my-5"><b>{{ products.length }}+ </b>ads found</p>
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
      <div class="hidden xl:block ad-section rounded-md cursor-pointer">


      </div>
    </div>
  </div>
</template>

<script>
// import vueStickySidebar from "vue-sticky-sidebar";
import { getAPI } from '@/utils/apis/axios.js'
import { mapGetters, mapActions } from "vuex";
import LongProductCard from "@/components/Products/LongProductCard.vue";
import BreadCrumbs from "@/components/Base/BreadCrumbs.vue";

import FilterBar from "@/components/Products/FilterBar.vue";
export default {
  name: "Product-Listing",
  components: {
    FilterBar,
    LongProductCard,
    BreadCrumbs,
  },
  data() {
    return {
      showloader: true,
      crumbs: [
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
      products: [],
      categories: [],
      brands: [],
      pagination_count: 3,
      filters: {
        category: "",
        brand: "",
        price: "",
      },
    };
  },
  methods: {
    ...mapActions("products", ["getProducts"]),

    fetchProducts(){
      // use pagination
      getAPI("/api/products?limit=10&offset=0")
        .then((res) => {
          this.products = res.data.results;
          this.showloader = false;
        })
        .catch((err) => {
          console.log(err);
        });
        return this.products;
    }

  },
  async created() {
    this.products = await this.fetchProducts();
    this.categories = this.$store.state.categories;
    this.brands = this.$store.state.products.brands;
    if (this.products.length > 0) {
      this.showloader = false;
    }
  },
};
</script>

<style scoped>
.ad-section{
  width: 400px;
  /* height: 266px; */
  background: url('../../assets/img/ad.png') no-repeat;
  background-size: contain;
}
.data {
  display: unset !important;
}
</style>