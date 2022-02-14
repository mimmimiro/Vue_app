<!-- kilde: forelesning med Alejandro Rojas -->
<template >
  <form class="todolist">
   <h1 class="title">{{ title }}</h1>
	<form class="container">
		<h3 class="container__title">New Task </h3>
		<input class="container__input" type="text" placeholder="Enter task" v-model="task">
		<button class="container__button" @click="addPlanningTask">Add Task</button>
		<h3 class="container__title-second">To Do List</h3>
		<ul>
		    <li v-for="(task, index) in tasks" :key="index">
			 <span>{{ task.name }} </span>
			 <button class="todolist__button" @click="deletePlanningTask">Remove</button>
		    </li>
	   </ul>
		 <h4 class="container__list-title" v-if="task.length === 0">
			 List is empty!</h4>
	</form>
	
	</form>
	  <div class="guestlist">
	    <h4 class="guestlist__title">{{ invited }}</h4>
	    <span>{{ guestList }}</span>
	    <button class="guestlist__button" @click="toggleGuestList">Guestlist</button>
	  <div v-if="isGuestListVisible === true">
	   <ul>
		<li v-for="guest in people" :key="guest.id.value">
			{{ guest.name.first }} {{ guest.name.last }}</li>
	  </ul>
	  </div>
	 </div>
</template>

<script>
export default {
	props: {
			titleName: {
				type: String,
				default: 'todolist',
			},
	},
	data() {
		return {
			title: 'Planning the party!',
			task: '',
			tasks: [{
				name: ''
			}],
			invited: 'Who is invited?',
			guestList: '',
			people: [],
			name: '',
			isGuestListVisible: false
			
		}
	},
	created() {
		this.addGuest();
	},

	methods: {
		async addGuest() {
			const url = 'https://randomuser.me/api/?page=2&results=8';
			const res = await fetch(url);
			const { results }   = await res.json();
			this.people = results;
			
		},
		 toggleGuestList() {
			this.isGuestListVisible = !this.isGuestListVisible;
		 },
		 addPlanningTask() {
        if(this.task.length === 0)
		  return;

		  this.tasks.push({
			  name: this.task
		  });
		 },

		 deletePlanningTask(index) {
			 this.tasks.splice(index, 1);
		 },
	},
  };	
</script>

<style>
    @media screen and (max-width: 768px) {
        .todolist {
        margin: 10px;
        }    
    }

  .todolist, 
  .guestlist  {
	  display: flex;
	  flex-flow: column nowrap;
	  font-family: var(--font-family);
     margin: 0 auto;
     max-width: 600px;
     width: 100%;
   }

  .container{
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

  .container__button,
  .guestlist__button {
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

  .container__title,
  .container__title-second, 
  .title,
  .guestlist__title {
	  font-family: var(--font-family);
	
  }

  .container__list-title, 
  .guestlist__title {
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
			
	/* span {
		cursor: pointer;
   }
	
	.done {
		text-decoration: line-through;
      }  */
</style>