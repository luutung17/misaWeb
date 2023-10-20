<template>
  <div class="validate" v-if="showValidate">
    <div class="validate-container">
      <div class="row0">
        <h2>Thông báo</h2>
        <i class="fas fa-window-close" @click="closeNotice"></i>
      </div>
      <div class="row1">
        <div
          class="icon"
          :class="{
            'icon-success': type == 'success',
            'icon-warning': type == 'warning',
            'icon-question': type == 'question',
            'icon-error': type == 'error',
          }"
        ></div>
        <li v-for="item in msgs" :key="item">{{ item }}</li>
      </div>
      <div class="row2">
        <button @click='deleteItem'>Xác nhận</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Validate",
  props: {
    msgs: {
      type: [],
      default: () => {
        return [];
      },
      require: true,
    },
    type: {
      default: ()=>{
        return 'warning';
      },
      require: false,
    },
  },
  data() {
    return {
      showValidate: true,
    };
  },
  methods: {
    closeNotice() {
      this.$emit("closeNotice");
    },
    deleteItem(){
      this.$emit("closeNotice");
    }
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
li {
  display: flex;
  flex-direction: column;
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
.icon-warning {
  background: url("../../assets/Sprites.96108a46.svg") no-repeat -593px -145px;
  width: 22px;
  height: 23px;
  margin-right: 10px;
}
.icon-success {
  background: url("../../assets/Sprites.96108a46.svg") no-repeat -482px -146px;
  width: 22px;
  height: 23px;
  margin-right: 10px;
}
.icon-question {
  background: url("../../assets/Sprites.96108a46.svg") no-repeat -1552px -312px;
  width: 22px;
  height: 23px;
  margin-right: 10px;
}
.icon-error {
  background: url("../../assets/Sprites.96108a46.svg") no-repeat -1552px -312px;
  width: 22px;
  height: 23px;
  margin-right: 10px;
}
</style>


