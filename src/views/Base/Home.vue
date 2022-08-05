<template>
  <div class="home">
    <Navbar />
    <!-- mobile bar -->
    <MobileBar />
    <!-- // hero section -->
    <div class="hero-banner relative hidden md:block">
        <div class="overlay"></div>
        <div class="banner-content w-1/2 pl-16 pr-32 text-left flex flex-col h-full place-content-center text-white z-10 absolute">
            <div class="caption font-headers text-lg font-semibold mb-10">Everything you need to sell online. Trusted by millions of businesses worldwide.</div>
            <router-link to="/register" tag='div' class="btn bg-info rounded px-4 py-2 w-32 text-black cursor-pointer">Start Selling</router-link>
        </div>
    </div>

    <!-- // category section -->
    <div class="section flex container justify-between mt-6">
      <CategoryBar class="hidden md:block" />
      <div class="w-full">
        <div
          class="
            w-full
            rounded-md
            block
            md:flex
            place-content-center
            content-center
            py-1
            md:py-3 
            md:h-72
          "
        >
          <img
            src="@/assets/img/promo.png"
            class="w-full h-100 rounded-md mx-auto"
            alt=""
          />
          <!-- <div class="ad-content m-auto text-lg">Ad Banner</div> -->
        </div>
        <div class="md:h-32 w-full shadow-md py-3 rounded-md">
          <p class="title center text-black font-bold text-sm">
            Choose Vehicle to find the exact parts
          </p>
          <form action="" class="py-5 block md:flex justify-between px-10 form-group max-w-3xl gap-4">
            <select name="Car Make" class="md:w-full mb-20" id="make">
              <option value="">Select Make</option>
              <option v-for="brand in brands" :value="brand.id" :key="brand.id">
                {{ brand.name }}
              </option>
            </select>
            <div class="h-5 md:hidden"></div>
            <select name="Year" id="year" class="md:full mt-6">
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </select>
            <div class="h-5 md:hidden"></div>
            <select name="Model" id="model" class="cursor-not-allowed md:w-full my-6"></select>
          </form>
        </div>
      </div>
    </div>

    <!-- brands section -->
    <div class="section container">
      <div class="border-b header-title">
        <h1
          class="
            title
            text-left
            font-headers font-regular
            text-black text-md
            border-b-4 border-info
            section-title
          "
        >
          Shop by Brands
        </h1>
      </div>
      <div class="brands mt-5">
        <div class="grid grid-cols-3 md:grid-cols-8 gap-1 md:gap-2">
          <!-- brand data -->
          <!-- {{this.$store.state.brands}} -->
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
                md:px-2
                md:py-1
                text-center bg-secondary-dark
              "
            >
              <p class="text-white sm:text-xs md:font-semibold md:text-sm">{{ brand.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- brands section -->
    <div class="section">
      <div class="border-b header-title container">
        <h1
          class="
            title
            text-left
            font-headers
            text-black
            font-regular
            text-md
            border-b-4 border-info
            section-title
          "
        >
          Shop by Parts
        </h1>
      </div>
      <div class="slide-sec flex flex-row md:block">
        <div class="flex md:grid overflow-x-auto flex-row mx-auto md:grid-cols-5 gap-1 md:gap-5 mt-5">
            <div class="part-card" v-for="part in parts" :key="part.id">
            <div
                class="cursor-pointer text-center category-card relative bg-contain bg-no-repeat"
                :style="`
                background: url(http://res.cloudinary.com/ingen-cloud/${part.img})
                    no-repeat center center;
                `"
            >
                <div class="overlay rounded-md"></div>
                <p
                class="
                    text-white text-base
                    font-semibold
                    absolute
                    bottom-0
                    text-center
                    w-full
                    mb-10
                    z-10
                "
                >
                {{ part.name }}
                </p>
            </div>
            </div>
        </div>
      </div>
    </div>

    <!-- // product section -->
    <div class="section container">
      <div class="border-b header-title">
        <h1
          class="
            title
            text-left
            font-headers
            text-black
            font-regular
            text-md
            border-b-4 border-info
            section-title
          "
        >
          Featured Products
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div v-for="prod in latest_products" :key="prod.id" class="">
          <ProductCard :title="prod.name" :description="prod.description" :price="prod.price"/>
        </div>
      </div>
    </div>

    <!-- // footer section -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Base/NavBar.vue";
import ProductCard from "@/components/Products/ProductCard.vue";
import Footer from "@/components/Base/Footer.vue";
import CategoryBar from "@/components/Products/CategoryBar.vue";
import MobileBar from '@/components/Base/MobileBar.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    ProductCard,
    Footer,
    CategoryBar,
    MobileBar
  },
  data() {
    return {
      prods: [1, 2, 3, 4, 5, 6],
      categories: this.$store.state.categories,
      brands: this.$store.state.products.brands,
      parts: this.$store.state.products.parts,
      latest_products: this.$store.state.products.latest_products,
    };
  },
  methods: {
    ...mapActions("products", ["getBrands", "getParts", "getLatestProducts"]),
  },
  mounted() {
    this.getBrands();
    this.getParts();
    this.getLatestProducts();
  },
};
</script>

<style scoped>
.hero-banner{
    background-image: url("../../assets/img/homebanner3.jpg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    width: 100%;
}

.section {
  padding-top: 30px;
  padding-bottom: 30px;
}

.section-title {
  width: 180px;
  line-height: 40px;
}

.header-title {
  border-bottom: 1px solid #ccc;
}

/* .brand-card {
  width: 150px;
} */

.card-img {
  height: 120px;
}

select {
    width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  background: #fff;
  margin: auto;
}

.card-img img {
  max-height: 100px;
}

.form-group {
  /* width: 800px; */
  margin: auto;
}

.category-card {
  height: 300px;
  background-size: contain !important;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

@media screen and (max-width: 480px) {
  .part-card {
    /* height: 200px; */
    /* width: 250px; */
    border-radius: 5px;
  }

  .category-card {
    width: 200px;
    border-radius: 10px;
    margin-left: 10px;
  }
}
</style>