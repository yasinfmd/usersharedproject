<template>
    <div class="tab-pane in active animated flipInX custon-tab-style1 container" style="margin-top: 20px">
        <div class="row">
            <div class="col md-4">
                <div class="card offset-0 col-md-4">
                    <div class="card-body tex-center d-flex align-items-center flex-column">
                        <img height="128" class="img-responsive text-center mb-3" style="padding-top: 10px">
                        <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
                        <a role="button" aria-pressed="true" class="btn btn-outline-secondary "    @click="$refs.file.click()">Resim Seç</a>
                    </div>

                </div>
            </div>
            <div class="col md-8">
                <img :src="newimg" style=" width: 50%; height: 100%">
            </div>
        </div>
        <button class="btn btn-primary" @click="updateprofimg">Profil Resmini Güncelle</button>

    </div>
</template>

<script>
    import UserAvatarService from '../../Service/UserAvatarService'
    import UserService from '../../Service/UserService'
    export default {
        data(){
            return{
                user:"",
                newimg:"",
                file:""
            }
        },
        methods:{
            onChange(e) {
                debugger
                const file = e.target.files[0];
                if(file.type!=undefined && file.type.includes("image")){
                        Component.readFileToBase64(file).then((res)=>{
                            this.file=res;
                            this.newimg='data:image/jpeg:image/png;base64,'+res.base64;
                        })
                }else{
                    swal({
                        title:"Lütfen Resim Dosyası Seçiniz",
                        button:"Tamam",
                        icon:"error"
                    })
                }

            },
            getuser(){
                debugger
                this.$store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        this.newimg=this.$store.getters.getuser.avatar
                    }else{
                    }
                })
            },
            updateprofimg(){
                var _this=this;
                if(this.newimg==this.$store.getters.getuser.avatar){
                    swal({
                        title:"Lütfen Resim Seçiniz",
                        button:"Tamam",
                        icon:"error"
                    })
                }else{
                    debugger
                    UserAvatarService.addavatar(
                        {
                            base64:this.file.base64,
                            size:this.file.size,
                            type:this.file.type,
                            date:new Date().toLocaleDateString(),
                            time:new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
                            userid:_this.$store.getters.getuser.userid
                        }
                    ).then((res)=>{
                        if(res[0].status==="Updated"){
                            debugger
                            UserService.getuser({urlparse:
                            Component.urlParse(
                                "user.userid="+_this.$store.getters.getuser.userid
                            )
                            }).then((res)=>{
                                    if(res[0].status==undefined){
                                        _this.$store.commit("setUs",res);
                                        this.getuser()
                                        swal({
                                            title:"Profil Resmi Başarıyla Güncellendi",
                                            icon:"success",
                                            button:"Tamam"
                                        })
                                    }else{
                                        alert("hata");
                                    }
                            })
                        }else{
                            swal({
                                title:"Profil Resmi Değiştirilemedi Lütfen Daha Sonra Tekrar Dene",
                                icon:"error",
                                button:"Tamam"
                            })
                        }
                    })
                }
            }
        },

        created(){
            this.getuser();
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>