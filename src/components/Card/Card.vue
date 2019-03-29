<template>
    <div class="row">

    <div class="col-sm-6 col-md-4 col-lg-3 mt-4" v-for="item in $store.getters.getimglist">
        <div class="card">
            <img  @click="bigphotodetail(item)"  style="cursor: pointer" data-toggle="modal" data-target="#exampleModal" class="card-img-top" src="https://picsum.photos/200/150/?random">
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        methods:{
            bigphotodetail(item){
                //itemdan gelen fotograf
                this.$store.dispatch("setbigphoto","https://picsum.photos/200/150/?random");
            }
        }
    }
</script>

<style scoped>

</style>