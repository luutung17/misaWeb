import { createRouter, createWebHistory } from "vue-router";
import TMain from "../../Layout/Main/Main.vue";
import TReport from "./Report.vue";
import TCustomer from "./Customer.vue";
import THome from "./Home.vue";
import TSetting from "./Setting.vue";
import TThuGon from "./ThuGon.vue";

const routes = [
  { path: "/home", component: THome },
  { path: "/customer", component: TCustomer },
  { path: "/employee", component: TMain },
  { path: "/report", component: TReport },
  { path: "/settings", component: TSetting },
  { path: "/thuGon", component: TThuGon },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
