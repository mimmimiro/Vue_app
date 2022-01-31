export default {
	state() {
		return {
			 quiz: [
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
			 ]
			 
		}
	},
	 getters: {
		 quiz(state) {
			 return state.quiz;
		 }
	 }
};