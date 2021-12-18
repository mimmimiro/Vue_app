<template>
 <Header />
	<Slideshow />
	<RouterView />
</template>

<script>
import Header from '../components/Header.vue';
import Slideshow from '../components/Slideshow.vue'; 

	export default {
		components: {
			Header,
      Slideshow,
		},
	};
</script>