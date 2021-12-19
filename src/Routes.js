import Home from './views/Home.vue';
import Slideshow from './components/Slideshow.vue';
// import Header from './components/Header.vue'
import Contact from './components/Contact.vue';
//import Quiz from './components/Quiz.vue';

export default [
	// { name: 'page', Path: '/:page_id'  component:}
	{ name: 'home', Path: '/', component: Home}, 
	 { name: 'slideshow', path: '/Slideshow', component: Slideshow },
	 // { name: 'header', path: '/Header', component: Header },
	 { name: 'contact', path: '/Contact', component: Contact },
	 //{ name: 'quiz', path: '/Quiz', component: Quiz },
]