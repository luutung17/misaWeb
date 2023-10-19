import { createApp } from "vue";
// Components
import App from "./App.vue";
import TInput from "./components/Input/TInput.vue";
import TCombobox from "./components/Input/t-combobox.vue";
import Validate from "./components/Validate/Validate.vue";
//router
import router from "./components/router";
//emitter
import temitter from "tiny-emitter/instance";
//axios
import taxios from 'axios';


const app = createApp(App);
//tắt cảnh báo 
app.config.warnHandler = () => {};
app.config.globalProperties.$temitter=temitter;
app.config.globalProperties.$taxios=taxios;
app.use(router);
app.component("t-validate", Validate);
app.component("t-combobox", TCombobox);
app.component("TInput", TInput);
app.mount("#app");
