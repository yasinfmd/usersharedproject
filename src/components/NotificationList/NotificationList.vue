<template>
        <div class="col-md-9 ml-sm-auto col-lg-10 px-4" style="margin-top: -740px">
            <div class="d-flex justify-content-start" >
                <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                    <div class="page-header">
                        <TableHeader :res="notificationlist.length" title=" Üzgünüz Bildirim Bulamadık" cimg="https://cdn1.iconfinder.com/data/icons/twitter-ui-colored/48/JD-24-64.png" content="Bildirimler"></TableHeader>
                    </div>
                    <div class="notifications">
                        <ul class="notification-list">
                            <li>
                                <div class="media">
                                <div class="media-left">
                                    <a >
                                        <img src="../../assets/icons/heart-64.png" class="media-object cat-icon rounded-circle" alt="...">
                                    </a>


                                </div>
                                <div class="media-body">
                                    <p class="media-heading"><b style="cursor: pointer" @click="routeuserdetail">Ahmet</b> Ürününü Favorilerine Ekledi</p>
                                </div>
                            </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a >
                                            <img src="../../assets/icons/13_Discount-64.png" class="media-object cat-icon rounded-circle" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <p class="media-heading"><b style="cursor: pointer" @click="routeuserdetail">XX </b> Ürünü İndirime Girdi.</p>
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
    export default {
        data(){
            return{
                data:[],
                notificationlist:[""]
            }
        },
        methods:{
            vericek(){
                this.data.push('')
            },
            routeuserdetail(id){
                this.$router.push("/UserDetail/"+1);
            }
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