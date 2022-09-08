<template>
  <div class="container py-10">
    <h1 class="text-lg text-left font-headers">Shop by Popular Brands</h1>
    <div class="brands mt-10">
      <div class="grid grid-cols-3 md:grid-cols-8 gap-1 md:gap-2">
        <div
          v-for="brand in brands"
          :key="brand.id"
          class="
            card
            brand-card
            shadow-sm
            cursor-pointer
            hover:shadow-md
            rounded
          "
        >
          <router-link
            tag="a"
            :to="{ name: 'ProductSearch', query: { brand: brand.slug } }"
          >
            <div class="card-img p-4 flex">
              <img
                :src="`http://res.cloudinary.com/ingen-cloud/${brand.img}`"
                class="m-auto w-full"
                alt=""
              />
            </div>
            <div
              class="
                card-content
                hover:shadow-md
                p-0.2
                md:px-2 md:py-1
                text-center
                bg-secondary-dark
              "
            >
              <p class="text-white sm:text-xs md:font-semibold md:text-sm">
                {{ brand.name }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Brands",
  data() {
    return {
      brands: [],
    };
  },
  methods: {
    ...mapActions("products", ["getBrands"]),
  },
  async created() {
    this.brands = await this.$store.state.products.brands;
  },
};
</script>

<style scoped>
.card-img {
  height: 120px;
}

.card-img img {
  max-height: 100px;
}
</style>