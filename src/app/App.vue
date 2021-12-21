<template>
	<Header />
	<RouterView />
</template>

<script>
import Header from '../components/Header.vue';
export default {
	components: {
			Header,
		}
}
</script>
 
<style>
@import '../style/variables.css';
@import '../style/style.css'; 

</style> 
