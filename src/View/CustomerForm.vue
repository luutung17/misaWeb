<template>
  <div id="add-modal" class="add-modal">
    <div class="add-modal-container">
      <div class="row0">
        <h3>Thông tin nhân viên</h3>
        <span @click="close">
          <i class="fas fa-window-close"></i>
        </span>
      </div>
      <div class="row1">
        <label class="add-modal-makh modal-lb">
          <span> Mã nhân viên <span style="color: red">*</span> </span>
          <input type="text" class="modal-inp" v-model="data.CustomerCode" />
          <div v-if="errors.includes('Customer code required.')">
            <p style="color: red">Mã nhân viên không được để trống</p>
          </div>
        </label>
        <label class="add-modal-makh modal-lb">
          <span>Họ và tên <span style="color: red">*</span> </span>
          <input type="text" class="modal-inp" v-model="data.FullName" />
          <div v-if="errors.includes('Name required.')">
            <p style="color: red">Họ và tên không được để trống</p>
          </div>
        </label>
        <label class="add-modal-makh modal-lb">
          <span> Ngày sinh </span>
          <input type="date" class="modal-inp" v-model="data.DateOfBirth" />
        </label>
        <div class="add-modal-gioitinh modal-lb-exc">
          <div class="modal-radio-text">
            <span> Giới tính </span>
          </div>
          <div class="modal-radio-container">
            <input
              type="radio"
              name="gioitinh"
              value="Nam"
              class="modal-radio"
            />
            <label>Nam</label>
            <input
              type="radio"
              name="gioitinh"
              value="Nữ"
              class="modal-radio"
            />
            <label>Nữ</label>
            <input
              type="radio"
              name="gioitinh"
              value="Khác"
              class="modal-radio"
            />
            <label>Khác</label>
          </div>
        </div>
      </div>
      <div class="row2">
        <label class="add-modal-sdt modal-lb">
          Số điện thoại
          <input type="text" class="modal-inp" v-model="data.PhoneNumber" />
        </label>
        <label class="add-modal-makh modal-lb">
          Số CMTND
          <input type="text" class="modal-inp" v-model="data.IdentityNumber" />
        </label>
        <label class="add-modal-makh modal-lb">
          Ngày cấp
          <input type="date" class="modal-inp" v-model="data.IdentityDate" />
        </label>
      </div>

      <div class="row3">
        <label class="add-modal-email modal-lb">
          <span> Email <span style="color: red">*</span> </span>
          <input type="text" class="modal-inp" v-model="data.Email" />
          <!-- <div v-if="errors.includes('Email required.')">
            <p style="color: red">Email không được để trống</p>
          </div>
          <div v-if="errors.includes('Valid email required.')">
            <p style="color: red">Vui lòng điền đúng thông tin email</p>
          </div> -->
        </label>
        <label class="add-modal-noicap modal-lb">
          Nơi cấp
          <input type="text" class="modal-inp" v-model="data.IdentityPlace" />
        </label>
      </div>
      <div class="row4">
        <label class="add-modal-sotienno modal-lb">
          Nhóm khách hàng
          <t-combobox
            api="https://cukcuk.manhnv.net/api/v1/CustomerGroupss"
            propText="CustomerGroupName"
          ></t-combobox>
        </label>
      </div>

      <div class="row5">
        <label class="add-modal-congty modal-lb">
          Phòng ban
          <input type="text" class="modal-inp" />
        </label>
      </div>

      <div class="row6">
        <label class="add-modal-diachi modal-lb">
          Địa chỉ
          <input type="text" class="modal-inp" v-model="data.Address" />
        </label>
      </div>
      <div class="row7">
        <button class="btn-huy btn" @click="close">Hủy</button>
        <button class="btn-cat btn" @click="saveData">Lưu</button>
      </div>
    </div>
  </div>
  <t-validate
    v-if="isShowDialog"
    :propText="propText"
    @isShowDialog="isShowDialog"
  ></t-validate>
</template>

<script>
import tCombobox from "@/components/Input/t-combobox.vue";
/* eslint-disable */
export default {
  components: { tCombobox },
  name: "CustomerForm",
  props: {
    action: String,
    item: {
      type: Object,
      default: () => {},
      required: false,
    },
    customerInput: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  data() {
    return {
      errors: [],
      isShowDialog: false,
      data: {},
      customerOrigilJson: "",
      customer: {},
    };
  },
  methods: {
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    close() {
      const newCustomer = JSON.stringify(this.item);
      if (newCustomer != this.customerOrigilJson) {
        this.$temitter.emit(
          "onShowNotice",
          "Dữ liệu đã bị thay đổi bạn có chắc chắn muốn đóng form!"
        );
      }
      this.$emit("closeFormTable");
    },
    saveData(e) {
      //Thực hiện validate dữ liệu
      this.errors = [];
      if (!this.data.FullName) this.errors.push("Name required.");
      if (!this.data.CustomerCode) this.errors.push("Customer code required.");
      if (!this.data.Email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.data.Email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) return true;
      e.preventDefault();
      // Gọi API thực hiện cất dữ liệu

      if (this.formMode == "add") {
        this.$taxios
          .post("https://cukcuk.manhnv.net/api/v1/customers", this.item)
          .then((res) => {
            console.log(this.formMode);
            const status = res.status;
            switch (status) {
              case 201:
                this.$temitter.emit(
                  "onToast",
                  "Thêm mới thành công!"
                );
                this.$emit("closeFormTable");
                break;
              default:
                alert(1111);
                console.log(this.customer.CustomerCode);
                break;
            }
          })
          .catch((error) => {
            console.log(error);
            const response = error.response;
            const status = response.status;
            let msg = "";
            switch (status) {
              case 400:
                this.$temitter.emit(
                  "onShowNotice",
                  "Dữ liệu không hợp lệ!"
                );
                break;
              case 401:
                this.$temitter.emit(
                  "onShowNotice",
                  "Có lỗi xảy ra vui lòng liên hệ Giảng viên để được hỗ trợ!"
                );
                break;
              case 402:
                this.$temitter.emit(
                  "onShowNotice",
                  "Có lỗi xảy ra vui lòng liên hệ Giảng viên để được hỗ trợ!"
                );
                break;
              case 403:
                this.$temitter.emit(
                  "onShowNotice",
                  "Có lỗi xảy ra vui lòng liên hệ Giảng viên để được hỗ trợ!"
                );
                break;
              case 404:
                this.$temitter.emit(
                  "onShowNotice",
                  "Có lỗi xảy ra vui lòng liên hệ Giảng viên để được hỗ trợ!"
                );
                break;
              default:
                this.$temitter.emit(
                  "onShowNotice",
                  "Có lỗi xảy ra vui lòng liên hệ Giảng viên để được hỗ trợ!"
                );
                break;
            }
          });
      }
    },
  },
  created() {
    this.data = this.item;
    this.customerOrigilJson = JSON.stringify(this.item);
    this.customer = JSON.parse(this.customerOrigilJson);
    if (this.formMode == "add") {
      //Lấy mã khách hàng mới
      this.$taxios
        .get("https://cukcuk.manhnv.net/api/v1/customers/NewCustomerCode")
        .then((res) => {
          this.item.CustomerCode = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  computed: {
    formMode: function () {
      if (this.item.CustomerId) {
        return "edit";
      } else {
        return "add";
      }
    },
  },
};
</script>

<style scoped>
.add-modal {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.add-modal-container {
  margin: auto;
  background-color: #fff;
  position: relative;
  top: 15%;
  min-width: 600px;
  border-radius: 5px;
  /* min-height: 600px; */
  width: fit-content;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 500;
}
.add-modal-container h3 {
  font-size: 16px;
  margin: 7px;
  font-weight: 600;
}
.fa-window-close {
  color: red;
  font-size: 20px;
}

.modal-inp {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  height: 36px;
}
input[type="radio"] {
  width: 20px;
}
label {
  margin-top: 10px;
}

.row0,
.row1,
.row2,
.row3,
.row4,
.row5,
.row6,
.row7 {
  display: flex;
}

.modal-lb-exc {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}

.modal-radio {
  margin-top: 0.3rem;
}
.modal-lb {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}

.modal-inp {
  padding: 1rem;
  margin-top: 0.3rem;
}

.add-modal-sdt,
.add-modal-noicap,
.add-modal-email {
  width: 50%;
}

.add-modal-congty,
.add-modal-diachi,
.add-modal-sotienno {
  width: 100%;
}

.row7 {
  justify-content: end;
  /* background-color: #f4f4f4; */
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 0.5rem;
}

.btn {
  width: 6rem;
  height: 36px;
  border-radius: 4px;
  border: 0px;
  cursor: pointer;
}

.btn-cat {
  background-color: #50b83c;
  color: #ffffff;
  margin-right: 0.5rem;
}

.btn-huy {
  color: black;
  background-color: white;
  margin-right: 0.5rem;
  border: 1px solid #a5a0a0;
}
.btn-test {
  background-color: #50b83c;
}

.row0 {
  align-items: center;
  justify-content: space-between;
}

.row0 .icon {
  color: red;
  display: block;
  cursor: pointer;
}

.modal-radio-container {
  display: flex;
  height: 100%;
  align-items: center;
}

.modal-radio {
  margin-right: 5px;
}

.modal-radio-container label {
  margin-right: 12px;
}

.modal-radio {
  width: 24px;
  height: 24px;
}
</style>