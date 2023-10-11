<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Register</div> <!-- เปลี่ยนชื่อเทมเพลตเป็น Register -->
            <div class="card-body">
              <form @submit.prevent="register"> <!-- เปลี่ยนเมธอดเป็น register -->
                <div class="mb-3">
                  <label for="username" class="form-label">Username:</label>
                  <input type="text" id="username" v-model="username" class="form-control" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password:</label>
                  <input type="password" id="password" v-model="password" class="form-control" required>
                </div>
                <router-link to="/" class="btn btn-success">Register</router-link> <!-- เพิ่มคลาส btn-success -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      register() { // เปลี่ยนเมธอดเป็น register
        // ทำงานเมื่อผู้ใช้กดปุ่ม Register
        // คุณสามารถเพิ่มโค้ดสำหรับการลงทะเบียนข้อมูลได้ที่นี่
        console.log("Username:", this.username);
        console.log("Password:", this.password);
      },
    },
  };
  </script>
  