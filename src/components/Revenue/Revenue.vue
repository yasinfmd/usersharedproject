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
                <TableHeader  v-show="dataload" :res="$store.getters.getpaginationlist.length" title="Üzgünüz Gelir Listeniz Boş" cimg="https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-24-32.png" content="Gelir Listeniz"></TableHeader>
                <div class="container" v-show="dataload">
                    <div class="row" v-if="$store.getters.getpaginationlist.length!=0" >
                        <div class="panel panel-default">
                            <table id="example"  style="width:100%;margin-top: 20px" >
                                <caption> Elde Edilen Gelir {{totalmoney}} TL</caption>
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
                                                    <li class="nav-item" @mouseup="setimglist(item.productid,i)">
                                                        <a class="nav-link" id="img-tab" data-toggle="tab" :href="'#img'+i" role="tab" aria-controls="img" aria-selected="false"> <img src="../../assets/icons/iconfinder_synfig_icon_24342.png">İlana Ait  Resimler</a>
                                                    </li>

                                                </ul>
                                                <div class="tab-content" id="myTabContent" style="width: 150%">
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
                                                    <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'descraption'+i" role="tabpanel" aria-labelledby="operation-tab">
                                                        <small>
                                                            {{item.descraption}}
                                                        </small>
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
        <Paginate  v-show="dataload" :list="favoritelist"  :status="3"></Paginate>


    </div>

</template>

<script>
    import  TableHeader from  '../TableHeaderComponent/TableHeader'
    import MsgPopup from  '../Message/MsgPopup'
    import Paginate from  '../Pagination/Pagination'
    import ImgCard from '../Card/Card'
    import BigPhotoCard from '../Card/BigPhotoCard'
    import ProductService from '../../Service/ProductService'
    export default {
        created(){
            this.$store.commit("setactivepagination", 0)
                this.getuserproduct();
        },
        data(){
            return{
                allcount:"",
                dataload:false,
                totalmoney:0
            }
        },
        components:
            {
                TableHeader,
                Paginate,
                BigPhotoCard
            },
        methods:{
            bigphotodetail(image){
                this.$store.dispatch("setbigphoto",image.img);
            },
            getuserproduct(){
                var _this=this;
                ProductService.getproduct({urlparse:
                        Component.urlParse("photo.seqnumber=0 & userproduct.userid="+_this.$store.getters.getuser.userid+"& product.productstatus=3"),
                    token:_this.$store.getters.getuser.token,
                    email:_this.$store.getters.getuser.username,
                    userid:_this.$store.getters.getuser.userid,
                    pagination:_this.$store.getters.getactivepaginate+1
                }).then((res)=>{
                    if(res.data){

                    this.totalmoney=res.totalmoney
                        this.allcount=res.count
                        this.$store.dispatch("setpaginationcount",{data:res.data,count:res.count})
                        this.dataload=true;
                    }
                    else{
                        this.$store.dispatch("setpaginationcount",{data:[],count:0})
                        _this.dataload=true;
                    }

                })
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
        },
    }
</script>

<style scoped>
    .pointercursor{
        cursor: pointer;
    }


</style>