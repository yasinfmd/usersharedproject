<template>
    <div>
    <h1 class="display-5" v-if="res==0" > {{title}}  <img src="../../assets/icons/laugh_cry_emoticon_emoticons_emoji_emote-64.png"></h1>
        <p class="lead" v-if="res!=0">{{content}}<img :src="cimg"></p>
        <hr class="my-4" v-if="res!=0"  >
    </div>
</template>

<script>
    export default {
        props:['title',"content","cimg","res"]
    }
</script>

<style scoped>

</style>