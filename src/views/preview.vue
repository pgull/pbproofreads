<template>
  <div>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
      <HeroPane header="Better than spell check." body="From fiction to term papers, let's make your work look great." cta="Get started"/>
      <WhiteBlock>
        <div class="block-left">
          <h2> It's the best way­ to finish <br> your writing project</h2>
          <p>We'll take whatever you have and make <br> you look like a heckin' rockstar.</p>
        </div>
        <div class="block-right">
          <img class="upper" src="../assets/user0.png">
        </div>
      </WhiteBlock>
      <GreyBlock>
        <div class="center-text">
          <h2>How it works:</h2>
        </div>
        <br>
        <br>
        <div class="invisicard">
          <img src="../assets/quote.png">
        </div>
        <div class="invisicard">
          <img src="../assets/submit.png">
        </div>
        <div class="invisicard">
          <img src="../assets/enhance.png">
        </div>
        <div class="invisicard">
          <img src="../assets/publish.png">
        </div>
        <br>
        <br>
        <Button text="Get started"></Button>
      </GreyBlock>
  </div>
</template>

<script>
import HeroPane from '../components/HeroPane.vue'
import WhiteBlock from '../components/WhiteBlock.vue'
import GreyBlock from '../components/GreyBlock.vue'
import Button from '../components/Button.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    HeroPane,
    WhiteBlock,
    GreyBlock,
    Button
  }
}
</script>


<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  @import url('https://rsms.me/inter/inter.css');
  body { margin: 0 !important; overflow-x: hidden;}
  * { font-family: 'Inter var', sans-serif; }
</style>

<style scoped>
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5em;
  }
  .block-left{
    display: inline-block;
    width: 50%;
    float: left;
    padding-top: 3%;
  }
  .block-right{
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
  .invisicard {
    width: 25%;
    display: inline-block;
    text-align: center;
  }
  .invisicard img {
    width: 60%;
  }
</style>
