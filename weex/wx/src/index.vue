<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <div class="div1">
      <text>123</text>
    </div>
    <div class="div2">
      <text>abc</text>
    </div>
    <a href="../dist/index.js">
      <text>O(∩_∩)O哈哈~</text>
    </a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  .div1,
  .div2{
    width: 200px;
    height: 200px;
    background-image: linear-gradient(to bottom,#fff,#f00);
  }
  .div2{
    background-color: blue;
    /*border: 10px solid #ddd;*/
    border-width: 10px;
    border-color: #000;
    border-style: solid;
  }
</style>
