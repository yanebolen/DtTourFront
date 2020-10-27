import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import Vuex from 'vuex'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);
import DatePicker from 'vue2-datepicker'
import App from './App.vue'
import router from './routes'

Vue.use(Vuex)

Vue.use(VuePersianDatetimePicker)

Vue.use(DatePicker)

Vue.use(Axios)

Vue.use(Vuelidate)

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
