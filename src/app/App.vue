<template>
	  <nav class="header">
		 <RouterLink :to="{ name: 'home', Path: '/', component: Home }">Home</RouterLink>
		 <RouterLink :to="{ name: 'slideshow', path: '/Slideshow', component: Slideshow }">Slideshow</RouterLink>
		 <RouterLink :to="{ name: 'contact', path: '/Contact', component: Contact }">Contact</RouterLink>
		</nav>
	<RouterView />
</template>



<style>
@import '../style/variables.css';
@import '../style/style.css'; 

</style> 
