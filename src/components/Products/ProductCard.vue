<template>
  <div class="card rounded-md shadow-md flex">
    <div
      class="img-col h-full rounded-l-md"
      :style="`
                background: url(../../../assets/img/prod.png));
                    no-repeat center center;
                `"
    >
      <!-- <img src="@/assets/img/prod.png" class="w-full h-full rounded-l-md" alt=""> -->
    </div>
    <div class="card-content px-2 py-4 text-left">
      <h1 class="title text-sm font-bold mb-2">{{ title }}</h1>
      <p class="desc text-xs mb-2">{{ description }}</p>
      <p class="info text-xs mb-2">Part Number: GXL00000000004138</p>
      <p class="info text-base font-bold mb-2">GH₵{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
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
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.card {
  height: 250px;
  /* width: 650px; */
}

.img-col {
  width: 100px;
  z-index: 10;
  background: url(../../assets/img/prod.png);
}

.card-content {
  flex: 1;
}
</style>