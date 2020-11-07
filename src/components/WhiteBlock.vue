<template>
  <div id="WhiteBlock" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhiteBlock',
  props: {
    header: String,
    body: String,
    cta: String
  }
}
</script>


<style scoped>
  .wrapper {
    color: #404040;
    position: relative;
    display: inline-block;
    width: 100vw;
    background-color: #fff;
    margin-top: -4px;
  }
  .content {
    padding-top: 80px;
    padding-bottom: 80px;
    width: 900px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 500px) {
    .content {
      padding-top: 80px;
      padding-bottom: 80px;
      width: 80vw;
      margin: 0 auto;
    }
  }
</style>
