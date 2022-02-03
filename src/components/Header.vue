<template class="media">
	
		<nav class="header">
		  <RouterLink class="header__navigation" :to="{ name: 'home' }">Home</RouterLink>
		  <RouterLink class="header__navigation" :to="{ name: 'contact' }">Contact</RouterLink>
		  <RouterLink class="header__navigation" :to="{ name: 'table' }">Table</RouterLink>
		  <RouterLink class="header__navigation" :to="{ name: 'todolist' }">ToDoList</RouterLink>
		  <RouterLink class="header__navigation" :to="{ name: 'quiz' }">Quiz</RouterLink>
		  <RouterLink class="header__navigation" :to="{ name: 'slideshow' }">Slideshow</RouterLink>
		</nav>
	
	 <Routerview />
</template>

<script>
  export default {
    data () {
	   return {
	 }
  },
};
</script>

<style>
    
  .header {
    padding: 30px;
	 display: flex;
	 justify-content: space-between;
	 text-decoration: none;
	 background: linear-gradient(to left, rgb(228, 227, 227), rgb(216, 173, 146) ) ;
	
  }

  .header__navigation {
	  color: darkcyan;
	  font-family: var(--font-family);
	  font-size: 25px;
	  text-decoration: none;
  }

  .header__navigation:hover {
	  color: #ea532a;;
  }

    @media (max-width: 675px) {
	   nav  {
		  flex-direction: column;
	   }

	   .header__navigation {
		  margin: 0.5em 0.5em;
	   }
  }

</style>