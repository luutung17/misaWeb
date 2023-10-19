<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div class="Tcombobox">
    <input
      type="text"
      class="m-combobox__input"
      placeholder="Type here"
      v-model="selectedFullName"
    />
    <button class="m-combobox__button" @click="showData('show', cus)">
      <i class="fas fa-caret-down"></i>
    </button>
    <div class="m-combobox__data" v-if="isShowData">
      <div
        class="m-combobox__item "
        :class="{'combobox-selected':cus==this.selectedItem}"
        v-for="cus in customers"
        :key="cus.CustomerId"
        @click="showData('chooseData', cus)"
      >
        <div class="m-combobox__text">{{ cus[propText] }}</div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "TCombobox",
  props: ["modelValue","api","propText"],
  data() {
    return {
      isShowData: false,
      customers: [],
      modalItems: {},
      selectedItems: null,
      selectedFullName: "",
      selectedCustomerID: "",
      recivedData: {},
    };
  },
  methods: {
    showData(action, items) {
      if (action == "show") {
        this.isShowData = !this.isShowData;
        this.modalItems = items;
      }
      if (action == "chooseData") {
        this.isShowData = false;
        this.selectedItem = items;
        this.selectedFullName = items.CustomerGroupName;
        
      }
    },
  },
  created() {
    fetch(this.api)
      .then((response) => response.json())
      .then((data) => {
        this.customers = data;
      })
      .catch((error) => console.error("Lỗi:", error));
  },
  watch: {
    selectedFullName(newVal, oldVal) {
      this.$emit("update:modelValue", this.selectedFullName);
      console.log("n" + newVal, "o" + oldVal);
    },
    modelValue(newVal) {
      this.selectedFullName = newVal;
    },
  },
};
</script>
<style scoped>
.Tcombobox {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 40px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.m-combobox__input {
  padding: 12px;
  flex: 1;
  height: 100%;
  border-radius: 4px;
  outline: none;
  border-color: #50b83c;
  padding-right: 36px; 
}
.m-combobox__input:hover {
  border-color: #0f84d2;
}
.fa-caret-down {
  width: 16px;
  height: 16px;
  margin-bottom: 13px;
}
.m-combobox__button {
  position: absolute;
  margin-top: 8px;
  right: 0;
  top: 0;
  height: 100%;
  width: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.m-combobox__data {
  max-height: 180px;
  overflow-y: scroll;
  position: absolute;
  top: 37px;
  width: 97%;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 4px;
  border: 1px solid #ccc9c9;
  box-shadow: 16 0 4 rgba(23, 27, 42, 0.24);
  padding-bottom: 8px;
  padding-right: 8px;
}
.m-combobox__item {
  padding: 0 8px;
  height: 36px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  border-radius: 4px;
}
.combobox-selected{
  background-color: #50b83c;
}
.m-combobox__item:first-child {
  margin-top: 8px;
}
.m-combobox__item:hover {
  border: 1px solid #0f84d2;
}
.m-combobox__text {
  flex: 1;
}
.m-combobox__icon {
  width: 16px;
  height: 12px;
  color: #50b83c;
  margin-right: 8xp;
}
</style>