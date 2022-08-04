<template>
  <div class="c_bar rounded-md shadow-md mr-3 py-2">
    <ul>
      <li class="c_item flex c_header h-12">
        <div class="icon my-auto mx-3">
          <img src="@/assets/img/categories/format_list_bulleted.svg" alt="" />
        </div>
        <div class="title font-bold my-auto">Categories</div>
      </li>
      <li class="c_item flex h-12">
        <div class="icon my-auto mx-3">
          <img src="@/assets/img/categories/car-front.svg" alt="" />
        </div>
        <div class="title my-auto">Car body & Main Parts</div>
      </li>
      <li class="c_item flex h-12">
        <div class="icon my-auto mx-3">
          <img src="@/assets/img/categories/control-panel.svg" alt="" />
        </div>
        <div class="title my-auto">Electronics</div>
      </li>
      <li class="c_item flex h-12">
        <div class="icon my-auto mx-3">
          <img
            src="@/assets/img/categories/airline_seat_recline_extra.svg"
            alt=""
          />
        </div>
        <div class="title my-auto">Interior</div>
      </li>
      <li class="c_item flex h-12">
        <div class="icon my-auto mx-3">
          <img src="@/assets/img/categories/cogwheel.svg" alt="" />
        </div>
        <div class="title my-auto">Chassis</div>
      </li>
      <li class="c_item flex h-12">
        <div class="icon my-auto mx-3">
          <img src="@/assets/img/categories/settings.svg" alt="" />
        </div>
        <div class="title my-auto">Miscellaneous Parts 1</div>
      </li>
      <li class="c_item flex h-12">
        <div class="icon my-auto mx-3">
          <img src="@/assets/img/categories/settings.svg" alt="" />
        </div>
        <div class="title my-auto">Miscellaneous Parts 2</div>
      </li>
      <li class="c_item flex h-12">
        <div class="icon my-auto mx-3">
          <img src="@/assets/img/categories/settings.svg" alt="" />
        </div>
        <div class="title my-auto">Miscellaneous Parts 3</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryBar",
};
</script>

<style lang="css" scoped>
.icon{
    width: 20px;
    height: 20px;
    color: black !important;
}

.c_bar{
    width: 260px;
    height: 400px;
}

.p_bar{
    height: 400px;
}

.c_item:hover{
    background-color: #f5f5f5;
    cursor: pointer;
    box-shadow: 0px 0px 10px #ebebeb;
}

.c_header{
    background-color: #f5f5f5;
}
</style>