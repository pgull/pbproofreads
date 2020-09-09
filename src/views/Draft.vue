<template>
  <div id="homepage">
    <HeroPane header="Better than spell check." body="From fiction to term papers, let's make your work look great." cta="Get started"
    />
    <WhiteBlock>
      <div class="block-left">
        <h2 data-aos="fade-up" data-aos-duration="1000"> It's the best way­ to finish <br> your writing project</h2>
        <p data-aos="fade-up" data-aos-duration="1000">We'll take whatever you have and make <br> you look like a heckin' rockstar.</p>
      </div>
      <div class="block-right">
        <img class="upper" src="../assets/user0.png" data-aos="fade-left" data-aos-duration="1000">
      </div>
    </WhiteBlock>

    <GreyBlock>
      <div class="center-text">
        <h2 data-aos="fade-up" data-aos-duration="1000">How it works:</h2>
      </div>
      <br>
      <br>
      <div class="invisicard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <img src="../assets/quote.png">
        <h3>Get a quote</h3>
      </div>
      <div class="invisicard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <img src="../assets/submit.png">
        <h3>Submit your work</h3>
      </div>
      <div class="invisicard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <img src="../assets/enhance.png">
        <h3>We'll enhance it</h3>
      </div>
      <div class="invisicard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
        <img src="../assets/publish.png">
        <h3>Go publish!</h3>
      </div>
      <div class="center-button">
        <Button text="Get started" data-aos="fade-up" data-aos-duration="1000"></Button>
      </div>
    </GreyBlock>
    <WhiteBlock>
      <div class="center-text">
        <h2 data-aos="fade-up" data-aos-duration="1000">Let's talk about your project</h2>
        <Quiz />
      </div>
    </WhiteBlock>
    <GreyBlock>
      <hooper :itemsToShow="1.75" :centerMode="true" :infiniteScroll="true" :autoPlay="true" :playSpeed="5000">
        <slide>
            <div class="testimony-card">
              <div class="testimony-content">
                <img src="../assets/nopic.png" width="100"/>
                <h4> Sandy Cheeks </h4>
                <h5> Author of The Dome </h5>
                <p>If you get the chance to have Paula take a look at your writing—whether it’s a novel, a novella, or any other work—snap it up! When it comes to proofreaders, she’s the very best. She’s got a deadeye for grammar and punctuation errors, and she also points out (gently, bless her) word choice errors. Not only that, she’s a great guide, teaching me why a certain verb tense needs to be changed, so that I can internalize the usage and improve the next time.</p>
              </div>
            </div>
        </slide>
        <slide>
          <div class="testimony-card">
            <div class="testimony-content">
              <img src="../assets/nopic.png" width="100"/>
              <h4> Sandy Cheeks </h4>
              <h5> Author of The Dome </h5>
              <p>If you get the chance to have Paula take a look at your writing—whether it’s a novel, a novella, or any other work—snap it up! When it comes to proofreaders, she’s the very best. She’s got a deadeye for grammar and punctuation errors, and she also points out (gently, bless her) word choice errors. Not only that, she’s a great guide, teaching me why a certain verb tense needs to be changed, so that I can internalize the usage and improve the next time.</p>
            </div>
          </div>
        </slide>
        <slide>
          <div class="testimony-card">
            <div class="testimony-content">
              <img src="../assets/nopic.png" width="100"/>
              <h4> Sandy Cheeks </h4>
              <h5> Author of The Dome </h5>
              <p>If you get the chance to have Paula take a look at your writing—whether it’s a novel, a novella, or any other work—snap it up! When it comes to proofreaders, she’s the very best. She’s got a deadeye for grammar and punctuation errors, and she also points out (gently, bless her) word choice errors. Not only that, she’s a great guide, teaching me why a certain verb tense needs to be changed, so that I can internalize the usage and improve the next time.</p>
            </div>
          </div>
        </slide>
      </hooper>
      <div class="center-button">
        <Button text="Get started" data-aos="fade-up" data-aos-duration="1000"></Button>
      </div>
    </GreyBlock>
  </div>

</template>

<script>
  import HeroPane from '../components/HeroPane.vue'
  import WhiteBlock from '../components/WhiteBlock.vue'
  import GreyBlock from '../components/GreyBlock.vue'
  import Button from '../components/Button.vue'
  import Quiz from '../components/Quiz.vue'
  import { Hooper, Slide } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    name: 'Draft',
    props: {
      msg: String
    },
    components: {
      HeroPane,
      WhiteBlock,
      GreyBlock,
      Button,
      Hooper,
      Slide,
      Quiz
    }
  }

</script>


<style scoped>

  h3 {
    margin: 40px 0 0;
  }
  a {
    color: #42b983;
  }

</style>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  @import url('https://rsms.me/inter/inter.css');
  body {
    margin: 0 !important;
    overflow-x: hidden;
    perspective: 8px !important;
    perspective-origin: 0% !important;
  }
  * {
    font-family: 'Inter var', sans-serif;
  }

</style>

<style scoped>
  .parallax-container {
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
  }
  .testimony-card {
    overflow: hidden;
    background-color: #fff;
    height: 100%;
    width: 95%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    opacity: 0.5 !important;
    height: 600px;
  }
  .testimony-card h4 {
    margin: 5px;
    margin-top: 20px;
  }
  .testimony-card h5 {
    margin: 5px;
  }
  .testimony-content {
    padding: 80px;
    text-align: center;
  }
  #homepage {
    min-width: 100vw;
    min-height: 100vh;
  }
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5em;
  }
  .block-left {
    display: inline-block;
    width: 50%;
    float: left;
    padding-top: 3%;
  }
  .block-right {
    text-align: right;
    display: inline-block;
    width: 50%;
  }
  img.upper {
    width: 80%;
  }
  .center-text {
    text-align: center;
  }
  .center-button {
    margin-top: 100px;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
  }
  .invisicard {
    width: 25%;
    display: inline-block;
    text-align: center;
  }
  .invisicard img {
    width: 60%;
  }
  .floating {
    position: absolute;
    z-index: 99;
    top: 1500px;
    left: 100px;
    transform: translateZ(3px) scale(0.625);
    width: 200px;
  }
  .hooper {
    height: 600px;
  }
  .hooper-slide {
    margin: 0;
  }
  .hooper-slide.is-current .testimony-card {
    opacity: 1 !important;
  }

</style>
