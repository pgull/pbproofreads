<template>
  <div id="GreyBlock" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GreyBlock',
  props: {
    header: String,
    body: String,
    cta: String
  }
}
</script>


<style scoped>
  .wrapper {
    background-color: #eee;
    color: #404040;
    position: relative;
    display: inline-block;
    width: 100vw;
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
