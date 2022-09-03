<template>
  <router-link tag="a" class="card bg-white hover:shadow-sm rounded flex cursor-pointer" :to="{ name: 'ProductDetails', params: { id: id, category_slug: category.slug } }">
    <div
      class="img-col rounded-l"
      :style="`
                background: url(../../../assets/img/prod.png));
                    no-repeat center center;
                `"
    >
      <!-- <img src="@/assets/img/prod.png" class="w-full h-full rounded-l-md" alt=""> -->
    </div>
    <div class="card-content px-4 py-4 text-left">
      <div class="card-head flex">
        <h1 class="title text-base font-medium mb-2 w-full">{{ title }}</h1>
        <div class="save-icon bg-info w-9">Save</div>
      </div>
      <p class="desc text-xs mb-4 h-11">{{ description }}</p>
      <p class="info text-xs mb-1"><span class="font-bold">Part Number: </span>GXL00000000004138</p>
      <p class="info text-xs mb-1"><span class="font-bold">Condition: </span>GXL00000000004138</p>
      <p class="info text-xs mb-1"><span class="font-bold">Brand: </span>GXL00000000004138</p>
      <p class="info text-xs mb-1"><span class="font-bold">Seller Rating: </span>GXL00000000004138</p>
      <p class="info text-base font-bold mb-2 mt-8">GH₵{{ price }}</p>
    </div>
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
</style>