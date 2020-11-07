<template>
  <div class="footer-container">
    <div class="content">
      <img style="height: 100px" src="../assets/pbproofreads.png">
      <p>&copy;2020 PB Proofreads, All Rights Reserved</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer-container {
    background-color: #404040;
    color: #fff;
  }
  .content {
    padding-top: 100px;
    padding-bottom: 100px;
    width: 900px;
    margin: 0 auto;
  }
  p {
    float: right;
    margin-top: 45px;
  }
  @media only screen and (max-width: 500px) {
    .content {
      text-align: center;
      width: 100vw;

    }
    p {
      float: left;
      text-align: center;
      width: 100%;
    }
  }
</style>
