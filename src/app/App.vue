<template>
	<Header />
	<RouterView />
	<Slideshow /> 
</template>

<script>
import Header from'../components/Header.vue'
import Slideshow from "../components/Slideshow.vue";
export default {
	components: {
		Header,
		Slideshow,
		},
		};
</script>

<style>
@import '../style/variables.css';
@import '../style/style.css'; 
</style> 
