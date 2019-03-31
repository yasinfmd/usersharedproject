<template>
      <div class="container-fluid">
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <p class="lead">Yeni İlan Oluştur <img src="../../assets/icons/Asset_85-32.png"></p>
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

                                                    <select class="selectpicker form-control">
                                                        <option>Kategori 1</option>
                                                        <option>Kategori 2</option>
                                                        <option>Kategori 3</option>
                                                        <option>Kategori 4</option>
                                                        <option>Kategori 5</option>
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
                                                        <img id="index" class="card-img-top"  :src="item.base64" alt="Card image cap">
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
                                                            <img :src="headimg" style="width: 400px; height: 300px">

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
    export  default {
        data(){
            return{
                alertcontent:"",
                imagelist:[],
                newproduct:{
                    title:"",
                    description:"",
                    price:"",
                },
                headimg:"http://kumova.com/userFiles/no-image.png",
            }
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
                }
                ///kategori kontrolü
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
                    ///create product
                }
            },
            setheaderimg(index){
                debugger
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
                        res.base64='data:image/jpeg:image/png;base64,'+res.base64;
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
