<template>
  <div class="container h-100" style="padding-top: 6%">
    <div class="row">
      <div class="col">
        <p>
        <div class="d-flex justify-content-center h-100">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <img src="https://cdn1.iconfinder.com/data/icons/icons-for-a-site-1/64/advantage_teamwork-256.png" class="brand_logo" alt="Logo">
              </div>
              <br><br>
              <h3 style="margin-top: 33%">Öğrencilerin Aradığı Herşey Burada!
                <br>
                <small >Ne Aradıklarını Görmek İçin Lütfen Giriş Yap</small>
              </h3>

            </div>

            <div class="d-flex justify-content-center form_container" >
              <form  @submit.prevent="onLogin">
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="email"  @blur="checkvalidateemail"  :class="{'is-invalid':this.invalidmail}" v-model="logindata.username"  class="form-control input_user" value="" placeholder="Kullanıcı Adı">

                </div>
                <small class="form-text text-danger" v-if="this.logindata.username==''"> Bu Alan Zorunludur.</small>
                <small class="form-text text-danger" v-if="invalidmail"> Lütfen Geçerli Bir Email Adresi Girin.</small>
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input type="password"  @blur="chechkvalidatepass" :class="{'is-invalid':this.invalidpass}" v-model="logindata.password"  class="form-control input_pass" value="" placeholder="Parola..">
                </div>
                <small class="form-text text-danger" v-if="this.logindata.password==''"> Bu Alan Zorunludur.</small>
                <small class="form-text text-danger" v-if="invalidpass"> Parola Alanı 8 Karakterden Küçük Olamaz .</small>
                <div class="form-group" >
                  <svg class="liquid-button" style="cursor: pointer" data-text="Giriş Yap" @mouseup="onLogin"></svg>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <div class="col secondcol">
        <div class="container" >
        <div class="mt-4"  >
          <div class="d-flex justify-content-center links">
            <a    @click="route('Register')" style="cursor: pointer;text-decoration: underline; color: #60a3bc;" >Bir Hesabın Yok mu ? Hemen Kayıt Olun .</a>
          </div>
          <div class="d-flex justify-content-center links">
            <a   @click="route('ForgetPassword')" style="cursor: pointer;text-decoration: underline; color: #60a3bc;" >Parolanızı mı unuttunuz ?</a>
          </div>

        </div>
      </div>
      </div>
    </div>

  </div>
</template>
<script>

    import md5 from 'md5';
  export default {
    methods:{
      route(param){
          this.$router.push("/"+param);
      },

      checkvalidateemail(){
        if(this.logindata.username.trim()==""){
            this.invalidmail=true
        }
        else if(Component.validateemail(this.logindata.username)==false){
          this.invalidmail=true
        }else{
          this.invalidmail=false
        }
      },
      chechkvalidatepass(){
        if(this.logindata.password.trim()==""){
          this.invalidpass=true
        }
        else if(this.logindata.password.length<8){
          this.invalidpass=true
        }else{
          this.invalidpass=false
        }
      },

      onLogin(){
        debugger
    const user={
      username:this.logindata.username,
      password: md5(this.logindata.password),
      locationname:this.$store.getters.getlocation.locationname,
      coord:this.$store.getters.getlocation.coord
    }
    this.$store.dispatch("login",user)
      .then((response)=>{
          if(response==="NotDefine"){

            swal({
              button: "Tamam ",
              title: "Kullanıcı Adı Veya Parola Geçersiz",
              icon: "error"
            })

          }else if(response==="Blocked") {
            swal({
              button: "Tamam ",
              title: "Bu Hesap Engellenmiştir. Lütfen Web Sitesi İle İletişime Geçiniz",
              icon: "error"
            })
              alert(response);
          }else{
            this.$store.commit("setappicontxt",{icon:"fas fa-sign-out-alt",
              txt:"Çıkış Yap",
            })
            this.$router.push("/Dashboard");
          }


      })
      },
      getLocation(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition,this.positionerr);
        } else {
          console.log("Tarayıcınız Konum Bilgisini Desteklememektedir.");
        }
      },
      positionerr(error){
        var mesaj="";
        switch(error.code){
          case error.UNKNOWN_ERROR:
            mesaj="Bilinmeyen bir hata olustu hata kodu="+error.UNKNOWN_ERROR;
            break;
          case error.PERMISSION_DENIED:
            //konumsuz data çek
            break;
          case error.POSITION_UNAVAILABLE:
            mesaj="Konum tespit edilemedi hata kodu="+error.POSITION_UNAVAILABLE;
            break;
          case hata.TIMEOUT:
            mesaj="Zaman Asimi hata kodu="+hata.TIMEOUT;
            break;
        }

        alert(mesaj);
      },
      showPosition(position){
        //konumlu data çek
        var _this=this;
        const coord = position.coords.longitude + ',' + position.coords.latitude;
        const location= $.getJSON( 'http://geocode-maps.yandex.ru/1.x/?geocode=' + coord + '&lang=tr-TR&format=json&callback=?', function(res) {
          const userlocation={
            locationname: res.response.GeoObjectCollection.featureMember[0].GeoObject.description+ " "+   res.response.GeoObjectCollection.featureMember[0].GeoObject.name,
            coord:res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          }
          _this.$store.dispatch("setLocation",userlocation)

        })
      }
    },
    data(){
      return {
        logindata:{
          username:'',
          password:'',
        locationname:this.$store.getters.getlocation.locationname,
        coord:this.$store.getters.getlocation.coord
        },
        invalidmail:false,
        invalidpass:false
      }
    },
    mounted() {
      const location=StorageControls.getItem("location");
      if(location===undefined){
        this.getLocation();
      }else{
        this.$store.dispatch("setLocation",JSON.parse(location))
      }
      const buttons = document.getElementsByClassName('liquid-button');
      for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
        const button = buttons[buttonIndex];
        button.liquidButton = new LiquidButton(button);
      }

    }

  }
</script>

<style scoped>


.secondcol{
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 3px solid #60a3bc;
  border-radius: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
  .user_card {
    height: 600px;
    width: 550px;
    margin-top: auto;
    margin-bottom: auto;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    border: 3px solid #60a3bc;
    border-radius: 100px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }
  .brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #60a3bc;
    padding: 10px;
    text-align: center;
  }
  .brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
  }
  .form_container {
    margin-top: 100px;
  }
  .input-group-text {
    background:rgb(143, 23, 225) !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
  }
  .input_user,
  .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #c0392b !important;
  }




  .login-form-1 h3{
    text-align: center;
    color: #333;
  }
  .login-container form{
    padding: 10%;
  }

  .login-form-1 .btnSubmit{
    font-weight: 600;
    color: #fff;
    background-color: #60a3bc;
  }
  .login-form-1 .ForgetPwd{
    color: #60a3bc;
    font-weight: 600;
    text-decoration: none;
  }



</style>
