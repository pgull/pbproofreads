<template>
<div>
  <h2 v-show="questionIndex < this.questions.length"> Let's talk about your project </h2>
  <div data-aos="fade-up" v-for="(question, index) in this.questions" :key="question.text">
    <div v-show="index === questionIndex">
      <h3>{{ question.text }}</h3>
      <div v-for="response in question.responses" :key="response.text" v-on:click="next(response.rating)" class="question">
        {{response.text}}
      </div>
    </div>
  </div>
  <div v-show="questionIndex === this.questions.length">
    <h2>Let's get in touch.</h2>
    <h3> {{ this.rating < 4 ? 'This proofread could be free for you.' : this.rating < 8 ? 'This proofread could be as little as $0.01 per word.' : 'We need more information.' }} </h3>
    <form name="pb-contact" @submit.prevent="submit" enctype="application/x-www-form-urlencoded">
       <input type="hidden" name="pb-contact-form" value="quote" />
       <h4>Your name:</h4>
       <input type="text" name="name" v-model="name" placeholder="John Doe" />
       <h4>Your email:</h4>
       <input type="text" name="email" v-model="email" placeholder="janedoe@email.com"/>
       <br>
       <button type="submit">Send</button>
   </form>
  </div>
</div>
</template>

<script>
var questions = [{
  text: "What best describes you?",
  responses: [{
      text: 'A published author',
      rating: 3
    },
    {
      text: 'Student',
      rating: 0
    },
    {
      text: 'Looking to get published',
      rating: 2
    },
    {
      text: 'Other',
      rating: 1
    },
  ]
}, {
  text: "How may words is your project?",
  responses: [{
      text: '50,000 or less',
      rating: 3
    },
    {
      text: '10,000 or less',
      rating: 1
    },
    {
      text: '500 or less',
      rating: 0
    },
    {
      text: 'more than 50,000',
      rating: 4
    },
  ]
}, {
  text: "How complete is your project?",
  responses: [{
      text: 'Still fleshing out the details',
      rating: 1
    },
    {
      text: 'Haven\'t started',
      rating: 8
    },
    {
      text: 'Pretty complete, besides a proofread.',
      rating: 0
    }
  ]
}]

export default {
  name: 'Quiz',
  props: {},
  components: {},
  data: function() {
    return {
      name: '',
      email: '',
      questions,
      questionIndex: 0,
      rating: 0
    }
  },
  watch: {
    // whenever question changes, this function will run
    name: function (newName) {
      const name = document.getElementById('leadform-name')
      name.value = newName
    },
    email: function (newEmail) {
      const email = document.getElementById('leadform-email')
      email.value = newEmail
    }
  },
  methods: {
    submit: function () {
      const form = document.getElementById('leadform')
      form.submit()
    },
    next: function(n) {
      this.questionIndex++;
      this.rating = this.rating + n;
    },
    prev: function() {
      this.questionIndex--;
    },
    score: function() {
      this.questionIndex--;
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
}
.question {
  background-color: #eee;
  border: 2px solid #eee;
  margin: 10px auto;
  padding: 20px;
  border-radius: 8px;
  width: 50%;
  cursor: pointer;
  transition: .3s ease;
}
form {
  text-align: left;
  width: 30%;
  margin: 0 auto;
  display: inline-block;
}
input[type=text]{
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 3px solid #ddd;
}
input::placeholder{
  color: #ddd;
}
.question:hover {
  background-color: #fff;
  border-color: #ff6f64;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15)
}
h3 {
    margin-bottom: 20px;
    font-weight: 400;
}
h4 {
    margin-bottom: 5px;
    font-weight: 400;
}
button {
    border: 0px;
    padding: 10px;
    padding-left: 80px;
    padding-right: 80px;
    border-radius: 40px;
    background-color: #FF6F64;
    display: inline-block;
    color: #fff;
    width: 100%;
    margin-top: 40px;
    font-size: 1em;
    cursor: pointer;
    transition: .3s ease;
}
button:hover {
  box-shadow: 0px 5px 20px rgba(255, 111, 100,0.5);
}
@media only screen and (max-width: 500px) {
  .question {
    width: 85%;
  }
  h2 {
    font-size: 2em;
  }
  form {
    width: 85%;
  }
}

</style>
