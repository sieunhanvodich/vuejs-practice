import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VuetifyConfirm from 'vuetify-confirm'
import VueSimpleAlert from "vue-simple-alert";
import 'vuetify/dist/vuetify.min.css';
import router from './router/index'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VuetifyConfirm, { vuetify })
Vue.use(VueSimpleAlert);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
