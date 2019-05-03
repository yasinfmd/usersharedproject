<template>
      <div class="container-fluid">
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <p class="lead">Yeni İlan Oluştur <img src="../../assets/icons/Asset_85-32.png" style="width: 32px; height: 32px"></p>
                        </div>
                <hr class="my-4">
                <div class="container" style="background-color: #f8f9fa">
                    <div class="row">
                        <div class="col-sm-12">
                    <table class="table table-bordered ">
                        <tbody>
                        <tr>
                            <td colspan="1">
                                <div class="well form-horizontal">
                                    <fieldset>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">* İlan Başlığı </label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group"><input   placeholder="İlan Başlığı" class="form-control" required="true" maxlength="100" v-model="newproduct.title"  type="text"></div>
                                                <p class="text-center">{{newproduct.title.length}}/100</p>

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">* İlan Detayları </label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group">
                                                    <textarea class="form-control" v-model="newproduct.description" rows="5" id="comment" maxlength="1000"></textarea>
                                                </div>
                                                <p class="text-center" >{{newproduct.description.length}}/1000</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">* İlanın Fiyatı (TL) </label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group">
                                                    <input type="number" min="0" max="100000" maxlength="6" class="form-control" v-model="newproduct.price" id="inputEmail5" placeholder="0 TL" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">* İlanın Kategorisi </label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group">

                                                    <select  class="selectpicker form-control" v-model="selectedcategory">
                                                        <option  :class="{'hidden':item.id==0}" :selected="item.id==0" :disabled="item.id==0"
                                                                 v-for="item in category"  v-bind:value="item.id">
                                                            {{ item.categorytxt }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">* Ürün Fotoğrafları </label><br>
                                            <small class="col-md-4 control-label"> En Fazla(10) En Az(1)</small>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group">
                                                    <div class="card offset-0 col-md-4">
                                                        <div class="card-body tex-center d-flex align-items-center flex-column">
                                                            <img height="128" class="img-responsive text-center mb-3" style="padding-top: 10px"
                                                                 >
                                                            <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
                                                            <a role="button" aria-pressed="true" class="btn btn-outline-secondary "    @click="$refs.file.click()">Resim Seç</a>
                                                        </div>

                                                    </div>

                                      </div>
                                                <br>

                                                <label class="col-md-4 control-label">Yüklenen Resim Sayısı</label>

                                                <hr>

                                                <div class="progress-bar bg-info" role="progressbar" :style="{width: imagelist.length *10 +'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                    {{imagelist.length}}/10
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label class="col-md-4 control-label">Ürüne Ait Görseller</label>
                                        <hr>

                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm" v-for="(item,index) in imagelist">
                                                    <div class="card" style="width: 18rem; margin-top: 20px">
                                                        <div class="card-header">
                                                                   <p class="text-right"  >    <i class="fas fa-times"  data-toggle="tooltip" data-placement="left" title="Ürünü Sil" style="padding-left:60px; color:red;cursor:  pointer" @click="removeimgitem(index)"></i></p>
                                                        </div>
                                                        <img id="index" class="card-img-top"  :src="'data:image/jpeg:image/png;base64,'+item.base64" alt="Card image cap">
                                                        <div class="card-footer text-muted">
                                                        <p class="lead" style="cursor: pointer" @click="setheaderimg(index)">Kapak Resmi Olarak Belirle</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">İlan Kapak Resmi</label>
                                            <hr>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm" >
                                                        <div class="card" style="width: 400px; margin-top: 20px; height: 300px; background-color: white; border: 2px dotted black">
                                                            <img :src="'data:image/jpeg:image/png;base64,'+headimg" style="width: 400px; height: 300px">

                                                             </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </fieldset>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <a role="button" aria-pressed="true"  class="btn btn-primary"   @click="createnewpr" style="color: white;text-align: center;float: right">İlan Oluştur</a>
                </div>
                </div>
                </div>
                  

      
    </div>

</template>

<script>
    import  CategoryService from '../../Service/CategoryService'
    import ProductService from '../../Service/ProductService'
    import ProductPhotoService from '../../Service/ProductPhotoService'
    export  default {
        data(){
            return{
                imagelist:[],
                category:"",
                selectedcategory:0,
                newproduct:{
                    title:"",
                    description:"",
                    price:"",
                },
                headimg:"http://kumova.com/userFiles/no-image.png",
            }
        },
        created(){
          CategoryService.getallcategory().then((res)=>{
              res.forEach((x,i)=>{
                  x.id===8?res.splice(i, 1):"";
              })
              res.unshift({id:0,categorytxt:"Lütfen Kategori Seçiniz"})
              this.category=res;
          })
        },
        methods:{
            createnewpr(){
                if(this.newproduct.title.trim()==""){
                    swal({
                        button: "Tamam ",
                        title: "İlan Başlığı Girilmesi Zorunludur",
                        icon: "error"
                    })

                }else if(this.newproduct.description.trim()==""){
                    swal({
                        button: "Tamam ",
                        title: "İlana Ait Açıklama Girilmek Zorundadır",
                        icon: "error"
                    })

                }else if(this.newproduct.price==""){
                    swal({
                        button: "Tamam ",
                        title: "İlana Ait Ücret Girin",
                        icon: "error"
                    })
                }else if(this.selectedcategory===0){
                    swal({
                        button: "Tamam ",
                        title: "İlana Ait Kategori Belirtin",
                        icon: "error"
                    })
                }
                else if(this.imagelist.length==0){
                    swal({
                        button: "Tamam ",
                        title: "Lütfen En Az 1 Adet Fotoğraf Yükleyin",
                        icon: "error"
                    })
                }else if(this.headimg=="http://kumova.com/userFiles/no-image.png"){
                    swal({
                        button: "Tamam ",
                        title: "Lütfen İlan Kapak Fotoğrafını Belirleyin.",
                        icon: "error"
                    })
                }
                else{
                this.addnewproduct();
                }
            },
            addnewproduct(){
                debugger
                var _this=this
               ProductService.addnewproduct(
                    {
                         token:_this.$store.getters.getuser.token,
                         email:_this.$store.getters.getuser.username,
                         userid:_this.$store.getters.getuser.userid,
                         title:_this.newproduct.title,
                         descraption:_this.newproduct.description,
                         price:_this.newproduct.price,
                         oldprice:_this.newproduct.price,
                         category:_this.selectedcategory,
                         status:1, //daha sonra 2 olacak
                         city:_this.$store.getters.getuser.cityid,
                         date:new Date().toLocaleDateString(),
                         time:new Date().getHours()+ ":"+new Date().getMinutes()+":"+new Date().getSeconds(),
                         university:_this.$store.getters.getuser.universityid
                     }
                 ).then((res)=>{
                         if(res[0].status=="InsertedProduct"){
                             debugger
                             this.adduserproduct(res[0].id);
                         }else{
                             swal({
                                 title:"İlan Oluşturulurken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz",
                                 button:"Tamam",
                                 icon:"error"
                             })
                         }
                 })
            },
            adduserproduct(param){
                debugger
                var _this=this;
                const prid=param
                ProductService.addproductuesr({
                    userid:_this.$store.getters.getuser.userid,
                    productid:prid
                }).then((res)=>{
                    if(res[0].status==="Inserted"){
                    this.addproductphotos(prid);
                    }else{
                        swal({
                            title:"İlan Oluşturulurken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz",
                            button:"Tamam",
                            icon:"error"
                        })
                    }
                })
            },
            addproductphotos(param){
                debugger
                const prid=param;
                const photos=[]
                const productphotos=[]
                this.imagelist.forEach((x)=>{
                    photos.push({
                        date:new Date().toLocaleDateString(),
                        time:new Date().getHours()+ "."+new Date().getMinutes()+"."+new Date().getSeconds(),
                        seqnumber:x.seqnumber==undefined?"1":x.seqnumber,
                        size:x.size,
                        type:x.type,
                        base64:x.base64
                    })
                })
                ProductPhotoService.addphoto({imglist:photos}).then((res)=>{
                    debugger
                    if(res[0].status===undefined){
                    res.forEach((x)=>{
                        productphotos.push({
                            productid:param,
                            photoid:x.imgid
                        })
                    })
                        debugger
                        this.addprphoto(productphotos);
                    }else{
                        swal({
                            title:"İlan Oluşturulurken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz",
                            button:"Tamam",
                            icon:"error"
                        })
                            debugger
                    }
                })
            },
            addprphoto(param){
                debugger
                ProductService.addprphotos({data:param}).then((res)=>{
                    debugger
                    if(res[0].status==="Inserted"){
                        swal({
                            title:"İlan Başarıyla Oluşturuldu",
                            button:"Tamam",
                            icon:"success"
                        })
                        this.selectedcategory=0,
                        this.newproduct={
                            title:"",
                            description:"",
                            price:"",
                        }
                        this.imagelist=[]
                        this.headimg="http://kumova.com/userFiles/no-image.png"
                    }else{
                        swal({
                            title:"İlan Oluşturulurken Hata Gerçekleşti Lütfen Daha Sonra Tekrar Deneyiniz",
                            button:"Tamam",
                            icon:"error"
                        })
                    }
                })
            },
            setheaderimg(index){
                debugger
                this.imagelist[index].seqnumber=0
              this.headimg = this.imagelist[index].base64
            },
            removeimgitem(index){
                this.imagelist.forEach((x)=>{
                    if(x.base64==this.headimg){
                        this.headimg="http://kumova.com/userFiles/no-image.png";
                    }
                })
                this.imagelist.splice(index,1)
            },
            onChange(e) {
                const file = e.target.files[0];
                if(file.type!=undefined && file.type.includes("image")){
                if(this.imagelist.length<=9){
                    Component.readFileToBase64(file).then((res)=>{
                        res.date=new Date().toLocaleDateString()
                        res.time=new Date().getHours()+"."+new Date().getMinutes()+"."+new Date().getSeconds()
                        this.imagelist.push(res);
                    })
                }
                else{
                    swal({
                        button: "Tamam ",
                        title: "En Fazla 10 Adet Resim Yükleyebilirisiniz .!",
                        icon: "error"
                    })
                }
                }

            },
        }
    }

</script>

<style scoped>

</style>
