<template>
    <div class="col-md-9 ml-sm-auto col-lg-10 px-4" style="margin-top: -740px">
        <div class="d-flex justify-content-start" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <div class="container">
                        <h3 class=" text-center">Sohbet</h3>
                    <div class="messaging">
                        <div class="inbox_msg">
                            <div class="inbox_people">
                                <div class="headind_srch">
                                    <div class="recent_heading">
                                        <h4>Mesajlar</h4>
                                    </div>
                                </div>
                                <div class="inbox_chat" >
                                   <!-- active_chat-->
                                    <div class="chat_list  cursorstyle" v-for="data in inboxlist">
                                        <div class="chat_people">
                                            <div class="chat_img"> <img :src="data.usimg" style="border-radius: 20px" alt="sunil"> </div>
                                            <div class="chat_ib" @click="getmessage(data.id)">
                                                <h5>{{data.to}} <span class="chat_date">Dec 25</span></h5>
                                                <p>{{data.msg}}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="mesgs" >
                                <div class="msg_history"   >
                                    <div :class="{'incoming_msg':data.to!=3,'outgoing_msg':data.to==3}" v-for="data in messagelist">
                                        <div :class="{'incoming_msg_img':data.to!=3}"> <img v-if="data.to!=3" src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                                        <div :class="{'received_msg':data.to!=3,'outgoing_msg':data.to==3}">
                                            <div :class="{'received_withd_msg':data.to!=3,'sent_msg':data.to==3}">
                                                <p>{{data.mes}}</p>
                                                <span class="time_date"> {{data.time}}    |   {{data.date}}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type_msg">
                                    <div class="input_msg_write">
                                            <textarea class="write_msg" rows="5" style="width: 90%" id="comment" placeholder="Mesajınız..."></textarea>
                                        <button class="msg_send_btn" type="button"><i class="far fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                mdata2:[
                    {id:"1",to:"2",from:"3",mes:"Lorem Ipsum Nedir?\n" +
                            "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur",date:"27.02.2019",time:"11:30"},
                    {id:"1",to:"2",from:"3",mes:"Orda mısın",date:"27.02.2019",time:"11:33"},
                    {id:"1",to:"2",from:"3",mes:"Nasılsın",date:"27.02.2019",time:"11:36"},
                    {id:"1",to:"3",from:"2",mes:"Evet ",date:"27.02.2019",time:"11:34"},
                    {id:"1",to:"3",from:"2",mes:"Buradayım",date:"27.02.2019",time:"11:34"},

                    {id:"2",to:"2",from:"3",mes:"Ürün Çok Güzel Satar mısın",date:"28.02.2019",time:"11:42"},
                    {id:"2",to:"3",from:"2",mes:"Teklifin Nedir ",date:"28.02.2019",time:"11:58"},
                    {id:"2",to:"2",from:"3",mes:"200 TL Olur mu ?",date:"28.02.2019",time:"13:36"},
                    {id:"2",to:"3",from:"2",mes:"Evet Olur Nerde Görüşelim ?",date:"28.02.2019",time:"13:38"},
                    {id:"2",to:"2",from:"3",mes:"Ankarada ",date:"28.02.2019",time:"13:42"}
                ],
                messagelist:[],
                inboxlist:[
                    {id:"1",to:"Ahmet",msg:"selam",usimg:"https://randomuser.me/api/portraits/men/74.jpg"},
                    {id:"2",to:"Mehmet",msg:"naber",usimg:"https://randomuser.me/api/portraits/men/81.jpg"},
                ],
                getmessage(id){
                   var messagedata= _.where(this.mdata2, {id:id});
                   debugger
                   messagedata.forEach((row)=>{
                       if(moment(row.date,"DD.MM.YYYY").format("LL")!="Invalid date")
                       row.date=moment(row.date,"DD.MM.YYYY").format("LL");
                   })
                    this.messagelist=_.sortBy(messagedata, 'time');
                }
            }
        },
        methods:{

        },
        created(){

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .container{max-width:1170px; margin:auto;}
    img{ max-width:100%;}
    .inbox_people {
        background: #f8f8f8 none repeat scroll 0 0;
        float: left;
        overflow: hidden;
        width: 40%; border-right:1px solid #c4c4c4;
    }
    .inbox_msg {
        border: 1px solid #c4c4c4;
        clear: both;
        overflow: hidden;
    }
    .top_spac{ margin: 20px 0 0;}


    .recent_heading {float: left; width:40%;}
    .srch_bar {
        display: inline-block;
        text-align: right;
        width: 60%; padding:10px;
    }
    .headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

    .recent_heading h4 {
        color: #05728f;
        font-size: 21px;
        margin: auto;
    }
    .srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
    .srch_bar .input-group-addon button {
        background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
        border: medium none;
        padding: 0;
        color: #707070;
        font-size: 18px;
    }
    .srch_bar .input-group-addon { margin: 0 0 0 -27px;}

    .chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
    .chat_ib h5 span{ font-size:13px; float:right;}
    .chat_ib p{ font-size:14px; color:#989898; margin:auto}
    .chat_img {
        float: left;
        width: 11%;
    }
    .chat_ib {
        float: left;
        padding: 0 0 0 15px;
        width: 88%;
    }

    .chat_people{ overflow:hidden; clear:both;}
    .chat_list {
        border-bottom: 1px solid #c4c4c4;
        margin: 0;
        padding: 18px 16px 10px;
    }
    .inbox_chat { height: 550px; overflow-y: scroll;}

    .active_chat{ background:#ebebeb;}

    .incoming_msg_img {
        display: inline-block;
        width: 6%;
    }
    .received_msg {
        display: inline-block;
        padding: 0 0 0 10px;
        vertical-align: top;
        width: 92%;
    }
    .received_withd_msg p {
        background: #ebebeb none repeat scroll 0 0;
        border-radius: 3px;
        color: #646464;
        font-size: 14px;
        margin: 0;
        padding: 5px 10px 5px 12px;
        width: 100%;
    }
    .time_date {
        color: #747474;
        display: block;
        font-size: 12px;
        margin: 8px 0 0;
    }
    .received_withd_msg { width: 57%;}
    .mesgs {
        float: left;
        padding: 30px 15px 0 25px;
        width: 60%;
    }

    .sent_msg p {
        background: #05728f none repeat scroll 0 0;
        border-radius: 3px;
        font-size: 14px;
        margin: 0; color:#fff;
        padding: 5px 10px 5px 12px;
        width:100%;
    }
    .outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
    .sent_msg {
        float: right;
        width: 46%;
    }
    .input_msg_write input {
        background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
        border: medium none;
        color: #4c4c4c;
        font-size: 15px;
        min-height: 48px;
        width: 100%;
    }

    .type_msg {border-top: 1px solid #c4c4c4;position: relative;}
    .msg_send_btn {
        background: #05728f none repeat scroll 0 0;
        border: medium none;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        font-size: 17px;
        height: 33px;
        position: absolute;
        right: 0;
        top: 11px;
        width: 33px;
    }
    .messaging { padding: 0 0 50px 0;}
    .msg_history {
        height: 516px;
        overflow-y: auto;
    }
    .cursorstyle{
        cursor: pointer;
    }

</style>