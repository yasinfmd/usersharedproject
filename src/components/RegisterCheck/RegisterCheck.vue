<template>
    <p>sdasdsadsa</p>
</template>

<script>
    export default {
        methods:{
            initApp(){
          console.log(this.$route.params.tempcode)
            }
        },
        created() {
            this.initApp();
        }
    }
</script>

<style scoped>

</style>