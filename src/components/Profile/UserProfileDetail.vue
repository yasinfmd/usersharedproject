<template>
    <div>
        <Modal :content="$store.getters.getmodalcontent"></Modal>

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
                                <a role="button" :data-target="$store.getters.gettarget" data-toggle="modal" @click="sendmsg({usname:'Ayşe',uslname:'Yılmaz'})"  >       <p class="lead" style="cursor: pointer" >Ayşe Yılmaz ile sohbet et 💬</p></a>

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
    import  Modal from  '../Modal/Modal'
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
                        this.$store.commit("setModalTarget","")
                        this.$store.commit("setModal","")
                        this.$store.commit("setpopupstyle","block")

                    }else{
                        this.$store.commit("setModalTarget","#WarningModalftblack")
                        this.$store.commit("setModal","İlanı Sahibiyle İletişime Geçmek İçin Lütfen Giriş Yapın")
                    }
                })
            }
        },
        components:{
            MsgPopup,
            Modal
        },
    }
</script>

<style scoped>

</style>