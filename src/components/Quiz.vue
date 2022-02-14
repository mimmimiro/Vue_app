<!-- Kilde: https://codepen.io/codefrog/pen/pwLYEM-->
<template>
  <section class="quiz">
    <h1 class="quiz__title">Try my quiz!</h1>
      <div v-for="(question, index) in quiz" :key="index">
      <div v-show="index === questionIndex">
      <!-- start page will always start at index 1, the question is static, but the answers will change for each page-->
      <p class="quiz__second-title">This is question number {{ index }}</p>
      <p class="quiz__third-title">If the amount is {{question.time}} hours?</p>
      <p class="quiz__firth-title">How many seconds is there?</p>
      <!-- added more options for each question-->
      <!-- v-bind creates binding with answers and v-model is binded to pick, witch is set to none-->
      <ul class="quiz__options">
      <span class="quiz__span">
        <input class="quiz__input" id="RadioA"  type="radio" v-model="pick" :value="question.answer1">
        <label class="quiz__label" for="RadioA">{{question.answer1}}</label>
      </span>
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
    <!-- chech your answer with these button, it will reset if  you pick the wrong answer-->
      <button class="quiz__button" @click="check">
      check
      </button>
      <button class="quiz__button" @click="next">
      next
      </button>
     <!-- the previous button appears only when the question page is larger than 1 -->
      <button class="quiz__button" v-show="questionIndex > 1" @click="prev">
      prev
     </button>
</section>
  
</template>


<script>
// added more question pages = the variabel can be as large as desired-->
var quiz = [
  {
    time: 1,
    answer1: 1000 ,
    answer2: 3600,
    answer3: 4000,
    correct_answer: 3600
  },

  {
    time: 2,
    answer1: 1500,
    answer2: 4600,
    answer3: 7200,
    correct_answer: 7200
  },
 
  {
    time: 3,
    answer1: 10800,
    answer2: 7600,
    answer3: 9500,
    correct_answer: 10800
  },

  {
    time: 4,
    answer1: 5300,
    answer2: 14400,
    answer3: 9100,
    correct_answer: 14400
  },

  {
    time: 5,
    answer1: 18000,
    answer2: 10200,
    answer3: 11300,
    correct_answer: 18000
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
    next() {
      this.questionIndex++;
    },

    prev() {
      this.questionIndex--;
    },

    check() {
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
		font-family: var(--font-family);
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
