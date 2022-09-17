<template>
  <div class="navbar">
    <div class="flex layer-1 bg-secondary">
      <router-link to="/" tag="a" class="navbar-logo">
        <img src="@/assets/img/logo1.png" alt="" />
      </router-link>
      <div class="search-bar md:flex m-auto hidden">
        <input
          type="text"
          placeholder="Search for products"
          class="outline-none border-none rounded-l"
          v-model="search"
        />
        <div class="search-btn bg-info cursor-pointer rounded-r" @click="searchItem"><span><img class="w-5" src="@/assets/img/zoom.svg" alt=""></span></div>
      </div>
      <div class="help-section w-28 my-auto">
        <font-awesome-icon :icon="['fa', 'fa-question']" class="text-sm m-auto flex text-center text-white" />
        <p class="text-white text-xs font-bold underline cursor-pointer mt-1">Help</p>
      </div>
      <div class="dropdown">
        <div v-if="is_logged_in" class="navbar-menu flex h-full">
          <div class="flex my-auto text-white h-full">
            <!-- <div class="btn w-full bg-info p-2 sell-btn my-auto rounded text-black">Sell</div> -->
            <div class="item my-auto">
              <div class="option flex h-full justify-center items-center cursor-pointer">
                  <div class="my-auto h-8 text-left">
                      <p class="info text-xs capitalize">Hello, {{ user_fname }}</p>
                      <span class="text-xs my-auto font-bold">Account & Lists</span>
                  </div>
                  <div class="avatar_img"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="flex my-auto text-white h-full">
          <div class="item my-auto underline cursor-pointer">
            <div class="option flex h-full justify-center items-center cursor-pointer">
                <div class="my-auto h-8 text-left">
                    <p class="info text-xs capitalize">Howdy, Sign in</p>
                    <span class="text-xs my-auto font-bold">To Start Selling</span>
                </div>
            </div>
          </div>
        </div>
        <div class="dropdown-content text-left rounded">
          <div class="nav-arrow" style="position: absolute;"><div class="nav-arrow-inner"></div></div>
          <div class="dropdown-title text-sm font-bold mb-1">
            Your Account
          </div>
          <div class="dropdown-item">
            <a href="#" class="nav-link nav-item text-xs hover:text-secondary hover:underline">Saved Items</a>
            <a href="#" class="nav-link nav-item text-xs hover:text-secondary hover:underline">Vendor Profile</a>
            <a href="#" class="nav-link nav-item text-xs hover:text-secondary hover:underline">Upload Products</a>
            <a href="#" class="nav-link nav-item text-xs hover:text-secondary hover:underline">Switch Account</a>
            <a href="#" class="nav-link nav-item text-xs hover:text-secondary hover:underline">Sign Out</a>
          </div>
        </div>
      </div>
    </div>
    <div class="layer-2 bg-secondary-dark md:flex text-white hidden">
        <div class="context">
            <ul class="flex">
                <li class="mr-5 font-regular cursor-pointer hover:font-semibold">Top Deals</li>
                <router-link to="/products" tag="a" class="mr-5 font-regular cursor-pointer hover:underline">All Products</router-link>
                <router-link to="/brands" tag="a" class="mr-5 font-regular cursor-pointer hover:underline">Brands</router-link>
                <li class="mr-5 font-regular cursor-pointer hover:font-semibold">Saved</li>
                <router-link to="/products/upload" tag="a" class="mr-5 font-regular cursor-pointer hover:underline">Sell</router-link>
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
      user_fname: '',
      is_logged_in: false,
    };
  },
  methods: {
    searchItem() {
      // pass search in query params
      this.$router.push({ name: "ProductSearch", query: { query: this.search } });
    },
  },
  mounted() {
    // get user info
    this.$store.dispatch("userInfo");
    this.user_fname = this.$store.state.user.user_info.firstname;
    if(this.$store.state.user.user_info.firstname) {
      this.is_logged_in = true;
    }
  },
};
</script>

<style scoped>
.nav-arrow {
    border-style: solid;
    _border-style: dashed;
    border-width: 9px;
    border-color: transparent;
    border-top-width: 0;
    border-bottom: 9px solid #f1f1f1;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: -9px;
}

.dropdown:hover .dropdown-content {display: block;}

.nav-link:hover{
  text-decoration: underline !important;
  color: #FF8200 !important;
}

.dropdown-content a {
  color: black;
  padding: 4px 2px;
  text-decoration: none;
  display: block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 100;
  padding: 10px 20px;
}

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
    width: 200px;
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

.sell-btn{
  width: 140px;
  height: 40px;
  padding: 8px 20px;
}

.item{
    height: 100%;
}

.avatar_img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fff;
  margin-left: 10px;
}
</style>