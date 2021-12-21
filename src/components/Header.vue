<template class="media">
	
		<nav class="header">
		 <RouterLink class="header__navigation" :to="{ name: 'home', Path: '/', component: Home }">Home</RouterLink>
		 <RouterLink class="header__navigation" :to="{ name: 'slideshow', path: '/Slideshow', component: Slideshow }">Slideshow</RouterLink>
		 <RouterLink class="header__navigation" :to="{ name: 'contact', path: '/Contact', component: Contact }">Contact</RouterLink>
		 <RouterLink class="header__navigation" :to="{ name: 'table', path: '/Table', component: Table }">Table</RouterLink>
		 <RouterLink class="header__navigation" :to="{ name: 'todolist', path: '/ToDoList', component: ToDoList }">ToDoList</RouterLink>
		 <RouterLink class="header__navigation" :to="{ name: 'quiz', path: '/Quiz', component: Quiz }">Quiz</RouterLink>
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
	background: gainsboro;
	
}

.header__navigation {
	color: darkcyan;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
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