<template>
    <div>
    </div>
</template>

<script>
    import RegisterService from '../../Service/RegisterService'
    import UserService from '../../Service/UserService'
    export default {
        created() {
            debugger
          this.checkregister();
        },
        methods:{
            dayremaining(date1,date2){
                const date1Split = date1.split(/\D+/);
                const date2Split = date2.split(/\D+/);
                const d1 = new Date(date1Split[2] * 1, date1Split[1] - 1, date1Split[0] * 1);
                const d2 = new Date(date2Split[2] * 1, date2Split[1] - 1, date2Split[0] * 1);
                const birgun = 24 * 60 * 60 * 1000;
                var f = Math.floor(Math.abs(d1 - d2) / birgun);
                return f;
            },
          checkregister(){
                debugger
                if(this.$route.params.code.split("-")[1]==undefined){
                            swal({
                                button: "Tamam ",
                                title: "Geçersiz Aktivasyon Kodu",
                                icon: "error"
                            })
                    this.$router.push("/Login");
                }else{

                let day=this.dayremaining(new Date().toLocaleDateString(),this.$route.params.code.split("-")[1])
                if(day>3){
                    this.deltemp()
                }else{
                    this.deltemp("add")
                }
                }

          },
            getuser(){
                debugger

            },
            deltemp(param){
                if(param==="add"){
                    RegisterService.getuser(this.$route.params.code).then((response)=>{
                        if(response[0].status==undefined){
                            const user={
                                username:response[0].rname,
                                usname:response[0].rusername,
                                uslname:response[0].rlname,
                                roleid:response[0].roleid,
                                password:response[0].password,
                                phone:response[0].rphone,
                                avatarid:1,
                                gender:response[0].gender,
                                city:response[0].cityid,
                                isstudent:response[0].isstudent,
                                universityid:response[0].runiversity,
                                createddate:new Date().toLocaleDateString(),
                            }
                              UserService.adduser(user).then((response)=>{
                                  if(response[0].status==="NotInsert"){
                                      swal({
                                          button: "Tamam ",
                                          title: "Kayıt Olma İşlemi Başarısız Lütfen Daha Sonra Tekrar Deneyiniz.",
                                          icon: "error"
                                      })
                                  }else if(response[0].status==="NotContactInsert") {
                                      swal({
                                          button: "Tamam ",
                                          title: "Kayıt Olma İşlemi Başarısız Lütfen Daha Sonra Tekrar Deneyiniz.",
                                          icon: "error"
                                      })
                                  }
                                      else if(response[0].status==="NotPswInsert"){
                                          swal({
                                              button: "Tamam ",
                                              title: "Kayıt Olma İşlemi Başarısız Lütfen Daha Sonra Tekrar Deneyiniz.",
                                              icon: "error"
                                          })
                                      }else{
                                    debugger
                                      RegisterService.deleteuser({code:this.$route.params.code}).then((response)=>{
                                          if(response[0].status==undefined){
                                              swal({
                                                  title: "Kaydınız Başarıyla Gerçekleşti",
                                                  icon: "success",
                                                  button: "Tamam "
                                              }).then((res)=>{
                                                  this.$router.push("/Login")
                                              })
                                          }else{
                                              swal({
                                                  title: "Kayıt Olma İşlemi Başarısız Lütfen Daha Sonra Tekrar Deneyiniz.",
                                                  icon: "success",
                                                  button: "Tamam "
                                              }).then((res)=>{
                                                  this.$router.push("/Login")
                                              })
                                          }

                                      })

                                      }
                                })

                        }else{
                            swal({
                                title: "Geçersiz Aktivasyon Kodu",
                                icon: "error",
                                button: "Tamam "
                            }).then((res)=>{
                                this.$router.push("/Login")
                            })
                        }
                    })
                }else{

                RegisterService.deleteuser(this.$route.params.code).then((response)=>{
                })
                }
            }
        }
    }
</script>

<style scoped>

</style>