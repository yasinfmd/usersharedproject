<template>
    <div class="col-md-9 ml-sm-auto col-lg-10 px-4" style="margin-top: -740px">
        <div class="d-flex justify-content-center" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <TableHeader :res="sharedlist.length" title=" Üzgünüz Paylaştığınız Bir Duyuru Bulamadık  " cimg="https://cdn4.iconfinder.com/data/icons/digital-marketing-gradient-rave-and-glow/512/Promotion-64.png" content="Paylaştığınız Duyurular"></TableHeader>
                <table id="sharedtableid" class="table table-striped" v-if="sharedlist.length!=0">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Duyuru Başlığı</th>
                        <th scope="col">Duyuru Açıklaması</th>
                        <th scope="col">Duyuruya Ait Resim</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>

                        <td>
                            <div class="card" style="width: 13rem;">
                                <div class="card-body">
                                    <img class="card-img-top"  alt="Card image cap">
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
    import  TableHeader from  '../TableHeaderComponent/TableHeader'
    export default {
        data(){
            return{
                sharedlist:[""]
            }
        },
        components:{
          TableHeader
        },
        methods:{

        },
        mounted() {
            Component.datatable('sharedtableid');
        }
    }
</script>

<style scoped>

</style>