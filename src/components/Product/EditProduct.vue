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



                    <div class="col-12" >
                        <div class="tab-content " id="v-pills-tabContent" v-for="item in editedproduct">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                <div class="form-group" >
                                    <label >İlan Kapağı</label><br>
                                    <img :src="headerimg" style="border: 1px solid black; width: 250px;height: 250px; " class="rounded" alt="...">
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
                                <div class="form-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFileLang" @change="onChange($event)" lang="tr">
                                        <label class="custom-file-label" for="customFileLang">Resim Seç</label>
                                    </div>

                                    </div>
                                </div>
                                <div class="form-group">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm" v-for="(data,index) in imglist">
                                            <div class="card" style="width: 18rem; margin-top: 20px">
                                                <div class="card-header">
                                                    <p class="text-right"  >    <i class="fas fa-times"  data-toggle="tooltip" data-placement="left" title="Fotoğrafı Kaldır" style="padding-left:60px; color:red;cursor:  pointer" @click="removeimgitem(index)"></i></p>
                                                </div>
                                                <img id="index" class="card-img-top"  style="width: 286px;height: 286px" :src="data.img" alt="Card image cap">
                                                <div class="card-footer text-muted">
                                                    <p class="lead" style="cursor: pointer" @click="setheaderimg(index)">Kapak Resmi Olarak Belirle</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                </div>
                                    <button type="button" class="btn btn-primary" @mouseup="checkchangedata(item.productid)">İlan Bilgisini Güncelle</button>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
</template>

<script>
    import ProductPhotoService from '../../Service/ProductPhotoService'
    import ProductService from '../../Service/ProductService'
    import UserProductService from '../../Service/UserProductService'
    import  CategoryService from '../../Service/CategoryService'
    export default {
        created(){
            this.isuserproduct()
        },
        data() {
            return {
                headerimg:"",
                editedproduct:[],
                dataload:false,
                selectedcategory:0,
                category:"",
                zoomimg:"",
                deletedimglist:[],
                imglist:"",
                newimglist:[],
            }
        },
        mounted(){
        },
        beforeRouteLeave(to,from,next){
            localStorage.removeItem("old")
            next();
        },
        methods: {
            imgover(param){
                this.zoomimg=param;
            },
            setheaderimg(param){
                const oldheader=this.editedproduct[0].img.filter((x)=>{
                    return x.number==0
                })


                debugger
               // this.editedproduct[0]


                   ProductPhotoService.updatephoto({
                       oldheader:   oldheader[0].imgid,
                       newheader:this.editedproduct[0].img[param]
                    }).then((res)=>{
                        debugger
                    })

            },
            removeimgitem(index){
                debugger
                if(this.imglist.length>1){
                    debugger
                    const deleted=this.editedproduct[0].img.splice(index,1)
                    if(deleted[0].imgid!=undefined){
                        this.deletedimglist.push(deleted);
                    }else{
                        debugger
                     this.newimglist=this.newimglist.filter((x)=>{
                            return	x.base64!=this.editedproduct[0].img[index]

                        })
                    }
                console.log(this.newimglist)
                    //this.imglist.splice(index,1)
                    debugger
                        console.log(this.deletedimglist)
                }else{
                    swal({
                        title:"En Az 1 Adet Resim Yüklenmelidir",
                        button:"Tamam",
                        icon:"error"
                    })
                }

            },
            onChange(e) {
                //başka bir liste
                const file = e.target.files[0];
                if(file.type!=undefined && file.type.includes("image")){
                    if(this.imglist.length<=9){
                        Component.readFileToBase64(file).then((res)=>{
                            res.base64='data:image/jpeg:image/png;base64,'+res.base64
                            res.date=new Date().toLocaleDateString()
                            res.time=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
                            this.imglist.push({img:res.base64});
                            this.newimglist.push(res)
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
            deletedproductimg(param){
                debugger
                if(this.deletedimglist.length>0){
                var photosid=""
                this.deletedimglist.forEach((x)=>{
                    photosid+=","+x[0].imgid
                })
              ProductPhotoService.delphotos(
                  {
                      "in":photosid.slice(1).split(",")
                  }
                ).then((res)=>{
                    if(res[0].status==="Success"){
                        debugger
                        if(this.newimglist.length>0){
                        this.addnewphotos(param)
                        }else{
                            this.updateproduct(param)
                        }

                    }else{
                        swal({
                            title:"İlan Güncellenirken Hata Gerçekleşti",
                            button:"Tamam",
                            icon:"error"
                        })
                    }
                })
                }else{
                    if(this.newimglist.length>0) {
                        this.addnewphotos(param)
                    }else{
                        this.updateproduct(param)
                        //bak buraya
                    }
                }

            },
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
                        var product;
                        var imgobj=[]
                        res.data.forEach((x)=>{
                            if(x.seqnumber==0){
                                this.headerimg=x.img
                            }
                            imgobj.push({
                                imgid:x.imagesid,
                                img:x.img,
                                number:x.seqnumber
                            })
                        })
                        product=[{
                            categoryid: res.data[0].categoryid,
                            categorytxt: res.data[0].categorytxt,
                            cityid:res.data[0].cityid,
                            cityname: res.data[0].cityname,
                            date: res.data[0].date,
                            descraption: res.data[0].descraption,
                            favcount: res.data[0].favcount,
                            oldprice: res.data[0].oldprice,
                            price: res.data[0].price,
                            productid: res.data[0].productid,
                            productstatus: res.data[0].productstatus,
                            seencount: res.data[0].seencount,
                            status:res.data[0].status,
                            time: res.data[0].time,
                            title: res.data[0].title,
                            university:res.data[0].university,
                            universityname: res.data[0].universityname,
                            userid: res.data[0].userid,
                            username:res.data[0].username,
                            uslname: res.data[0].uslname,
                            usname: res.data[0].usname,
                            img:imgobj
                        }]
                        localStorage.setItem("old",res.data[0].price)
                        this.imglist=imgobj
                       // this.headerimg=res.data[0].img[0]
                       this.selectedcategory=res.data[0].categoryid
                        this.getcategory()
                        this.editedproduct=product
                        this.dataload=true
                    }else{
                        this.dataload=false
                        this.$router.push("/NotFound");
                        debugger
                    }
                })
            },
            checkchangedata(param){
                var _this=this;
                 _this.deletedproductimg(param)
                 //   _this.updateproduct(param)
            },
            addnewphotos(param){
                debugger
                const prid=param;
                const photos=[]
                const productphotos=[]
                debugger

                this.newimglist.forEach((x)=>{
                    photos.push({
                        date:x.date,
                        time:x.time,
                        seqnumber:x.seqnumber==undefined?"1":x.seqnumber,
                        size:x.size,
                        type:x.type,
                        base64:x.base64.slice(33)
                    })
                })
                debugger
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
                        this.addprphoto(productphotos,prid);
                    }else{
                        swal({
                            title:"İlan Güncellenirken Hata Gerçekleşti",
                            button:"Tamam",
                            icon:"error"
                        })
                        debugger
                    }
                })
            },
            addprphoto(param,prid){
                debugger
                ProductService.addprphotos({data:param}).then((res)=>{
                    debugger
                    if(res[0].status==="Inserted"){

                        this.updateproduct(prid)
                    }else{
                        swal({
                            title:"İlan Güncellenirken Hata Gerçekleşti",
                            button:"Tamam",
                            icon:"error"
                        })
                    }
                })
            },
            updateproduct(param) {
                debugger
                const _this=this;
                debugger
                ProductService.updatesell(
                    {
                        urlparse: Component.urlParse("productid="+param),
                        updatedata:{
                            title:this.editedproduct[0].title,
                            descraption:this.editedproduct[0].descraption,
                            price:this.editedproduct[0].price,
                            oldprice:localStorage.getItem("old")==null?0:localStorage.getItem("old"),
                            category:this.selectedcategory,
                            productstatus:1,
                            cityid:this.editedproduct[0].cityid,
                            prdate:new Date().toLocaleDateString(),
                            prtime:new Date().getHours()+ ":"+new Date().getMinutes()+":"+new Date().getSeconds(),
                            university:this.editedproduct[0].university
                        },
                        token:_this.$store.getters.getuser.token,
                        email:_this.$store.getters.getuser.username,
                        userid:_this.$store.getters.getuser.userid,
                    }
                ).then((res)=>{
                    debugger
                    if(res[0].status==="Updated"){
                        swal({
                            title:"İlan Başarıyla Güncellendi",
                            button:"Tamam",
                            icon:"success"
                        })
                        this.editedproduct=[]
                        this.$router.push("/ProductDetail/"+param)
                    }else{
                        swal({
                            title:"İlan Güncellenirken Hata Gerçekleşti",
                            button:"Tamam",
                            icon:"error"
                        })
                    }
                })
            },

        },
    }

</script>

<style scoped>
</style>
