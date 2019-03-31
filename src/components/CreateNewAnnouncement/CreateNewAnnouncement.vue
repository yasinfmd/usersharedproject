<template>
       <div class="container-fluid">
        <div class="d-flex justify-content-start" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <p class="lead">Yeni Duyuru Oluştur  <img src="../../assets/icons/Asset_85-32.png"></p>
                <hr class="my-4">

                <div class="container" style="background-color: #f8f9fa">
                    <table class="table table-striped">
                        <tbody>
                        <tr>
                            <td colspan="1">
                                <div class="well form-horizontal">
                                    <fieldset>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">Duyuru Başlığı</label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group"><input   placeholder="Duyuru Başlığı" class="form-control" required="true" v-model="newproduct.title"  type="text"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">Duyuru Detayları</label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group">
                                                    <textarea class="form-control" v-model="newproduct.description" rows="5" id="comment" placeholder="Duyuruya Ait Açıklama"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">Duyuruya Ait Fotoğraflar</label><br>
                                            <small class="col-md-4 control-label"> En Fazla(3) </small>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group">
                                                    <div class="card offset-0 col-md-4">
                                                        <div class="card-body tex-center d-flex align-items-center flex-column">
                                                            <img height="128" class="img-responsive text-center mb-3" style="padding-top: 10px"
                                                            >
                                                            <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
                                                            <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Resim Seç</button>
                                                        </div>

                                                    </div>

                                                </div>
                                                <br>
                                                <p class="lead">Yüklenen Resim Sayısı</p>
                                                <hr>


                                                <div class="progress-bar bg-info" role="progressbar" :style="{width: imagelist.length *33 +'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                    {{imagelist.length}}/3
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group">

                                            <p class="lead">Ürüne Ait Görseller</p>
                                            <hr>

                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm" v-for="(item,index) in imagelist">
                                                        <div class="card" style="width: 18rem; margin-top: 20px">
                                                            <div class="card-header">
                                                                <i class="fas fa-times"  data-toggle="tooltip" data-placement="left" title="Ürünü Sil" style="padding-left: 240px;cursor: pointer" @click="removeimgitem(index)"></i>
                                                            </div>
                                                            <img class="card-img-top"  :src="item.base64" alt="Card image cap">
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </fieldset>
                                    <button type="button" class="btn btn-primary" @click="createnewpr" >Duyuru  Oluştur</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export  default {
        data(){
            return{
                imagelist:[],
                newproduct:{
                    title:"",
                    description:"",
                    price:"",

                }
            }
        },
        methods:{
            createnewpr(){
                if(this.newproduct.title.trim()==""){
                    Component.showdialog("Uyarı","Tamam","İlan Başlığı Girilmesi Zorunludur")
                }else if(this.newproduct.description.trim()==""){
                    Component.showdialog("Uyarı","Tamam","İlana Ait Açıklama Girilmek Zorundadır")
                }else if(this.imagelist.length==0){
                    Component.showdialog("Uyarı","Tamam","Lütfen En Az 1 Adet Fotoğraf Yükleyin")
                }
            },
            removeimgitem(index){
                this.imagelist.splice(index,1)
            },
            onChange(e) {
                const file = e.target.files[0];
                if(this.imagelist.length<=2){
                    Component.readFileToBase64(file).then((res)=>{
                        res.base64='data:image/jpeg:image/png;base64,'+res.base64;
                        this.imagelist.push(res);

                    })
                }
                else{
                    Component.showdialog("Bilgi","Tamam","En Fazla 3 Adet Resim Yükleyebilirisiniz .!")
                }

            },
        }
    }

</script>

<style scoped>

</style>
