<template>
	<form class="quiz">
  <div v-for="(question, index) in quiz" :key="question">
    <div v-show="index === questionIndex">

      <p>This is question number {{ index }}</p>
      <p> The recommended amount of dinner  {{question.dinner}}</p>
      <p>What do you think?</p>
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
  <button v-show="questionIndex > 0" v-on:click="previous">
    previous
  </button>


  </form>
</template>

<script>

var quiz = [
  {
    Dinner: 50,
    answer1: 5,
    answer2: 2,
    answer3: 1,
    correct_answer: 2
  },
  {
    dinner: 60,
    answer1: 20,
    answer2: 30,
    correct_answer: 30
  }
];

export default { 
    

  data() {
    return { 

    questionIndex: 0,
    quiz: quiz,
    pick: "none",
    };
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
        alert("You suck!");
      }
    }
  }

};

</script>

<style>

</style> 