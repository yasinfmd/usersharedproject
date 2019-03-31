<template>
      <div class="container-fluid">
        <div class="d-flex justify-content-start" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <div class="container" style="margin-top: -20px">
                    <ul class="nav nav-tabs custom-menu-wrap custon-tab-menu-style1">
                        <li class="nav-item cursorstyle" >

                            <a style="cursor: pointer" :class="{'nav-link active':selectedComponent=='profiledetail','nav-link':selectedComponent!='profiledetail'}" @click="selectedComponent='profiledetail'">  <img src="https://cdn0.iconfinder.com/data/icons/linkedin-ui-colored/48/JD-07-32.png" style="padding-right: 10px">Profil</a>
                        </li>
                        <li style="cursor: pointer" class="nav-item cursorstyle">
                            <a :class="{'nav-link active':selectedComponent=='products','nav-link':selectedComponent!='products'}" @click="selectedComponent='products'"><img src="https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-02-32.png" style="padding-right: 10px">İlan Sahibinin Sattığı Ürünler</a>
                        </li>
                        <li  style="cursor: pointer" class="nav-item cursorstyle">
                            <a :class="{'nav-link active':selectedComponent=='usershared','nav-link':selectedComponent!='usershared'}" @click="selectedComponent='usershared'"><img src="https://cdn2.iconfinder.com/data/icons/business-and-economy/256/business_economic_finance_interprise_company_announcement-32.png" style="padding-right: 10px"> İlan Sahibinin Paylaştığı Duyurular</a>
                        </li>
                        <li style="cursor: pointer" class="nav-item cursorstyle">
                            <a :class="{'nav-link active':selectedComponent=='revenue','nav-link':selectedComponent!='revenue'}" @click="selectedComponent='revenue'"><img src="https://cdn4.iconfinder.com/data/icons/banking-and-finance/500/hand-coins-32.png" style="padding-right: 10px">İlan Sahibinin Kazançları</a>
                        </li>
                        <li style="cursor: pointer" class="nav-item cursorstyle">
                            <a :class="{'nav-link active':selectedComponent=='comment','nav-link':selectedComponent!='comment'}" @click="selectedComponent='comment'"><img src="https://cdn0.iconfinder.com/data/icons/constructivism-for-the-bank/64/constr_support_chat-32.png" style="padding-right: 10px">Kullanıcı Yorumları</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <keep-alive>
                            <component :is="selectedComponent"></component>
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
    export  default {

    data(){
        return{
            selectedComponent:"profiledetail"
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
        initApp(){
            console.log(this.$route.params.userid)
        }
    },
    created() {
        debugger
        this.initApp();
    }
}
</script>

<style scoped>

</style>

