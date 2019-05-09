<template>
    <div class="container tab-pane in active animated flipInX custon-tab-style1 " style="margin-top: 20px">
        <h1 class="display-5" v-if="commentlist.length==0"  >Bu Kullanıcıya Henüz Yorum Yapılmadı <img src="https://cdn3.iconfinder.com/data/icons/emoticons-50/24/laugh_cry_emoticon_emoticons_emoji_emote-64.png"></h1>
        <p class="lead" v-if="commentlist.length!=0"> Yorum Yapan Toplam Kullanıcı Sayısı : {{commentlist.length}}</p>
<p class="lead" v-if="commentlist.length!=0">Kullanıcı Ortalaması :
    <span class="float-center" v-for="stars in resultstart" ><i class="text-warning fa fa-star"></i></span>
    <span class="float-center" v-if="halfstar"><i class="text-warning fa fa-star-half-alt"></i></span>
                {{avaragestart}}
</p>
        <div class="card" v-if="commentlist.length!=0">
            <div class="card-body">
                <div class="row" v-for="item in commentlist">
                    <div class="col-md-2">
                        <img :src="item.toavatar" class="img img-rounded img-fluid"/>
                        <p class="text-secondary text-center">{{item.date}} -- {{item.time}}</p>
                    </div>
                    <div class="col-md-10">
                        <p>
                            <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>{{item.toname}}</strong></a>
                            <span class="float-right" v-for="star in item.rate"><i class="text-warning fa fa-star"></i></span>


                        </p>
                        <div class="clearfix"></div>
                        <p>{{item.comment}}</p>
                    </div>


                </div>
                <hr>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                avaragestart:0,
                halfstar:false,
                resultstart:0,
                commentlist:[
                    {
                      id:1,
                      rate:4,
                      comment:"Bu Satıcı Çok İyi",
                        toid:"2",
                        toname:"ali",
                        fromid:"3",
                        date:"27.02.2019",
                        time:"13:22",
                        toavatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a3/a3d27311d92afc922c090c0dd5c77937c19a0021_full.jpg"
                    },
                    {
                        id:2,
                        rate:5,
                        comment:"Bu Satıcıyı Fazla Beğenmedim",
                        toname:"veli",
                        toid:"2",
                        fromid:"3",
                        date:"28.02.2019",
                        time:"13:55",
                        toavatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/96/968be03e4dd7ab92854f22cdebb7c8f2a06f8e9d_full.jpg"
                    },
                    {
                        id:2,
                        rate:1,
                        comment:"Bu Satıcıyı Fazla Beğenmedim",
                        toname:"veli",
                        toid:"2",
                        fromid:"3",
                        date:"28.02.2019",
                        time:"13:55",
                        toavatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/96/968be03e4dd7ab92854f22cdebb7c8f2a06f8e9d_full.jpg"
                    },
                    {
                        id:2,
                        rate:2,
                        comment:"Bu Satıcıyı Fazla Beğenmedim",
                        toname:"veli",
                        toid:"2",
                        fromid:"3",
                        date:"28.02.2019",
                        time:"13:55",
                        toavatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/96/968be03e4dd7ab92854f22cdebb7c8f2a06f8e9d_full.jpg"
                    },
                    {
                        id:2,
                        rate:3,
                        comment:"Bu Satıcıyı Fazla Beğenmedim",
                        toname:"veli",
                        toid:"2",
                        fromid:"3",
                        date:"28.02.2019",
                        time:"13:55",
                        toavatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/96/968be03e4dd7ab92854f22cdebb7c8f2a06f8e9d_full.jpg"
                    },
                    {
                        id:2,
                        rate:4,
                        comment:"Bu Satıcıyı Fazla Beğenmedim",
                        toname:"veli",
                        toid:"2",
                        fromid:"3",
                        date:"28.02.2019",
                        time:"13:55",
                        toavatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/96/968be03e4dd7ab92854f22cdebb7c8f2a06f8e9d_full.jpg"
                    }
                ]
            }
        },
        props:['datalist'],
        created() {
            var sum=0
         const avaragearr=_.pluck(this.commentlist, 'rate');
            avaragearr.forEach((x)=>{
                    sum+=parseInt(x);
            })
            this.avaragestart=(sum/avaragearr.length).toFixed(1)
            this.resultstart=Math.floor(this.avaragestart)
            this.avaragestart.toString().split(".").length==1?this.halfstar=false:this.halfstar=true;
        }
    }
</script>

<style scoped>

</style>