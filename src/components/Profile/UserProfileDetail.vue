<template>
    <div>

    <div class="container tab-pane in active animated flipInX custon-tab-style1 " style="margin-top: 20px">
        <div class="row">

            <div class="col-md-12">

                <div class="card" style="width: 30rem;">

                    <div class="card-header">
                        <span>Kullanıcı Adı Soyadı</span>
                    </div>
                    <img class="card-img-top" src="https://randomuser.me/api/portraits/women/9.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-id-32.png"> Genel Bilgiler </h5>
                        <hr style="border: 1px solid black; background-color: black">
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Şehir</label>
                            <div class="col-4">
                                <p>1231232132</p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Email</label>
                            <div class="col-4">
                                <p>1231232132</p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">İletişim</label>
                            <div class="col-4">
                                <a role="button"  @click="sendmsg({usname:'Ayşe',uslname:'Yılmaz'})"  >       <p class="lead" style="cursor: pointer" >Ayşe Yılmaz ile sohbet et 💬</p></a>

                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Şikayet</label>
                            <div class="col-4">
                                <a role="button"  data-toggle="modal"   >       <p class="lead" style="cursor: pointer" >Ayşe Yılmaz'ı Şikayet  et <i class="fas fa-exclamation-triangle"></i></p></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <msg-popup :msguser="user"></msg-popup>

    </div>
    </div>

</template>

<script>
    import MsgPopup from  '../Message/MsgPopup'
    export default {
        data(){
            return{
                user:{}
            }
        },
        methods:{
            sendmsg(param){
                this.$store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        this.user=param
                        //ekle
                        this.$store.commit("setpopupstyle","block")

                    }else{
                        swal({
                            button: "Tamam ",
                            title: "İlanı Sahibiyle İletişime Geçmek İçin Lütfen Giriş Yapın",
                            icon: "error"
                        })
                    }
                })
            }
        },
        components:{
            MsgPopup
        },
    }
</script>

<style scoped>

</style>