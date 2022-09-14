<template>
  <div class="container mx-auto py-10">
    <loader v-if="showloader" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2.5" bg="#343a40" objectbg="#999793" opacity="99" disableScrolling="false" name="dots"></loader>
    <bread-crumbs :crumbs='crumbs'></bread-crumbs>
    <div class="block md:flex">
      <div class="product-image flex">
        <div class="hidden md:flex thumbnails flex-col mr-2">
          <div v-for="img in image_links" :key="img.id">
            <div class="thumbnail cursor-pointer mb-3" @click="getImageLink">
              <!-- <h1 class="text-white text-lg">1</h1> -->
              <img
                :src="img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="product-image-container bg-secondary text-center">
          <!-- <h1 class="text-white text-lg">1</h1> -->
          <img :src="featured_image" alt="" />
        </div>
      </div>
      <div class="product-info px-0 md:px-10 w-full py-5 md:py-0">
        <h1 class="title text-md font-bold text-left">
          {{ product_detail.name }}
        </h1>
        <div class="spacer my-2 md:my-5"></div>
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
        <div class="spacer my-2 md:my-5"></div>
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
                :vendor="prod.vendor"
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
      crumbs: [
        {
          id: 0,
          name: "Home",
          link: "/",
        },
        {
          id: 1,
          name: "Products",
          link: "/products",
        },
        {
          id: 2,
          name: "Details",
          link: "/products/detail",
        },
      ],
      featured_image: "",
      product_detail: {},
      similar_products: [],
      showloader: true,
      image_links: [
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2138&q=80',
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwcGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
        // 'https://images.unsplash.com/photo-1429772011165-0c2e054367b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        // 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
        // 'https://images.unsplash.com/photo-1527383418406-f85a3b146499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwcGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      ],
    };
  },
  components: {
    BreadCrumbs,
    ProductCard,
  },

  // resend request if route changes
  watch: {
    $route() {
      this.showloader = true;
      this.getProductDetail();
    },
    product_detail() {
      this.featured_image = this.image_links[0];
    },
  },

  methods: {

    deactivateThumbnail() {
      let thumbnails = document.querySelectorAll(".thumbnail img");
      thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("active_thumbnail");
        thumbnail.classList.remove("active_placeholder");
      });
    },

    activateThumbnail(img) {
      img.classList.add("active_thumbnail");
      img.classList.add("active_placeholder");
    },

    getImageLink(e) {
      let img_tag = e.target; // get image tag
      let img_src = img_tag.src; // get image source
      this.featured_image = img_src; // set featured image
      this.deactivateThumbnail(); // remove active class from all thumbnails
      this.activateThumbnail(img_tag); // add active class to clicked thumbnail
    },


    getProductDetail() {
      const prod_id = this.$route.params.id;
      const category_slug = this.$route.params.category_slug;
      getAPI
        .get(`/api/products/detail/${category_slug}/${prod_id}/`)
        .then((res) => {
          this.product_detail = res.data.product;
          this.similar_products = res.data.similar_products;
          this.showloader = false;
          window.scrollTo(0, 0)
        });
    },
  },
  created() {
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

.thumbnail img, .product-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* blur thumbnail images and add white overlay */
.thumbnail img {
  filter: blur(0.7px);
  opacity: 0.5;
}

.thumbnail img.active_thumbnail {
  filter: blur(0px) !important;
  opacity: 1 !important;
}


.active_placeholder{
  border: 2px solid #FF9B00;
  border-radius: 2px;
}

@media screen and (max-width: 768px) {
  .product-image-container {
    width: 100%;
    height: 300px;
  }

  .thumbnails {
    height: 300px;
  }

  .thumbnail {
    width: 60px;
    height: 60px;
  }
}
</style>