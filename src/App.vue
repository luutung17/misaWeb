<template>
  <div class="container">
    <Theader></Theader>
    <TSidebar></TSidebar>
    <router-view></router-view>
    <t-validate
      v-if="showNotice"
      :msgs="msgForNotice"
      @closeNotice="this.showNotice = false"
      :type="tType"
    ></t-validate>
    <TToast v-if="showToast" :msgs="msgToast" :type="tType"></TToast>
  </div>
</template>
<script>
import Theader from "./Layout/Header/Header.vue";
import TSidebar from "./Layout/Sidebar/Sidebar.vue";
import TToast from "./components/Toast/TToast.vue";
export default {
  name: "App",
  components: {
    Theader,
    TSidebar,
    TToast,
  },
  created() {
    this.$temitter.on("onShowNotice", this.onShowNotice);
    this.$temitter.on("onToast", this.onToast);
  },
  methods: {
    onToast(msg) {
      this.msgToast = [];
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 1000);
      if (msg instanceof Array) {
        this.msgToast = msg;
      } else {
        this.msgToast.push(msg);
      }
    },
    onShowNotice(msg) {
      this.msgForNotice = [];
      this.showNotice = true;
      setTimeout(() => {
        this.showToast = false;
      }, 1000);

      if (msg instanceof Array) {
        this.msgForNotice = msg;
      } else {
        this.msgForNotice.push(msg);
      }
      if (msg.includes("Dữ liệu không hợp lệ!")) {
        this.tType = "error";
      }
      if (
        msg.includes(
          "Có lỗi xảy ra vui lòng liên hệ Giảng viên để được hỗ trợ!"
        )
      ) {
        this.tType = "warning";
      }
      if (msg.includes("Thêm mới thành công!")) {
        this.tType = "success";
      }
      if (msg.includes("Bạn chắc chắn có muốn xóa không!")) {
        this.tType = "error";
      }
    },
  },

  data() {
    return {
      showNotice: false,
      msgForNotice: [],
      tType: "success",
      showToast: false,
      msgToast: [],
    };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

html {
  font-size: 14px;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: "Noto Sans", sans-serif;
  flex-shrink: 0;
  flex-grow: 0;
}

.container {
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 10vh 90vh;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>