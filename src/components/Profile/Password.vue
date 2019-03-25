<template>
    <div class="tab-pane in active animated flipInX custon-tab-style1 container">
        <div class="form-group">
            <label >Yeni Parola</label>
            <input type="password"  v-model="pass.newpas"  class="form-control"  placeholder="Parola ">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Yeni Parola Tekrarı</label>
            <input type="password" v-model="pass.newpassagain" class="form-control" id="exampleInputPassword1" placeholder="Parola Tekrarı">
        </div>
        <div class="form-group">

        </div>
        <button type="button" class="btn btn-primary" @click="checkpass">Parolayı Değiştir</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pass:{
                    newpas:"",
                    newpassagain:"",
                    invalid:true
                }
            }
        },
        methods:{
            checkpass(){
                if(this.pass.newpas.length<8 || this.pass.newpassagain.length<8){
                    Component.showdialog("<span><i class=\"fas fa-info\" style=\"padding-right: 5px\"></i>Uyarı</span>",'Kapat','Parolanız 8 Karakterden Daha Küçük Olamaz');
                }
                else if(this.pass.newpas ==""|| this.pass.newpassagain==""){
                    Component.showdialog("<span><i class=\"fas fa-info\" style=\"padding-right: 5px\"></i>Uyarı</span>",'Kapat','Parolalar Eşleşmiyor');
                }else if(this.pass.newpas!=this.pass.newpassagain){
                    Component.showdialog("<span><i class=\"fas fa-info\" style=\"padding-right: 5px\"></i>Uyarı</span>",'Kapat','Parolalar Eşleşmiyor');
                }else{
                    debugger
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>