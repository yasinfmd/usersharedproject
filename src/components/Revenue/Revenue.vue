<template>
    <div class="col-md-9 ml-sm-auto col-lg-10 px-4" style="margin-top: -740px">
        <div class="d-flex justify-content-center" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <TableHeader :res="revenuelist.length" title=" Üzgünüz Henüz Bir Ürün Satışı Gerçekleştirmediniz " cimg="https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-24-64.png" content="Gelir Listeniz"></TableHeader>

                <button type="button" v-if="revenuelist.length==0" @click="goproduct" class="btn btn-success btn-lg btn-block"><i class="fas fa-arrow-down" style="color: white"></i>Buraya Tıklayarak Bir İlan Ver Hemen Kazanmaya Başla ! <i class="fas fa-arrow-down" style="color: white"></i></button>
                <div class="container">

                    <div class="row" >


                        <Modal :content="$store.getters.getmodalcontent"></Modal>

                        <div class="panel panel-default">
                                <div class="float-right">
                                    <div class="btn-group">
                                        <a  v-if="revenuelist.length!=0" aria-pressed="true" style="float: right" role="button" :data-target="$store.getters.gettarget" data-toggle="modal"   class="btn btn-danger btn-sm  " @click="deleteRevenueList">Sil</a>
                                    </div>
                                </div>
                                <div class="table-container">
                        <table id="example" class="table table-striped table-bordered" style="width:120%;margin-top: 20px" v-if="revenuelist.length!=0">

                            <caption>Toplam Kazanç  300 TL             <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678131-money-32.png"> </caption>
                            <thead>
                            <tr >
                                <th></th>
                                <th scope="col" style="cursor: pointer">ID </th>
                                <th scope="col" style="cursor: pointer">İlan Başlığı </th>
                                <th scope="col" style="cursor: pointer">Kategori </th>
                                <th scope="col" style="cursor: pointer">İlana Ait Resim </th>
                                <th scope="col" style="cursor: pointer">Fiyat (TL) </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item,i) in revenuelist" >
                                <td><input type="checkbox" name="" @change="setSelected(item,i)" :checked="item.select" >
                                </td>

                                <th scope="row">1</th>
                                <td>{{item.title}}</td>
                                <td>{{item.desc}}</td>

                                <td>
                                    <div class="card" style="width: 13rem;">
                                        <div class="card-body">
                                            <img class="card-img-top"  alt="Card image cap">
                                        </div>
                                    </div>
                                </td>
                                <td>{{item.price}}</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">İlan Başlığı</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">İlana Ait Resim</th>
                                <th scope="col">Fiyat (TL)</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
                </div>
            </div>
        </div>

</template>

<script>
    import Modal from '../Modal/Modal'
    import TableHeader from '../TableHeaderComponent/TableHeader'
    export default {
        data(){
            return{
                revenuelist:[
                    {
                        title:"Deneme",
                        desc:"Açıklama",
                        price:"400",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme1",
                        desc:"Açıklama2",
                        price:"333",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme22",
                        desc:"Açıklama",
                        price:"400",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme32",
                        desc:"Açıklama",
                        price:"400",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme23",
                        desc:"Açıklama",
                        price:"400",
                        photo:"",
                        select:false
                    },


                    {
                        title:"Deneme2",
                        desc:"Açıklama2",
                        price:"400",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama3",
                        price:"622",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama3",
                        price:"577",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama",
                        price:"533",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama",
                        price:"400",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama",
                        price:"400",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Dene3213me",
                        desc:"Açıkl123ama",
                        price:"403",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme12",
                        desc:"Açıklama",
                        price:"402",
                        photo:"",
                        select:false
                    }, {
                        title:"Deneme12",
                        desc:"Açıklama43",
                        price:"800",
                        photo:"",
                        select:false
                    }
                    , {
                        title:"Deneme",
                        desc:"Açıklam5435a",
                        price:"321",
                        photo:"",
                        select:false
                    }
                    , {
                        title:"Deneme",
                        desc:"mehmet",
                        price:"476",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"ahmet",
                        price:"466",
                        photo:"",
                        select:false
                    },
                    {
                        title:"Deneme213",
                        desc:"Açıkla323ma",
                        price:"800",
                        photo:"",
                        select:false
                    }
                ],
                tableheaderlist:[],

            }
        },
        methods:{
            goproduct(){
                this.$router.push({name:'CreateNewProduct'})
            },
            setSelected(param,index){
                param.select=!param.select
                console.log(param)
            },
            deleteRevenueList(){
               const deldata= _.where(this.revenuelist, {"select":true })
                    if(deldata.length==0){
                        this.$store.commit("setModalTarget","#WarningModalftblack")
                        this.$store.commit("setModal","Lütfen Silmek İstediğiniz İlanı Seçin.")
                    }else{
                        this.$store.commit("setModalTarget","")
                        this.$store.commit("setModal","")
                    }
                console.log(deldata)
            },
        },
        components:{
            Modal,
            TableHeader
        },
        mounted() {
            Component.datatable('example')
        },
        created() {
            console.log("aaaaa")
        }
    }
</script>

<style scoped>

</style>