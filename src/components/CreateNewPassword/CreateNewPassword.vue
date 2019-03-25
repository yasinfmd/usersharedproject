<template>
    <div class="container createnewpasscontainer">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputPassword3">Yeni Parola</label>
                <input type="password" class="form-control" id="inputPassword3" v-model="newpass" placeholder="Parola">
            </div>
            <div class="form-group col-md-6">
                <label for="inputPassword4">Yeni Parola Tekrarı</label>
                <input type="password" class="form-control" id="inputPassword4" v-model="newpassconfirm" placeholder="Parola Tekrarı">
            </div>
        </div>
        <small class="form-text text-danger" v-if="invalid">{{errormsg}}</small>
        <br>

        <button type="button" class="btn btn-primary" @click="checkpasscontrol">Parola Oluştur</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                newpass:"",
                newpassconfirm:"",
                invalid:false,
                errormsg:""
            }
        },
        methods:{
            checkpasscontrol(){
                if(this.newpass.length<8 || this.newpassconfirm.length<8){
                    this.errormsg="Parolanız En Az 8 Karakter Olmalıdır"
                    this.invalid=true
                }else if(this.newpass!=this.newpassconfirm){
                    this.errormsg="Parolalar Eşleşmiyor"
                    this.invalid=true
                }else{
                    this.invalid=false;
                    this.errormsg=null;
                }
            },
            checklastpass(){

            },
            createnewpass(){

            }
        }
    }
</script>

<style scoped>
.createnewpasscontainer{
    padding-top: 180px;
}
</style>