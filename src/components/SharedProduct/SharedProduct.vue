<template>
      <div class="container-fluid">

<big-photo-card ></big-photo-card>
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
                                                    <a role="button" style="color: white"  data-toggle="modal" data-target="#exampleModalCenter" @mouseup="setactiveproduct(item.productid)" aria-pressed="true"   class="btn btn-info     btn-sm">     <i class="fas fa-hand-holding-usd" style="padding-right: 5px"></i>İlanı Satıldı Olarak İşaretle</a>
                                                    <a  role="button" style="color: white" aria-pressed="true" class="btn btn-info btn-sm"  @mouseup="removepr(item.productid)">  <i class="fas fa-trash-alt" style="padding-right: 5px"></i>İlanı Kaldır</a>
                                                    <a  role="button" @mouseup="editpr(item.productid)" style="color: white"  aria-pressed="true"  class="btn btn-info btn-sm"> <i class="fas fa-edit" style="padding-right: 5px"></i>İlanı Düzenle</a>




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
        <Paginate  v-show="dataload" :list="$store.getters.getpaginationlist" :status="1"></Paginate>


        <!-- Modal -->
        <div class="modal fade" v-if="dialog" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered  modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">İlan Satım Değerlendirmesi</h5>
                        <button type="button" @mouseup="closedialog" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
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
                                            <img :src="item.avatar" style=" width: 40px; height: 40px" alt="Avatar"  class="md-avatar rounded-circle">
                                          {{item.userfirstname}} {{item.userlastname}}
                                            <input type="radio" style="padding-left: auto" v-model="selecteduser"  name="gender" :value="item.userid">
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
    import TableHeader from '../TableHeaderComponent/TableHeader'
    import Paginate from '../Pagination/Pagination'
    import ImgCard from '../Card/Card'
    import BigPhotoCard from '../Card/BigPhotoCard'
    import ProductService from '../../Service/ProductService'
    import UserService from '../../Service/UserService'
    import CommentService from '../../Service/CommentService'
    import NotificationService from '../../Service/NotificationService'
    export default {
        created(){
            this.$store.commit("setactivepagination", 0)
                this.getproduct()
        },
        data() {
            return {
                dialog:false,
                dataload:false,
                allcount:"",
                commentuser:"",
                selecteduser:"",
                selectedfilter:"",
                show:false,
                activeproduct:"",
                searchpruser: "",
                searchlist:[],
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
                                    this.dataload=false
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
                this.dialog=true
                console.log(this.activeproduct);
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
                    if(res.status===undefined){
debugger
                        if (res.data.length > 0) {
                            res.data.forEach((x) => {
                                var startdate = x.date
                                var new_date = moment(startdate, "DD-MM-YYYY").add('days', 30);
                                var day = new_date.format('DD');
                                var month = new_date.format('MM');
                                var year = new_date.format('YYYY');
                                x.newdate = day + '.' + month + '.' + year
                                var a = moment([x.newdate.split(".")[2], x.newdate.split(".")[1], x.newdate.split(".")[0]]);
                                var b = moment([dateremain.split(".")[2], dateremain.split(".")[1], dateremain.split(".")[0]]);
                                var c = a.diff(b, 'days')
                                x.dateremaing = c;
                            })
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

                        //   this.productlist=this.$store.getters.getpaginationlist
                    }
                })

            },
            createcomment(){
                debugger
                    if(this.commentuser.trim().length==0){
                        swal({
                            title: "Yorum Yapmadan Devam Etmek İstediğinize Emin Misiniz ?",
                            icon: "warning",
                            buttons: ['Hayır','Evet'],
                            dangerMode: true,
                        })
                            .then((success) => {
                                if (success) {
                                    debugger
                                   this.addcomment()
                                } else {
                                    console.log(this.starval)
                                }
                            });
                    }else{
                        this.addcomment()
                    }
            },

            addcomment(){
                debugger
                const _this=this;
                const datetime=new Date()
                CommentService.addcomment(
                    {
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                        touser:_this.$store.getters.getuser.userid,
                        fromuser:_this.selecteduser,
                        comment:_this.commentuser,
                        commentdate:datetime.toLocaleDateString(),
                        commenttime:datetime.getHours()+":"+datetime.getMinutes()+":"+datetime.getSeconds(),
                        star:_this.starval+1
                    }
                ).then((res)=>{
                        if(res[0].status==="Success"){
                            var _this=this;
                            NotificationService.add(
                                {
                                    type:4,
                                    touser:_this.$store.getters.getuser.userid,
                                    prid:_this.activeproduct,
                                    fromuser:_this.selecteduser,
                                    token:_this.$store.getters.getuser.token,
                                    email:_this.$store.getters.getuser.username,
                                    userid:_this.$store.getters.getuser.userid,
                                    date:new Date().toLocaleDateString(),
                                    time:new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
                                }
                            ).then((res)=>{
                                if(res[0].status=="Success"){
                                    swal("Yorum Başarılı", {
                                        icon: "success",
                                    });
                                }else{
                                    swal({
                                        button: "Tamam ",
                                        title: "Yorum Başarısız",
                                        icon: "error"
                                    })
                                }
                            })
                            this.selecteduser=""
                            this.commentuser=""
                            this.isactive = false
                            this.footeractive=true
                            this.staractive=false
                            this.userlist = []
                            this.searchpruser=""
                            this.updateproduct()
                        }else{
                            swal("Yorum Başarısız", {
                                icon: "error",
                            });
                        }
                })
            },
            addnotification(prid,userid){

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
            commentandstar(){
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
                debugger
                this.dialog=true
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
                        this.dataload=false
                        this.getproduct();
                        this.dialog=false
                            swal({
                                title:"İlan Başarıyla Güncellendi",
                                button:"Tamam",
                                icon:"success"
                            })
                    }else{
                        this.dialog=false
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
                var _this=this;
                if(this.searchpruser.trim()==""){
                }else{
                    UserService.getuser(
                        {
                            urlparse:Component.urlParse("user.username%"+this.searchpruser+"& user.userid-"+_this.$store.getters.getuser.userid)
                        }
                    ).then((res)=>{
                        if(res[0].status==undefined){
                            this.searchlist=res;
                        }else{
                            this.searchlist=[]
                        }
                    })
                }
            },
            routedetail(route, param) {

                this.$router.push(route + "/" + param)

            },
            evaluationuser() {
                this.dialog=true
                this.isactive = true
                this.footeractive=false
            },
            editpr(param) {
                this.$store.dispatch("setprdata", {id: 1, name: "telefon"})
                this.$router.push("/EditProduct/"+param);
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
</style>
