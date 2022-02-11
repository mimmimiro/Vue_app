<!-- kilde: https://vuejsexamples.com/todo-app-with-vue/
            https://v3.vuejs.org/guide/composition-api-template-refs.html#usage-inside-v-for-->
<template >
   <form class="todolist">
	   <h1 class="title">To Do List</h1>
     <!-- this v-model is connected to the setup object and function in the script-->
	<form class="container" @submit.prevent="addTodo()">
		<h3 class="container__title">New Task </h3>
		<input class="container__input"
			v-model="newTodo"
			name="newTodo"
			autocomplete="off"
		>
		<button class="container__button">Add Task</button>
	
	   <h3 class="container__title-second">To Do List</h3>
	   <ul>
		    <!-- connected to the donetodo and removetodo function in the script-->
		    <li
			 v-for="(todo, index) in todos"
			 :key="index"
		    >
			<span
				:class="{ done: todo.done }"
				@click="doneTodo(todo)"
			>{{ todo.content }}</span>

			 <button class="todolist__button" @click="removeTodo(index)">Remove</button>
		   </li>
	   </ul>
	   <!-- if the todolist is empty - this text will apear-->
	    <h4 class="container__list-title" v-if="todos.length === 0">List is empty!</h4>

	</form>
	
  </form>
</template>

<script>
   // composition API, makes the variabels reactive
	import { ref } from 'vue';
	export default {
	   // connected to the v-model
		name: 'ToDoList',
		setup () {
			const newTodo = ref('');
			const defaultData = [{
				done: false,
				content: null
			}]
			// The parse method, converts the json string to an object
			const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
			const todos = ref(todosData);
			function addTodo () {
				if (newTodo.value) {
					todos.value.push({
						done: false,
						content: newTodo.value
					});
					newTodo.value = '';
				}
				saveData();
				
			}
			function doneTodo (todo) {
				todo.done = !todo.done
				saveData();
			}
			function removeTodo (index) {
				todos.value.splice(index, 1);
				saveData();
			}
			function saveData () {
				const storageData = JSON.stringify(todos.value);
				localStorage.setItem('todos', storageData);
			}
			return {
				todos,
				newTodo,
				addTodo,
				doneTodo,
				removeTodo,
				saveData
			}
		}
	}
</script>

<style>
    @media screen and (max-width: 768px) {
        .todolist {
        margin: 10px;
        }    
    }

  .todolist {
	  display: flex;
	  flex-flow: column nowrap;
	  font-family: var(--font-family);
     margin: 0 auto;
     max-width: 600px;
     width: 100%;
   }

  .container {
	  display: flex;
	  flex-direction: column;
   }

  .container__input {
	   border: 1px solid black;
		padding: 10px 10px;
		font-size: 0.7em;
		margin-bottom: 0.5em;
		
   }

  .container__button:hover {
	  background: darkcyan;
	  border: solid 1px darkcyan;
   }

  .container__button {
     background: #da552f;
     border: solid 1px #da552f;
     color: white;
     cursor: pointer;
     padding: 20px 70px;
     text-align: center;
     text-transform: uppercase;
     letter-spacing: 0.2em;
     margin-top: 0.5em;
     font-size: 0.4em;
   }
	
  .todolist__button:hover {
     background: darkcyan;
     border: solid 1px darkcyan;
   }

  .title {
	  border-bottom: solid 4px darkcyan;
	  font-size: 1em;
	  text-align: center;
	  font-family: var(--font-family);
   }

  .container__title {
     border-bottom: solid 4px darkcyan;
     font-size: 0.8em;
   }

  .container__title-second {
	  border-bottom: solid 3px darkcyan;
	  font-size: 0.8em;
	  font-weight: 600;
   } 

  .container__title
  .container__title-second 
  .title {
	  font-family: var(--font-family);
	
  }

  .container__list-title {
     border-bottom: solid 2px darkcyan;
	  font-size: 0.7em;
	  font-family: var(--font-family);
	  font-weight: 500;
   }

  ul {
		padding: 10px;
  }

  li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 2px solid darkcyan;
		border-radius: 5px;
		margin-bottom: 0.5em;
		padding: 10px 10px;
		font-size: 0.7em;
		margin-bottom: 0.5em;
   }
			
	span {
		cursor: pointer;
   }
	
	.done {
		text-decoration: line-through;
   }
</style>