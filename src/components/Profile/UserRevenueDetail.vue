<template>
    <div class="container tab-pane in active animated flipInX custon-tab-style1 " style="margin-top: 20px">
        <div class="row">
            <div class="col-md-12">
                <h1 class="display-5" v-if="revenuelist.length==0" >Bu Kullanıcıya Ait Bir  Kazanç Henüz Bulunmamaktadır <img src="https://cdn3.iconfinder.com/data/icons/emoticons-50/24/laugh_cry_emoticon_emoticons_emoji_emote-64.png"></h1>
                <p class="lead" @click="createnewpr" v-if="revenuelist.length==0" style="cursor: pointer">Ama Dilersen Buraya Tıklayarak Sen Biraz Kazanç Elde Edebilirsin ! <img src="https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/048-money-mouth-face-1-32.png"></p>
                <p class="lead" v-if="revenuelist.length!=0">Bu Kişi Toplam 300 TL Kazanç Elde Etti  <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678131-money-32.png"> </p>
                <p class="lead" v-if="revenuelist.length!=0" style="cursor: pointer" @click="createnewpr">Hadi Sende Buraya Tıklayarak İlan Yükle Ve Kazanmaya Başla ! <img src="https://cdn3.iconfinder.com/data/icons/emoticons-50/24/smile_emoticon_emoticons_emoji_emote_2-32.png"> </p>
                <table class="table table-striped" v-if="revenuelist.length!=0">
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
        data(){
            return{
                revenuelist:["as"]
            }
        },
        methods:{
            createnewpr(){
                this.$router.push("/CreateProduct");
            }
        }
    }
</script>

<style scoped>



</style>