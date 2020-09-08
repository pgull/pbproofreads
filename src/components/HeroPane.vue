<template>
  <div id="HeroPane" class="wrapper">
    <video autoplay muted loop>
      <source src="../assets/AdobeStock_144209237_Video_HD_Preview.mp4" />
    </video>
    <div class="center">
      <img src="../assets/pbproofreads.png" />
      <h1> {{ header }} </h1>
      <p> {{ body }} </p>
      <Button text="Get Started"></Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  name: 'HeroPane',
  props: {
    header: String,
    body: String,
    cta: String
  },
  components: {
    Button
  }
}
</script>


<style scoped>
  img {
    width: 15%;
    margin-bottom: 20px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .2;
    top: 0;
  }
  h1 {
    font-size: 5em;
    font-family: 'Playfair Display', serif !important;
    width: 50%;
    line-height: 1em;
    margin: 0px;
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 30px;
    width: 30%;
  }
  .wrapper {
    position: relative;
    display: inline-block;
    width: 100vw;
    height: 99vh;
    max-height: 1000px;
    background-color: #404040;
    color: #fff;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
  }
  @media only screen and (max-width: 1100px) {
    img {
      width: 150px;
    }
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
    }
    h1 {
      width: 60%;
    }
    p {
      width: 30%;
    }
  }
  @media only screen and (max-width: 800px) {
    .center {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 88%;
    }
    h1 {
      width: 100%;
    }
    p {
      width: 80%;
    }
    img {
      width: 150px;
    }
  }
</style>
