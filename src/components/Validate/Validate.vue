<template>
  <div class="validate" v-if="showValidate">
    <div class="validate-container">
      <div class="row0">
        <h2>Thông báo</h2>
        <i class="fas fa-window-close" @click="closeValidate"></i>
      </div>
      <div class="row1">
        <i class="fas fa-question-circle"></i>
        <h4><i class="fas fa-circle"></i> {{ this.propText }}</h4>
      </div>
      <div class="row2">
        <button>Xác nhận</button>
        
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Validate",
  props: ["propText"],
  data() {
    return {
      showValidate: true,
    };
  },
  methods: {
    closeValidate() {
      this.showValidate = false;
      this.$parent.isShowDialog = false;
    },
  },
};
</script>
<style scoped>
.validate {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.validate-container {
  margin: auto;
  background-color: #fff;
  position: relative;
  top: 40%;
  min-width: 600px;
  border-radius: 5px;
  /* min-height: 600px; */
  width: fit-content;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 500;
}

.row0 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin: 0;
}

.fa-window-close {
  font-size: 24px;
  color: #ff4d4d;
  cursor: pointer;
}

.row1 {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.fa-question-circle {
  font-size: 30px;
  color: #ff4d4d;
  margin-right: 10px;
}

h4 {
  margin: 0;
}

.fa-circle {
  font-size: 12px;
  color: #0e0d0d;
  margin-right: 5px;
}

.row2 {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end; /* Đẩy các nút về phía bên phải */
}

button {
  padding: 10px 20px; /* Điều chỉnh độ rộng và chiều cao của nút */
  margin-left: 10px; /* Khoảng cách giữa các nút */
  border: none; /* Loại bỏ viền */
  border-radius: 5px; /* Bo góc nút */
  cursor: pointer;
}

button:nth-child(1) {
  background-color: #4caf50; /* Màu nền cho nút "Xác nhận" */
  color: #fff; /* Màu chữ cho nút "Xác nhận" */
}

button:nth-child(2) {
  background-color: #ff4d4d; /* Màu nền cho nút "Hủy bỏ" */
  color: #fff; /* Màu chữ cho nút "Hủy bỏ" */
}
</style>


