<template>
    <!-- mobile nav drawer -->
    <div class="h-full w-9/12 bg-white">
        <!-- user profile -->
        <div class="flex mb-5 bg-secondary px-5 py-7">
            <div class="w-1/3 mx-auto">
                <div class="bg-grey w-16 h-16 rounded-full"></div>
            </div>
            <div class="w-2/3 text-left text-sm my-auto">
                <p class="text-white font-bold">John Doe</p>
                <p class="text-xs mt-1 text-grey-light">
                    <span class="">john.doe@gmail.com</span>
                </p>
                <p class="text-xs text-secondary underline mt-1">View Profile ></p>
            </div>
            <!-- nav menu -->
        </div>
        <div class="w-full mt-5">
            <!-- home tab -->
            <div class="flex items-start mb-1 hover:bg-secondary-light px-5 py-3">
                <div class="w-1/6 text-center">
                    <img src="@/assets/icons/home2.png" class="w-6 h-6" alt="home" />
                </div>
                <div class="w w-5/6 text-left my-auto">
                    <p class="text-primary-dark font-normal">Home</p>
                </div>
            </div>
            <!-- home tab -->
            <div class="flex items-start mb-1 hover:bg-secondary-light px-5 py-3">
                <div class="w-1/6 text-center">
                    <img src="@/assets/icons/products.png" class="w-6 h-6" alt="products" />
                </div>
                <div class="w w-5/6 text-left my-auto">
                    <p class="text-primary-dark font-normal">Products</p>
                </div>
            </div>
            <!-- home tab -->
            <div class="flex items-start mb-1 hover:bg-secondary-light px-5 py-3">
                <div class="w-1/6 text-center">
                    <img src="@/assets/icons/brands.png" class="w-6 h-6" alt="brands" />
                </div>
                <div class="w w-5/6 text-left my-auto">
                    <p class="text-primary-dark font-normal">Brands</p>
                </div>
            </div>
            <!-- home tab -->
            <div class="flex items-start mb-1 hover:bg-secondary-light px-5 py-3">
                <div class="w-1/6 text-center">
                    <img src="@/assets/icons/added.png" class="w-6 h-6" alt="brands" />
                </div>
                <div class="w w-5/6 text-left my-auto">
                    <p class="text-primary-dark font-normal">Favourites</p>
                </div>
            </div>
            <!-- home tab -->
            <div class="flex items-start mb-1 hover:bg-secondary-light px-5 py-3">
                <div class="w-1/6 text-center">
                    <img src="@/assets/icons/service.png" class="w-6 h-6" alt="Service" />
                </div>
                <div class="w w-5/6 text-left my-auto">
                    <p class="text-primary-dark font-normal">Customer Service</p>
                </div>
            </div>
        </div>
        <!-- footer -->
        <p class="absolute text-sm font-light text-grey-light bottom-0 w-full text-center mb-5">www.partspapa.com</p>
    </div>
</template>

<script>
export default {
    name : 'NavDrawer'
}
</script>

<style>

</style>