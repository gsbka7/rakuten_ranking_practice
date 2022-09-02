<template>
  <div>
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="rank">
        <span class="num">{{item.Item.rank}}</span>
        <span class="text">位</span>
      </div>
      <img :src="item.Item.mediumImageUrls[0]['imageUrl']" alt="">
      <div class="info">
        <a :href="item.Item.itemUrl" target="_blank"><div class="item-name">{{item.Item.itemName}}</div></a>
        <div class="review">
          <div class="start" v-if="item.Item.reviewCount !== 0">
            <div class="start-top">
              <span v-if="item.Item.reviewAverage >= 0">★</span>
              <span v-if="item.Item.reviewAverage >= 1.99">★</span>
              <span v-if="item.Item.reviewAverage >= 2.99">★</span>
              <span v-if="item.Item.reviewAverage >= 3.99">★</span>
              <span v-if="item.Item.reviewAverage >= 4.99">★</span>
            </div>
            <div class="start-bottom">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
          <div class="count" v-if="item.Item.reviewCount !== 0">レビュー({{item.Item.reviewCount}}件)</div>
        </div>
        <a :href="item.Item.shopUrl" target="_blank"><div class="shop-name">{{item.Item.shopName}}</div></a>
      </div>
      <div class="purchase">
        <div class="price">{{item.Item.itemPrice}}円</div>
        <div class="ship-fee" v-if="item.Item.postageFlag == 0">送料無料</div>
      </div>
    </div>
  </div>
</template>
           

<script>
const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&elements=itemName%2CitemPrice%2CitemUrl%2CmediumImageUrls%2Crank%2CshopName%2CshopUrl%2CreviewAverage%2CreviewCount%2CpostageFlag&period=realtime&applicationId=1048875198466164874"

export default {
  name: "Rank30",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get(url).then((res) => {
        this.items = res.data.Items;
        console.log(this.items);
      });
    },
  },
};
</script>

<style>
@import url("@/assets/css/rank.css");
</style>