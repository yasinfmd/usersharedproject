<template>
    <div class="chat-popup" id="myForm" :style="{display:$store.getters.getpopupstyle}">
        <div class="form-container">
                <div class="row">
                    <div class="col-sm">
                        <img :src="avatar.img" alt="Avatar" class="avatar">
                    </div>
                    <div class="col-sm">
                <p class="lead text-center">{{msguser.usname}} {{msguser.uslname}}</p>
                    </div>
                    <div class="col-sm">
                        <img @click="closepopup" style="float: right; cursor: pointer" src="https://cdn1.iconfinder.com/data/icons/ui-navigation-1/152/close-32.png">
                    </div>
                </div>
            <textarea placeholder="Mesajınız.."  v-model="usermsg" name="msg" ></textarea>

            <button type="submit" class="btn" @click="sendmsg">Gönder</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                    usermsg:""
            }
        },
        props:
            {
                msguser:{
                    default:{
                        usname:"",
                        uslname:""
                    }
                },
                avatar:{
                    default:""
                }
            },
        created(){

        },
        beforeMount(){
            this.usermsg=""
        },
        methods:{
            closepopup(){
                this.usermsg=""
                this.$store.commit("setpopupstyle","none")
            },
            sendmsg(){
                console.log(this.usermsg);
            }
        }
    }
</script>

<style scoped>
    /* The popup chat - hidden by default */
    .chat-popup {
        display: none;
        position: fixed;
        bottom: 0;
        right: 15px;
        border: 3px solid #f1f1f1;
        z-index: 9;
    }

    /* Add styles to the form container */
    .form-container {
        max-width: 350px;
        padding: 10px;
        background-color: white;
    }

    /* Full-width textarea */
    .form-container textarea {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        border: none;
        background: #f1f1f1;
        resize: none;
        min-height: 200px;
    }

    /* When the textarea gets focus, do something */
    .form-container textarea:focus {

        outline: none;
    }

    /* Set a style for the submit/send button */
    .form-container .btn {
        background-color: #4CAF50;
        color: white;
        padding: 16px 20px;
        border: none;
        cursor: pointer;
        width: 100%;
        margin-bottom:10px;
        opacity: 0.8;
    }

    /* Add a red background color to the cancel button */

    /* Add some hover effects to buttons */
    .form-container .btn:hover, .open-button:hover {
        opacity: 1;
    }
    .avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>