<template>
	<!--<div class="flex items-center justify-center w-full h-screen" id="app">
            <div class="w-full max-w-xl">
                <h1 class="text-4xl font-bold text-center text-indigo-900">
                    Python programming Questions
                </h1>
                <div class="w-full p-12 mt-8 bg-white rounded-lg shadow-lg">
                    <div v-if="index < count">
                        <p class="text-2xl font-bold">
                            {{ questions[index]['question'] }}
                        </p>
                        <label
                            :for="key"
                            class="block px-6 py-2 mt-4 text-lg border border-gray-300 rounded-lg"
                            v-for="answer,key in questions[index]['answers']"
                            :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == ''},
                        {'bg-red-100 border border-20 border-red-400' : selectedAnswer == key},
                        {'bg-green-100  border border-10 border-green-400' : key == questions[index]['correctAnswer'] && selectedAnswer != ''}"
                        >
                            <input
                                type="radio"
                                :id="key"
                                class="hidden"
                                :value="key"
                                @change="answered($event)"
                                v-model="selectedAnswer"
                                :disabled="selectedAnswer != ''"
                            />
                            {{ answer }}
                        </label>
                        <div class="flow-root mt-6">
                            <button
                                class="float-right px-5 py-2 text-sm font-bold tracking-wide text-white bg-indigo-900 rounded-full"
                                v-show="selectedAnswer != '' && index < count-1"
                                @click="nextQuestion"
                            >
                                Next Question &gt;
                            </button>
                            <button
                                class="float-right px-5 py-2 text-sm font-bold tracking-wide text-white bg-indigo-900 rounded-full"
                                v-show="selectedAnswer != '' && index == count-1"
                                @click="showResults"
                            >
                                View Results
                            </button>
                        </div>
                    </div>
                    <div v-else>
                        <h2 class="text-3xl font-bold">Your Score Result</h2>
                        <div class="flex justify-start mt-6 space-x-4">
                            <p>
                                Correct Answers:
                                <span class="text-2xl font-bold text-green-700"
                                    >{{ correctAnswer }}</span
                                >
                            </p>
                            <p>
                                Incorrect Answers:
                                <span class="text-2xl font-bold text-red-700"
                                    >{{ wrongAnswer }}</span
                                >
                            </p>
                        </div>
                        <div class="flow-root mt-6">
                            <button
                                class="float-right px-5 py-2 text-sm font-bold tracking-wide text-white bg-indigo-900 rounded-full"
                                @click="resetQuiz"
                            >
                                Start Over
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default { 
 data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 3,
            questions: [
                {
                    question: "Q1. Who create python  language?",
                    answers: {a: 'Guido van Rossum', b: 'Kristen Nygaard', c: 'Bjarne Stroustrup', d: 'Ole-Johan Dahl'},
                    correctAnswer: 'a'
                },
                {
                    question: "Q2. What does PEP stand for in python?",
                    answers: {a: 'name of parentehes parameters', b: 'python english processing', c: 'Python Enhancement Proposal', d: 'PyPi'},
                    correctAnswer: 'c'
                },
                {
                    question: "Q3. What are python modules?",
                    answers: {a: 'Are .py files with executable code', b: 'Python packages',c: 'Python list objects',d: 'Python packages'},
                    correctAnswer: 'a'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
});


</script>

<style>

</style> -->