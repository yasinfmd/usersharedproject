<template>
    <div class="tab-pane in active animated flipInX custon-tab-style1 container">

        <div class="form-group">
            <label for="exampleInputPassword3">Mevcut Parola</label>
            <input type="password" v-model="pass.oldpas" class="form-control" id="exampleInputPassword3" placeholder="Mevuct Parola">
        </div>

        <div class="form-group">
            <label >Yeni Parola</label>
            <input type="password"  v-model="pass.newpas"  class="form-control"  placeholder="Parola ">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Yeni Parola Tekrarı</label>
            <input type="password" v-model="pass.newpassagain" class="form-control" id="exampleInputPassword1" placeholder="Parola Tekrarı">
        </div>
        <div class="form-group">

        </div>
        <button type="button" class="btn btn-primary" @click="checkpass">Parolayı Değiştir</button>
    </div>
</template>

<script>
    import md5 from 'md5';
    import PasswordService from '../../Service/PasswordService'
    export default {
        data(){
            return{
                user:"",
                pass:{
                    newpas:"",
                    newpassagain:"",
                    invalid:true,
                    oldpas:"",
                }
            }
        },
        methods:{
            setpassword(){
              PasswordService.updatepassword({password:md5(this.pass.newpas),userid:this.user.userid,token:this.user.token,email:this.user.username}).then((res)=>{
                  if(res[0].status=="PasswordChange"){
                      swal({
                          button: "Tamam ",
                          title: "Parolanız Başarıyla Güncellendi",
                          icon: "success"
                      })
                      this.pass={
                          newpas:"",
                              newpassagain:"",
                              invalid:true,
                              oldpas:"",
                      }
                  }else{
                      swal({
                          button: "Tamam ",
                          title: "Parolanız Güncellenirken Hata Gerçekleşti",
                          icon: "error"
                      })
                  }
              })
            },
            checkpass(){

                if(this.pass.oldpas.length<8 || this.pass.newpas.length<8 || this.pass.newpassagain.length<8){
                    swal({
                        button: "Tamam ",
                        title: "Parolanız 8 Karakterden Küçük Olamaz",
                        icon: "error"
                    })
                }
                else if(this.pass.newpas ==""|| this.pass.newpassagain==""){

                    swal({
                        button: "Tamam ",
                        title: "Parolalar Eşleşmiyor",
                        icon: "error"
                    })
                }else if(this.pass.newpas!=this.pass.newpassagain){


                    swal({
                        button: "Tamam ",
                        title: "Parolalar Eşleşmiyor",
                        icon: "error"
                    })
                }else if  (this.pass.oldpas.trim()=="")  {
                    swal({
                        button: "Tamam ",
                        title: "Mevcut Parolanız Geçersiz",
                        icon: "error"
                    })
                }else{
                        PasswordService.getpassword({password:md5(this.pass.oldpas),userid:this.user.userid,token:this.user.token,email:this.user.username}).then((res)=>{
                            if(res[0].status=="Have"){
                                this.setpassword()
                            }else{
                                swal({
                                    button: "Tamam ",
                                    title: "Mevcut Parolanız Geçersiz",
                                    icon: "error"
                                })
                            }
                        })
                }
            }
        },
        created(){
            this.$store.dispatch("initAuth").then((res)=>{
                if(res==true){
                    this.user=this.$store.getters.getuser[0]
                }else{
                }
            })
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>