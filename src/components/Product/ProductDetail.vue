<template>
      <div class="container-fluid">
          <div class="sk-circle" v-if="!dataload">
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
        <div class="container-fluid">
            <p class="lead" v-show="dataload" >Ürün Detayları<img  src="https://cdn4.iconfinder.com/data/icons/miu/24/editor-more-detail-outline-stroke-64.png"></p>
            <hr class="my-4" v-show="dataload"   >
            <div class="row" v-show="dataload"  v-for="item in prlist">
                <div class="col-8">

                    	<span class='zoom' id='ex1'  >
                               <img :src="zoomimg"  style="width: 500px; height: 500px; border: 1px"  >
                    	</span>


                </div>
                <div class="col-4 ">
                    <img  @click="imgover(data)" style="width:33%; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; cursor: pointer" :src="data" alt="Card image cap" v-for="data in item.img">
                </div>
            </div>
        </div>
        <p class="text-right" @click="deneme" v-show="dataload" v-if="!isuserpr">İlanı Takip Et
            <label class="custom-control custom-checkbox">
                <input type="checkbox" v-model="select" class="custom-control-input">
                <span class="custom-control-indicator"></span>
            </label>
        </p>

        <hr class="my-4" v-show="dataload">
        <p class="lead" v-show="dataload"> Ürüne Ait Bilgiler <img src="https://cdn0.iconfinder.com/data/icons/Hand_Drawn_Web_Icon_Set/32/tag_info.png"></p>
            <br>

                <div class="row" v-show="dataload">


                    <div class="col-4">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">İlan Açıklaması</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">İlan Fiyatı</a>
                            <a  v-if="!isuserpr" class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">İlan Sahibi</a>
                        </div>
                    </div>
            <div class="col-8" >
                    <div class="tab-content " id="v-pills-tabContent" v-for="item in prlist" >
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <p class="lead">
                                    {{item.descraption}}
                                </p>


                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <p class="lead">
                                    {{item.price}} - TL
                                </p>

                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <p class="lead" >
                                    <img style="cursor: pointer"  src="../../assets/icons/JD-07-32.png" @click="routeuserprofile(item.userid)"> {{item.username}}  {{item.uslname}}
                                    <a  v-if="!isuserpr" role="button" aria-pressed="true" @click="createnewmsg(user)" style="color: #ffffff; float: right" class="btn btn-primary btn-sm"> {{item.username}}  {{item.uslname}} ile İletişime Geç</a>


                                </p>
                                <p class="lead">
                                </p>
                            </div>
                        </div>
            </div>
                </div>

        <msg-popup :msguser="{usname:username,uslname:userlname }" :avatar="{img:useravatar}"></msg-popup>

    </div>
</template>

<script>
    import MsgPopup from  '../Message/MsgPopup'
    import ProductService from '../../Service/ProductService'
    import UserProductService from '../../Service/UserProductService'
    export  default {
        created(){
            this.isuserproduct();

        },
        components:{
            MsgPopup
        },
        data(){
            return{
                dataload:false,
                username:"",
                userlname:"",
                useravatar:"",
                select:false,
                zoomimg:"http://kumova.com/userFiles/no-image.png",
                isuserpr:false, //ürün kullanıcının ürünüye ürünü güncelle gözükecek değilse gözükmeyecek
                prlist:[],
            }
        },
        beforeRouteLeave(to,from,next){
        if(this.select){
            console.log("açtı")
            //bildirimler aç
            next()
        }else{
            //devam et
            next()

        }
        },
        methods:{
            isuserproduct(){
                debugger
                var _this=this;
                UserProductService.isuserproduct(
                    {
                        urlparse:Component.urlParse(
                            "productid="+_this.$route.params.prid +"&"+ "userid="+_this.$store.getters.getuser.userid,
                        ),
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                    }
                ).then((res)=>{
                    this.getproductdetail();
                    if(res[0].status===true){
                        this.isuserpr=true
                    }else{
                        this.isuserpr=false
                    }
                })
            },
            getproductdetail(){
                debugger
                var _this=this;
                ProductService.getproductdetail(
                    {
                        urlparse:Component.urlParse(
                            "product.productid="+_this.$route.params.prid+"& productstatus=1"
                        ),
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                    }
                ).then((res)=>{
                    debugger
                    if(res.data){
                        this.prlist=res.data
                        this.zoomimg=res.data[0].img[0][0]
                        this.username=res.data[0].username
                        this.userlname=res.data[0].uslname
                        this.useravatar=res.data[0].avatar
                        this.dataload=true
                    }else{
                      this.$router.push("/NotFound");
                        debugger
                    }
                })
            },
            notificationchange(){
                alert()
            },
            deneme(){
        debugger
                //notificationswitch
            },
            imgover(img){
                this.zoomimg=img;
              console.log(img);
            },
            routeuserprofile(param){
                //param
                this.$router.push("/UserDetail/"+"1")
            },
            createnewmsg(param){
                this.$store.dispatch("initAuth").then((res)=>{
                    if(res==true){

                        this.$store.commit("setpopupstyle","block")
                    }else{
                        this.$store.commit("setModalTarget","#WarningModalftblack")
                        swal({
                            button: "Tamam ",
                            title: "İlan Sahibiyle İletişime Geçmek İçin Lütfen Giriş Yapın.",
                            icon: "error"
                        })
                    }
                })


            }
        }
    }

</script>

<style scoped>
    .zoom {
        display:inline-block;
        position: relative;
    }

    /* magnifying glass icon */
    .zoom:after {
        content:'';
        display:block;
        width:33px;
        height:33px;
        position:absolute;
        top:0;
        right:0;
        background:url("../../assets/img/icon.png");
    }

    .zoom img {
        display: block;
    }
    .nav-pills .nav-link.active{
        background-color: rgb(2, 168, 255);
    }
    .slow  .toggle-group { transition: left 0.7s; -webkit-transition: left 0.7s; }
    .zoom img::selection { background-color: transparent; }
    html {
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-size: 14px;
    }

    .custom-checkbox {
        min-height: 1rem;
        padding-left: 0;
        margin-right: 0;
        cursor: pointer;
    }
    .custom-checkbox .custom-control-indicator {
        content: "";
        display: inline-block;
        position: relative;
        width: 30px;
        height: 10px;
        background-color: #818181;
        border-radius: 15px;
        margin-right: 10px;
        -webkit-transition: background .3s ease;
        transition: background .3s ease;
        vertical-align: middle;
        margin: 0 16px;
        box-shadow: none;
    }
    .custom-checkbox .custom-control-indicator:after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 18px;
        height: 18px;
        background-color: #f1f1f1;
        border-radius: 21px;
        box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);
        left: -2px;
        top: -4px;
        -webkit-transition: left .3s ease, background .3s ease, box-shadow .1s ease;
        transition: left .3s ease, background .3s ease, box-shadow .1s ease;
    }
    .custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {
        background-color: #84c7c1;
        background-image: none;
        box-shadow: none !important;
    }
    .custom-checkbox .custom-control-input:checked ~ .custom-control-indicator:after {
        background-color: #84c7c1;
        left: 15px;
    }
    .custom-checkbox .custom-control-input:focus ~ .custom-control-indicator {
        box-shadow: none !important;
    }
    .sk-circle {
        margin: 100px auto;
        width: 40px;
        height: 40px;
        position: relative;
    }
    .sk-circle .sk-child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .sk-circle .sk-child:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #333;
        border-radius: 100%;
        -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
    }
    .sk-circle .sk-circle2 {
        -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        transform: rotate(30deg); }
    .sk-circle .sk-circle3 {
        -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        transform: rotate(60deg); }
    .sk-circle .sk-circle4 {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg); }
    .sk-circle .sk-circle5 {
        -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
        transform: rotate(120deg); }
    .sk-circle .sk-circle6 {
        -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
        transform: rotate(150deg); }
    .sk-circle .sk-circle7 {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg); }
    .sk-circle .sk-circle8 {
        -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
        transform: rotate(210deg); }
    .sk-circle .sk-circle9 {
        -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
        transform: rotate(240deg); }
    .sk-circle .sk-circle10 {
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg); }
    .sk-circle .sk-circle11 {
        -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
        transform: rotate(300deg); }
    .sk-circle .sk-circle12 {
        -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
        transform: rotate(330deg); }
    .sk-circle .sk-circle2:before {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s; }
    .sk-circle .sk-circle3:before {
        -webkit-animation-delay: -1s;
        animation-delay: -1s; }
    .sk-circle .sk-circle4:before {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s; }
    .sk-circle .sk-circle5:before {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s; }
    .sk-circle .sk-circle6:before {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s; }
    .sk-circle .sk-circle7:before {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s; }
    .sk-circle .sk-circle8:before {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s; }
    .sk-circle .sk-circle9:before {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s; }
    .sk-circle .sk-circle10:before {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s; }
    .sk-circle .sk-circle11:before {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s; }
    .sk-circle .sk-circle12:before {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s; }

    @-webkit-keyframes sk-circleBounceDelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% {
              -webkit-transform: scale(1);
              transform: scale(1);
          }
    }

    @keyframes sk-circleBounceDelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% {
              -webkit-transform: scale(1);
              transform: scale(1);
          }
    }
</style>
