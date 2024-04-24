import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import './registerServiceWorker'

Vue.config.productionTip = false

const firebaseInitializeApp = initializeApp({
  apiKey: "AIzaSyBrO4U57wDlyHvssEZUD7WFKIKR6LNKLPI",
  authDomain: "deliverypot-3d353.firebaseapp.com",
  databaseURL: "https://deliverypot-3d353-default-rtdb.firebaseio.com",
  projectId: "deliverypot-3d353",
  storageBucket: "deliverypot-3d353.appspot.com",
  messagingSenderId: "548317202641",
  appId: "1:548317202641:web:d325fd9e3994af63ce1df0"
});
getDatabase(firebaseInitializeApp)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
