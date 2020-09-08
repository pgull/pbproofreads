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
    padding-top: 100px;
    padding-bottom: 100px;
    width: 1000px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 800px) {
  }
</style>
