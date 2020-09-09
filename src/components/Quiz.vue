<template>
  <div>
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </div>
</template>

<script>
  // var questions = [
  //       {
  //         text: "What best describes you?",
  //         responses: [
  //           {text: 'A published author'},
  //           {text: 'Student'},
  //           {text: 'Looking to get published'},
  //           {text: 'Other'},
  //         ]
  //       }, {
  //         text: "How may words is your project?",
  //         responses: [
  //           {text: '10000 or less'},
  //           {text: '5000 or less'},
  //           {text: '500 or less'},
  //           {text: '30000 or more'},
  //         ]
  //       }
  //     ]
</script>

<style scoped>

</style>
