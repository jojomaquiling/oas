<template>
<fragment>
                <li class="active">
                    <a href="#"><i class="fa fa-database"></i> <span class="nav-label">File</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="contacts">Contacts</a></li>
                        <li><a href="costcenters">Cost Centers</a></li>
                        <li><a href="chartofaccounts">Chart of Accounts</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="fa fa-book"></i> <span class="nav-label">Ledgers</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse">
                        <li><a href="#">Check Voucher Manager</a></li>
                        <li><a href="#">Journal Entry Manager</a></li>
                        <li><a href="#">Inventory Manager</a></li>
                    </ul>
                </li>            
               
				<li>
                    <a href="#"><i class="fa fa-print"></i> <span class="nav-label">Reports</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse">
                        <li>
                            <a href="#">Listings<span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li>
                                    <a href="#">AR </a>
                                </li>
                                <li>
                                    <a href="#">AR Per Type</a>
                                </li>
                                <li>
                                    <a href="#">Accts. Transaction </a>
                                </li>
                                <li>
                                    <a href="#">Disbursement Book</a>
                                </li>
                                <li>
                                    <a href="#">Journal Book</a>
                                </li>
                                <li>
                                    <a href="#">Aging of Accounts</a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="#">Statements<span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li>
                                    <a href="#">Income from Operation </a>
                                </li>
                                <li>
                                    <a href="#">Trial Balance</a>
                                </li>
                                <li>
                                    <a href="#">Financial Condition</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>                
                
                        
</fragment>             
</template>
<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default {
  name: 'RealMenu',   
  mounted(){
	this.currentRoute();
  },
  methods:{
	currentRoute:function(){
		console.log(this.$route.name);
	}
  }
}
</script>
