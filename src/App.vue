<template>
  <div id="app">
    <home-title></home-title>
    <main-nav-bar></main-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import MainNavBar from '@/components/MainNavBar'
import HomeTitle from '@/components/HomeTitle'

export default {
  name: 'app',
  components: {
    HomeTitle,
    MainNavBar
    }
  }
</script>

<style>
  @import url('@/assets/css/normalize.css');

</style>
