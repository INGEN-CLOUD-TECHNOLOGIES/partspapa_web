<template>
  <div class="footer bottom-0 bg-secondary mt-20">
    <div
      class="
        flex
        bg-green-700
        justify-between
        px-5
        py-4
        text-white
        items-center
      "
    >
      <div>Get connected with us</div>
      <div class="icons cursor-pointer">
        <img src="@/assets/img/facebook.png" alt="" />
        <img src="@/assets/img/whatsapp.png" alt="" />
        <img src="@/assets/img/instagram.png" alt="" />
        <img src="@/assets/img/twitter.png" alt="" />
      </div>
    </div>
    <div class="bg-slate-800 text-slate-300 py-10 px-8 flex gap-5">
      <div class="w-1/3">
        <img src="@/assets/img/logo1.png" class="logo" alt="" />
        <p class="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          animi unde nulla quia. Sapiente aut veritatis, facere at molestiae
          aperiam?
        </p>
      </div>
      <div class="w-2/3 flex gap-4">
        <div class="w-1/3">
          <h1 class="name mb-6">PRODUCTS</h1>
          <ul>
            <li>Cars</li>
            <li>Train Parts</li>
            <li>Plane Engine</li>
            <li>Trucks</li>
          </ul>
        </div>
        <div class="w-1/3">
          <h1 class="name mb-6">USEFUL LINKS</h1>
          <ul>
            <li>Your Account</li>
            <li>Work With Us</li>
            <li>Pricing</li>
            <li>Cost</li>
          </ul>
        </div>
        <div class="w-1/3">
          <h1 class="name mb-6">CONTACT</h1>
          <ul>
            <li>Accra, Abbosey Okai 1</li>
            <!-- <li>info@example.com</li> -->
            <li>+233 561 344 543</li>
            <li>+234 337 425 778</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-slate-900 p-3 text-white text-xs italic text-center">
      @2022 copyright all rights reserved
    </div>
  </div>
</template>



<style scoped>
.logo {
  height: 100px;
}
li:not(:last-child) {
  margin-bottom: 13px;
}
ul:not(:last-child) > li:hover {
  color: white;
  cursor: pointer;
}
h1 {
  font-weight: 700;
  color: white;
}
.icons img {
  width: 25px;
  display: inline;
  margin-right: 15px;
  cursor: pointer;
}
</style>