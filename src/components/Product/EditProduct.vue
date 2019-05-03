<template>
    <div class="container-fluid">
        <div class="sk-circle" v-if="!dataload">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
        </div>
        <div class="d-flex justify-content-center" >
            <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
            <h3>İlanı Düzenle</h3>
                <hr>
                <div class="row" style="padding-top: 3%">


                    <div class="col-4">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><img src="../../assets/icons/note_info.png">İlan Bilgileri</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><img src="../../assets/icons/iconfinder_synfig_icon_24342.png">İlan Fotoğrafları</a>
                        </div>
                    </div>
                    <div class="col-8" >
                        <div class="tab-content " id="v-pills-tabContent" v-for="item in editedproduct">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                <div class="form-group" >
                                    <label >İlan Kapağı</label><br>
                                    <img :src="item.img[0]" style="border: 1px solid black; width: 250px;height: 250px; " class="rounded" alt="...">
                                </div>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">İlan Başlığı</label>
                                        <input type="text" class="form-control" v-model="item.title" id="exampleInputEmail1" placeholder="İlan Başlığı Giriniz..">
                                    </div>
                                    <div class="form-group">
                                        <label for="comment">İlan Detayları</label>
                                        <textarea class="form-control" v-model="item.descraption" rows="5" id="comment" placeholder="İlan Detayları.."></textarea>
                                    </div>
                                <div class="form-group">
                                    <label for="exampleInputMoney1">İlan Fiyatı</label>
                                    <input type="number" min="0" max="100000" maxlength="6" v-model="item.price" class="form-control"id="exampleInputMoney1" placeholder="0 TL" >
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputMoney1">İlan Kategorisi</label>

                                    <select  class="selectpicker form-control" v-model="selectedcategory">
                                        <option  :class="{'hidden':item.id==0}" :selected="item.id==0" :disabled="item.id==0"
                                                 v-for="item in category"  v-bind:value="item.id">
                                            {{ item.categorytxt }}
                                        </option>
                                    </select>
                                </div>
                                    <button type="button" class="btn btn-primary" @mouseup="checkchangedata">İlan Bilgisini Güncelle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserService from '../../Service/UserService'
    import ProductService from '../../Service/ProductService'
    import UserProductService from '../../Service/UserProductService'
    import  CategoryService from '../../Service/CategoryService'
    export default {
        created(){
            this.isuserproduct()
        },
        data() {
            return {
                editedproduct:[],
                dataload:false,
                selectedcategory:0,
                category:"",
            }
        },
        mounted(){
        },
        beforeRouteLeave(to,from,next){
            localStorage.removeItem("edited")
            next();
        },
        methods: {
            isuserproduct() {
                var _this = this;
                UserProductService.isuserproduct(
                    {
                        urlparse: Component.urlParse(
                            "productid=" + _this.$route.params.prid + "&" + "userid=" + _this.$store.getters.getuser.userid,
                        ),
                        token: _this.$store.getters.getuser.token,
                        email: _this.$store.getters.getuser.username,
                        userid: _this.$store.getters.getuser.userid,
                    }
                ).then((res) => {
                   // this.getproductdetail();
                    if (res[0].status === true) {
                            this.getproduct();

                    } else {
                        this.dataload=false
                        this.$router.push("/NotFound");
                    }
                })
            },
            getcategory(){
                CategoryService.getallcategory().then((res)=>{
                    res.forEach((x,i)=>{
                        x.id===8?res.splice(i, 1):"";
                    })
                    res.unshift({id:0,categorytxt:"Lütfen Kategori Seçiniz"})
                    this.category=res;
                })
            },
            getproduct(){
                debugger
                var _this=this;
                ProductService.getproductdetail(
                    {
                        urlparse:Component.urlParse(
                            "product.productid="+_this.$route.params.prid+"& productstatus=1"
                        ),
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                    }
                ).then((res)=>{
                    debugger
                    if(res.data){
                        StorageControls.setItem("edited",res.data)
                       this.selectedcategory=res.data[0].categoryid
                        this.getcategory()
                        this.editedproduct=res.data
                        this.dataload=true
                    }else{
                        this.dataload=false
                        this.$router.push("/NotFound");
                        debugger
                    }
                })
            },
            checkchangedata(){
                var result=true
                    this.editedproduct.forEach((x,i)=>{
                            if(x.title==StorageControls.getItem("edited")[0].title
                              && x.descraption==StorageControls.getItem("edited")[0].descraption
                               && x.price==StorageControls.getItem("edited")[0].price
                                && x.categoryid==StorageControls.getItem("edited")[0].categoryid
                            ){
                                result=false

                            }else{
                                result=true
                            }
                    })
                if(result==false){
                    swal({
                        title:"İlanda Herhangi Bir Değişiklik Yapılmadı",
                        button:"Tamam",
                        icon:"error"
                    })
                }else{

                }
            },
            },
            updateproduct() {
                debugger
                this.dialog=true
                const _this=this;
                ProductService.updatesell(
                    {
                        urlparse: Component.urlParse("productid="+_this.activeproduct),
                        updatedata:{
                            productstatus:3
                        },
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                    }
                ).then((res)=>{
                    if(res[0].status==="Updated"){
                        this.dataload=false
                        this.getproduct();
                        this.dialog=false
                        swal({
                            title:"İlan Başarıyla Güncellendi",
                            button:"Tamam",
                            icon:"success"
                        })
                    }else{
                        this.dialog=false
                        swal({
                            title:"İlan Güncellenirken Hata Gerçekleşti",
                            button:"Tamam",
                            icon:"error"
                        })
                    }
                })
            },
    }

</script>

<style scoped>
</style>
