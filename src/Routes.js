import Home from './views/Home.vue';
import Slideshow from './components/slideshow.vue';

export default [
	// { name: 'page', Path: '/:page_id'  component:}
	{ name: 'home', Path: '/', component: Home}, 
	{ name: 'slideshow', path: '/slideshow', component: Slideshow },
]