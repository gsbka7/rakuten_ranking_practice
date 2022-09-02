<template>
    <nav-bar>
      <nav-bar-item path="/rank30" textColor="crimson">
        <div slot="item-text">1－30位</div>
      </nav-bar-item>
      <nav-bar-item path="/rank60" textColor="crimson">
        <div slot="item-text">31－60位</div>
      </nav-bar-item>
      <nav-bar-item path="/rank90" textColor="crimson">
        <div slot="item-text">61－90位</div>
      </nav-bar-item>
      <nav-bar-item path="/rank120" textColor="crimson">
        <div slot="item-text">91－120位</div>
      </nav-bar-item>
      <nav-bar-item path="/rank150" textColor="crimson">
        <div slot="item-text">121－150位</div>
      </nav-bar-item>
    </nav-bar>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import NavBarItem from '@/components/navbar/NavBarItem'

export default {
  name: 'MainNavBar', 
  components: {
    NavBar,
    NavBarItem,

  }
}
</script>

<style>

</style>