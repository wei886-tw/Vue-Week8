import { createApp } from 'vue';
import { createPinia } from 'pinia';



import * as Vue from 'vue'; 
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

import { register } from 'swiper/element/bundle';

// import Vue Loading
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'

/* 引入 VeeValidate 元件跟功能 */
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import * as AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[ rule ]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})

// 設定預設語系
setLocale('zh_TW')

// 引入 bootstrap
import '../src/assets/bootstrap/scss/bootstrap.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

register();

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(LoadingPlugin);
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);


app.mount('#app');