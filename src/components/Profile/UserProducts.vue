<template>
    <div class="container tab-pane in active animated flipInX custon-tab-style1 " style="margin-top: 20px">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped" id="userprdcttable">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">İlan Başlığı</th>
                        <th scope="col">İlan Açıklaması</th>
                        <th scope="col">İlan Kategorisi</th>
                        <th scope="col">İlan Fiyatı</th>
                        <th scope="col">İlana Ait Resimler</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="data in prlist" @click="goproductdetail(data.id)">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>300</td>
                        <td>
                            <div class="card" style="width: 13rem;">
                                <div class="card-body">
                                    <img class="card-img-top" :src="data.img[0]" alt="Card image cap">
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        methods:{
          goproductdetail(prid){
              this.$router.push("/ProductDetail/"+prid)
          }
        },
        mounted(){
            Component.datatable("userprdcttable")
        },
        data(){
            return{
                prlist:[
                    {
                        id:"1",
                        name:"aaaa",
                        name2:"bbbb",
                        name3:"cccc",
                        img:[
                            "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-91830-4_small.JPG",
                            "https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg",
                            "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-91830-4_small.JPG",
                            "https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg"
                        ]
                    },
                    {
                        id:"2",
                        name:"bbb",
                        name2:"ccc",
                        name3:"ddddd",
                        img:[
                            "https://cdn.englishhome.com.tr/UPLOAD/PRODUCT/2013/thumb/10020150001_small.jpg",
                            "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-91830-4_small.JPG",
                            "https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg",
                            "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-91830-4_small.JPG",
                            "https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg",
                            "https://cdn.englishhome.com.tr/UPLOAD/PRODUCT/2013/thumb/10020150001_small.jpg",
                            "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-91830-4_small.JPG",
                            "https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg",
                            "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-91830-4_small.JPG",
                            "https://cdn2.avansas.com/urun/63391/tahta-karistirici-1000-li-paket-zoom-1.jpg"
                        ]
                    }
                    ]
            }
        }
    }

</script>

<style scoped>



</style>