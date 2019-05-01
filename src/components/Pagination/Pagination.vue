<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item  " :class="{'active':i==$store.getters.getactivepaginate}" v-for="(item,i) in $store.getters.getpaginationcount"><a class="page-link radiusitem" @click="setpagination(i+1)" >{{i+1}}</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props:['list'],
        methods:{
            setpagination(index){
                debugger
                this.$store.dispatch('setpagination',[this.list[0],index])
            },
        }
    }
</script>

<style scoped>
    .radiusitem{
        border: 1px solid #ffffff;
        border-radius: 400px;
    }
</style>