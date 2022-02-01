<!-- Kilde: https://codepen.io/codefrog/pen/pwLYEM-->
<template>
  <section class="quiz">
    <h1 class="quiz__title">Try my quiz!</h1>
      <div v-for="(question, index) in quiz" :key="index">
      <div v-show="index === questionIndex">
      <!-- start page will always start at index 1, the question is static, but the answrs will change for each page-->
      <p class="quiz__second-title">This is question number {{ index }}</p>
      <p class="quiz__third-title">If the speed is {{question.speed}}</p>
      <p class="quiz__firth-title">Whats the distanse?</p>
      <br />

      <!--  added more options for each question-->
      <ul class="quiz__options">
      <span class="quiz__span">
        <input class="quiz__input" id="RadioA"  type="radio" v-model="pick" :value="question.answer1">
        <label class="quiz__label" for="RadioA">{{question.answer1}}</label>
      </span>
       <br>
      <span class="quiz__span">
        <input class="quiz__input" id="RadioB" type="radio" v-model="pick" :value="question.answer2" >
        <label class="quiz__label" for="RadioB">{{question.answer2}}</label>
      </span>
      <span class="quiz__span">
        <input class="quiz__input" id="RadioC" type="radio" v-model="pick" :value="question.answer3" >
        <label class="quiz__label" for="RadioC">{{question.answer3}}</label>
      </span>
      </ul>
    </div>
  </div>
  <br>

    <!-- chech your answer with these button, it will reset if  you pick the wrong answer-->
      <button class="quiz__button" @click="check">
      check
      </button>
  <br>

  <br>
      <button class="quiz__button" @click="next">
      next
      </button>
  <br>
      <button class="quiz__button" v-show="questionIndex > 1" @click="prev">
      prev
     </button>
</section>
  
</template>


<script>
// added more question pages = the variabel can be as large as desired-->
var quiz = [
  {
    speed: 50,
    answer1:40 ,
    answer2: 20,
    answer3: 70,
    correct_answer: 20
  },
  {
    speed: 20,
    answer1: 10,
    answer2: 40,
    answer3: 30,
    correct_answer: 30
  },
  {
    speed: 80,
    answer1: 90,
    answer2: 30,
    answer3: 20,
    correct_answer: 30
  },
  {
    speed: 60,
    answer1: 40,
    answer2: 60,
    answer3: 80,
    correct_answer: 40
  },
  {
    speed: 10,
    answer1: 20,
    answer2: 100,
    answer3: 30,
    correct_answer: 100
  },
];


  export default { 
    data() {
      return { 
        questionIndex: 1,
        quiz: quiz,
        pick: "none"
    };
  },
   // the methods for the buttons - the check button have alerts for the wrong and right answer
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

  .quiz {
    display: flex;
		flex-flow: column nowrap;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
  .quiz__title {
    border-bottom: solid 4px darkcyan;
	  font-size: 1em;
	  text-align: center;
	  font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .quiz__second-title {
    border-bottom: solid 2px darkcyan;
    font-size: 0.6em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .quiz__third-title  {
    font-size: 0.4em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .quiz__firth-title {
    font-size: 0.4em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 0.1em;
  }

  .quiz__options {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.7em;
    font-size: 0.6em;
  }

  .quiz__label {
    display: block;
    padding-left: 15px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 20px;
  
  }

  .quiz__span {
    display: flex;
 
  }

  .quiz__label:hover  {
    background-color: #da552f;
  }

  .quiz__button {
    background: #da552f;
    border: solid 1px #da552f;
    color: white;
    cursor: pointer;
    padding: 10px 50px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-top: 0.5em;
    font-size: 0.4em;
  }
	
  .quiz__button:hover {
    background: darkcyan;
    border: solid 1px darkcyan;
  }
</style>
