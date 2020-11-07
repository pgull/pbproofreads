<template>
  <div id="homepage">
    <HeroPane header="Better than     spell check." body="From fiction to term papers, let's make your work look great." cta="Get started"
    />
    <WhiteBlock>
      <div class="stamp"><img style="left: -600px; top: 100px;" src="../assets/leaf0.png" /></div>
      <div class="block-left">
        <h2 data-aos="fade-up" data-aos-duration="1000"> It's the best way to finish <br> your writing project</h2>
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
        <h3>➊ Get a quote</h3>
      </div>
      <div class="invisicard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <img src="../assets/submit.png">
        <h3>➋ Submit your work</h3>
      </div>
      <div class="invisicard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <img src="../assets/enhance.png">
        <h3>➌ We'll enhance it</h3>
      </div>
      <div class="invisicard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
        <img src="../assets/publish.png">
        <h3>➍ Go publish!</h3>
      </div>
      <div class="center-button">
        <a href="#quiz"><Button text="Get started" data-aos="fade-up" data-aos-duration="1000"></Button></a>
      </div>
      <div class="stamp"><img style="left: 1100px;" src="../assets/leaf1.png" /></div>
    </GreyBlock>
    <WhiteBlock>
      <a id="quiz" style="display: inline-block; position: relative; widh: 100%;top: -40px;"></a>
      <div class="center-text">
        <Quiz />
      </div>
    </WhiteBlock>
    <GreyBlock>
      <div class="stamp"><img style="left: -500px; top: -240px;" src="../assets/stamp.png" /></div>
      <div class="center-text">
        <h2 data-aos="fade-up" data-aos-duration="1000">What people are saying</h2>
        <br/>
        <br/>
      </div>
      <div class="hooperdiv">
        <div class="gradient-left"></div>
        <div class="gradient-right"></div>
        <hooper :itemsToShow="this.wWidth < 500 ? 1.2 : 1.75" :centerMode="true" :infiniteScroll="true" :autoPlay="true" :playSpeed="5000" :wheelControl="false">
          <slide v-for="testimonies in this.testimonials" :key="testimonies.imgs">
              <div class="testimony-card">
                <div class="testimony-content">
                  <img :src="require(`@/assets/${testimonies.img}`)" width="100" class="review"/>
                  <h4> {{ testimonies.name }} </h4>
                  <h5> {{ testimonies.location }} </h5>
                  <p> {{ testimonies.review }} </p>
                </div>
              </div>
          </slide>
        </hooper>
      </div>
      <div class="center-button">
        <a href="#quiz"><Button text="Get started" data-aos="fade-up" data-aos-duration="1000"></Button></a>
      </div>
    </GreyBlock>
    <Footer></Footer>
  </div>

</template>

<script>
  import HeroPane from '../components/HeroPane.vue'
  import WhiteBlock from '../components/WhiteBlock.vue'
  import GreyBlock from '../components/GreyBlock.vue'
  import Button from '../components/Button.vue'
  import Quiz from '../components/Quiz.vue'
  import Footer from '../components/Footer.vue'
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
      Quiz,
      Footer
    },
    data: function() {
      return {
        testimonials: [{
          img: 'reviews/dianne.jpg',
          name: 'Dianne J. Wilson',
          location: 'South African Author',
          review: "I'm afraid PB Proofreads has ruined me for any other copy editor. The attention to detail and consistency is phenomenal, and the turnaround time is fast. At this risk of sounding gushy, I wouldn't want to work with anyone else!  I will be sending my next book as soon as it's written."
        },
        {
          img: 'reviews/whitney.jpg',
          name: "Whitney Dineen",
          location: "Award-winning author",
          review: "Paula is an absolutes dream to work with! She's the first to lay eyes on my new books.  I don't know how she sees her way through all the missing words, missing commas, and misspellings, but she does and darn if she doesn't make me look literate. I love working with this lady!"
        }, {
          img: 'reviews/erin.jpg',
          name: "Erin Huss",
          location: "Published Author",
          review: "I highly recommend PB Proofreads! Paula is quick, precise, and she respects my writing style. She is also kind and professional and I love working with her."
        }, {
          img: 'reviews/laclayton.jpg',
          name: "L.A. Clayton",
          location: "Author",
          review: "PB Proofreads has been my go to for all things copy editing/proofreading since I finished my first book. The work is nothing less than superb and her turn around time is astounding. I would not publish any book without first utilizing Paula’s expertise. Highly recommend.",
        }, {
          img: 'reviews/melissa.jpg',
          name: "Melissa Baldwin",
          location: "Bestselling Author of 20 Romantic Comedies and Cozy Mysteries",
          review: "Paula Bothwell is a gem. I’ve had the pleasure of working with her for a few years and I’d be lost without her. Paula is detailed, efficient and thorough. If you’ re in the market for editing and proofreading services, look no further. Highly recommend."
        }],
        wWidth: window.innerWidth
      }
    },
    methods: {
    }
  }

</script>


<style scoped>

  h3 {
    margin: 40px 0 0;
  }
  a {
    color: #42b983 !important;
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
    outline: none;
    font-family: 'Inter var', sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
  input:focus {
    outline: 1px solid #FF6F64;
  }
</style>

<style scoped>
  .stamp {
    position: absolute;
    z-index: 999;
    width: 100%;
  }
  .stamp img{
    position: absolute;
  }
  img.review {
    border-radius: 50%;
    overflow: hidden;
    height: 100px;
  }
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
    height: 500px;
  }
  .testimony-card h4 {
    margin: 5px;
    margin-top: 20px;
  }
  .testimony-card h5 {
    margin: 5px;
  }
  .testimony-content {
    padding: 60px;
    text-align: center;
  }
  #homepage {
    min-width: 100vw;
    min-height: 100vh;
  }
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5em;
    margin: 0 !important;
    margin-bottom: 20px;
  }
  .block-left {
    display: inline-block;
    width: 50%;
    float: left;
    padding-top: 6%;
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
    margin-top: 80px;
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
    height: 500px;
    position: relative;
  }
  .gradient-left {
    background: linear-gradient(to right, rgba(238,238,238,1), rgba(238,238,238,0));
    height: 500px;
    position: absolute;
    width: 40px;
    z-index: 99;
  }
  .gradient-right {
    background: linear-gradient(to left, rgba(238,238,238,1), rgba(238,238,238,0));
    height: 500px;
    position: absolute;
    width: 40px;
    z-index: 99;
    right: 0;
  }
  .hooperdiv {
    position: relative;
  }
  .hooper-slide {
    margin: 0;
  }
  .hooper-slide.is-current .testimony-card {
    opacity: 1 !important;
  }

  @media only screen and (max-width: 500px) {
    .gradient-right {
      display: none;
    }
    .gradient-left {
      display: none;
    }
    .block-left {
      width: 100%;
    }
    .block-right {
      width: 100%;
    }
    .block-right img {
      width: 100%;
      margin-top: 20px;
    }
    br {
      display: none;
    }
    h2 {
      font-size: 2.3em;
    }
    h3 {
      font-size: .9em;
      margin-top: 20px;
      min-height: 40px;
    }
    .invisicard {
      width: 50%;
      display: inline-block;
      text-align: center;
      margin-top: 60px;
    }
    .invisicard img {
      width: 80%;
    }
    .hooperdiv {
      height: 500px;
      position: relative;
      width: 100vw;
      margin-top: 40px;
    }
    .hooper {
      position: absolute;
      width: 100vw;
      left: -10%;
    }
    .testimony-content {
      padding: 20px;
    }
  }

</style>
