<!-- Kilde: https://codepen.io/codefrog/pen/pwLYEM-->
<template>
<section class="quiz">
  <h1 class="quiz__title">Try my quiz!</h1>
  <div v-for="(question, index) in quiz" :key="index">
    <div v-show="index === questionIndex">

      <p class="quiz__second-title">This is question number {{ index }}</p>
      <p class="quiz__third-title">The year is {{question.speed}}</p>
      <p class="quiz__firth-title">What day is newyears eve?</p>
      <br />
     <ul class="quiz__options">
      <span class="quiz__span">
        <input class="quiz__input" id="RadioA"  type="radio" v-model="pick" v-bind:value="question.answer1">
        <label class="quiz__label" for="RadioA">{{question.answer1}}</label>
      </span>
      <br>
      <span class="quiz__span">
        <input class="quiz__input" id="RadioB" type="radio" v-model="pick" v-bind:value="question.answer2" >
        <label class="quiz__label" for="RadioB">{{question.answer2}}</label>
      </span>
      <span class="quiz__span">
        <input class="quiz__input" id="RadioC" type="radio" v-model="pick" v-bind:value="question.answer3" >
        <label class="quiz__label" for="RadioC">{{question.answer3}}</label>
      </span>
      </ul>
    </div>
  </div>
  <br>
  <button class="quiz__button" v-on:click="check">
    check
  </button>
  <br>

  <br>
  <button class="quiz__button" v-on:click="next">
    next
  </button>
  <br>
  <button class="quiz__button" v-show="questionIndex > 1" v-on:click="prev">
    prev
  </button>


</section>
  
</template>


<script>
var quiz = [
  {
    speed: 50,
    answer1: Monday,
    answer2: Saturday,
    answer3: Sunday,
    correct_answer: 50
  },
  {
    speed: 20,
    answer1: Wednesday,
    answer2: Saturday,
    answer3: Thursday,
    correct_answer: 20
  },
  {
    speed: 80,
    answer1: Sunday,
    answer2: Monday,
    answer3: Wednesday,
    correct_answer: 30
  },
  {
    speed: 60,
    answer1: Saturday,
    answer2: Friday,
    answer3: Sunday,
    correct_answer: 40
  },
  {
    speed: 10,
    answer1: Sunday,
    answer2: Wednesday,
    answer3: Monday,
    correct_answer: 40
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
