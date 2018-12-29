<template>
    <div class="loginColumns animated fadeInDown">
        <div class="row">

            <div class="col-md-6">
                <h2 class="font-bold">Online Accounting System v.1.0</h2>

                <p>
                    The Online home of double entry.
                </p>

<!--                <p>
                    <small>Online home of double entry.</small>
                </p> -->

            </div>
            <div class="col-md-6">
                <div class="ibox-content">
                    <form class="m-t" role="form" action="index.html">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Username" required="">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" required="">
                        </div>
                        <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

                        <a href="#">
                            &nbsp;
                        </a>

                        <p class="text-muted text-center">
                           &nbsp;
                        </p>
                        <a class="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
                    </form>
                    <p class="m-t">
                        <small>Online Accounting System &copy; 2018</small>
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
               <small>Solutions From Pro v.1.0.0 &copy; 2018</small>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  mounted(){
   jQuery("#the_link a").hide();
}
}
</script>

