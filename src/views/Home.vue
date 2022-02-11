<!-- jeg valgte bevisst å designe forsiden min slik. Jeg vet at man kan importere componentene og 
legge dem på forsiden, men jeg synes dette ble mye kulere.-->
<template>
	<section class="home">
     <RouterLink class="home__contact" :to="{ name: 'contact' }">Contact</RouterLink>
     <RouterLink class="home__todolist" :to="{ name: 'todolist' }">ToDoList</RouterLink>
     <RouterLink class="home__quiz" :to="{ name: 'quiz' }">Quiz</RouterLink>
     <RouterLink class="home__slideshow" :to="{ name: 'slideshow' }">Slideshow</RouterLink>
    <RouterLink class="home__table" :to="{ name: 'table' }">Table</RouterLink>
   </section>

  <footer class="article">
    <h1 class="article__title"> The invention of the app </h1>
	 <h5 class="article__brand">@CartaDesign</h5>
  </footer>
</template>

<script>

	export default {
		components: {	

		},
	};

</script>

<style>


  .home__contact { 
     display: inline-block;
	  background: #da552f;
	  width: 230px;
	  height: 230px;
	  margin: 60px;
	  border-radius: 130px;
	  text-align: center;
	  font-size: 30px;
	  font-weight: bold;
	  padding-top: 130px;
	  text-decoration: none;
	  color: blanchedalmond;
	  font-family: var(--font-family);
	}
	
	.home__todolist {
	  display: inline-block;
	  background: #da552f;
	  width: 280px;
	  height: 280px;
	  margin: 60px;
	  border-radius: 180px;
	  text-align: center;
	  line-height: 190px;
	  font-size: 30px;
	  font-weight: bold;
	  text-decoration: none;
	  color: blanchedalmond;
	  font-family: var(--font-family);
	}

   .home__todolist:hover {
	  color: rgb(3, 82, 82);
   }

	.home__quiz {
	  display: inline-block;
	  background: #da552f;
	  width: 250px;
	  height: 250px;
	  margin: 60px;
	  border-radius: 150px;
	  text-align: center;
	  line-height: 190px;
	  font-size: 30px;
	  font-weight: bold;
	  text-decoration: none;
	  color: blanchedalmond;
	  font-family: var(--font-family);
	}

	.home__quiz:hover {
	  color: rgb(3, 82, 82);
   }
	

	.home__slideshow {
	  display: inline-block;
	  background: #da552f;
	  width: 250px;
	  height: 250px;
	  margin: 60px;
	  border-radius: 150px;
	  text-align: center;
	  line-height: 20px;
	  font-size: 30px;
	  font-weight: bold;
	  padding-top: 130px;
	  text-decoration: none;
	  color: blanchedalmond;
	  font-family: var(--font-family);
	}

   .home__slideshow:hover {
	  color: rgb(3, 82, 82);
   }

	.home__table {
	  display: inline-block;
	  background: #da552f;
	  width: 230px;
	  height: 230px;
	  margin: 60px;
	  border-radius: 130px;
	  text-align: center;
	  line-height: 30px;
	  font-size: 30px;
	  font-weight: bold;
	  padding-top: 150px;
	  text-decoration: none;
	  color: blanchedalmond;
	  font-family: var(--font-family);
	}

	.home__table:hover {	
	  color: rgb(3, 82, 82);
  }
	
   .home__contact:hover {
	  color: rgb(3, 82, 82);
	}

  .article__title {
	  border-top: solid 4px darkcyan;
  
  }
  .article__brand {
	  color: darkcyan;
  }
	
</style>