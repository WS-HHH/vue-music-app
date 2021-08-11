<template>
  <div id="header">
    <span class="icon"></span>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  #header {
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;
    .icon {
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      margin-right: 9px;
      // 实现图片缩放
      width: 30px;
      height: 32px;
      @include bg-image('logo');
      background-size: 30px 32px;
    }
    .text {
      display: inline-block;
      line-height: 44px;
      //vertical-align: top;
      font-size: $font-size-large;
    }
  }
</style>
