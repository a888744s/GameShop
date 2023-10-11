<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GameJaa</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">หน้าแรก</router-link>
          </li>
          <li class="nav-item">
            <!-- เปลี่ยนลิงก์ "ตะกร้าสินค้า" เพื่อใช้ to เพื่อกำหนดเส้นทางไปยังหน้า AddToCart.vue -->
            <router-link to="/AddToCart" class="nav-link">ตะกร้าสินค้า</router-link>
          </li>
        </ul>
        <div class="d-flex mb-2" role="search">
          <input class="form-control me-2" type="search" placeholder="ค้นหา..." aria-label="Search">
          <router-link to="/login" class="btn btn-outline-primary">Login</router-link>
          <!-- เพิ่มปุ่ม Register -->
          <router-link to="/register" class="btn btn-outline-success">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
