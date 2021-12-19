<template>
	<div id="test">
  <div v-for="(question, index) in quiz">
    <div v-show="index === questionIndex">

      <p>This is question number {{ index }}</p>
      <p>The speed is {{question.speed}}</p>
      <p>What is the distance?</p>
      <br />

      <span>
        <input id="RadioA"  type="radio" v-model="pick" v-bind:value="question.answer1">
        <label for="RadioA">{{question.answer1}}</label>
      </span>
      <br>
      <span>
        <input id="RadioB" type="radio" v-model="pick" v-bind:value="question.answer2" >
        <label for="RadioB">{{question.answer2}}</label>
      </span>

    </div>
  </div>
  <br>
  <button v-on:click="check">
    check
  </button>
  <br>

  <br>
  <button v-on:click="next">
    next
  </button>
  <br>
  <button v-show="questionIndex > 0" v-on:click="prev">
    prev
  </button>


</div>
</template>

<script>

var quiz = [
  {
    speed: 50,
    answer1: 10,
    answer2: 20,
    correct_answer: 20
  },
  {
    speed: 60,
    answer1: 20,
    answer2: 30,
    correct_answer: 30
  }
];

export default { 
    

  data() {
    questionIndex: 0,
    quiz: quiz,
    pick: "none"
  },

  methods: {
    next: function() {
      this.questionIndex++;
    },
    prev: function() {
      this.questionIndex--;
    },
    check: function() {
      if (this.pick === quiz[this.questionIndex].correct_answer) {
        alert("good job!");
      } else {
        alert("try again!");
      }
    }
  }

};

</script>

<style>

</style> 