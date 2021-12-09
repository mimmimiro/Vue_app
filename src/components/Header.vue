<template>
	<header class="header">
		<nav class="header__navigation">
			<!-- <RouterLink class="header__navigation-link v-for="page in pages" :to="{ name: '', params: { page_id: page.id } }">{{page.title}}</RouterLink>-->
		<RouterLink :to="{ name: 'home' }">Forsiden</RouterLink> <!-- disse må endres til eksemplet over ( ikke sikkert til pages, dobbeltsjekk dette)-->
		<RouterLink :to="{ name: 'contact' }">Kontakt</RouterLink>
		<RouterLink :to="{ name: 'quiz' }">Quiz</RouterLink>
		<RouterLink :to="{ name: 'slideshow' }">Slideshow</RouterLink>
		<RouterLink :to="{ name: 'table' }">Tabell</RouterLink>
		<RouterLink :to="{ name: 'todo' }">To do list</RouterLink>
		</nav>
	</header>
</template>
<script>
export default {
	data () {
	 return {
		 pages: [
			{ title: 'kontakt oss', id: '' }, // fyll inn resterende
			{ title: 'quiz', id: '' },
			{ title: 'slideshow', id: '' },
			{ title: 'table', id: '' },
			{ title: 'to do list', id: '' },
		]
	}
}
};
</script>

<style>

.header {
	background: burlywood;
	display: flex;
	justify-content: space-between;

}

.header__navigation--link + 
.header__navigation--link{
	margin-left: 1em;

}

</style>