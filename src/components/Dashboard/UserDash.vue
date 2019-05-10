<template>
     <div class="container-fluid" style="padding-top:3%">
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
    <div class="container" v-if="dataload">
      <div class="container-fluid" v-if="discountpr.length>0">
        <h6 class="display-5 text-right" style="  font-family: 'Open Sans', sans-serif;">İndirimdeki Ürünler</h6>
        <hr style="    border: 1.5px solid #92FB63;
    background-color: #92FB63;
    color: #92FB63;">
        <div id="carouselExample" class="carouselPrograms carousel slide" data-ride="carousel" data-interval="false">
          <div class="carousel-inner row w-100 mx-auto" role="listbox">
            <div class="carousel-item col-md-4" :key="index" :class="{'active':index===0}" v-for="(item,index) in discountpr" >
              <div class="panel panel-default">
                <!-- :class="{'carousel-item active':index==0,'carousel-item':index!=0}" v-for="(item, index) in -->
                <div class="panel-thumbnail">
                  <a href="#"  class="thumb">
                    <img class="img-fluid mx-auto d-block" @click="routeprdetail(item)" style="width: 600px; height: 300px" :src="item.img" >
                  </a>
                </div>
              </div>
            </div>

          </div>
          <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon"  aria-hidden="true" style="width: 40px; background-color: black;border: 3px solid black;border-radius: 50px"></span>
            <span class="sr-only">Geri</span>
          </a>
          <a class="carousel-control-next text-faded" href="#carouselExample"  role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" style="width: 40px; background-color: black;border: 3px solid black;border-radius: 50px"></span>
            <span class="sr-only">İleri</span>
          </a>
        </div>
      </div v- v->
      <h6 class="display-5 text-center"  style="padding-top: 40px;font-family: 'Open Sans', sans-serif;'">Vitrindeki Son İlanlar</h6>

      <hr style="    border: 1.5px solid #92FB63;
    background-color: #92FB63;
    color: #92FB63;">
      <div class="row cardpadding">
        <div class="col-xs-12 col-sm-6 col-md-4"  v-for="(item,i) in product">
          <div class="image-flip"  >
            <div class="mainflip">
              <div class="frontside" >
                <div class="card" v-if="!item.backcard">
                <div class="card-header cardheadercolor" style="background-color: rgb(84, 197, 249)">
                  <img src="../../assets/icons/tower-16.png"> <small>{{item.time}}</small>
                  <small class="datepadding">{{item.date}} </small>   <img src="../../assets/icons/calendar.png">
                </div>
                <div class="card-body text-center">
                  <p><img class=" img-fluid" :src="item.img" alt="card image"></p>
                  <h4 class="card-title">{{item.title}}    <small>({{item.price}} TL)</small></h4>
                  <p class="card-text" style="cursor: pointer;text-decoration: underline" @click="turncard(item,i)"> İlana Ait Açıklama İçin Tıklayın.</p>
                  <button type="button" class="btn btn-primary btn-sm  cardbtncls" @click="routeprdetail(item.productid)">İlana Git <i class="fas fa-hand-point-left godetail"></i>  </button>


                  <a role="button"  style="color: white;border: 1px solid white;"  class="btn btn-primary btn-sm cardbtncls " @click="addFav(item.productid,item.userid)">Favorilerime Ekle<i class="fas fa-star addfavcls"></i></a>

                </div>
              </div>
                <transition
                        name="custom-classes-transition"
                        enter-active-class="animated tada"
                        leave-active-class="animated bounceOutRight"
                >
                <div class="card"   v-if="item.backcard">
                  <div class="card-header cardheadercolor" style="background-color: rgb(84, 197, 249)">
                    <img src="../../assets/icons/tower-16.png"> <small>{{item.time}}</small>
                    <small class="datepadding">{{item.date}} </small>   <img src="../../assets/icons/calendar.png">
                  </div>
                  <div class="card-body text-center">
                    <p class="card-text">{{item.descraption}}</p>
                    <p @click="turncard(item,i)" style="cursor: pointer; text-decoration: underline"> Geri Dön </p>
                  </div>
                </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end btn btn-primary  morepadding ld-ext-right  col-md-3" :class="{'running':loadingmore}" style="float: right" @click="productpagination">
        Daha Fazla Ürün Göster ...
        <div class="ld ld-ring ld-spin"></div>
      </div>

    </div>
  </div>

</template>
<script>
  import  ProductService from '../../Service/ProductService'
  import FavoriteProductService from '../../Service/FavoriteService'
  import NotificationService from '../../Service/NotificationService'
  export default {

    data(){
      return {
        dataload:false,
        pagination:1,
        loadingmore:false,
        product:[
        ],
        discountpr:[
      ]
      }
    },
    methods:{
      turncard(item,i){
        debugger
          item.backcard=!item.backcard
      },
      getnotification(){
        var _this=this
        NotificationService.get(
                {
                  urlparse:Component.urlParse(
                    "notification.fromuser="+_this.$store.getters.getuser.userid+"&notification.reading=n"
                  ),
                  token:_this.$store.getters.getuser.token,
                  email:_this.$store.getters.getuser.username,
                  userid:_this.$store.getters.getuser.userid,
                }
        ).then((res)=>{
          if(res.data){
              this.$store.commit("setntfcount",res.data.length)
          }else{
          }
        })
      },
      addnotification(prid,userid){
        debugger
        var _this=this;
            NotificationService.add(
                    {
                      type:1,
                      touser:_this.$store.getters.getuser.userid,
                      prid:prid,
                      fromuser:userid,
                      token:_this.$store.getters.getuser.token,
                      email:_this.$store.getters.getuser.username,
                      userid:_this.$store.getters.getuser.userid,
                      date:new Date().toLocaleDateString(),
                      time:new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
                    }
            ).then((res)=>{
                if(res[0].status=="Success"){
                  swal({
                    button: "Tamam ",
                    title: "İlanı Favorilerinize Eklendi",
                    icon: "success"
                  })
                }else{
                  swal({
                    button: "Tamam ",
                    title: "İlanı Favorilerinize Eklenirken Hata Gerçekleşti",
                    icon: "error"
                  })
                }
            })
      },
      addFav(prid,userid){
        debugger
        const _this=this;
         this.$store.dispatch("initAuth").then((res)=>{
            if(res==true){
              FavoriteProductService.addfav({
                touserid:_this.$store.getters.getuser.userid,
                productid:prid,
                fromuserid:userid,
                token:_this.$store.getters.getuser.token,
                email:_this.$store.getters.getuser.username,
                userid:_this.$store.getters.getuser.userid,
              }).then((res)=>{
                debugger
                  if(res[0].status=="Success"){
                    // notigication list bak
                      this.addnotification(prid,userid)

                  }else if(res[0].status=="Have"){
                    swal({
                      button: "Tamam ",
                      title: "İlanı Daha Önce Favorilerinize Eklediniz",
                      icon: "error"
                    })
                  }else{
                    swal({
                      button: "Tamam ",
                      title: "İlanı Favorilerinize Eklenirken Hata Gerçekleşti",
                      icon: "error"
                    })
                  }
              })
              //ekle

            }else{
              swal({
                button: "Tamam ",
                title: "İlanı Favorilerinize Eklemek İçin Lütfen Giriş Yapın!",
                icon: "warning"
              })
            }
          })
      },
      productdetail(){
        console.log("ürün detayı")
      },
      showmoretext(){
      },
      productpagination(){
        debugger
        this.pagination=parseInt(this.pagination)+1
        this.getproduct(this.pagination)
    /*    this.loadingmore=true
        setTimeout(()=>{
          for (var i=0;i<5;i++){
            this.product.push({id:1,title:"Acil Satılık Telefon",desc:"Sorunsuz Telefon Satılık",price:"500",date:"27.02.2019",time:"17:22",primg:"https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-91830-4_small.JPG"})

          }
          this.loadingmore=false
        },3000)*/

      },
      routeprdetail(param){
        this.$router.push("/ProductDetail/"+param);
      },
      getLocation(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition,this.positionerr);
        } else {
          console.log("Tarayıcınız Konum Bilgisini Desteklememektedir.");
        }
      },
      positionerr(error){
        var mesaj="";
        switch(error.code){
          case error.UNKNOWN_ERROR:
            mesaj="Bilinmeyen bir hata olustu hata kodu="+error.UNKNOWN_ERROR;
            break;
          case error.PERMISSION_DENIED:
            //konumsuz data çek
            break;
          case error.POSITION_UNAVAILABLE:
            mesaj="Konum tespit edilemedi hata kodu="+error.POSITION_UNAVAILABLE;
            break;
          case hata.TIMEOUT:
            mesaj="Zaman Asimi hata kodu="+hata.TIMEOUT;
            break;
        }

        alert(mesaj);
      },
      showPosition(position){
        //konumlu data çek
          var _this=this;
        const coord = position.coords.longitude + ',' + position.coords.latitude;
        const location= $.getJSON( 'http://geocode-maps.yandex.ru/1.x/?geocode=' + coord + '&lang=tr-TR&format=json&callback=?', function(res) {
          console.log(res);
          const userlocation={
            locationname: res.response.GeoObjectCollection.featureMember[0].GeoObject.description+ " "+   res.response.GeoObjectCollection.featureMember[0].GeoObject.name,
            coord:res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          }
          debugger
          _this.$store.dispatch("setLocation",userlocation)
          console.log(_this.$store.getters.getlocation)
          console.log(userlocation)
          console.log(res.response.GeoObjectCollection.featureMember);
          console.log(  res.response.GeoObjectCollection.featureMember[ res.response.GeoObjectCollection.featureMember.length-2].GeoObject.name)
        })
      },
      getproduct(param){
        debugger
        var _this=this;
        this.loadingmore=true
        debugger
        var parserword;
        debugger
        if(this.$store.getters.getuser!=undefined){
         parserword= "photo.seqnumber=0 & userproduct.userid-"+_this.$store.getters.getuser.userid+"& product.productstatus=1"
        }else{
          parserword= "photo.seqnumber=0&product.productstatus=1"
        }
        //userproduct.userid-"+_this.$store.getters.getuser.userid+"
        ProductService.getproduct({urlparse:
                  Component.urlParse(parserword),
          pagination:this.pagination
        }).then((res)=>{
          debugger
          if(res.status===undefined){
            debugger
            if (res.data.length > 0) {
              res.data.forEach((x) => {
                if(parseInt(x.price) < parseInt(x.oldprice)){
                  this.discountpr.push(x);
                }
                x.backcard=false

              })
                if(param){
                  debugger
                  res.data.forEach((x) => {
                    this.product.push(x)
                  })

                }else{
                  this.product=res.data;
                }


              this.loadingmore=false
              console.log(this.product)
              this.dataload = true;
            }
            else {
              this.pagination=parseInt(this.pagination)-1
              console.log(this.pagination)
              this.loadingmore=false
              this.dataload = true;
            }


          }
          else
          {
            debugger
            this.loadingmore=false
            this.dataload=true;
          }
        })
        debugger
      },
    },
    created(){
      this.$store.dispatch("initAuth").then((res)=>{
        if(res==true){
          this.getproduct();
          this.getnotification();
        }
        else{
          this.getproduct();
        }
      })
    },
    computed:{
      isloading(){
        if(!this.dataload){
        return{
          display:"none"
        }
        }else{
          return{
            display:"none"
          }
        }

      }
    },

    mounted() {
      this.getLocation();
      $('.carousel').carousel({
        interval: 2000
      })
      $('a.thumb').click(function(event){
        event.preventDefault();
        var content = $('.modal-body');
        content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);
        content.html($(this).html());
        $(".modal-profile").modal({show:true});
      });
      $('#carouselExample').on('slide.bs.carousel', function (e) {
        const $e = $(e.relatedTarget);
        const idx = $e.index();
        const itemsPerSlide = 3;
        const totalItems = $('.carousel-item').length;
        if (idx >= totalItems-(itemsPerSlide-1)) {
          const it = itemsPerSlide - (totalItems - idx);
          for (let i=0; i<it; i++) {
            if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
          }
        }
      });
    }
  }


</script>

<style scoped>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .cardbtncls{
    opacity: 0.8;
    border: 1px solid;
  }
  .complete{
    display:none;
  }

.morepadding{
  margin-bottom: 20px;
}
  .datepadding{
    padding-left: 100px;
  }
.cardpadding{
  padding: 20px;
}
.godetail{
  color: orange;
  cursor: pointer;
}
.addfavcls{
  color: red;
  cursor: pointer;
}
  .cardheadercolor{
    color: white;
  }

  @media (min-width: 768px) {

    /* show 3 items */
    .carouselPrograms .carousel-inner .active,
    .carouselPrograms .carousel-inner .active + .carousel-item,
    .carouselPrograms .carousel-inner .active + .carousel-item + .carousel-item {
      display: block;
    }

    .carouselPrograms .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
    .carouselPrograms .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item,
    .carouselPrograms .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item {
      transition: none;
    }

    .carouselPrograms .carousel-inner .carousel-item-next,
    .carouselPrograms .carousel-inner .carousel-item-prev {
      position: relative;
      transform: translate3d(0, 0, 0);
    }

    .carouselPrograms .carousel-inner .active.carousel-item + .carousel-item + .carousel-item + .carousel-item {
      position: absolute;
      top: 0;
      right: -33.333%;
      z-index: -1;
      display: block;
      visibility: visible;
    }
    .carouselPrograms .active.carousel-item-left + .carousel-item-next.carousel-item-left,
    .carouselPrograms .carousel-item-next.carousel-item-left + .carousel-item,
    .carouselPrograms .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,
    .carouselPrograms .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item {
      position: relative;
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
    .carouselPrograms .carousel-inner .carousel-item-prev.carousel-item-right {
      position: absolute;
      top: 0;
      left: 0%;
      z-index: -1;
      display: block;
      visibility: visible;
    }
    .carouselPrograms .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
    .carouselPrograms .carousel-item-prev.carousel-item-right + .carousel-item,
    .carouselPrograms .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,
    .carouselPrograms .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item {
      position: relative;
      transform: translate3d(100%, 0, 0);
      visibility: visible;
      display: block;
      visibility: visible;
    }
  }


  .btn-primary:focus {
    background-color: #108d6f;
    border-color: #108d6f;
    box-shadow: none;
    outline: none;
  }

  .btn-primary {
    color: #fff;
    background-color: #007b5e;
    border-color: #007b5e;
  }

  section {
    padding: 60px 0;
  }

  section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
  }

  #team .card {
    border: none;
    background: #ffffff;
  }
  .mainflip {
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
    position: relative;
  }

  .frontside {
    position: relative;
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    z-index: 2;
    margin-bottom: 30px;
  }

  .frontside .card .card-title,
  .backside .card .card-title {
    color: #007b5e !important;
  }

  .frontside .card .card-body img {
    width: 150px;
    height: 150px;
    border-radius: 2%;
  }

  #loader {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Add animation to "page content" */
  .animate-bottom {
    position: relative;
    -webkit-animation-name: animatebottom;
    -webkit-animation-duration: 1s;
    animation-name: animatebottom;
    animation-duration: 1s
  }

  @-webkit-keyframes animatebottom {
    from { bottom:-100px; opacity:0 }
    to { bottom:0px; opacity:1 }
  }

  @keyframes animatebottom {
    from{ bottom:-100px; opacity:0 }
    to{ bottom:0; opacity:1 }
  }

  #myDiv {
    display: none;
    text-align: center;
  }
</style>
