<template>
     <div class="d-flex" id="wrapper">
        <router-view name="appheader">
        </router-view>
            <div id="page-content-wrapper">
                   <router-view name="appnav">
        </router-view>
      <transition name="fade" mode="out-in">
        <router-view ></router-view>
      </transition>
           <router-view name="appfooter"></router-view>
          </div>
  </div>
</template>
<script>
 import  appLogin from  './components/Login/Login'
  export default {
    components:{
      appLogin
    },
      methods:{
          detectmob() {
              if( navigator.userAgent.match(/Android/i)
                  || navigator.userAgent.match(/webOS/i)
                  || navigator.userAgent.match(/iPhone/i)
                  || navigator.userAgent.match(/iPad/i)
                  || navigator.userAgent.match(/iPod/i)
                  || navigator.userAgent.match(/BlackBerry/i)
                  || navigator.userAgent.match(/Windows Phone/i)

              ){
                  return true;
              }
              else {
                  return false;
              }
          }
      },
      created(){
          Component.showntf("Selam Nasılsın")
        this.$store.dispatch("userisempty");
      },
  }
   </script>
<style>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .3s ease-out;
    }
    .fade-leave{

    }
    .fade-leave-active{
        transition: opacity .3s ease-out;
        opacity: 0;
    }
</style>
