<template>
      <div class="container-fluid">

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
                <TableHeader  v-show="dataload" :res="$store.getters.getpaginationlist.length" title="Üzgünüz Paylaştığınız Bir İlan Bulamadık " cimg="https://cdn3.iconfinder.com/data/icons/shopping-icons-14/128/08_Sales-64.png" content="Paylaştığınız İlanlar"></TableHeader>
                <div  v-show="dataload" class="container"  v-if="$store.getters.getpaginationlist.length!=0">
                    <div class="row" >

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
                                                <li class="nav-item" @mouseup="setactiveproduct(item.productid)">
                                                    <a class="nav-link" id="operation-tab" data-toggle="tab" :href="'#operation'+i" role="tab" aria-controls="operation" aria-selected="false"> <img src="../../assets/icons/kservices.png">İlana Ait İşlemler</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="time-tab" data-toggle="tab" :href="'#time'+i" role="tab" aria-controls="time" aria-selected="false"> <img src="../../assets/icons/calendar.png">İlanın Geçerlilik Süresi</a>
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
                                                    <a role="button" style="color: white"  data-toggle="modal" data-target="#exampleModalCenter" @mouseup="markuppr" aria-pressed="true"   class="btn btn-info     btn-sm">     <i class="fas fa-hand-holding-usd" style="padding-right: 5px"></i>İlanı Satıldı Olarak İşaretle</a>
                                                    <a  role="button" style="color: white" aria-pressed="true" class="btn btn-info btn-sm"  @mouseup="removepr(item.productid)">  <i class="fas fa-trash-alt" style="padding-right: 5px"></i>İlanı Kaldır</a>
                                                    <a  role="button" @mouseup="editpr(1)" style="color: white"  aria-pressed="true"  class="btn btn-info btn-sm"> <i class="fas fa-edit" style="padding-right: 5px"></i>İlanı Düzenle</a>




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
                                                <div class="container tab-pane in  animated flipInX custon-tab-style1" :id="'time'+i" role="tabpanel" aria-labelledby="profile-tab">
                                                    <p class="lead">  İlanının Geçerlilik  Tarihi : {{item.newdate}}</p>
                                                    <p class="lead">  İlanının Sonlanmasına Kalan Süre  :{{item.dateremaing}} gün</p>


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
        <Paginate  v-show="dataload" :list="$store.getters.getpaginationlist"></Paginate>


        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered  modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">İlan Satım Değerlendirmesi</h5>
                        <button type="button" @mouseup="closedialog" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>{{selecteduser}}  </div>
                        <div class="star-rating" v-if="staractive">
                            <span :class="item.class" @mouseup="changestar(index)"  v-for="(item,index) in stardata"></span>
                            <div class="form-group" v-if="staractive">
                                <label for="comment">Yorumunuz :</label>
                                <textarea class="form-control" rows="5" id="comment" v-model="commentuser" placeholder="Lütfen Yorumunuz Yazın.."></textarea>
                            </div>
                        </div>
                        <button style="float: left" v-if="staractive" type="button" @mouseup="goback" class="btn btn-warning">Geri Dön.</button>
                        <button style="float: right" v-if="staractive" type="button" @mouseup="createcomment" class="btn btn-primary">Tamamla</button>
                        <div v-if="isactive">

                        <div class="form-group">
                            <label for="exampleInputEmail1">Bu Ürünü Kime Sattınız ?</label>
                            <input type="text" class="form-control" id="exampleInputEmail1"  @input="getuser" v-model="searchpruser" placeholder="Kullanıcı Adı Soyadı">
                        </div>
                        <div class="form-group">
                            <div class="panel panel-primary" v-if="searchpruser.length>0 && searchpruser.trim()!=''">
                                <div class="panel-heading" >Kullanıcı Listesi</div>
                                <div class="panel-body">



                                    <ul class="list-group">
                                        <!--active class selected olana verilecek -->
                                        <li style="{cursor: pointer}" class="list-group-item"  :class="{'active':item.active}" v-for="(item,i) in searchlist">
                                            <img :src="item.photo" style=" width: 40px; height: 40px" alt="Avatar"  class="md-avatar rounded-circle">
                                          {{item.name}}
                                            <input type="radio" style="padding-left: auto" v-model="selecteduser"  name="gender" :value="item.id">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <button style="float: right" v-if="isactive" type="button" @mouseup="commentandstar" class="btn btn-primary">Devam et.</button>

                        </div>
                  <p class="lead" v-if="footeractive"> Bu Ürünü Kime Sattığını Söylemek Ve Kullanıcıya Dair Yorum Yapıp Senin Gibi Diğer Kullanıcılarıda Bilgilendirmek İsteğin Bir Değerlendirmen Var İse Lütfen Değerlendirmeye Katıl </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" v-if="footeractive" @mouseup="updateproduct" data-dismiss="modal">Hayır,Kapat Sadece Satıldı Olarak İşaretle</button>
                        <button type="button" class="btn btn-primary" v-if="footeractive" @mouseup="evaluationuser">Evet Değerlendirme Yapacağım</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userjson from  '../../user'
    import TableHeader from '../TableHeaderComponent/TableHeader'
    import Paginate from '../Pagination/Pagination'
    import ImgCard from '../Card/Card'
    import BigPhotoCard from '../Card/BigPhotoCard'
    import ProductService from '../../Service/ProductService'
    export default {
        created(){
                this.getproduct()
        },
        data() {
            return {
                dataload:false,
                allcount:"",
                commentuser:"",
                selecteduser:"",
                headerlist:["Başlığa","Kategoriye","Açıklamaya","Tarihe","Saate","Fiyata"],
                selectedfilter:"",
                show:false,
                activeproduct:"",
                searchpruser: "",
                userlist: [],
                isactive: false,
                staractive:false,
                footeractive:true,
                starval:1,
                stardata:[
                    {
                        class:"fas fa-star",
                        val:1
                    },
                    {
                        class:"far fa-star",
                        val:2
                    },
                    {
                        class:"far fa-star",
                        val:3
                    },
                    {
                        class:"far fa-star",
                        val:4
                    },
                    {
                        class:"far fa-star",
                        val:5
                    }
                    ],
            }
        },
        components:{
            TableHeader,
            Paginate,
            ImgCard,
            BigPhotoCard
        },
        mounted(){
            var arr = [
                "https://randomuser.me/api/portraits/women/9.jpg",
                "https://randomuser.me/api/portraits/women/13.jpg",
                "https://randomuser.me/api/portraits/women/18.jpg"
                ,
                "https://randomuser.me/api/portraits/men/9.jpg"
                ,

                "https://randomuser.me/api/portraits/men/13.jpg"
                ,

                "https://randomuser.me/api/portraits/men/31.jpg"
                ,

                "https://randomuser.me/api/portraits/women/62.jpg"
                ,

                "https://randomuser.me/api/portraits/women/18.jpg",
                "https://randomuser.me/api/portraits/women/22.jpg",
                "https://randomuser.me/api/portraits/women/23.jpg",

            ]
            userjson.forEach((x,i)=>{
                x.photo=arr[i]
                x.active=false
            })
        },
        computed:{
            searchlist(){
                return userjson.filter((element)=>{
                    return element.name.match(this.searchpruser);
                })
            }
        },
        methods: {
            bigphotodetail(image){
                this.$store.dispatch("setbigphoto",image.img);
            },
            removepr(prid){
                var _this=this;
                swal({
                    title: "Bu İlanı Kaldırmak İstediğinize Emin Misiniz ?",
                    icon: "warning",
                    buttons: ["Hayır","Evet"],
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            ProductService.softdelproduct(
                                {
                                    urlparse: Component.urlParse("productid="+prid),
                                    token:_this.$store.getters.getuser.token,
                                    email:_this.$store.getters.getuser.username,
                                    userid:_this.$store.getters.getuser.userid,
                                }
                            ).then((res)=>{
                                if(res[0].status=="Deleted"){
                                    _this.getproduct();
                                    swal({
                                        title:"İlan Başarıyla Kaldırıldı",
                                        button:"Tamam",
                                        icon:"success"
                                    })
                                }else{
                                    swal({
                                        title:"İlan Kaldırılırken Hata Gerçekleşti",
                                        button:"Tamam",
                                        icon:"error"
                                    })
                                }
                            })
                        } else {
                        }
                    });

            },
            setactiveproduct(prid){
                this.activeproduct=prid;
            },
            getproduct(){
                debugger
                var _this=this;
                debugger
                const dateremain=new Date().toLocaleDateString();

                debugger
                ProductService.getproduct({urlparse:
                Component.urlParse("photo.seqnumber=0 & userproduct.userid="+_this.$store.getters.getuser.userid+"& product.productstatus=1"),
                    token:_this.$store.getters.getuser.token,
                    email:_this.$store.getters.getuser.username,
                    userid:_this.$store.getters.getuser.userid,
                    pagination:_this.$store.getters.getactivepaginate+1
                }).then((res)=>{
                    debugger
                        debugger
                            if(res.data.length>0){
                            res.data.forEach((x)=>{
                               var startdate=x.date
                                var new_date = moment(startdate, "DD-MM-YYYY").add('days', 30);
                                var day = new_date.format('DD');
                                var month = new_date.format('MM');
                                var year = new_date.format('YYYY');
                                x.newdate=day + '.' + month + '.' + year
                                var a = moment([x.newdate.split(".")[2], x.newdate.split(".")[1], x.newdate.split(".")[0]]);
                                var b = moment([dateremain.split(".")[2], dateremain.split(".")[1], dateremain.split(".")[0]]);
                               var c= a.diff(b, 'days')
                                    x.dateremaing=c;
                            })
                        this.allcount=res.count
                                debugger
                        this.$store.dispatch("setpaginationcount",{data:res.data,count:res.count})
                        this.dataload=true;
                            }else{
                                debugger
                                _this.$store.commit("setactivepagination",_this.$store.getters.getactivepaginate-1)
                                this.getproduct();
                            }

                    //   this.productlist=this.$store.getters.getpaginationlist

                })
            },
            createcomment(){
                    if(this.commentuser.trim().length==0){
                        swal({
                            title: "Yorum Yapmadan Devam Etmek İstediğinize Emin Misiniz ?",
                            icon: "warning",
                            buttons: ['Hayır','Evet'],
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    swal("Yorum Başarılı", {
                                        icon: "success",
                                    });
                                } else {
                                }
                            });
                    }
            },
            setimglist(prid,i){
            var _this=this;
            debugger
               console.log(_this.$store.getters.getactivepaginate)
                //buraya bak unutma
                ProductService.getallproductphotos(
                    {
                        urlparse:Component.urlParse("productid="+prid)
                    }

                ).then((res)=>{
                    debugger
                    _this.$store.getters.getpaginationlist[i].allimg=res;
                           //_this.productlist[i].allimg=res;
                            this.$store.dispatch("setpaginationcount",{data:_this.$store.getters.getpaginationlist})
                })
                //resim listesi
            },
            commentandstar(){
                console.log(this.selecteduser)
                if(this.selecteduser==""){
                    swal({
                        button: "Tamam ",
                        title: "Lütfen Bu Ürünü Kime Sattığınızı Seçiniz.",
                        icon: "error"
                    })
                }else{
                    this.staractive=true
                    this.isactive=false
                    this.footeractive=false
                }
            },
            goback(){

                this.selecteduser=""
                this.searchpruser=""
                this.staractive=false
                this.isactive=true
                this.starval=1
                this.stardata= [
                    {
                        class:"fas fa-star",
                        val:1
                    },
                    {
                        class:"far fa-star",
                        val:2
                    },
                    {
                        class:"far fa-star",
                        val:3
                    },
                    {
                        class:"far fa-star",
                        val:4
                    },
                    {
                        class:"far fa-star",
                        val:5
                    }
                ]
            },
            changestar(i){
                if(this.starval<i){
                    this.starval=i
                    for(let index=0;index<=i;index++){
                        this.stardata[index].class="fas fa-star"
                    }
                }else{
                   for(let index=this.starval;i<index;index--){
                        this.stardata[index].class="far fa-star"
                    }
                   this.starval=i
                }
            },
            updateproduct() {
               /* "updatedata":{
                    "descraption":"Askılık Sorunsuz",
                        "university":10
                }
 */
               const _this=this;
                ProductService.updatesell(
                    {
                        urlparse: Component.urlParse("productid="+_this.activeproduct),
                        updatedata:{
                            productstatus:3
                        },
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                    }
                ).then((res)=>{
                    if(res[0].status==="Updated"){
                            swal({
                                title:"İlan Başarıyla Güncellendi",
                                button:"Tamam",
                                icon:"success"
                            })
                    }else{
                        swal({
                            title:"İlan Güncellenirken Hata Gerçekleşti",
                            button:"Tamam",
                            icon:"error"
                        })
                    }
                })
            },
            closedialog() {
                this.selecteduser=""
                this.commentuser=""
                this.isactive = false
                this.footeractive=true
                this.staractive=false
                this.userlist = []
                this.searchpruser=""
            },
            getuser() {
                if(this.searchpruser.trim()==""){

                }
                    // _.where(listOfPlays, {author: "Shakespeare", year: 1611});
            },
            routedetail(route, param) {

                this.$router.push(route + "/" + param)

            },
            markuppr(product) {
                //güncelleme
            },
            evaluationuser() {
                this.isactive = true
                this.footeractive=false
            },
            editpr(param) {
                this.$store.dispatch("setprdata", {id: 1, name: "telefon"})
                this.$router.push("/EditProduct/1");
                //  setprdata
            },
        }
    }

</script>

<style scoped>
.pointercursor{
    cursor: pointer;
}
.star-rating {
    line-height:32px;
    font-size:1.25em;
}

.star-rating .fa-star{color: #CC5F00
;}

.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity .3s ease-out;
}
.fade-leave{

}
.fade-leave-active{
    transition: opacity .3s ease-out;
    opacity: 0;
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
