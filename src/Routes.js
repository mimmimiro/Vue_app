import Home from './views/Home.vue';
import Slideshow from './components/Slideshow.vue';
import Contact from './components/Contact.vue';
import Table from './components/Table.vue';
import ToDoList from './components/ToDoList.vue';
import Quiz from './components/Quiz.vue';

export default [
	// { name: 'page', Path: '/:page_id'  component:}
	{ name: 'home', Path: '/', component: Home}, 
	 { name: 'slideshow', path: '/Slideshow', component: Slideshow },
	 { name: 'contact', path: '/Contact', component: Contact },
	 { name: 'table', path: '/Table', component: Table },
	 { name: 'todolist', path: '/ToDoList', component: ToDoList },
	 { name: 'quiz', path: '/Quiz', component: Quiz },
]