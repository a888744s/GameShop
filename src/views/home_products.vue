<template>
    <div>
      <div class="row">
        <div class="col-4">
          <!-- เนื้อหาของคอลัมน์ที่ 1 -->
          <div class="card" style="width: 24rem;">
            <img src="https://sls-prod.api-onscene.com/partner_files/trueidintrend/187654/valorant-open-beta%20(1).png" class="card-img-top mx-auto" alt="" style="width: 23.9rem; height: 14rem">
            <div class="card-body">
              <h5 class="card-title">Valorant</h5>
              <p class="card-text">เติมเกม</p>
              <p class="card-text">ราคา : ตั้งเเต่ 50-2000 บาท</p>
              <router-link to="/product_detail" class="btn btn-primary mx-2">รายละเอียด</router-Link>
              <button class="btn btn-success">เพิ่มลงตะกร้า</button>
            </div>
          </div>
        </div>
  
        <div class="col-4">
          <!-- เนื้อหาของคอลัมน์ที่ 2 -->
          <div class="card" style="width: 24rem;">
            <img src="https://cdn.oneesports.co.th/cdn-data/sites/3/2021/08/ROV.png" class="card-img-top mx-auto" alt="" style="width: 23.9rem; height: 14rem">
            <div class="card-body">
              <h5 class="card-title">Valorant</h5>
              <p class="card-text">เติมเกม</p>
              <p class="card-text">ราคา</p>
              <router-link to="/product_detail2" class="btn btn-primary mx-2">รายละเอียด</router-Link>
              <button class="btn btn-success">เพิ่มลงตะกร้า</button>
            </div>
          </div>
        </div>
  
        <div class="col-4">
          <!-- เนื้อหาของคอลัมน์ที่ 3 -->
          <div class="card" style="width: 24rem;">
            <img src="https://i.ytimg.com/vi/FuSrDOJyBuw/maxresdefault.jpg" class="card-img-top mx-auto" alt="" style="width: 23.9rem; height: 14rem">
            <div class="card-body">
              <h5 class="card-title">Valorant</h5>
              <p class="card-text">เติมเกม</p>
              <p class="card-text">ราคา</p>
              <router-link to="/product_detail3" class="btn btn-primary mx-2">รายละเอียด</router-Link>
              <button class="btn btn-success">เพิ่มลงตะกร้า</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
        <div class="row">
          <div class="col-4">
            <!-- เนื้อหาของคอลัมน์ที่ 1 -->
            <div class="card" style="width: 24rem;">
              <img src="https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg" class="card-img-top mx-auto" alt="" style="width: 23.9rem; height: 14rem">
              <div class="card-body">
                <h5 class="card-title">Valorant</h5>
                <p class="card-text">เติมเกม</p>
                <p class="card-text">ราคา</p>
                <router-link to="/product_detail4" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                <button class="btn btn-success">เพิ่มลงตะกร้า</button>
              </div>
            </div>
          </div>
    
          <div class="col-4">
            <!-- เนื้อหาของคอลัมน์ที่ 2 -->
            <div class="card" style="width: 24rem;">
              <img src="https://cdn-webth.garenanow.com/webth/cdn/fo4/reskin/share.jpg" class="card-img-top mx-auto" alt="" style="width: 23.9rem; height: 14rem">
              <div class="card-body">
                <h5 class="card-title">Valorant</h5>
                <p class="card-text">เติมเกม</p>
                <p class="card-text">ราคา</p>
                <router-link to="/product_detail5" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                <button class="btn btn-success">เพิ่มลงตะกร้า</button>
              </div>
            </div>
          </div>
    
          <div class="col-4">
            <!-- เนื้อหาของคอลัมน์ที่ 3 -->
            <div class="card" style="width: 24rem;">
              <img src="https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1696513856" class="card-img-top mx-auto" alt="" style="width: 23.9rem; height: 14rem">
              <div class="card-body">
                <h5 class="card-title">Valorant</h5>
                <p class="card-text">เติมเกม</p>
                <p class="card-text">ราคา</p>
                <router-link to="/product_detail6" class="btn btn-primary mx-2">รายละเอียด</router-Link>
                <button class="btn btn-success">เพิ่มลงตะกร้า</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useProductStore } from '../store/product';
  const product_store = useProductStore
  const list = computed(() => product_store.list_products)
  </script>
  
  <style lang="scss" scoped>
    .row {
      margin-top: 2rem; /* เพิ่มระยะห่างด้านบนของแถว */
    }
    .col-4 {
      margin-bottom: 2rem; /* เพิ่มระยะห่างด้านล่างของคอลัมน์ */
    }
  </style>
  