<template>
<div class="counter">
	<div class="counter_count">My count: {{ count }}</div>
	<div v-if="count > 5 ">ok</div>
	<ol class="MoreThanTen"></ol>
	<div class="counter_buttons">
		<button v-on:click="increase">Increase</button>
		<button v-on:click="decrease">Decrease</button>
	</div> 
</div>
	
</template>

<script>

export default {
	data() {
		return {
         count: 0
         }
	 },
      
		computed: { 
       MoreThanTen () {

		 }
		},

	 methods: {
		 increase () {
			 this.count +=1;
			 },
			 decrease () {
				 this.count -=1;
			 }
		 }
}
			
</script>

<style>

</style> 
