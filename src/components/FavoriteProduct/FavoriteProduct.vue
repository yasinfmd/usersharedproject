<template>
     <div class="container-fluid">
        <!-- Modal -->
        <big-photo-card></big-photo-card>
        <div class="d-flex justify-content-center" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <TableHeader :res="favoritelist.length" title=" Üzgünüz Favorilerinize Eklediğiniz Bir İlan Bulamadık  " cimg="https://cdn0.iconfinder.com/data/icons/christmas-2200/64/star-rate-christmas-favorite-shapes-64.png" content="Favori İlanlarınız"></TableHeader>
                <div class="container">
                        <div class="row" v-if="favoritelist.length!=0" >
                            <div class="panel panel-default">
                                <div class="float-right">
                                    <div class="row">
                                        <div class="col">
                                            <select class="form-control form-control" v-model="selectedfilter">
                                                <option v-for="item in headerlist">{{item}}</option>
                                            </select>
                                        </div>
                                        <p class="lead">--göre</p>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Ara..">
                                        </div>
                                    </div>
                                </div>
                                <table id="example"  style="width:100%;margin-top: 20px" >
                                    <caption> Toplam Kayıt Sayısı {{favoritelist.length}}</caption>
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

                                                <img src="https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg" style="border: 1px solid black; width: 200px;height: 176px; " class="rounded" alt="...">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="col-md-10">
                                                <div class="list-group" v-if="favoritelist.length!=0" style="padding-bottom: 50px;padding-left: 80px" >
                                                    <ul class="nav nav-tabs custom-menu-wrap custon-tab-menu-style1" id="myTab" role="tablist">
                                                        <li class="nav-item">
                                                            <a class="nav-link active" id="home-tab" data-toggle="tab" :href="'#home'+i" role="tab" aria-controls="home" aria-selected="true"><img src="../../assets/icons/note_info.png">İlan Bilgisi </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="descraption-tab" data-toggle="tab" :href="'#descraption'+i" role="tab" aria-controls="descraption" aria-selected="false"> <img src="../../assets/icons/constr_news-32.png">İlan Açıklaması</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="profile-tab" data-toggle="tab" :href="'#profile'+i" role="tab" aria-controls="profile" aria-selected="false"> <img src="../../assets/icons/id_card-32.png">İlan Sahibi Bilgileri</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="operation-tab" data-toggle="tab" :href="'#operation'+i" role="tab" aria-controls="operation" aria-selected="false"> <img src="../../assets/icons/kservices.png">İlana Ait İşlemler</a>
                                                        </li>
                                                        <li class="nav-item" @click="setimglist">
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
                                                              <p class="lead"> Kategori :{{item.category}}</p>
                                                                <p class="lead"> Fiyat :{{item.price}} (TL)</p>
                                                                <p class="lead"> Tarih : 25.04.2019</p>
                                                                <p class="lead"> Saat :  13:47 </p>
                                                            </a>
                                                        </div>
                                                        <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'descraption'+i" role="tabpanel" aria-labelledby="operation-tab">
                                                            <small>
                                                                 {{item.desc}}
                                                            </small>
                                                        </div>
                                                        <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'profile'+i" role="tabpanel" aria-labelledby="profile-tab">
                                                            <p class="lead"> <img src="../../assets/icons/favimg.jpg" style="width: 32px;height: 32px"> İlanın Sahibi  : {{item.usname}} {{item.uslname}}</p>
                                                            <p class="lead"> <img src="../../assets/icons/favimg.jpg" style="width: 32px;height: 32px"> Mail Adresi   :{{item.mail}}</p>
                                                        </div>
                                                        <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'operation'+i" role="tabpanel" aria-labelledby="operation-tab">
                                                            <a  role="button" style="color: white"  aria-pressed="true" class="btn btn-primary btn-sm" @click="routedetail('ProductDetail',1)">  <i class="fas fa-arrow-right" style="padding-right: 5px"></i>İlana Git</a>
                                                            <a role="button" style="color: white"  data-toggle="modal" data-target="#exampleModalCenter"  aria-pressed="true"   class="btn btn-success btn-sm">     <i class="fas fa-hand-holding-usd" style="padding-right: 5px"></i>İlanı Satıldı Olarak İşaretle</a>
                                                            <a  role="button" style="color: white" aria-pressed="true" class="btn btn-danger btn-sm"  @click="removepr(1)">  <i class="fas fa-trash-alt" style="padding-right: 5px"></i>İlanı Kaldır</a>
                                                            <a  role="button" @click="editpr(1)" style="color: white"  aria-pressed="true"  class="btn btn-warning btn-sm"> <i class="fas fa-edit" style="padding-right: 5px"></i>İlanı Düzenle</a>
                                                        </div>
                                                        <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'img'+i" role="tabpanel" aria-labelledby="img-tab">
                                                            <div class="container">
                                                                <img-card></img-card>
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
        <Paginate :list="favoritelist"></Paginate>

        <msg-popup :msguser="user"></msg-popup>

    </div>

</template>

<script>
    import  TableHeader from  '../TableHeaderComponent/TableHeader'
    import MsgPopup from  '../Message/MsgPopup'
    import Json from '../../product'
    import Paginate from  '../Pagination/Pagination'
    import ImgCard from '../Card/Card'
    import BigPhotoCard from '../Card/BigPhotoCard'
    export default {
        created(){
            Json.forEach((x)=>{
                    x.desc="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
                    x.category="Elektronik",
                    x.price="400",
                    x.usname="Ali",
                    x.uslname="Uçar",
                    x.mail="ali@gmail.com"
                if(x.desc.length>100){
                        x.show=false;
                }
            })


        },
        data(){
            return{
                bigphoto:"",
                user:{},

                favoritelist:Json,
                selectedfilter:""
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
            setimglist(){
                //resim listesi
                this.$store.dispatch("setcardimg",[1,2,3,4,5,6,7,8,9,10])
            },
            sendmsg(param){
                debugger
                this.user=param;
                this.$store.commit("setpopupstyle","block")
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