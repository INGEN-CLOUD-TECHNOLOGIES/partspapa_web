<template>
  <div class="loading-dots">
    <div class="loading-dots--dot"></div>
    <div class="loading-dots--dot"></div>
    <div class="loading-dots--dot"></div>
    <div class="loading-dots--dot"></div>
    {{ show }}
  </div>
</template>

<script>
export default {
  name: "LoadingDots",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    show: function (val) {
      if (val) {
        alert("show");
        this.$el.style.display = "flex";
      } else {
        alert("show");
        this.$el.style.display = "none";
      }
    },
  },
};
</script>

<style>
@keyframes dot-keyframes {
  0% {
    opacity: 0.4;
    transform: scale(1, 1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3, 1.3);
    background-color: #FF9B00;
  }
  100% {
    opacity: 0.4;
    transform: scale(1, 1);
    background-color: #222240;
  }
}

.loading-dots {
  text-align: center;
  width: 100%;
}
.loading-dots--dot {
  animation: dot-keyframes 1.5s infinite ease-in-out;
  background-color: #424C53;
  border-radius: 10px;
  display: inline-block;
  height: 15px;
  width: 15px;
  margin: 0 5px;
}
.loading-dots--dot:nth-child(2) {
  animation-delay: 0.5s;
}
.loading-dots--dot:nth-child(3) {
  animation-delay: 1s;
}
.loading-dots--dot:nth-child(4) {
  animation-delay: 1.5s;
}
</style>