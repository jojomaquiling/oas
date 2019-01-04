import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

require('@/assets/css/bootstrap.min.css')
require('@/assets/font-awesome/css/font-awesome.css')
require('@/assets/css/animate.css')
require('@/assets/css/style.css')
require('@/assets/js/jquery-2.1.1.js')
require('@/assets/js/bootstrap.min.js')
require('@/assets/js/plugins/metisMenu/jquery.metisMenu.js')
require('@/assets/js/plugins/slimscroll/jquery.slimscroll.min.js')
require('@/assets/js/inspinia.js')




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    this.changeBodyClass();
  },

  watch: {
    '$route': 'changeBodyClass'
  },

  methods:{
      changeBodyClass(){
            if ((this.$route.name == "Login") || (this.$route.name == "Login2") || (this.$route.name == "Login3")) {
                $("body").addClass("gray-bg");
            } else {
                $("body").removeClass("gray-bg");
            }    
    }
}


})
