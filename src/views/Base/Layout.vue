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
</style>