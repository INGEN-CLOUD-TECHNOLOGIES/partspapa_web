<template>
  <div class="navbar">
    <div class="flex layer-1 bg-secondary">
      <router-link to="/" tag="a" class="navbar-logo flex-auto">
        <img src="@/assets/img/logo1.png" alt="" />
      </router-link>
      <!-- <div class="flex menu my-auto flex-initial ml-5">
        <img src="@/assets/img/menu.svg" class="h-10" alt=""><span class="ml-2 text-sm text-white my-auto">Menu</span>
      </div> -->
      <div class="search-bar md:flex flex-initial my-auto hidden">
        <input
          type="text"
          placeholder="Search for products"
          class="outline-none border-none rounded-l"
          v-model="search"
        />
        <div class="search-btn bg-info cursor-pointer rounded-r" @click="searchItem"><span><img class="w-5" src="@/assets/img/zoom.svg" alt=""></span></div>
      </div>
      <div class="navbar-menu flex-auto">
        <ul class="flex my-auto text-white h-full list-none">
          <li class="item my-auto mx-10">
            <div class="option flex h-full justify-center items-center cursor-pointer">
                <div class="my-auto flex h-8">
                    <img src="@/assets/img/arrow_drop_down.svg" alt="" class="h-5 mr-2" />
                    <span class="text-sm">Account</span>
                </div>
            </div>
          </li>
          <!-- <li class="item my-auto relative w-9">
            <img class="h-12" src="@/assets/img/shopping-bag.svg" alt="">
            <span class="count font-bold text-xs bg-info">1</span>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="layer-2 bg-secondary-dark md:flex text-white hidden">
        <div class="context">
            <ul class="flex">
                <li class="mr-5 font-regular cursor-pointer hover:font-semibold">Top Deals</li>
                <router-link to="/products" tag="a" class="mr-5 font-regular cursor-pointer hover:underline">All Products</router-link>
                <router-link to="/brands" tag="a" class="mr-5 font-regular cursor-pointer hover:underline">Brands</router-link>
                <li class="mr-5 font-regular cursor-pointer hover:font-semibold">Saved</li>
                <li class="mr-5 font-regular cursor-pointer hover:font-semibold">Sell</li>
                <li class="mr-5 font-regular cursor-pointer hover:font-semibold">Customer Service</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchItem() {
      // pass search in query params
      this.$router.push({ name: "ProductSearch", query: { query: this.search } });
    },
  },
};
</script>

<style scoped>
/* .item img{
    width: 60px;
    height: 50px;
} */
.count{
    position: absolute;
    top: -1px;
    right: -5px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    color: #000;
}

.navbar-logo img {
  /* width: 200px !important; */
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-logo{
    height: 60px;
}

.layer-1 {
  /* height: 100px; */
  padding: 5px 50px;
}

.layer-2{
    padding: 2.5px 50px;
}

.search-bar {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.search-btn {
  width: 65px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar input {
  width: 600px;
  height: 40px;
  padding: 8px 20px;
}

.item{
    height: 100%;
}
</style>