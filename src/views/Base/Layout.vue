<template>
  <div>
    <Navbar />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Base/NavBar.vue";
import Footer from "@/components/Base/Footer.vue";
export default {
  name: "Layout",
  components: {
    Navbar,
    Footer,
  },
  watch: {
    $route() {
      // scroll to top with animation
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
/* .cselect select{
  appearance: none;
}

.cselect::after {
  content: "\25b6";
  position: absolute; 
  top: 30%; 
  right: 0px;
  z-index: -1;
}

.cselect {
  position: relative;
} */
</style>