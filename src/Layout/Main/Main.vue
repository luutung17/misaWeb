<template>
  <div class="v-table">
    <div class="header-main">
      <h1>Nhân Viên</h1>

      <div class="option-header">
        <button class="button-add" @click="showModal('add')">Thêm mới</button>
        <div class="button-list"></div>
      </div>
    </div>

    <br />
    <table border="1" cellpadding="2" cellspacing="2">
      <thead>
        <tr>
          <th class="txt-center" style="width: 60px">
            <input type="checkbox" class="checkbox" @click="chooseTick" />
          </th>
          <th>Mã Khách Hàng</th>
          <th>Tên Khách Hàng</th>
          <th>Giới Tính</th>
          <th>Ngày Sinh</th>
          <th>Nhóm khách hàng</th>
          <th>Địa chỉ</th>
          <th>Số tiền nợ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cus in customers" :key="cus.CustomerId">
          <td class="txt-center">
            <input type="checkbox" class="checkbox" />
          </td>
          <td>{{ cus.CustomerCode }}</td>
          <td>{{ cus.FullName }}</td>
          <td>{{ formatGender(cus.Gender) }}</td>
          <td>{{ cus.DateOfBirth }}</td>
          <td>{{cus.CustomerGroupId}}</td>
          <td>{{ cus.Address }}</td>
          <td>{{ formatNumber(cus.DebitAmount) }}</td>
          <td class="txt-icon">
            <div class='icon'>
              <i class="fas fa-edit" @click="showModal('edit', cus)"></i>
              <i class="fas fa-trash" @click="deleteItem(cus)"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CustomerForm
    v-if="isModalVisible"
    @closeFormTable="closeModal"
    :action="modalAction"
    :item="modalItem"
    :customerInput="modalItem"
  ></CustomerForm>
</template>

<script>

import CustomerForm from "../../View/CustomerForm.vue";
/* eslint-disable */
export default {
  name: "TMain",
  components: {
    CustomerForm,
  },
  data() {
    return {
      customers: [],
      isModalVisible: false,
      modalAction: "",
      modalItem: {},
      oldModalItem: {},
    };
  },
  methods: {
    showModal(action, cus) {
      if (action == "edit") {
        this.modalAction = action;
        this.modalItem = cus;
        this.oldModalItem = JSON.parse(JSON.stringify(cus));
      }

      if (action == "add") {
        this.modalItem = {};
      }

      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    deleteItem(cus) {
      const confirmDelete = window.confirm("Bạn có chắc muốn xóa không?");
      if (confirmDelete) {
        fetch(`https://cukcuk.manhnv.net/api/v1/customers/${cus.CustomerId}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Xóa không thành công");
            }
            return response.json();
          })
          .then((data) => {
            this.customers = this.customers.filter(
              (item) => item.CustomerId !== cus.CustomerId
            );
            console.log("Đã xóa thành công", data);
          })
          .catch((error) => {
            console.error("Lỗi:", error);
          });
      }
    },
    fetchData() {
      this.$taxios.get("https://cukcuk.manhnv.net/api/v1/customers")
        .then((res) =>{
          this.customers = res.data;

        })
        .catch((error) => {
          console.log(error);
          const response = error.response;
          const status=response.status;
          let msg="";
          switch (status) {
            case 400:

              break;
              case 401:
              
              break;
              case 402:
              
              break;
              case 403:
              
              break;
              case 404:
               msg="Địa chỉ truy cập không đúng";
               alert(msg);
              break;
          }
        })
    },
    formatNumber(amount) {
      if (amount !== null) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      return "";
    },
    formatDate(date) {
      return date.newDate().toString();
    },
    formatGender(gender) {
      if (gender == 0) {
        return "Nữ";
      } else {
        return "Nam";
      }
    },
  },
  created() {
    this.fetchData();
  }
};
</script>
<style scoped>
.header-main {
  background-color: #eeeff1;
  display: flex;
  justify-content: space-between;
  height: 60px;
}
h1 {
  margin-top: 10px;
}
.option-header {
  display: flex;
  margin-right: 20px;
}
.checkbox {
  width: 24px;
  height: 24px;
}
.txt-center {
  text-align: center;
}

.button-add {
  display: inline-block;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  height: 40px;
  margin: auto;
  margin-right: 10px;
  transition: background-color 0.3s;
}

.button-add:hover {
  background-color: #45a049;
}

.button-list {
  background: url("../../assets/Sprites.96108a46.svg") no-repeat -29px -85px;
  width: 24px;
  height: 24px;
  border: 1px solid #e0e0e0;
  margin: auto;
  padding: 15px;
}
.v-table {
  margin: 20px;
  overflow-y: scroll;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #f9f9f9;
}

table,
th,
td {
  border: 1px solid #ccc;
}

th,
td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #4caf50;
  color: white;
}

td:nth-child(even) {
  background-color: #f2f2f2;
}
.icon{
  display: flex;
}
.fa-edit{
  margin-right:10px ;
}
.fa-edit,.fa-trash{
  padding: 5px;
}
</style>