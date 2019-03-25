<template>
    <div class="container tab-pane in active animated flipInX custon-tab-style1 " style="margin-top: 20px">
        <div class="row">
            <div class="col-md-12">
                <h1 class="display-5" v-if="sharelist.length==0" >Bu Kullanıcıya Ait Bir  Duyuru Bulunmamaktadır <img src="https://cdn3.iconfinder.com/data/icons/emoticons-50/24/laugh_cry_emoticon_emoticons_emoji_emote-64.png"></h1>
                <table class="table table-striped" v-if="sharelist.length!=0">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">İlan Başlığı</th>
                        <th scope="col">İlan Açıklaması</th>
                        <th scope="col">İlan Kategorisi</th>
                        <th scope="col">İlan Fiyatı</th>
                        <th scope="col">İlana Ait Resim</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  @click="goproductdetail(data.id)">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>300</td>
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
    export default {
        methods:{
            goproductdetail(prid){
                this.$router.push("/ProductDetail/"+prid)
            }
        },
        data(){
            return{
                    sharelist:[""]
            }
        }
    }
</script>

<style scoped>



</style>