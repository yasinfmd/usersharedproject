<template>
    <div class="col-md-9 ml-sm-auto col-lg-10 px-4" style="margin-top: -740px">

        <div class="d-flex justify-content-center" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <TableHeader :res="favoritelist.length" title=" Üzgünüz Favorilerinize Eklediğiniz Bir İlan Bulamadık  " cimg="https://cdn0.iconfinder.com/data/icons/christmas-2200/64/star-rate-christmas-favorite-shapes-64.png" content="Favori İlanlarınız"></TableHeader>
                <table class="table table-hover" id="favtable" v-if="favoritelist.length!=0" >
                    <caption>Favorilere Eklediğin  İlanlar</caption>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">İlan Başlığı</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Fiyat</th>
                        <th scope="col">İlanı Sahibi</th>
                        <th scope="col">İlan Sahibinin Mail Adresi</th>
                        <th scope="col">İlana Ait Görsel</th>
                        <th scope="col">İşlemler</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in favoritelist">
                        <th scope="row">1</th>
                        <td>{{item.title}}</td>
                        <td>{{item.category}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.usname.toUpperCase()}}  {{item.uslname.toUpperCase()}}</td>
                        <td>{{item.mail}}</td>
                        <td>@mdo</td>
                        <td>
                            <div class="btn-group dropleft">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    İşlem Seçenekleri
                                </button>
                                <div class="dropdown-menu">
                                        <a class="dropdown-item pointercursor" @click="removefav(1)"><i class="fas fa-trash-alt" style="padding-right: 5px"></i>İlanı Favorilerimden Kaldır</a>
                                    <a class="dropdown-item pointercursor" @click="routedetail('ProductDetail',1)" ><i class="fas fa-arrow-right" style="padding-right: 5px"></i>İlana Git</a>
                                    <a class="dropdown-item pointercursor" @click="sendmsg(item)"><i class="fas fa-comment-alt" style="padding-right: 5px"></i>İlan Sahibiyle İletişime Geç</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item pointercursor" @click="routedetail('UserDetail',1)" ><i class="fas fa-eye" style="padding-right: 5px"></i>İlan Sahibinin Profiline Gözat</a>
                                </div>
                            </div>

                        </td>
                    </tr>


                    </tbody>
                </table>
            </div>
        </div>
        <msg-popup :msguser="user"></msg-popup>
    </div>
</template>

<script>
    import  TableHeader from  '../TableHeaderComponent/TableHeader'
    import MsgPopup from  '../Message/MsgPopup'
    export default {
        data(){
            return{
                user:{},
                favoritelist:[
                    {
                        title:"Acil Satılık Telefon",
                        descraption:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
                        category:"Elektronik",
                        price:"400",
                        usname:"Ali",
                        uslname:"Uçar",
                        mail:"ali@gmail.com",

                    },
                    {
                        title:"Acil Satılık Ütü",
                        descraption:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
                        category:"Elektronik",
                        price:"488",
                        usname:"Ayşe",
                        uslname:"Yılmaz",
                        mail:"ayse@gmail.com",
                    }
                ]
            }
        },
        components:
            {
                    TableHeader,
                    MsgPopup
            },
        methods:{
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
            Component.datatable('favtable')
        },
    }
</script>

<style scoped>
.pointercursor{
    cursor: pointer;
}
</style>