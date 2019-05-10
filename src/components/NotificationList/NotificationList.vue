<template>
       <div class="container-fluid">
           <div class="sk-circle" v-if="!dataload">
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
            <div class="d-flex justify-content-start" v-if="dataload">
                <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                    <div class="page-header">
                        <TableHeader :res="notificationlist.length" title=" Üzgünüz Bildirim Bulamadık" cimg="https://cdn1.iconfinder.com/data/icons/twitter-ui-colored/48/JD-24-64.png" content="Bildirimler"></TableHeader>
                    </div>
                    <div class="notifications">
                        <ul class="notification-list">
                            <li>
                                <div class="media" v-for="item in notificationlist">
                                    <div class="media-left">
                                        <a >
                                            <img :src="item.imgicon" class="media-object cat-icon rounded-circle" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <p class="media-heading"><a style="text-decoration: underline; cursor: pointer" @mouseup="routeuser(item.userid)">{{item.username}} {{item.uslname}}</a>    <b  >{{item.title}} </b> {{item.text}}  <small style="float: right">{{item.ntfdate}}   - {{item.ntftime}}</small></p>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    import  TableHeader from '../TableHeaderComponent/TableHeader'
    import NotificationService from '../../Service/NotificationService'
    export default {
        data(){
            return{
                data:[],
                dataload:false,
                notificationlist:[]
            }
        },
        methods:{

            routeuser(id){
                this.$router.push("/UserDetail/"+id);
            },
            setreading(){
                debugger
                var _this=this;
                NotificationService.set({
                    urlparse: Component.urlParse("notification.reading=n"),
                    updatedata:{
                        reading:"y"
                    },
                    token:_this.$store.getters.getuser.token,
                    email:_this.$store.getters.getuser.username,
                    userid:_this.$store.getters.getuser.userid,
                }).then((res)=>{
                    if(res[0].status=="Success"){
                        this.$store.commit("setntfcount",0)
                    }else{
                        //hata
                    }
                    debugger

                })
            },
            getusernotification(){
                var _this=this
                NotificationService.get(
                    {
                        urlparse:Component.urlParse(
                            "notification.fromuser="+_this.$store.getters.getuser.userid
                        ),
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                    }
                ).then((res)=>{
                    if(res.data){
                        this.setreading()
                        res.data.forEach((x)=>{
                            // zaman aşımı kontrol fiyat inidirim kontrol edilecek
                                if(x.nttype==1){
                                    x.imgicon="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-64.png"
                                    x.text="Ürününü Favorilerine Ekledi"
                                }else if(x.nttype==4){
                                    x.imgicon="https://cdn4.iconfinder.com/data/icons/ios-web-user-interface-multi-circle-flat-vol-4/512/Chat_chat_bubble_comment_comments-64.png"
                                    x.text="Ürününde Senden Bahsetti"
                                }
                            this.notificationlist.push(x);
                                this.dataload=true
                        })
                        console.log(this.notificationlist)
                    }else{
                        this.dataload=true
                    }
                })
            },
        },
        created(){
            this.$store.dispatch("initAuth").then((res)=>{
                if(res==true){
                    this.getusernotification();
                }
                else{
                    //hata
                }
            })
        },
        components:{
            TableHeader
        }
    }
</script>

<style scoped>
    .notification-list, .n-user-list {
        list-style: outside none none;
        margin: 0;
        padding: 0;
    }
    .notification-list > li {
        border-bottom: 1px solid #eee;
        margin-bottom: 5px;
        padding: 5px 0;
    }
    .notification-list .cat-icon {
        width: 20px;
    }
    .notification-list .avatar {
        width: 30px;
    }

    .rounded {
        border-radius: 0.25rem;
    }
    .n-user-list{margin-bottom:5px;}
    .n-user-list:after{clear:both; content:''; display:table;}
    .n-user-list li{float:left;}
    .n-user-list li + li{margin-left:3px;}
    .n-user-list li a, .n-user-list li a:hover{text-decoration:none;}
</style>