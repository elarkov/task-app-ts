import { makeAutoObservable } from "mobx";
import { getTasks, addTask } from './api/server.js';

import history from './history.js';

class TasksStore {

	tasks = [];
	filterTasks = [];

	constructor() {
		makeAutoObservable(this);
	}

	getTaskList = () => {
		const id = localStorage.getItem('user_id');

		getTasks()
		.then((tasks) => {
			const items = tasks.filter((task) => task.user_id === Number(id));

			this.tasks = items
			this.filterTasks = items
			
		})
	}

	searchQueryItem = (queryText) => {
		if(queryText) {
			this.filterTasks = this.tasks.filter((task) => task.text.toLowerCase().includes(queryText.toLowerCase()))
		} else {
			this.filterTasks = this.tasks
		}
	}

	searchItem = (evt) => {
		this.searchQueryItem(evt.target.value)
	}

	removeItem = (id) => {
		this.tasks = this.tasks.filter(item => item.id !== id),
		this.filterTasks = this.tasks.filter(item => item.id !== id)
	}

	handleRemoveUser = (evt) => {
		evt.preventDefault();
		localStorage.removeItem('user_id');
		history.push('/login');
	}

	handleSortTasksDone = () => {
		this.filterTasks = this.tasks.filter((item) => item.isComplete === true)
	}

	handleSortTaskUnComplete = () => {
		this.filterTasks = this.tasks.filter((item) => item.isComplete === false)
	}

	handleSortTasksAll = () => {
		this.filterTasks = this.tasks
	}


	onSubmit = (evt) => {
		evt.preventDefault();

		const id = localStorage.getItem('user_id');

		const newTask = {
			text: evt.target.elements.text.value,
			user_id: Number(id),
			isComplete: false
		}
		
		addTask(newTask, this.getTaskList);
		evt.target.reset();
	}

}

const tasksStore = new TasksStore();

export {tasksStore};
