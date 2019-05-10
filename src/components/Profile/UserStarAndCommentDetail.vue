<template>
    <div class="container tab-pane in active animated flipInX custon-tab-style1 " style="margin-top: 20px">
        <h1 class="display-5"  v-if="datalist.length>0?false:true" >Bu Kullanıcıya Henüz Yorum Yapılmadı <img src="https://cdn3.iconfinder.com/data/icons/emoticons-50/24/laugh_cry_emoticon_emoticons_emoji_emote-64.png"></h1>
        <p class="lead" v-if="datalist.length>0?true:false" > Yorum Yapan Toplam Kullanıcı Sayısı : {{datalist.length}}</p>
<p class="lead"  v-if="datalist.length>0?true:false" >Kullanıcı Ortalaması :
    <span class="float-center" v-for="stars in result" ><i class="text-warning fa fa-star"></i></span>
    <span class="float-center" v-if="half"><i class="text-warning fa fa-star-half-alt"></i></span>
                {{avg}}
</p>
        <div class="card" v-if="datalist.length>0?true:false" >
            <div class="card-body">
                <div class="row" v-for="item in datalist">
                    <div class="col-md-2">
                        <img :src="item.avatar" class="img img-rounded img-fluid" style="width: 64px; height: 64px;margin-left: 20px;"/>
                        <p class="text-secondary text-center">{{item.commentdate}} -- {{item.commenttime}}</p>
                    </div>
                    <div class="col-md-10">
                        <p>
                            <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>{{item.userfirstname}} {{item.userlastname}}</strong></a>
                            <span class="float-right" v-for="star in item.star"><i class="text-warning fa fa-star"></i></span>


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
            }
        },
        props:['datalist','avg','result','half'],
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