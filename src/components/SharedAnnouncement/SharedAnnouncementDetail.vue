<template>
    <div class="container-fluid">
        <div class="container-fluid">
            <p class="lead" >Duyuru Detayları <img  src="https://cdn4.iconfinder.com/data/icons/miu/24/editor-more-detail-outline-stroke-64.png"></p>
            <hr class="my-4"   >
            <div class="row"  v-for="item in sharedlist">
                <div class="col-8">

                    	<span class='zoom' id='ex1'  >
                               <img :src="zoomimg"  style="width: 100%; height: 500px; border: 1px"  >
                    	</span>


                </div>
                <div class="col-4 ">
                    <img  @click="imgover(data)" style="width:33%; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; cursor: pointer" :src="data" alt="Card image cap" v-for="data in item.img">
                </div>
            </div>
        </div>

        <hr class="my-4">
        <p class="lead"> Duyuruya Ait Bilgiler <img src="https://cdn0.iconfinder.com/data/icons/Hand_Drawn_Web_Icon_Set/32/tag_info.png"></p>
        <br>

        <div class="row">


            <div class="col-4">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Duyuru Detayları</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Duyuru Sahibi</a>
                </div>
            </div>
            <div class="col-8" >
                <div class="tab-content " id="v-pills-tabContent" >
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <p class="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue sapien, facilisis sit amet posuere at, fringilla at urna. Fusce sit amet dignissim massa. Aenean malesuada, odio in vehicula aliquam, leo ante fringilla libero, non auctor arcu tellus ut justo. Sed vestibulum ligula quis blandit aliquet. Donec ac leo dolor. Aliquam et ultrices magna. Ut ut mollis ligula. Pellentesque in finibus sem, et tincidunt ex. Aliquam sollicitudin interdum felis quis malesuada. Praesent eleifend erat ut tempor congue. Fusce in pharetra turpis. Morbi sit amet purus mattis, pellentesque est non, pellentesque libero.Praesent et maximus sem. Fusce sed arcu ante. Vestibulum risus nisl, eleifend non augue egestas, rutrum cursus nisi. Nullam rhoncus tincidunt arcu, vitae tempus nibh suscipit iaculis. Duis condimentum vulputate erat sit amet fringilla. Aenean in lacus nisl. Fusce a finibus mauris. Nulla faucibus varius quam, nec lacinia lectus condimentum at. Donec placerat augue ac iaculis dignissim

                        </p>


                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <p class="lead">
                            500 TL
                        </p>

                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <p class="lead" >
                            <img style="cursor: pointer"  src="../../assets/icons/JD-07-32.png" @click="routeuserprofile(user)"> Ayşe Yılmaz
                            <a  role="button" aria-pressed="true" @click="createnewmsg(user)" style="color: #ffffff; float: right" class="btn btn-primary btn-sm"> Ayşe Yılmaz ile İletişime Geç</a>


                        </p>
                    </div>
                </div>

            </div>

        </div>

        <msg-popup :msguser="'aaa'"></msg-popup>

    </div>
</template>

<script>
    import MsgPopup from  '../Message/MsgPopup'
    export  default {
        created(){
            console.log(this.$route.params.prid);

        },
        components:{
            MsgPopup
        },
        data(){
            return{

                select:false,
                zoomimg:"http://kumova.com/userFiles/no-image.png",
                isuserpr:false, //ürün kullanıcının ürünüye ürünü güncelle gözükecek değilse gözükmeyecek
                sharedlist:[
                    {
                        id:"1",
                        name:"aaaa",
                        name2:"bbbb",
                        name3:"cccc",
                        img:[
                            "http://aykutsevinc.com/wp-content/uploads/2018/04/people-4-1030x937.jpg",
                            "https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg",
                            "http://aykutsevinc.com/wp-content/uploads/2018/04/people-4-1030x937.jpg",
                            "https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg",
                            "http://aykutsevinc.com/wp-content/uploads/2018/04/people-4-1030x937.jpg",
                        ]
                    },
                ],
            }
        },
        methods:{
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
</style>
