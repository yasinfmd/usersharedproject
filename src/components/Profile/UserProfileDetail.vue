<template>
    <div>
        <div class="sk-circle" v-if="datalist.length>0?false:true">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
        </div>
    <div class="container tab-pane in active animated flipInX custon-tab-style1 " style="margin-top: 20px" v-if="datalist.length>0?true:false">
        <div class="row" v-for="item in datalist" >

            <div class="col-md-12">

                <div class="card" style="width: 30rem;">

                    <div class="card-header">
                        <p class="lead">{{item.userfirstname}} {{item.userlastname}}</p>
                    </div>
                    <img class="card-img-top" :src="item.avatar" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-id-32.png"> Genel Bilgiler </h5>
                        <hr style="border: 1px solid black; background-color: black">
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Şehir</label>
                            <div class="col-4">
                                <p>{{item.city}}</p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Email</label>
                            <div class="col-4">
                                <p>{{item.username}}</p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">İletişim</label>
                            <div class="col-4">
                                <a role="button"  @click="sendmsg(item)"  >       <p class="lead" style="cursor: pointer" >{{item.userfirstname}} {{item.userlastname}} ile sohbet et 💬</p></a>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Şikayet</label>
                            <div class="col-4">
                                <a role="button"  @click="routecomplaint(item.userid)" >       <p class="lead" style="cursor: pointer" >{{item.userfirstname}} {{item.userlastname}}'ı Şikayet  et <i class="fas fa-exclamation-triangle"></i></p></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <msg-popup :msguser="usermsg" :avatar="usavatar"></msg-popup>

    </div>
    </div>

</template>

<script>
    import MsgPopup from  '../Message/MsgPopup'
    export default {
        data(){
            return{
                user:{},
                usermsg:{   usname:"",
                    uslname:""},
                dataload:false,
                usavatar:{img:""}
            }
        },
        methods:{
            routecomplaint(user){
                //uuser id
                this.$store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        this.$router.push("/Complaint/"+"1")
                    }else{
                        swal({
                            button: "Tamam ",
                            title: "İlanı Sahibini Şikayet  Etmek İçin Lütfen Giriş Yapın",
                            icon: "error"
                        })
                    }
                })

            },
            sendmsg(param){
                this.$store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        debugger
                        this.usavatar={img:param.avatar}
                        this.usermsg={
                            usname:param.userfirstname,
                            uslname:param.userlastname
                        }
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
        created(){

        },
        props:['datalist'],
        components:{
            MsgPopup
        },
    }
</script>

<style scoped>

</style>