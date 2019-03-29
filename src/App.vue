<template>
  <div >
        <router-view name="appheader">

        </router-view>
      <transition name="fade" mode="out-in">
        <router-view ></router-view>
      </transition>
      <router-view name="appfooter"></router-view>
  </div>
</template>
<script>
 import  appLogin from  './components/Login/Login'
  export default {
    components:{
      appLogin
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
