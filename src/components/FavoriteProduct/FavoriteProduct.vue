<template>
     <div class="container-fluid">
        <!-- Modal -->
        <big-photo-card></big-photo-card>
        <div class="d-flex justify-content-center" >

            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
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
                <TableHeader v-show="dataload" :res="$store.getters.getpaginationlist.length" title=" Üzgünüz Favorilerinize Eklediğiniz Bir İlan Bulamadık  " cimg="https://cdn2.iconfinder.com/data/icons/free-1/128/Favorite__star-64.png" content="Favori İlanlarınız"></TableHeader>
                <div  v-show="dataload" class="container"  v-if="$store.getters.getpaginationlist.length!=0">
                        <div class="row"  >
                            <div class="panel panel-default">
                                <table id="example"  style="width:100%;margin-top: 20px" >
                                    <caption> Toplam Kayıt Sayısı {{allcount}}</caption>
                                    <caption>Listelenen Kayıt Sayısı {{$store.getters.getfirspaginate+1}} -{{$store.getters.getlastpaginate}}</caption>
                                    <thead>
                                    <tr >
                                        <th scope="col" style="cursor: pointer"> </th>
                                        <th scope="col" style="cursor: pointer"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,i) in $store.getters.getpaginationlist" >
                                        <td>
                                            <div class="col-md-2" style="padding-bottom: 50px" >

                                                <img :src="item.img" style="border: 1px solid black; width: 200px;height: 176px; " class="rounded" alt="...">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="col-md-10">
                                                <div class="list-group" v-if="$store.getters.getpaginationlist.length!=0" style="padding-bottom: 50px;padding-left: 80px" >
                                                    <ul class="nav nav-tabs custom-menu-wrap custon-tab-menu-style1" id="myTab" role="tablist">
                                                        <li class="nav-item">
                                                            <a class="nav-link active" id="home-tab" data-toggle="tab" :href="'#home'+i" role="tab" aria-controls="home" aria-selected="true"><img src="../../assets/icons/note_info.png">İlan Bilgisi </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="descraption-tab" data-toggle="tab" :href="'#descraption'+i" role="tab" aria-controls="descraption" aria-selected="false"> <img src="../../assets/icons/constr_news-32.png">İlan Açıklaması</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="profile-tab" data-toggle="tab" :href="'#profile'+i" role="tab" aria-controls="profile" aria-selected="false"> <img src="../../assets/icons/statics.png">İlan İstatistikleri</a>
                                                        </li>
                                                        <li class="nav-item" >
                                                            <a class="nav-link" id="operation-tab" data-toggle="tab" :href="'#operation'+i" role="tab" aria-controls="operation" aria-selected="false"> <img src="../../assets/icons/kservices.png">İlana Ait İşlemler</a>
                                                        </li>

                                                        <li class="nav-item" @mouseup="setimglist(item.productid,i)">
                                                            <a class="nav-link" id="img-tab" data-toggle="tab" :href="'#img'+i" role="tab" aria-controls="img" aria-selected="false"> <img src="../../assets/icons/iconfinder_synfig_icon_24342.png">İlana Ait  Resimler</a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content" id="myTabContent">
                                                        <div class="container tab-pane in active animated flipInX custon-tab-style1" :id="'home'+i" role="tabpanel" aria-labelledby="home-tab">
                                                            <a style="cursor: pointer" class="list-group-item list-group-item-action flex-column align-items-start " >
                                                                <div class="d-flex w-100 justify-content-between">
                                                                    <h4 class="mb-1" style="color: #E81C0C"> {{item.title}}</h4>
                                                                    <small class="text-center"></small>
                                                                </div>
                                                                <hr style="border: 1px solid black; background-color: black; color: #000;">
                                                                <p class="lead"> Kategori : {{item.categorytxt}} </p>
                                                                <p class="lead">Fiyat :{{item.price}} (TL)</p>

                                                                <p class="lead">Yayınladığı Tarih : {{item.date}}</p>
                                                                <p class="lead"> Yayınlandığı Saat:   {{item.time}}</p>

                                                            </a>

                                                        </div>
                                                        <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'profile'+i" role="tabpanel" aria-labelledby="profile-tab">
                                                            <p class="lead"> <img src="../../assets/icons/favimg.jpg" style="width: 32px;height: 32px"> İlanını Favorileri Ekleyenlerin Sayısı : {{item.favcount}}</p>
                                                            <p class="lead"><img src="https://cdn3.iconfinder.com/data/icons/flat-office-icons-1/140/Artboard_1-9-32.png"> İlanını Görüntüleyenlerin Sayısı : {{item.seencount}}</p>


                                                        </div>
                                                        <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'operation'+i" role="tabpanel" aria-labelledby="operation-tab">
                                                            <a  role="button" style="color: white"  aria-pressed="true" class="btn btn-info btn-sm" @mouseup="routedetail('ProductDetail',item.productid)">  <i class="fas fa-arrow-right" style="padding-right: 5px"></i>İlana Git</a>
                                                            <a  role="button" style="color: white" aria-pressed="true" class="btn btn-info btn-sm"  @mouseup="removepr(item.productid)">  <i class="fas fa-trash-alt" style="padding-right: 5px"></i>İlanı Favorilerimden Kaldır</a>




                                                        </div>
                                                        <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'descraption'+i" role="tabpanel" aria-labelledby="operation-tab">

                                                            <transition
                                                                    name="custom-classes-transition"
                                                                    enter-active-class="animated tada"
                                                                    leave-active-class="animated bounceOutRight"
                                                            >      <small>
                                                                {{item.descraption}}
                                                            </small>

                                                            </transition>

                                                        </div>
                                                        <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'img'+i" role="tabpanel" aria-labelledby="img-tab">
                                                            <div class="container">
                                                                <div class="row">

                                                                    <div class="col-sm-6 col-md-4 col-lg-3 mt-4" v-for="image in item.allimg">
                                                                        <div class="card">
                                                                            <img  @mouseup="bigphotodetail(image)"  style="cursor: pointer" data-toggle="modal" data-target="#exampleModal" class="card-img-top" :src="image.img">
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <Paginate v-show="dataload" :list="$store.getters.getpaginationlist" :status="1"></Paginate>

        <msg-popup :msguser="user" :usermsg="usrmsg"></msg-popup>

    </div>

</template>

<script>
    import  TableHeader from  '../TableHeaderComponent/TableHeader'
    import MsgPopup from  '../Message/MsgPopup'
    import Paginate from  '../Pagination/Pagination'
    import ImgCard from '../Card/Card'
    import BigPhotoCard from '../Card/BigPhotoCard'
    import FavoriteProductService from '../../Service/FavoriteService'
    import ProductService from '../../Service/ProductService'
    export default {
        created(){
            this.$store.commit("setactivepagination", 0)
            this.getfavproduct()

        },
        data(){
            return{
                dataload:false,
                usrmsg:"",
                allcount:"",
                bigphoto:"",
                user:{},
            }
        },
        components:
            {
                    TableHeader,
                    MsgPopup,
                Paginate,
                ImgCard,
                BigPhotoCard
            },
        methods:{
            removepr(id){
                const _this=this;
                FavoriteProductService.delfav(
                    {
                        urlparse:Component.urlParse(
                            "productid="+id
                        ),
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                    }
                )  .then((res)=>{
                        if(res[0].status=="Success"){
                                swal({
                                    title:"İlan Başarıyla Favorilerinizden Kaldırıldı",
                                    icon:"success",
                                    button:"Tamam"
                                })
                            this.getfavproduct();
                        }else{
                            swal({
                                title:"İlan  Favorilerinizden Kaldırılırken Hata Gerçekleşti",
                                icon:"error",
                                button:"Tamam"
                            })
                        }

                })
            },
            bigphotodetail(image){
                this.$store.dispatch("setbigphoto",image.img);
            },
            getfavproduct(){
                debugger
                const _this=this;
                    FavoriteProductService.getfavpr(
                        {
                            urlparse: Component.urlParse("photo.seqnumber=0 & favproduct.tid="+_this.$store.getters.getuser.userid+"& product.productstatus=1"),
                            token:_this.$store.getters.getuser.token,
                            email:_this.$store.getters.getuser.username,
                            userid:_this.$store.getters.getuser.userid,
                            pagination:_this.$store.getters.getactivepaginate+1
                        }
                    ).then((res)=>{
                        debugger
                        if(res.status===undefined){
                            debugger
                            if (res.data.length > 0) {
                                this.allcount = res.count
                                debugger
                                this.$store.dispatch("setpaginationcount", {data: res.data, count: res.count})
                                this.dataload = true;
                            } else {
                                debugger
                                _this.$store.commit("setactivepagination", _this.$store.getters.getactivepaginate - 1)
                                this.getproduct();
                            }
                        }
                        else
                        {
                            this.dataload=true;
                            this.$store.dispatch("setpaginationcount", {data: [], count: 0})
                        }
                            debugger


                    })
            },
            contactuser(user){
                debugger
                if(this.user.usname==user.usname){
                    this.usrmsg="";
                }
            this.user={usname:user.usname,uslname:user.uslname}
            this.$store.commit("setpopupstyle","block")
            },
            routeuserprofile(user){
                this.$router.push("/UserDetail/"+"1")
            },
            setimglist(prid,i){
                var _this=this;
                ProductService.getallproductphotos(
                    {
                        urlparse:Component.urlParse("productid="+prid)
                    }

                ).then((res)=>{
                    debugger
                    _this.$store.getters.getpaginationlist[i].allimg=res;
                    this.$store.dispatch("setpaginationcount",{data:_this.$store.getters.getpaginationlist})
                })
            },
            routedetail(router,param){
                if(param){
                    this.$router.push(router+"/"+param);
                }
            },
            removefav(param){

            },
        },
        mounted() {
            this.$store.dispatch("setpaginationcount",this.favoritelist)

        },
    }
</script>

<style scoped>
.pointercursor{
    cursor: pointer;
}
</style>