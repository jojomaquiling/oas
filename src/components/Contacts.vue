<template>
<fragment>
            <div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-sm-4">
                    <h2>{{title1}}</h2>
                    <ol class="breadcrumb">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">
                            <strong>Contacts</strong>
                        </li>
                    </ol>
                </div>
                <div class="col-sm-8">
                    <div class="title-action">
                        <a href="" class="btn btn-primary">This is action area</a>
                    </div>
                </div>
            </div>

            <div class="wrapper wrapper-content">
                <div class="middle-box text-center animated fadeInRightBig">
                    <h3 class="font-bold">{{title1}}</h3>
                    <div class="error-desc">
                        You can create here any grid layout you want. And any variation layout you imagine:) Check out
                        main dashboard and other site. It use many different layout.
                        <br/><a href="index.html" class="btn btn-primary m-t">Dashboard</a>
                    </div>
                </div>
            </div>
</fragment>
</template>
<script>
export default {
  name: 'Contacts',
  data: function () {
    return {
      title1: 'Contacts'
    }  
  },
  mounted(){
	  $("a[href^='contacts']").parent().addClass("active")
  }
  
}
</script>
