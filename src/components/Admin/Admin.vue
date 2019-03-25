<template>

    <div class="d-flex" id="wrapper">
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="sidebar-heading">Start Bootstrap </div>
            <div class="list-group list-group-flush">
                <ul class="nav flex-column flex-nowrap">
                    <li class="nav-item">
                <a class="list-group-item list-group-item-action bg-light nav-link collapsed"  @click="togglesubmenu"  href="#submenu1" data-toggle="collapse" data-target="#submenu1">Alt Menu <i style="float: right;" :class="collapseicon"></i></a>
                        <div class="collapse" id="submenu1" aria-expanded="false">
                            <ul class="flex-column pl-2 nav">
                                <li class="nav-item"><a class="list-group-item list-group-item-action bg-light nav-link " href="#">Test123</a></li>
                                <li class="nav-item"><a class="list-group-item list-group-item-action bg-light nav-link " href="#">Test</a></li>

                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a  href="#" class="list-group-item list-group-item-action bg-light nav-link">Dashboard</a>
                    </li>         <li class="nav-item">
                    <a  href="#" class="list-group-item list-group-item-action bg-light nav-link">Dashboard</a>
                </li>
                    <li class="nav-item">
                        <a  href="#" class="list-group-item list-group-item-action bg-light nav-link">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a  href="#" class="list-group-item list-group-item-action bg-light nav-link">Dashboard</a>
                    </li>




                </ul>
            </div>
        </div>



        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle" @click="togglemenu($event)"><i class="fas fa-align-justify"></i></button>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container-fluid">
                <h1 class="mt-4">Simple Sidebar</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                collapseicon:"fas fa-angle-down",
            }
        },
        methods:{
            togglesubmenu(){

                if(this.collapseicon=="fas fa-angle-down"){
                    this.collapseicon="fas fa-angle-left"
                }else{
                    this.collapseicon="fas fa-angle-down"
                }
            },
            togglemenu(e){

                    e.preventDefault();
                    $("#wrapper").toggleClass("toggled");

            }
        }
    }
</script>

<style scoped>

</style>