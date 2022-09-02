<template>
    <div class="nav-bar-item" @click="itemClick">
      <div :style="textStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    path: String,
    textColor: {
      type: String,
      default: 'blue'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
      
    }
  },
  computed: {
    textStyle() {
      return this.$route.path.indexOf(this.path) !==-1 ? {color: this.textColor}:{}
    }
  }
};
</script>

<style>
.nav-bar-item {
  flex: 1;
  height: 49px;
  border-radius: 20px;
  margin-bottom: 10px; 
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin: 0 5px;
  background-color: burlywood;
}
</style>