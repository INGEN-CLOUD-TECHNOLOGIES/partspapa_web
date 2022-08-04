<template>
  <div class="home">
    <Navbar />
    <!-- // hero section -->
    <div class="hero-banner">
      <img src="@/assets/img/homebanner3.jpg" alt="" />
    </div>

    <!-- // category section -->
    <div class="section flex container justify-between mt-6">
      <CategoryBar />
      <div class="w-full">
        <div
          class="
            ads
            w-full
            rounded-md
            flex
            place-content-center
            content-center
            py-3
          "
        >
          <img
            src="@/assets/img/promo.png"
            class="w-full h-100 rounded-md"
            alt=""
          />
          <!-- <div class="ad-content m-auto text-lg">Ad Banner</div> -->
        </div>
        <div class="filter w-full shadow-md py-3 rounded-md">
          <p class="title center text-black font-bold text-sm">
            Choose Vehicle to find the exact parts
          </p>
          <form action="" class="py-5 flex justify-between px-10 form-group">
            <select name="Car Make" id="make">
              <option value="">Select Make</option>
              <option v-for="brand in brands" :value="brand.id" :key="brand.id">
                {{ brand.name }}
              </option>
            </select>
            <select name="Year" id="year">
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
            <select name="Model" id="model" class="cursor-not-allowed"></select>
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
        <div class="grid grid-cols-8 gap-2">
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
                px-2
                py-1
                text-center
                bg-secondary
              "
            >
              <p class="text-white font-semibold text-sm">{{ brand.name }}</p>
            </div>
          </div>
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
      <div class="grid grid-cols-5 gap-5 mt-5">
        <div class="card" v-for="part in parts" :key="part.id">
          <div
            class="cursor-pointer text-center category-card relative"
            :style="`
              background: url(http://res.cloudinary.com/ingen-cloud/${part.img})
                no-repeat center center;
            `"
          >
            <div class="overlay"></div>
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
      <div class="grid grid-cols-2 gap-5 mt-5">
        <div v-for="prod in prods" :key="prod.id" class="">
          <ProductCard />
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    ProductCard,
    Footer,
    CategoryBar,
  },
  data() {
    return {
      prods: [1, 2, 3, 4, 5, 6, 7],
      categories: this.$store.state.categories,
      brands: this.$store.state.products.brands,
      parts: this.$store.state.products.parts,
    };
  },
  methods: {
    ...mapActions("products", ["getBrands", "getParts"]),
  },
  mounted() {
    // this.fetchBrands();
    this.getBrands();
    this.getParts();
  },
};
</script>

<style scoped>
.ads {
  width: 100%;
  height: 280px;
}

.filter {
  height: 120px;
}

.section {
  margin: 30px auto;
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

.brand-card {
  width: 150px;
}

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
  margin: auto 20px;
}

.card-img img {
  max-height: 100px;
}

.form-group {
  width: 800px;
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
</style>