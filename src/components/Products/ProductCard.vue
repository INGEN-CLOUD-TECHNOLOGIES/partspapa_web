<template>
  <router-link tag="a" class="card rounded-md shadow flex hover:shadow-md cursor-pointer" :to="{ name: 'ProductDetails', params: { id: id, category_slug: category.slug } }">
    <div
      class="img-col h-full rounded-l-md"
      :style="`
                background: url(../../../assets/img/prod.png));
                    no-repeat center center;
                `"
    >
      <!-- <img src="@/assets/img/prod.png" class="w-full h-full rounded-l-md" alt=""> -->
    </div>
    <div class="card-content px-4 py-4 text-left">
      <h1 class="title text-sm md:text-base font-medium mb-2">{{ title }}</h1>
      <p class="desc text-xs mb-3">{{ description }}</p>
      <p class="info text-xs mb-1">
        <span class="font-bold">Part Number: </span>GXL00000000004138
      </p>
      <p class="info text-xs mb-1">
        <span class="font-bold">Condition: </span>GXL00000000004138
      </p>
      <p class="info text-xs mb-1">
        <span class="font-bold">Vendor: </span>{{ vendor.name }}
      </p>
      <!-- <p class="info text-xs mb-1">ls
      </p> -->
      <!-- <p class="info text-xs mb-1">
        <span class="font-bold">Seller Rating: </span>GXL00000000004138
      </p> -->
      <div class="pricing h-10 mt-5 flex">
        <p class="info text-base font-bold self-end">GH₵{{ price }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
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
    },
    vendor: {
      type: Object,
      default: "",
    },
  },
};
</script>

<style scoped>
.card {
  height: 250px;
  max-width: 450px;
}

.img-col {
  width: 160px;
  z-index: 10;
  background: url(../../assets/img/prod.png);
}

.card-content {
  flex: 1;
}

.desc {
  height: 33px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title {
  height: 45px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 768px) {
  .card {
    height: 200px;
  }

  .img-col {
    width: 120px;
  }

  .desc{
    display: none !important;
  }
}
</style>