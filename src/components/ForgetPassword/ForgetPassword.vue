<template>
<div>
    <div class="form-gap"></div>
    <div class="container" style="padding-top: 8%">
        <div class="row justify-content-center">
            <div class="col-md-4 col-md-offset-4 ">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-center">
                            <h3><img src="../../assets/icons/23-128.png"> </h3>
                            <h2 class="text-center">Parolanızı mı Unuttunuz ?</h2>
                            <p>Parolanızı Sıfırlamak İçin   Email Adresinizi Girin Ve Gelen Bağlantıya Tıklayın.</p>
                            <div class="panel-body">

                                <form id="register-form" role="form" autocomplete="off" class="form" method="post">

                                    <div class="form-group">
                                        <div class="input-group">

                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input id="email" :class="{'is-invalid':this.invalid}" @blur="checkemail"  name="email"    v-model="forgetmail" placeholder="Email Adresi *"  class="form-control"  type="email">
                                        </div>
                                    </div>
                                    <small class="form-text text-danger" v-if="invalid"> Lütfen Geçerli Bir Email Adresi Girin.</small>
                                    <small id="emailHelp" class="form-text text-muted">Email Adresine Gelen Parola Sıfırlama Bağlantısını Kullan ve Yeni Parolanı Oluştur</small>
                                    <div class="form-group">
                                        <button type="button" :disabled="invalidbtn" @click="isuser" class="btn btn-primary">Sıfırlama Bağlantısı Gönder</button>

                                    </div>
                                    <div class="form-group">
                                        <button type="button" @click="routelogin" class="btn btn-primary">Giriş Sayfasına Geri Dön</button>
                                    </div>

                                    <input type="hidden" class="hide" name="token" id="token" value="">
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
            data(){
                return{
                    forgetmail:"",
                    invalid:false,
                    invalidbtn:true
                }
            },
        methods:{
                checkemail(){
                    if(Component.validateemail(this.forgetmail)==false){
                        this.invalid=true
                    }
                    else if(this.forgetmail.trim()==""){
                        this.invalid=true
                    }
                    else{
                        this.invalid=false
                        this.invalidbtn=false
                    }
                },
                routelogin(){
                  this.$router.push("/Login")
                },
            isuser(){

            }
        }
    }
</script>

<style scoped>
.forget{
    vertical-align: center;
    horiz-align: center;
    margin-top: 250px;
}
    .sbmtbtn{
        margin-left: 240px;
    }
    .form-gap {
        padding-top: 70px;
    }
</style>