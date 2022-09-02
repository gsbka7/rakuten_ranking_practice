<template>
    <div id="nav-bar">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'NavBar',
  components: {
  }

}
</script>

<style>
  #nav-bar{
    width: 80%;
    display: flex;
    height: 49px;
    line-height: 49px;
    margin: 20px auto;
  }

  #nav-bar:hover{
    cursor: pointer;
  }

</style>