<template>
  <div class="container mx-auto py-10">
    <loader v-if="showloader" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2.5" bg="#343a40" objectbg="#999793" opacity="99" disableScrolling="false" name="dots"></loader>
    <BreadCrumbs :crumbs='crumbs'/>
    <div class="flex">
      <FilterBar class="sticky top-4" />
      <div class="window px-0.5 md:px-5 w-full">
        <p class="text-left my-5" v-if="products.length>0"><b>{{ products.length }} </b>results for search: <b>{{ searchTerm }}</b></p>
        <p class="text-left my-5" v-else>No results matching: <b>{{ searchTerm }}</b></p>
          <div v-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-1 gap-2">
            <div v-for="prod in products" :key="prod.id">
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
      <div class="ad-section rounded-md hidden xl:block">

      </div>
    </div>
  </div>
</template>

<script>
// import vueStickySidebar from "vue-sticky-sidebar";
import LoadingDots from '@/components/Misc/Preloader.vue';
import LongProductCard from "@/components/Products/LongProductCard.vue";
import BreadCrumbs from "@/components/Base/BreadCrumbs.vue";
import { getAPI } from "@/utils/apis/axios";
import FilterBar from "@/components/Products/FilterBar.vue";
export default {
  name: "Product-Listing",
  components: {
    FilterBar,
    LongProductCard,
    BreadCrumbs,
    LoadingDots,
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
        {
          id: 2,
          name: "Search",
          link: "/search",
        },
      ],
      products: [],
      categories: [],
      brands: [],
      filters: {
        category: "",
        brand: "",
        price: "",
      },
      searchTerm: "",
      query_key: "",
    };
  },
  watch: {
    $route: function () {
      this.getItemsInQuery()
    },
  },
  methods: {
    async getSearchedProducts() {
      this.showloader = true;
      const { data } = await getAPI(
        `/api/products/search/?${this.query_key}=${this.searchTerm}`
      );
      this.products = data;
      this.showloader = false;
    },
    getItemsInQuery() {
      let query_data = this.$route.query;
      for (let key in query_data) {
        if (query_data.hasOwnProperty(key)) {
          this.query_key = key;
          this.searchTerm = query_data[key];
        }
      }
      this.getSearchedProducts();
    },

  },
  mounted() {
    // await query data
    this.getItemsInQuery();
  },
};
</script>

<style scoped>
.ad-section{
  width: 400px;
  height: 600px;
  background-color: #b5b5b5;
}
.data {
  display: unset !important;
}
</style>