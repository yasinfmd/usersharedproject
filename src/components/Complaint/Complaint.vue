<template>
    <div class="container-fluid">
        <div class="container">
            <div class="container mb-5">



                <h2 class="mt-5 pb-4 h2">{{user}} 'ı Şikayet Etme Sebebini Bize Bildir.</h2>
                <div class="row">
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Uygunsuz Birşey Satıyor/Duyuruyor</p>
                        <img src="../../assets/icons/iconfinder_no_9424.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Nakit Ödemek Yerine Takas Öneriyor</p>
                        <img src="../../assets/icons/iconfinder_Arrows_swap_direction_orientation_switch_1886297.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Spam Hesap</p>
                        <img src="../../assets/icons/iconfinder_shield-warning_299112.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Uygunsuz Profil Fotoğrafı</p>
                        <img src="../../assets/icons/iconfinder_031_95942.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Hırsızlık veya Şiddet İçeren Olay</p>
                        <img src="../../assets/icons/iconfinder_Policeman_131492.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Sahte Para Ödemesi</p>
                        <img src="../../assets/icons/iconfinder_Finance_loan_money_1889199.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Sahte Para Ödemesi</p>
                        <img src="../../assets/icons/iconfinder_046-confused-face_3099548.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Ürün Kusurluydu veya tarif edildiği gibi değildi</p>
                        <img src="../../assets/icons/iconfinder_send_box_45273.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Şiddetli Tehdit</p>
                        <img src="../../assets/icons/iconfinder_gym-fight-punch-boxing_gloves-sports_and_competition-boxing-athlete-olympic-training-gloves-sport_4394759.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Kaba veya Hakaret İçeren Dil</p>
                        <img src="../../assets/icons/iconfinder_09-web_essential_3401821.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Şüpheli veya dolandırıcılık olabilecek davranış</p>
                        <img src="../../assets/icons/iconfinder_emotion_doubt_92713.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Cinsel veya taciz içeren dil</p>
                        <img src="../../assets/icons/iconfinder_7_759452.png">
                        <input type="radio">
                    </div>
                    <div class="col-md-4" style="padding: 30px">
                        <p class="lead">Diğer</p>
                        <img src="../../assets/icons/iconfinder_Other_984753.png">
                        <input type="radio">
                    </div>
                </div>

            </div>
        </div>
        <div style="float: right; padding-right: 3%">
        <button class="btn btn-sm btn-success" @click="addcomplaint">Şikayeti İlet</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                    user:"Ayşe Yılmaz",
            }
        },
        methods:{
            addcomplaint(){
                    swal({
                        title:"Ayşe Yılmaz'ı"+ " "+ " Nakit Ödemek Yerine Takas Teklif Ediyor"+ " "+ "Durumundan Ötürü Şikayet Etmek İstediğnize Emis Misiniz ?",
                        icon: "warning",
                        text: "Şikayetiniz İncelenmenin Ardından İşlem Görüp  Size Bildirim Yapılacaktır. Şikayetin Yalan yada Karalamak İçin Oluşturulması Durumunda Satıcı Alacaksınız  !",
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
        created(){
           if(isNaN(this.$route.params.userid)!=true){
                    // kullancıı var mı kontrol et varsa datayı bas
                //varsa devam yoksa notfoun yönlendir
                //user set

            }else{
               this.$router.push("/NotFound")
                //notfoun yönlendir
               // this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
    .md-avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
    }
    .md-avatar.size-1 {
        width: 40px;
        height: 40px;
    }
    .md-avatar.size-2 {
        width: 70px;
        height: 70px;
    }
    .md-avatar.size-3 {
        width: 90px;
        height: 90px;
    }
    .md-avatar.size-4 {
        width: 110px;
        height: 110px;
    }
</style>