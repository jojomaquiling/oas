<template>
    <div class="loginColumns animated fadeInDown">
        <div class="row">

            <div class="col-md-6">
                <h2 class="font-bold">Online Accounting System</h2>

                <p>
                    Integrity + Accuracy.
                </p>

<!--                <p>
                    <small>Online home of double entry.</small>
                </p> -->

            </div>
            <div class="col-md-6">
                <div class="ibox-content">
                    <form class="m-t" role="form" v-on:submit.prevent="logging_in">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="username" placeholder="Username" required="">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" v-model="password" placeholder="Password" required="">
                        </div>
                        <button type="submit" class="btn btn-primary block full-width m-b" >Login</button>

                        <a href="#">
                            &nbsp;
                        </a>

                        <p class="text-muted text-center">
                           &nbsp;
                        </p>
<!--
                        <a class="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
-->
                    </form>
                    <p class="m-t">
                        <small>Online Accounting System &copy; {{year}}</small>
                    </p>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md-6">
                Solutions From Pro
            </div>
            <div class="col-md-6 text-right">
               <small>Solutions From Pro v.1.0.0 &copy; {{year}}</small>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
import axios from 'axios';


export default {
  name: 'Login',
  mounted(){
	jQuery("#the_link a").hide();
	Vue.localStorage.remove('token_');
},
  data: function () {
    return {
      year: (new Date()).getFullYear(),
      username:'',
      password:''
    }
      
  },
  methods:{
	logging_in(event){
		event.preventDefault();
		axios.post(this.api_url + 'get_token', {username:this.username,password:this.password}).then(function(res){		
			Vue.localStorage.set('someNumber', 123);
			Vue.localStorage.set('token_', res.data.token);
			window.location.href = "/dashboard";			
			
		}).catch(error => {
			Vue.localStorage.remove('token_')
		});
	}
  }
  
  
  
}
</script>

