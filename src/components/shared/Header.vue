<template>
       <div class="border-right" id="sidebar-wrapper" >
            <div   style="background-color:  #02A8FF;" :style="{'height':pageheight+'px'}">    <a  href="#" >
         <img  :src="avatarimg" @click="routernavbar('Dash')" class="imgcircle" alt="Cinque Terre" style="margin-left:4%" width="40" height="40">
      </a>
                <small style="color: #ffffff; font-size:18px;padding-left: 3% ">Ayşe Yılmaz</small>
    </div>
            <div class="list-group list-group-flush">
                <ul class="nav flex-column flex-nowrap">
                     <li class="nav-item">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('Product')">
               <img src="../../assets/icons/ad-32.png">
                  İlanlar
                </a>
              </li>
                 <li class="nav-item">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('CreateNewProduct')">
                  <img src="../../assets/icons/Add-32.png">
                  İlan Oluştur
                </a>
              </li>
              <li class="nav-item">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('NewAnnouncement')">
                  <img src="../../assets/icons/General_Office_09-32.png">
                  Duyuru Oluştur
                </a>
              </li>
                     <li class="nav-item" v-if="onshow">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('Favorite')"  >
                  <img src="../../assets/icons/file_documents-17-32.png">
                  Favori İlanlarım
                </a>
              </li>
              <li class="nav-item" v-if="onshow">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('Share')" >
                  <img src="../../assets/icons/Smart_Watch__Share-32.png">
           İlanlarım
                </a>
              </li>
              <li class="nav-item" v-if="onshow">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('ShareAnnouncement')" >
                  <img src="../../assets/icons/sharethis-32.png">
        Duyurularım
                </a>
              </li>
              <li class="nav-item" v-if="onshow">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('Discount')">
                  <img src="../../assets/icons/sale_lineal_color_cnvrt-10-32.png">
                  İndirimde Olan İlanlar
                </a>
              </li>
              <li class="nav-item" v-if="onshow">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('Revenue')">
            <img src="../../assets/icons/hand-coins-32.png">
                  Kazandıklarım
                </a>
              </li>


              <li class="nav-item" v-if="onshow">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('Message')">
                <img src="../../assets/icons/JD-16-32.png">
                  Mesajlar
                  <span class="badge badge-danger badge-counter">7</span>
                </a>
              </li>



              <li class="nav-item" v-if="onshow">
                <a class="list-group-item list-group-item-action bg-light nav-link  navbaritemcls menufont" @click="routernavbar('Notification')">
         <img src="../../assets/icons/Alert_bell_notification_education_Christmas_bell_church_bell_ring-32.png">
                  Bildirimler
                </a>
              </li> 
              <li>
                  <hr  style="border: 1.5px solid #92FB63;
    background-color: #92FB63;
    color: #92FB63;width:90%">
              </li>
               <li class="nav-item"  >
                <a class="nav-link navbaritemcls menufont" @click="routernavbar('Policy')">
               <img src="../../assets/icons/Asset_1340-32.png">
                  Gizlilik Politikası
                </a>
              </li>
              <li class="nav-item" >
                <a class="nav-link navbaritemcls menufont" @click="routernavbar('Rules')">
             <img src="../../assets/icons/5332_-_MySpace-32.png">
       Topluluk Kuralları
                </a>
              </li>
              <li class="nav-item " >
                <a class="nav-link navbaritemcls menufont" @click="routernavbar('Protection')">
                <img src="../../assets/icons/lock_safe_password_protected-32.png">
                Kişisel Verilerin Korunması
                </a>
              </li>
              
                </ul>
                
            </div>
        </div>

</template>

<script>
  export default {
    data(){
      return{
        pageheight:document.getElementById('headnav').clientHeight,
          onshow:false,
          avatarimg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///+9vsC6u73k5OXT1NX7+/u+v8G3uLv5+fnP0NHW19jIycv09PXx8fHFxsjp6erd3d5Gnky4AAAEhklEQVR4nO2d2ZLjIAxFxyvx7v//2sGxk3Y6mwNSdO2+57Wrq3JKgACD+PePEEIIIYQQQgghhBBCCCGEEEIIIbcU3ZCNdZ3X9ZgNXWH9c4TpxiZx6RqXNONg/bOEOGWNl0vu8Zr9eLL+edFMeg/srpauz6x/YgxF/TB4v0OZ7zWQRf4yfOtAVrt0HDf6zY619c/9mCHZ7je31Z2NrJX7yO/s2OwoR3YfBnB3YRw/D+DMXnpjFRLAJYyN9Y/fQhMu6BV765//nj5G0CuW6ONNpKAHXDFe0CtaS7wiqg9eQO6LtYSgV6ysRZ4xhObBO8XRWuUxJylBn/pba5mH9GKCoKPNKNMJZ9LcWucewTY64TproTsaUcEkgUsZYuPohRRth6oUFvRYK90ySA4zM2BBlMwUV6yl1nTyIfRBRNrUqBQEoYbTQnognQGau4lOZ35IcTamVMaZBGh2Kjxh+wGmmWY6jRRonRixQfoGlO1TNcEktVabUeuG3hBjDaUwJ70aYsxNlbLh2RAjI+oNNChDjVa+n8DI+YqCibOWO6PYSBMH8ZlGL1n4oQbhGIrS0mkxRJiZKiZ8Gn6J47fS4480fyBbKAqCZPzjz9qOP/PWXD1hfCg9/gq4PfwuhmK6wBhKtb7LTKB8mzn+jrDa3BulGyrmfGuxK8f/uqbUTJFODUkfF5pBGUknVKY1IBOaBYUDQygfnhYUUiJMMlyQDyJWCBV6IloI5bM+xup+jfAaCikXXhC6ijCDeSFBcrBBG2ZmBNspYhudEEuKQFPuXwjtKyLfs5S4uoaYKFaIjDYQ3yqeUcQrYnxuek60Irqgp4y66VziC0ZdJEW+PrqmDq44ADlXe0TgUspBbVu8pghIjGm/hy74Q7ahutCNn4Nb8b6jyD/pja6CTvNPaF8XwVr7NaBribe01QbH1FV79ZsoxvJlh/R/3H/Jtq4un1akK+s9h2/FKcv7pajg2excVrDMM4hDa3K0Qzbm1UQ+ZsPB5AghhBBCyL4o2m4YsjVDt/vVk6ftsrGumjJ1t2XLl1WGS3o/Gd/lOqrwZlWfusu66dVKeCnTvpuAere8mdXebmPcLorTaoSPZjdW06o+eG/f/2sDuzguhrqPkfuxhNzgmO2i5a6SaYIkWWSNROh+S7oSYye8ePMAQpxkbt4lBz29xdF0R/y05X2HaFxv5dht2bWXcWws2mrXa94AvnP8+kW97/olU/b46ifiIuB5h3jHL74P8cn7I5KK3yql2MocXwvhO+9DBD9fIcE3zi1qXt3eoqj9skARdahLBtVV8sneT/dwX4sgmCieQIWI4ITaKWKNG2pBaI2oIu9zyKBzml+x/sXnaNzIUK0HFYC8oc5d32Dk26n40wCxOOmsCBZC+ettiiVaQhGukiV6u1AG4Xu0MMl+hejMRrWwXiiiBc1VnneIRXRrSrHaVTiiKVGtjFAMorXOaGgCDWlIQ3toSEMa2kNDGtLQHhrSkIb20JCGNLSHhjSkoT00pCEN7aEhDWloDw1pSEN7aEhDGtpDQxrS0B4a/h3D/57CWfjL3q1gAAAAAElFTkSuQmCC"
      }
    },
    methods:{
      routernavbar(route){
        this.$router.push({name:route})
      },

      exitapp(){

      },

    },
    created(){
      this.$store.dispatch("initAuth").then((res)=>{
        if(res==true){
          this.$store.commit("setappicontxt",{icon:"fas fa-sign-out-alt",
            txt:"Çıkış Yap",
          })
          this.onshow=true
          this.avatarimg="https://randomuser.me/api/portraits/women/44.jpg"
        }else{
          this.$store.commit("setappicontxt",{icon:"fas fa-sign-in-alt",
            txt:"Giriş Yap",
          })
          this.avatarimg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///+9vsC6u73k5OXT1NX7+/u+v8G3uLv5+fnP0NHW19jIycv09PXx8fHFxsjp6erd3d5Gnky4AAAEhklEQVR4nO2d2ZLjIAxFxyvx7v//2sGxk3Y6mwNSdO2+57Wrq3JKgACD+PePEEIIIYQQQgghhBBCCCGEEEIIIbcU3ZCNdZ3X9ZgNXWH9c4TpxiZx6RqXNONg/bOEOGWNl0vu8Zr9eLL+edFMeg/srpauz6x/YgxF/TB4v0OZ7zWQRf4yfOtAVrt0HDf6zY619c/9mCHZ7je31Z2NrJX7yO/s2OwoR3YfBnB3YRw/D+DMXnpjFRLAJYyN9Y/fQhMu6BV765//nj5G0CuW6ONNpKAHXDFe0CtaS7wiqg9eQO6LtYSgV6ysRZ4xhObBO8XRWuUxJylBn/pba5mH9GKCoKPNKNMJZ9LcWucewTY64TproTsaUcEkgUsZYuPohRRth6oUFvRYK90ySA4zM2BBlMwUV6yl1nTyIfRBRNrUqBQEoYbTQnognQGau4lOZ35IcTamVMaZBGh2Kjxh+wGmmWY6jRRonRixQfoGlO1TNcEktVabUeuG3hBjDaUwJ70aYsxNlbLh2RAjI+oNNChDjVa+n8DI+YqCibOWO6PYSBMH8ZlGL1n4oQbhGIrS0mkxRJiZKiZ8Gn6J47fS4480fyBbKAqCZPzjz9qOP/PWXD1hfCg9/gq4PfwuhmK6wBhKtb7LTKB8mzn+jrDa3BulGyrmfGuxK8f/uqbUTJFODUkfF5pBGUknVKY1IBOaBYUDQygfnhYUUiJMMlyQDyJWCBV6IloI5bM+xup+jfAaCikXXhC6ijCDeSFBcrBBG2ZmBNspYhudEEuKQFPuXwjtKyLfs5S4uoaYKFaIjDYQ3yqeUcQrYnxuek60Irqgp4y66VziC0ZdJEW+PrqmDq44ADlXe0TgUspBbVu8pghIjGm/hy74Q7ahutCNn4Nb8b6jyD/pja6CTvNPaF8XwVr7NaBribe01QbH1FV79ZsoxvJlh/R/3H/Jtq4un1akK+s9h2/FKcv7pajg2excVrDMM4hDa3K0Qzbm1UQ+ZsPB5AghhBBCyL4o2m4YsjVDt/vVk6ftsrGumjJ1t2XLl1WGS3o/Gd/lOqrwZlWfusu66dVKeCnTvpuAere8mdXebmPcLorTaoSPZjdW06o+eG/f/2sDuzguhrqPkfuxhNzgmO2i5a6SaYIkWWSNROh+S7oSYye8ePMAQpxkbt4lBz29xdF0R/y05X2HaFxv5dht2bWXcWws2mrXa94AvnP8+kW97/olU/b46ifiIuB5h3jHL74P8cn7I5KK3yql2MocXwvhO+9DBD9fIcE3zi1qXt3eoqj9skARdahLBtVV8sneT/dwX4sgmCieQIWI4ITaKWKNG2pBaI2oIu9zyKBzml+x/sXnaNzIUK0HFYC8oc5d32Dk26n40wCxOOmsCBZC+ettiiVaQhGukiV6u1AG4Xu0MMl+hejMRrWwXiiiBc1VnneIRXRrSrHaVTiiKVGtjFAMorXOaGgCDWlIQ3toSEMa2kNDGtLQHhrSkIb20JCGNLSHhjSkoT00pCEN7aEhDWloDw1pSEN7aEhDGtpDQxrS0B4a/h3D/57CWfjL3q1gAAAAAElFTkSuQmCC"
          this.onshow=false
        }
      })
    },
   

  }
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
