<template>
    <div class="col-md-9 ml-sm-auto col-lg-10 px-4" style="margin-top: -740px">
        <div class="d-flex justify-content-center" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <TableHeader :res="revenuelist.length" title=" Üzgünüz İndirime Girmiş Bir Ürün Bulamadık" cimg="https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-11-64.png" content="İndirimde Olan İlanlar"></TableHeader>

                <button type="button" v-if="revenuelist.length==0" @click="goproduct" class="btn btn-success btn-lg btn-block"><i class="fas fa-arrow-down" style="color: white"></i>Buraya Tıklayarak Bir İlan Ver Hemen Kazanmaya Başla ! <i class="fas fa-arrow-down" style="color: white"></i></button>
                <div class="container">

                    <div class="row" >


                        <Modal :content="$store.getters.getmodalcontent"></Modal>


                                <table id="example" class="table table-striped table-bordered" style="width:120%;margin-top: 20px" v-if="revenuelist.length!=0">

                                    <caption>Toplam Kazanç  300 TL             <img src="../../assets/icons/678131-money-32.png"> </caption>
                                    <thead>
                                    <tr >
                                        <th scope="col" style="cursor: pointer">İlana Ait Resim </th>
                                        <th scope="col" style="cursor: pointer">İlan Başlığı </th>
                                        <th scope="col" style="cursor: pointer">Kategori </th>
                                        <th scope="col" style="cursor: pointer">Fiyat (TL) </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,i) in revenuelist" >
                                        <td>

                                        <img    class="img-thumbnail"  style="max-height: 200px; max-width: 350px; width: 350px" :src="item.photo"  alt="Card image cap">

                                        </td>
                                        <td>{{item.title}}</td>
                                        <td>{{item.desc}}</td>


                                        <td>{{item.price}}</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th scope="col">İlana Ait Resim</th>
                                        <th scope="col">İlan Başlığı</th>
                                        <th scope="col">Kategori</th>
                                        <th scope="col">Fiyat (TL)</th>
                                    </tr>
                                    </tfoot>
                                </table>
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
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
                    {
                        title:"Deneme1",
                        desc:"Açıklama2",
                        price:"333",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
                    {
                        title:"Deneme22",
                        desc:"Açıklama",
                        price:"400",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
                    {
                        title:"Deneme32",
                        desc:"Açıklama",
                        price:"400",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
                    {
                        title:"Deneme23",
                        desc:"Açıklama",
                        price:"400",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },


                    {
                        title:"Deneme2",
                        desc:"Açıklama2",
                        price:"400",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama3",
                        price:"622",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama3",
                        price:"577",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama",
                        price:"533",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
                    {
                        title:"Deneme",
                        desc:"Açıklama",
                        price:"400",
                        photo:"https://picsum.photos/200/300?image=0",
                        select:false
                    },
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