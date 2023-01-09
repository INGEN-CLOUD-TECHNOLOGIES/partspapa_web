<template>
  <router-link tag="a" class="card bg-white hover:shadow-sm rounded flex cursor-pointer relative" :to="{ name: 'ProductDetails', params: { id: id, category_slug: category.slug } }">
    <div
      class="img-col rounded-l prod_img"
      :style="`background-image: url(https://res.cloudinary.com/ingen-cloud/${img});`"
    >
    </div>
    <div class="card-content px-4 py-4 text-left">
      <div class="card-head flex">
        <h1 class="title text-base font-medium mb-2">{{ title }}</h1>
      </div>
      <p class="desc text-xs mb-4 h-11">{{ description }}</p>
      <p class="info text-xs mb-1"><span class="font-bold">Part Number: </span>GXL00000000004138</p>
      <p class="info text-xs mb-1"><span class="font-bold">Condition: </span>GXL00000000004138</p>
      <p class="info text-xs mb-1"><span class="font-bold">Brand: </span>GXL00000000004138</p>
      <p class="info text-xs mb-1"><span class="font-bold">Seller Rating: </span>GXL00000000004138</p>
      <p class="info text-base font-bold mb-2 mt-8">GH₵{{ price }}</p>
    </div>
    <div class="save-icon w-9 text-center m-auto cursor-pointer z-40 absolute top-3 right-5 hover:hidden" @click="alert(3)"><font-awesome-icon class="text-base text-grey-light" :icon="['fas', 'fa-bookmark']" /></div>
  </router-link>
</template>

<script>
export default {
  name: "LongProductCard",
  props: {
    // required id
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: 0,
    },
    category: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    saveProduct() {
      console.log("save");
    },

    checkURL(link) {
      let url = "";
      try{
        url = link.split("/").slice(2).join("/");
        return url;
      } catch {
        url = link;
        return url;
      }
    },
  },
};
</script>

<style scoped>
.card {
  height: 250px;
  width: 800px;
}

.img-col {
  width: 200px;
  z-index: 10;
  background: url(../../assets/img/prod.png);
}

.card-content {
  flex: 1;
}

.prod_img{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.desc {
  height: 33px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>