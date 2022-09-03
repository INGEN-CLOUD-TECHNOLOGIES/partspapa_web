<template>
  <div class="container mx-auto py-10">
    <bread-crumbs></bread-crumbs>
    <div class="flex">
      <div class="product-image flex">
        <div class="thumbnails flex flex-col mr-2 place-content-between">
          <div class="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1589989369979-8b2b0b2b2f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1589989369979-8b2b0b2b2f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1589989369979-8b2b0b2b2f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1589989369979-8b2b0b2b2f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1589989369979-8b2b0b2b2f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
        <div class="product-image-container bg-secondary">
          <!-- <img :src="product.image" alt="" /> -->
        </div>
      </div>
      <div class="product-info px-10 w-full">
        <h1 class="title text-md font-bold text-left">
          {{ product_detail.name }}
        </h1>
        <div class="spacer my-5"></div>
        <div class="additional-info h-44 flex">
          <div class="info my-auto">
            <p class="text-sm text-left mb-1">
              Part Number: {{ product_detail.part_number }}
            </p>
            <p class="text-sm text-left mb-1">Condition: New</p>
            <p class="text-sm text-left mb-1">Brand: GXL</p>
            <p class="text-sm text-left mb-1">Seller Rating: 4.5</p>
            <p class="text-sm text-left mb-1">
              Vendor: {{ product_detail.vendor?.name }}
            </p>
            <p class="text-sm text-left mb-1">
              Category: {{ product_detail.category }}
            </p>
          </div>
        </div>
        <div class="spacer my-5"></div>
        <h1 class="text-left text-base font-semibold mb-3">
          About this product
        </h1>
        <div class="description text-left">
          {{ product_detail.description }}
        </div>
      </div>
    </div>
    <div class="section my-10">
      <!-- <h1 class="text-left text-md font-headers">Browse Similar Products</h1> -->
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
          Similar Products
        </h1>
      </div>
      <div class="product-listing">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div v-for="prod in similar_products" :key="prod.id" class="">
              <ProductCard
                :id="prod.id"
                :title="prod.name"
                :description="prod.description"
                :price="prod.price"
                :category="prod.category"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard.vue";
import { getAPI } from "@/utils/apis/axios";
import BreadCrumbs from "@/components/Base/BreadCrumbs.vue";
export default {
  name: "ProductDetails",
  data() {
    return {
      product_detail: {},
      similar_products: [],
    };
  },
  components: {
    BreadCrumbs,
    ProductCard,
  },

  // resend request if route changes
  watch: {
    $route() {
      this.getProductDetail();
    },
  },

  methods: {
    getProductDetail() {
      const prod_id = this.$route.params.id;
      const category_slug = this.$route.params.category_slug;
      getAPI
        .get(`/api/products/detail/${category_slug}/${prod_id}/`)
        .then((res) => {
          this.product_detail = res.data.product;
          this.similar_products = res.data.similar_products;
        });
    },
  },
  beforeMount() {
    this.getProductDetail();
  },
};
</script>

<style scoped>
.product-image-container {
  width: 600px;
  height: 500px;
}

.spacer {
  height: 1px;
  background: #e5e7eb;
}

.header-title {
  border-bottom: 1px solid #ccc;
}

.section-title {
  width: 200px;
  line-height: 40px;
}

.thumbnails {
  height: 500px;
}

.thumbnail {
  width: 90px;
  height: 90px;
  /* margin-bottom: 10px;s */
  background-color: #9a9a9a;
}
</style>