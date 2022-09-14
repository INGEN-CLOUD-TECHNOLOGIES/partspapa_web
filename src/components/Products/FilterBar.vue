<template>
  <div class="card rounded-md shadow-sm bg-white py-5 hidden lg:block">
    <div class="section px-5">
        <h1 class="uppercase text-left font-bold text-sm"><font-awesome-icon icon="fa-solid fa-list-ul" /> Categories</h1>
        <input type="text" class="brand-search outline-none w-full h-8 rounded-lg px-2 mt-2 py-1" placeholder="Search brands">
        <div class="scrolls">
            <ul class="lists text-left" v-for="brand in brands" :key="brand.id">
                <li class="h-8 my-auto flex hover:bg-light-gray pl-2">
                    <input type="checkbox" name="brand" :id="`${brand.name}`" class="chk mr-2"><label :for="`${brand.name}`" class="content m-auto w-full cursor-pointer">{{ brand.name }}</label>
                </li>
            </ul>
        </div>
        <!-- <router-link tag="a" to="/brands" class="text-primary text-right w-full cursor-pointer">See All</router-link> -->
    </div>

    <div class="divider"></div>

    <!-- price filter -->
    <div class="section px-5">
        <div class="flex place-content-between">
            <h1 class="uppercase text-left text-sm font-bold">Price</h1>
            <div class="link text-xs font-bold text-secondary cursor-pointer uppercase hover:underline">Apply</div>
        </div>
        <div class="price-filter flex mt-4 place-content-between">
            <div class="price-input">
                <input type="number" min="2" class="outline-none py-2 rounded px-2 text-sm" placeholder="Min">
            </div>
            <div class="price-input">
                <input type="number" max="1534876" class="input outline-none py-2 rounded px-2 text-sm" placeholder="Max">
            </div>
        </div>
    </div>

    <div class="divider"></div>

    <!-- price filter -->
    <div class="section px-5">
        <h1 class="uppercase text-left text-sm font-bold">Condition</h1>
        <div class="condition-filter mt-4 text-left">
            <div class="condition-input">
                <input type="checkbox" class="checkbox" id="new">
                <label for="new" class="text-sm font-medium ml-2">New <span class="text-grey-light">- 400 ads</span></label>
            </div>
            <div class="condition-input">
                <input type="checkbox" class="checkbox" id="used">
                <label for="used" class="text-sm font-medium ml-2">Used <span class="text-grey-light">- 400 ads</span></label>
            </div>
        </div>
    </div>

    <div class="divider"></div>

    <!-- rating section -->
    <div class="section px-5">
        <h1 class="uppercase text-left text-sm font-bold">Product Rating</h1>
        <ul class="ratings mt-4">
            <li class="mb-3 flex place-content-around">
                <input type="radio" name="4-star" id="">
                <div class="icons">
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                </div>
                <p class="ml-5">& above</p>
            </li>
            <li class="mb-3 flex place-content-around">
                <input type="radio" name="4-star" id="">
                <div class="icons">
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                </div>
                <p class="ml-5">& above</p>
            </li>
            <li class="mb-3 flex place-content-around">
                <input type="radio" name="4-star" id="">
                <div class="icons">
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                </div>
                <p class="ml-5">& above</p>
            </li>
            <li class="mb-3 flex place-content-around">
                <input type="radio" name="4-star" id="">
                <div class="icons">
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-secondary"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                    <font-awesome-icon :icon="['fas', 'star']" class="text text-grey-light"/>
                </div>
                <p class="ml-5">& above</p>
            </li>
        </ul>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FilterBar",
  data() {
    return {
        price_min: 2,
        price_max: 1534876,
        brands: this.$store.state.products.brands
    };
  },
  methods: {
    ...mapActions("products", ["getBrands", "getParts", "getLatestProducts"]),
    // get 6 brands
    // sliceBrands(){
    //     let brands = this.$store.state.products.brands
    //     let _brands = brands.slice()
    // }

  },
  beforeMount() {
    this.getBrands();
    this.getParts();
    this.getLatestProducts();
  },
};
</script>

<style scoped>
.card{
    height: 800px !important;
    width: 400px;
}

.price-input input{
    width: 100px;
    border: 1px solid #E5E7EB;
    height: 35px;
}

.divider{
    border: 2px solid #F5F5F5;
    margin: 25px 0;
}

.condition-input{
    margin-bottom: 10px;
}

.icons{
    margin-left:8px;
}

.scrolls{
    height: 200px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scrollbar-color: #c7c7cd transparent;
}

.scrolls:hover{
    scrollbar-color: #c7c7cd transparent;
}

.brand-search{
    margin: 10px 0;
    border: 1px solid #535353;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}

input[type="checkbox"],
input[type="radio"] {
    background: #FF9B00 !important;
    accent-color: #222240;
}

.chk:checked:before {
   background-color: #FF9B00 !important;
}
</style>