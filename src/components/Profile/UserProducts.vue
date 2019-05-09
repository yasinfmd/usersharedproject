<template>
    <div class="container tab-pane in active animated flipInX custon-tab-style1 " style="margin-top: 20px">


        <div class="sk-circle" v-if="datalist.length>0?false:true">
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
        <div class="row"  v-if="datalist.length>0?true:false">
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
                    <tr v-for="(data,i) in datalist" @click="goproductdetail(data.productid)">
                        <th scope="row">{{i+1}}</th>
                        <td>{{data.title}}</td>
                        <td>{{data.descraption}}</td>
                        <td>{{data.categorytxt}}</td>
                        <td>{{data.price}}</td>
                        <td>
                            <div class="card" style="width: 13rem;">
                                <div class="card-body">
                                    <img class="card-img-top" :src="data.img" :alt="data.title">
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
import UserService from '../../Service/UserService'
    export default {
        methods:{
          goproductdetail(prid){
              this.$router.push("/ProductDetail/"+prid)
          },

        },
        mounted(){
            Component.datatable("userprdcttable")

        },
        props:['datalist'],
        data(){
            return{
            }
        }
    }

</script>

<style scoped>



</style>