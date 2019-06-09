<template>
      <div class="container-fluid">
        <div class="d-flex justify-content-start" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <div class="container" style="margin-top: -20px">
                    <ul class="nav nav-tabs custom-menu-wrap custon-tab-menu-style1">
                        <li class="nav-item cursorstyle" >

                            <a style="cursor: pointer" :class="{'nav-link active':selectedComponent=='profiledetail','nav-link':selectedComponent!='profiledetail'}" @mouseup="setselected('profiledetail')">  <img src="https://cdn0.iconfinder.com/data/icons/linkedin-ui-colored/48/JD-07-32.png" style="padding-right: 10px">Profil</a>
                        </li>
                        <li style="cursor: pointer" class="nav-item cursorstyle">
                            <a :class="{'nav-link active':selectedComponent=='products','nav-link':selectedComponent!='products'}" @mouseup="setselected('products')"><img src="https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-02-32.png" style="padding-right: 10px">İlan Sahibinin Sattığı Ürünler</a>
                        </li>
                        <li  style="cursor: pointer" class="nav-item cursorstyle">
                            <a :class="{'nav-link active':selectedComponent=='usershared','nav-link':selectedComponent!='usershared'}" @mouseup="setselected('usershared')"><img src="https://cdn2.iconfinder.com/data/icons/business-and-economy/256/business_economic_finance_interprise_company_announcement-32.png" style="padding-right: 10px"> İlan Sahibinin Paylaştığı Duyurular</a>
                        </li>
                        <li style="cursor: pointer" class="nav-item cursorstyle">
                            <a :class="{'nav-link active':selectedComponent=='revenue','nav-link':selectedComponent!='revenue'}" @mouseup="setselected('revenue')"><img src="https://cdn4.iconfinder.com/data/icons/banking-and-finance/500/hand-coins-32.png" style="padding-right: 10px">İlan Sahibinin Kazançları</a>
                        </li>
                        <li style="cursor: pointer" class="nav-item cursorstyle">
                            <a :class="{'nav-link active':selectedComponent=='comment','nav-link':selectedComponent!='comment'}"  @mouseup="setselected('comment')"><img src="https://cdn0.iconfinder.com/data/icons/constructivism-for-the-bank/64/constr_support_chat-32.png" style="padding-right: 10px">Kullanıcı Yorumları</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <keep-alive>
                            <component :is="selectedComponent" :datalist="data" :total="total" :avg="avaragestart" :result="resultstart" :half="halfstar" :usercount="commentuser.length"></component>
                        </keep-alive>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
        import  profiledetail from  './UserProfileDetail'
        import  products from  './UserProducts'
        import usershared from  './UserSharedDetail'
        import  revenue from './UserRevenueDetail'
        import  comment from './UserStarAndCommentDetail'
        import UserService from '../../Service/UserService'
        import ProductService from '../../Service/ProductService'
        import CommentService from '../../Service/CommentService'
        export  default {

    data(){
        return{
            selectedComponent:"profiledetail",
            data:"",
            total:"",
            avaragestart:0,
            halfstar:false,
            resultstart:0,
            commentuser:[]
        }
    },
    components:{
        profiledetail,
        products,
        usershared,
        revenue,
        comment
    },
    methods:{
        setselected(param){
            //profiledetail
            this.selectedComponent=param

            switch (this.selectedComponent) {
                case "profiledetail":
                    this.getuser()
                    break;
                case "products":
                    debugger
                    this.getuser()
                    this.getuserproduct(1)
                    break;
                case "usershared":
                    //
                    break;
                case "revenue":
                    this.getuserproduct(3)
                    break;
                case "comment":
                    this.getcomment();
                    break;

            }
        },
            getcomment(){
            debugger
                const _this=this;

                CommentService.getcommentlist({
                    urlparse:Component.urlParse(
                        "comment.fromuser="+_this.$route.params.userid
                    ),
                    token: _this.$store.getters.getuser.token,
                    email: _this.$store.getters.getuser.username,
                    userid: _this.$store.getters.getuser.userid,
                }).then((res)=>{
                    if(res[0].status==undefined){
                        var sum=0
                        res.forEach((x)=>{
                            if(this.commentuser.includes(x.userid)!=true){
                                this.commentuser.push(x.userid);
                            }
                            x.star=parseInt(x.star)
                            sum+=x.star
                        })
                        debugger
                            this.data=res

                        this.avaragestart=parseInt((sum/res.length).toFixed(1))
                        this.resultstart=Math.floor(this.avaragestart)
                        this.avaragestart.toString().split(".").length==1?this.halfstar=false:this.halfstar=true;
                    }else{
                            this.data=[]
                    }
                })
            },
        getuserproduct(param){
            debugger
            const _this=this;
            ProductService.getproduct(
                {
                    urlparse:
                        Component.urlParse("photo.seqnumber=0 & userproduct.userid=" + _this.$route.params.userid + "& product.productstatus="+param),
                    token: _this.$store.getters.getuser.token,
                    email: _this.$store.getters.getuser.username,
                    userid: _this.$store.getters.getuser.userid,
                    pagination: 0
                }
            ).then((res)=>{
                debugger
                if(res.data){
                    var sumprice=0
                    res.data.forEach((x)=>{sumprice+=parseInt(x.price)})
                    this.total=sumprice;
                    this.data=res.data
                }else{
                    this.data=[]
                }
                debugger
            })
        },
        getuser(){
            debugger
            const _this=this;
            if(this.$store.getters.getuser.userid!=this.$route.params.userid){
                UserService.getuser({
                    urlparse:Component.urlParse(
                        "user.userid="+_this.$route.params.userid
                    )}
                ).then((res)=>{
                    if(res[0].status==undefined){
                        this.data=res;
                    }else{
                        _this.$router.push("/NotFound")
                    }
                })
            }else{

                _this.$router.push("/NotFound")

            }

        },
        initApp(){
            console.log(this.$route.params.userid)
        }
    },
    created() {
            this.getuser();
    }
}
</script>

<style scoped>

</style>

