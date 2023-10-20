<template>
  <div class="toast">
    <div class="t-toast">
      <div
        class="icon"
        :class="{
          'icon-success': type == 'success',
          'icon-warning': type == 'warning',
          'icon-question': type == 'question',
          'icon-error': type == 'error',
        }"
      ></div>
      Đăng kí thành công!
    </div>
  </div>
</template>

<script>
export default {
  name: "TToast",
  props: {
    msgs: {
      type: [],
      default: () => {
        return [];
      },
      require: true,
    },
    type: {
      default: () => {
        return "success";
      },
      require: false,
    },
  },
  
};
</script>

<style scoped>
.toast {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.t-toast {
  display: flex;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #f8f8f8; /* Màu nền */
  color: #0f0f0f; /* Màu chữ */
  padding: 10px 20px; /* Khoảng cách từ viền */
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng */
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
