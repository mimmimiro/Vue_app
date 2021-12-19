<template>
	
		<nav class="header__navigation">
		 <RouterLink :to="{ name: 'home', Path: '/', component: Home }">Home</RouterLink>
		 <RouterLink :to="{ name: 'slideshow', path: '/Slideshow', component: Slideshow }">Slideshow</RouterLink>
		 <RouterLink :to="{ name: 'contact', path: '/Contact', component: Contact }">Contact</RouterLink>
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



</style>