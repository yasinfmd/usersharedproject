<template>
             <nav id="headnav" class="navbar navbar-expand-lg navbar-light border-bottom"   style="background-color:  #02A8FF;">
           <ul class="navbar-nav">
                       <li class="nav-item active">
          <a class="nav-link menufont"  style="cursor: pointer;color:white" @click="routernavbar('Dash')">Ana Sayfa </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link menufont"  style="cursor: pointer;color:white" @click="routernavbar('Prof')">Profilim </a>
        </li>
      </ul>
            <div class="col-md-6" style="width: 100%;margin-left:10%" >
        <div id="custom-search-input">
          <div class="input-group col-md-12">
            <input type="text"  @keypress="onrouteproduct($event)" v-model="this.$store.getters.searchbardata" class="form-control input-lg" placeholder="Öğrenciysen.com da Ara" />
            <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" style="background: transparent" type="button">
                             <i class="fas fa-search"
                                aria-hidden="true"></i>
                        </button>
                    </span>
          </div>
        </div>
      </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active" v-if="$store.getters.getuser!=null?$store.getters.getuser.roleid==1?true:false:false">
                  <a class="nav-link menufont" style="cursor: pointer;color:white" @click="routernavbar('Admin')">Yönetim Paneli <i class="fas fa-tasks"></i></a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link menufont" style="cursor: pointer;color:white"  @click="exitorlogin($store.getters.getapptxt)">{{$store.getters.getapptxt}} <i :class="$store.getters.getappicon"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
</template>
<script>
export default {
    data(){
        return{
          searchdata:"",
        }
    },
     mounted() {
      if(this.$store.getters.searchbardata==""){
        this.searchdata="";
      }else{
        this.searchdata=this.$store.getters.searchbardata;
      }
    },

    methods:{
        routernavbar(route){
        this.$router.push({name:route})
        },
       exitorlogin(param){
        if(param=="Çıkış Yap"){
          this.$store.dispatch("logout");
        }else{
          this.$router.push("/Login")
        }
      },
    onrouteproduct(e){
        if(e.keyCode==13 && e.target.value.trim().length>2){
            this.$store.dispatch("searchdata",e.target.value);
            this.$router.push({name:"Product"})
        }
      },
    }
};

</script>
<style scoped>
  .navbaritemcls{
    cursor: pointer;color: #02A8FF!important;
  }
.imgcircle{
  border:1px;
  border-radius: 50px;
  margin-top: 5px;
}
  .search-form .form-group {
    float: right !important;
    transition: all 0.35s, border-radius 0s;
    width: 32px;
    height: 32px;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    border-radius: 25px;
    border: 1px solid #ccc;
  }
  .search-form .form-group input.form-control {
    padding-right: 20px;
    border: 0 none;
    background: transparent;
    box-shadow: none;
    display:block;
  }
  .search-form .form-group input.form-control::-webkit-input-placeholder {
    display: none;
  }
  .search-form .form-group input.form-control:-moz-placeholder {
    /* Firefox 18- */
    display: none;
  }
  .search-form .form-group input.form-control::-moz-placeholder {
    /* Firefox 19+ */
    display: none;
  }
  .search-form .form-group input.form-control:-ms-input-placeholder {
    display: none;
  }
  .search-form .form-group:hover,
  .search-form .form-group.hover {
    width: 100%;
    border-radius: 4px 25px 25px 4px;
  }
  .search-form .form-group span.form-control-feedback {
    position: absolute;
    top: -1px;
    right: -2px;
    z-index: 2;
    display: block;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #02A8FF;
    left: initial;
    font-size: 14px;
  }
  #custom-search-input{
    padding: 3px;
    border: 5px solid #92FB63;
    border-radius: 60px;
    background-color: #fff;
  }

  #custom-search-input input{
    border: 0;
    box-shadow: none;
  }

  #custom-search-input button{
    margin: 2px 0 0 0;
    background: none;
    box-shadow: none;
    border: 0;
    color: #666666;
    padding: 0 8px 0 10px;
    border-left: solid 1px #ccc;
  }

  #custom-search-input button:hover{
    border: 0;
    box-shadow: none;
    border-left: solid 1px #ccc;
  }

  #custom-search-input .fas fa-search{
    font-size: 23px;
  }

</style>
