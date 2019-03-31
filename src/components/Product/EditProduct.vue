<template>
        <div class="container-fluid">
        <div class="d-flex justify-content-start" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                <p class="lead">İlanı Düzenle</p>
                <hr class="my-4">
                <div class="container" style="background-color: #f8f9fa">
                    <table class="table table-striped">
                        <tbody>
                        <tr>
                            <td colspan="1">
                                <div class="well form-horizontal">
                                    <fieldset>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">İlan Başlığı</label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group"><input   placeholder="İlan Başlığı" class="form-control" required="true"  type="text"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">İlan Detayları</label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group">
                                                    <textarea class="form-control"rows="5" id="comment"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">İlanın Fiyatı (TL)</label>
                                            <div class="col-md-8 inputGroupContainer">
                                                <div class="input-group">
                                                    <input type="number" min="0" max="100000" maxlength="6" class="form-control" id="inputEmail5" placeholder="0 TL" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">İlanın Kategorisi</label>
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
                                            <label class="col-md-4 control-label">Ürün Fotoğrafları</label><br>
                                            <small class="col-md-4 control-label"> En Fazla(10) En Az(1)</small>
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


                                                <div class="progress-bar bg-info" role="progressbar" :style="{width: 20 *10 +'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                1/10
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group">

                                            <p class="lead">Ürüne Ait Görseller</p>
                                            <hr>

                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm" >
                                                        <div class="card" style="width: 18rem; margin-top: 20px">
                                                            <div class="card-header">
                                                                <i class="fas fa-times"  data-toggle="tooltip" data-placement="left" title="Ürünü Sil" style="padding-left: 240px;cursor: pointer" @click="removeimgitem(index)"></i>
                                                            </div>
                                                            <img class="card-img-top"   alt="Card image cap">
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </fieldset>
                                    <button type="button" class="btn btn-primary"  >İlan Oluştur</button>
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
    export default {
        created() {
            //modeller bağlanacak
            console.log(this.$store.getters.editprdata)
            this.editprlist.push(this.$store.getters.editprdata)
        },
        data(){
            return{
                editprlist:[]
            }
        }
    }
</script>

<style scoped>

</style>