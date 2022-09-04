<template>
    <div class="title">
        <span>楽天商品ランキング ( Rakuten Ichiba Item Ranking )</span>
        <span>Vue.js，使用axios串接API</span>
        <div>API來源：<a href="https://webservice.rakuten.co.jp/" target="_blank" style="text-decoration:underline"><span>Rakuten Webservice</span></a>
    </div></div>
</template>

<script>
export default {
    name: 'HomeTitle'

}
</script>

<style>
    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 15px 0;
        font-size: 24px;
    }
    
    .title span{
        padding: 5px 0;
    }
    
    a{
        padding: 5px 0;
    }
</style>