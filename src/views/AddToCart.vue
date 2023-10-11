<template>
  <div>
    <h1>Add to Cart</h1>
    <!-- เพิ่มตัวอย่างสินค้าและปุ่มเพิ่มลงตระกร้า -->
    <div class="product">
      <img src="https://sls-prod.api-onscene.com/partner_files/trueidintrend/187654/valorant-open-beta%20(1).png" class="card-img-top mx-auto" alt="" style="width: 25.9rem; height: 14rem">
      <h2>Product Name</h2>
      <p>Product Description</p>
      <p>Price:......</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      // เพิ่มโค้ดในส่วนนี้เพื่อทำการเพิ่มสินค้าลงในตะกร้า
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

.product img {
  max-width: 100%;
}

.product button {
  margin-top: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.product button:hover {
  background-color: #0056b3;
}
</style>
