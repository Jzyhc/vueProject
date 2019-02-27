import Vue from 'vue'
import App from './App'
import router from './router'
if(process.env.consoleFlag){
  var vconsole = require('./utils/vsconsole')
}
console.log('4444',process.env.consoleFlag)
console.log('555',Vconsole)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
