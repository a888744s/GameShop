<template>
  <div>
    <div class="H1">เติมเกม และ ชำระเงิน</div>
    <div class="product">
      <img
        src="https://sls-prod.api-onscene.com/partner_files/trueidintrend/187654/valorant-open-beta%20(1).png"
        class="card-img-top mx-auto"
        alt=""
        style="width: 35rem; height: 19rem"
      />
      <h2>Valorant</h2>
      <div>
        <input type="text" v-model="gameUID" placeholder="ชื่อในเกมพร้อม#" />
      </div>
      <div class="instruction">
        <p>เลือกราคาที่ต้องการเติม :</p>
        <select class="form-select" v-model="selectedPrice">
          <option value="50">70 บาท</option>
          <option value="100">120 บาท</option>
          <option value="150">180 บาท</option>
          <option value="300">320 บาท</option>
          <option value="550">550 บาท</option>
          <option value="1200">1250 บาท</option>
          <option value="2000">2200 บาท</option>
        </select>
        <div class="instruction">
          <p>เลือกวิธีชำระ :</p>
          <select class="form-select payment-method-select" v-model="selectedPaymentMethod">
            <option value="QRcode">รหัส QR</option>
            <option value="ATM">บัตร ATM</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Truemoney Wallet">TrueMoney Wallet</option>
            <option value="TrueMoney Card">บัตรทรูมันนี่</option>
          </select>
        </div>
        <div class="selecM">
          <div v-if="selectedPaymentMethod === 'QRcode'">
            <img :src="getQRCodePath(selectedPrice)" alt="รหัส QR" style="max-width: 100%" />
          </div>
          <div v-if="selectedPaymentMethod === 'ATM'">
            <input type="text" v-model="atmCardNumber" placeholder="หมายเลขบัตร ATM" />
          </div>
          <div v-if="selectedPaymentMethod === 'Mastercard'">
            <input type="text" v-model="mastercardNumber" placeholder="หมายเลข Mastercard" />
          </div>
          <div v-if="selectedPaymentMethod === 'Truemoney Wallet'">
            <input type="text" v-model="truemoneyWalletNumber" placeholder="หมายเลข TrueMoney Wallet" />
          </div>
          <div v-if="selectedPaymentMethod === 'TrueMoney Card'">
            <input type="text" v-model="truemoneyCardNumber" placeholder="หมายเลขบัตรทรูมันนี่" />
          </div>
        </div>
        <div class="b1">
          <input type="text" v-model="email" placeholder="อีเมล" />
          <input type="text" v-model="phoneNumber" placeholder="หมายเลขโทรศัพท์" />
          <button @click="addToCart" class="btn btn-primary">ยืนยัน</button>
        </div>
      </div>
      <div class="confirmation" v-if="showConfirmation">
        <p>การทำรายการสำเร็จ!</p>
        <img src="src/assets/Check.jpg" class="checkmark" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      build: {
      rollupOptions: {
      external: ['src/assets/Check.jpg'],
    },
  },
      selectedPrice: '50',
      selectedPaymentMethod: 'ATM',
      atmCardNumber: '',
      mastercardNumber: '',
      truemoneyWalletNumber: '',
      truemoneyCardNumber: '',
      gameUID: '',
      email: '',
      phoneNumber: '',
      showConfirmation: false,
    };
  },
  methods: {
    addToCart() {
      this.showConfirmation = true;
      setTimeout(() => {
        this.showConfirmation = false;
      }, 3000);
    },
    getQRCodePath(price) {
      return `src/assets/QRCODE.png`;
    },
  },
};
</script>

<style scoped>
.confirmation {
  font-size: 25px;
  text-align: center;
}

.instruction {
  font-size: 17.5px;
  text-align: left;
  margin-top: 20px;
}

.instruction p {
  text-align: left;
}

.payment-method-select {
  margin-top: 20px;
}

.selecM {
  margin-top: 10px;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  text-align: center;
}

.product img {
  max-width: 100%;
}

.product button {
  margin-top: 10px;
}

.product button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
}

.product button:hover {
  background-color: #0056b3;
}

.H1 {
  font-size: 38px;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 10px;
}

.b1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.b1 input {
  margin: 5px 0;
}

.checkmark {
  max-width: 50px;
  margin-top: 10px;
}
</style>
