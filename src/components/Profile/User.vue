<template>
        <div class="col-md-10 ml-sm-auto col-lg-10 px-4" style="margin-top: -740px">
            <div class="d-flex justify-content-start" >
                <div class="jumbotron" style="background-color: #f8f9fa;width: 100%">
                    <div class="container" style="margin-top: -20px">
                        <ul class="nav nav-tabs custom-menu-wrap custon-tab-menu-style1">

                            <li class="nav-item cursorstyle" >

                                <a :class="{'nav-link active':selectedComponent=='profile','nav-link':selectedComponent!='profile'}" @click="selectedComponent='profile'"> <img src="https://cdn0.iconfinder.com/data/icons/linkedin-ui-colored/48/JD-07-32.png" style="padding-right: 10px">Profilim</a>
                            </li>
                            <li class="nav-item cursorstyle">
                                <a :class="{'nav-link active':selectedComponent=='password','nav-link':selectedComponent!='password'}" @click="selectedComponent='password'"><img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_24-32.png" style="padding-right: 10px">Parola Değiştir</a>
                            </li>
                            <li class="nav-item cursorstyle">
                                <a :class="{'nav-link active':selectedComponent=='edit','nav-link':selectedComponent!='edit'}" @click="selectedComponent='edit'"><img src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/edit-paste-32.png" style="padding-right: 10px"> Düzenle</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <keep-alive>
                                <component :is="selectedComponent"></component>
                            </keep-alive>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import  profile from  './Profile'
    import  password from  './Password'
    import  edit from  './Edit'
    export default {
        data(){
            return{
                selectedComponent:"profile"
            }
        },
        components:{
          profile,
            password,
            edit
        },
        methods:{

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .cursorstyle{
        cursor: pointer;
    }
    .tabfont{
        font-family: "Microsoft JhengHei UI";
    }
</style>