<template>
    <div class="title">
        <span>楽天商品ランキング ( Rakuten Ichiba Item Ranking )</span>
        <span>Vue.js，使用axios串接API</span>
        <a href="https://ranking.rakuten.co.jp/realtime/" target="_blank" style="text-decoration:underline"><span>【楽天市場】総合 | 人気ランキング1位～（売れ筋商品） - リアルタイムランキング</span></a>
    </div>
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