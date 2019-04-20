<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
        <h3>Hoşgeldin</h3>
        <p>Eğer Öğrenciysen ve İlan Verip Para Kazanmak  İstediğin Birşeyin Varsa (Örn:Ev Eşyası Satmak,Cep Telefonu Satmak) Yada Bir Duyuru Paylaşmak İstersen (Örn:Eşyalı Ev Arıyorum,Evimize Yeni Birini Arıyoruz,Otobüs Kartım Kayboldu gibi)
        Burası Tam Sana Göre Üstelik İnstagram&Facebook Gibi Öğrenci Gruplarında Admin Onayına İhtiyacın Yok Özgürsün !😉
        </p>
       <br>
        <p>Endişelenme Öğrenci Değilsende Bizim İçin Kayıt Olmanın Hiç Bir Mahsuru Yok 😉 <br>(Tek Yapman Gereken Öğrenci Değilim Alanını İşaretlemek !)</p>
        <a href="/Login" class="gologin">Giriş Yap</a>
      </div>
      <div class="col-md-9 register-right">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3 style="text-align: center;margin-top: 30px">Öğrencinin Aradığı Herşey Burada !</h3>
            <h3 class="register-heading">Paylaşmak İçin Kayıt Ol!</h3>
            <div class="row register-form">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="registerdata.rufirstname" placeholder="Adınız *" value="" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="registerdata.rlastname" placeholder="SoyAdınız *" value="" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" v-model="registerdata.rpass" placeholder="Parola*" value="" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" v-model="registerdata.rcpass"  placeholder="Parola Tekrarı *" value="" />
                </div>
                <div class="form-group">
                  <div class="maxl">
                    <label class="radio inline">
                      <input type="radio" v-model="registerdata.rgender" name="gender" value="2" >
                      <span> Kadın </span>
                    </label>
                    <label class="radio inline">
                      <input type="radio" v-model="registerdata.rgender" name="gender" value="1">
                      <span>Erkek </span>
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="maxl">
                    <label class="radio inline">
                      <input type="checkbox" v-model="registerdata.risstudent" name="gender" value="male" >
                      <span> Öğrenci Değilim  </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="email" class="form-control" v-model="registerdata.remail" placeholder="ornek@ornek.com*" value="" />
                </div>
                <div class="form-group">
                  <input type="text" minlength="11" maxlength="11" v-model="registerdata.rphone" name="txtEmpPhone" onkeypress='return event.charCode >= 48 && event.charCode <= 57' class="form-control" placeholder="(05XX) *" value="" />
                </div>
                <div class="form-group">
                  <select class="form-control" @change="citychange(selectcity)" v-model="selectcity" >
                    <option  :class="{'hidden':item.cityid==0}" :selected="item.cityid==0" :disabled="item.cityid==0"  v-for="item in city" v-bind:value="{ id: item.cityid, text: item.cityname }">{{ item.cityname }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-control" @change="highschoolchange(selectedhighschools)" v-model="selectedhighschools" >
                    <option  :class="{'hidden':item.universityid==0}" :selected="item.universityid==0" :disabled="item.universityid==0"  v-for="item in highschools" v-bind:value="{ id: item.universityid, text: item.universityname }">{{ item.universityname }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <div class="maxl">
                    <div id="captcha">
                    </div>
                    <button type="button"  @click="createCode" class="btn btn-primary btn-sm">Yeni Kod </button>
                    <br><br>
                    <input type="text" class="form-control" placeholder="Doğrulama Kodu*" value="" maxlength="6" v-model="captchacode" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a  class="btnRegister"   @click="registeruser" style="color: white;text-align: center">Kayıt Ol</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import  CityService from '../../Service/CityService'
  import UniversityService from '../../Service/UniversityService'
  import RegisterService from '../../Service/RegisterService'
  import md5 from 'md5';
export  default{
  data(){
    return{
        registerdata:{
          rufirstname:"",
          rlastname:"",
          rpass:"",
          rcpass:"",
          remail:"",
          rphone:"",
          rgender:null,
          risstudent:0,
          rschool:null,
          rcity:null,

        },
      city:[],
      highschools:[],
      selectedhighschools:{ id: 0, text: "Üniversite Seçiniz" },
      selectcity:{ id: 0, text: "Şehir Seçiniz" },
      code:"",
      captchacode:""
    }
  },
      created(){
       CityService.gettallcity().then((res)=>{
         if(res.length>0){
           res.unshift({cityid:"0",cityname:"Şehir Seçiniz"})
           this.city=res;
         }else{
           //hata
         }

       })
      },
  methods:{
    highschoolchange(param){
      this.registerdata.rschool=param.id
    },
    registeruser(){
      debugger
      if(this.registerdata.rufirstname.trim()==="" || this.registerdata.rufirstname.trim().length<3){
        swal({
          button: "Tamam ",
          title: "İsim Alanı Boş Yada 3 Karakterden Daha Az Olamaz.",
          icon: "error"
        })
      }else if(this.registerdata.rlastname.trim()=="" ||this.registerdata.rlastname.trim().length<3 ){
        swal({
          button: "Tamam ",
          title: "SoyAd Alanı Boş Yada 3 Karakterden Daha Az Olamaz.",
          icon: "error"
        })
      }else if(this.registerdata.rpass.trim()=="" || this.registerdata.rpass.trim().length<8){
        swal({
          button: "Tamam ",
          title: "Parola Alanı Boş Yada 8 Karakterden Daha Az Olamaz.",
          icon: "error"
        })
      }else if(this.registerdata.rcpass.trim()=="" || this.registerdata.rcpass.trim().length<8){
        swal({
          button: "Tamam ",
          title: "Parola Alanı Boş Yada 8 Karakterden Daha Az Olamaz.",
          icon: "error"
        })
      }else if(this.registerdata.rpass.trim()!=this.registerdata.rcpass){
        swal({
          button: "Tamam ",
          title: "Parolalar Eşleşmiyor.",
          icon: "error"
        })
      }
      else if(this.registerdata.rgender==null){
        swal({
          button: "Tamam ",
          title: "Lütfen Cinsiyet Belirtiniz",
          icon: "error"
        })
      }
      else if(!Component.validateemail(this.registerdata.remail)){
        swal({
          button: "Tamam ",
          title: "Lütfen Geçerli Bir Email Adresi Kullanın",
          icon: "error"
        })
      }
      else if(this.registerdata.rphone.trim().length!="11"){
        swal({
          button: "Tamam ",
          title: "Lütfen Geçerli Telefon Numarası Giriniz.",
          icon: "error"
        })
      }
      else if(this.selectcity.id==0 || this.selectcity.id==undefined){
        swal({
          button: "Tamam ",
          title: "Lütfen Şehir Seçiniz",
          icon: "error"
        })
      }

      else if(this.registerdata.risstudent!==true){
        if(this.selectedhighschools.id==0 || this.selectedhighschools.id==undefined){
          swal({
            button: "Tamam ",
            title: "Lütfen Üniversite Seçiniz",
            icon: "error"
          })
        }
      }
       if(this.captchacode!=this.code || this.code.trim()===""){
        debugger
        swal({
          button: "Tamam ",
          title: "Güvenlik Kodu Hatalı Girildi Lütfen Tekrar Deneyin",
          icon: "error"
        })
      }else{
         const user={
           rufirstname:this.registerdata.rufirstname,
           rlastname:this.registerdata.rlastname,
           rpass:md5(this.registerdata.rpass),
           remail:this.registerdata.remail,
           rphone:this.registerdata.rphone,
           rgender:this.registerdata.rgender,
           risstudent:0,
           rschool:this.registerdata.rschool,
           rcity:this.registerdata.rschool,

         }
         this.createuserregister(user);
         debugger
     /*    $.ajax({
           type: 'POST',
           url: "http://localhost:8000/api/register",
           datatype: 'application/json',
           headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
           data: this.registerdata,
           success: function (result) {
             if (result) {
               debugger
             } else {
               debugger
             }
           },
           error: function (request) {
           }
         })*/
      }
    },
    createuserregister: function (user) {
      RegisterService.adduser(user).then((response) => {
        if (response) {
          this.selectedhighschools={ id: 0, text: "Üniversite Seçiniz" },
          this.selectcity={ id: 0, text: "Şehir Seçiniz" },
          this.code="",
          this.registerdata=
          {
            rufirstname:"",
            rlastname:"",
            rpass:"",
            rcpass:"",
            remail:"",
            rphone:"",
            rgender:null,
            risstudent:0,
            rschool:null,
            rcity:null,
          }
          swal({
            button: "Tamam ",
            title: "Kaydınız Başarıyla Gerçekleşti Lütfen E-Mail Adresinizi Kontrol Edin Ve Kaydınızı Onaylayın ",
            icon: "success"
          })
        }

      })
      //register işlemleri
    },
    citychange(param){
      this.selectedhighschools.id=0
      this.registerdata.rcity=param.id
      UniversityService.getcityuni(param.id).then((res)=>{
        if(res.length>0){
          res.unshift({universityid:"0",universityname:"Üniversite Seçiniz"})
          this.highschools=res;
        }else{
          //hata
        }

      })
    },
    createCode(){
      document.getElementById('captcha').innerHTML = "";
      var charsArray ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
      var lengthOtp = 6;
      var captcha = [];
      for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length + 1);
        if (captcha.indexOf(charsArray[index]) === -1)
          captcha.push(charsArray[index]);
        else i--;
      }
      var canv = document.createElement("canvas");
      canv.id = "captcha";
      canv.width = 100;
      canv.height = 50;
      var ctx = canv.getContext("2d");
      ctx.font = "25px Georgia";
      ctx.strokeText(captcha.join(""), 0, 30);
      this.code = captcha.join("");
      document.getElementById("captcha").appendChild(canv);
    }
  },
  mounted(){
    this.createCode();
  },
}
</script>

<style scoped>
  .register{
    background: -webkit-linear-gradient(right, #3931af, rgb(2, 168, 255));
    margin-top: 3%;
    padding: 3%;
  }
  .register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
  }
  .register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
  }
  .register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
  }
  .register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
  }
  @-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
  }
  @keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
  }
  .register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
  }
  .register .register-form{
    padding: 10%;
    margin-top: 10%;
  }
  .btnRegister{
    float: right;
    border: none;
    border-radius: 1.5rem;
    margin-top: -50px;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
  }

  .register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
  }
  .gologin{
    color: white;
  }
  .gologin:hover{
   font-size: large;
  }
</style>
