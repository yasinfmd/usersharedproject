<template>
    <div  class="tab-pane in active animated flipInX custon-tab-style1 container" style="margin-top: 20px">
        <div class="row">
            <div class="col-md-12">
                <div class="card" style="width: 30rem;">
                    <div class="card-header">
                        {{$store.getters.getuser.userfirstname.toUpperCase()}}  {{$store.getters.getuser.userlastname.toUpperCase()}}
                    </div>
                    <img class="card-img-top" :src="$store.getters.getuser.avatar" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Genel Bilgiler</h5>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Telefon</label>
                            <div class="col-4">
                            <p>{{$store.getters.getuser.phone}} </p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Üniversite</label>
                            <div class="col-4">
                                <p>{{$store.getters.getuser.university}}</p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Şehir</label>
                            <div class="col-4">
                                <p>{{$store.getters.getuser.city}}</p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-4 col-form-label">Email</label>
                            <div class="col-4">
                                <p>{{$store.getters.getuser.username}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user:""
            }
        },
        methods:{
            getuser(){
                this.$store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        this.user=this.$store.getters.getuser;
                    }else{
                    }
                })
            }
        },
        created(){
            debugger
            this.getuser();
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>