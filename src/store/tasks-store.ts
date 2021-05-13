import { makeAutoObservable } from "mobx";
import { getTasks } from '../api/server';

import { Task } from '../types/data';

class TasksStore {

	tasks: any[] = [];
	filterMark = 'all';
	queryText = '';

	constructor() {
		makeAutoObservable(this);
	}

	getTaskList = (): void => {
		getTasks(this.setTasks);
	}

	setTasks = (tasks: { [x: string]: Task; }) => {
		this.tasks = Object.keys(tasks).map((id) => {
			return {
				...tasks[id],
				id
			}
		});
		
	}

	get filterTasks() {
		if(this.queryText && this.filterMark === 'all') {
			return this.tasks.filter((task: Task) => task.text.toLowerCase().includes(this.queryText.toLowerCase())) 
		}
		if(this.queryText && this.filterMark === 'uncomplete') {
			return this.tasks.filter((task: Task) => task.text.toLowerCase().includes(this.queryText.toLowerCase()) && task.isComplete === false) 
		}
		if(this.queryText && this.filterMark === 'complete') {
			return this.tasks.filter((task: Task) => task.text.toLowerCase().includes(this.queryText.toLowerCase()) && task.isComplete === true) 
		}
		if(this.filterMark === 'all') {
			return this.tasks
		}
		if(this.filterMark === 'uncomplete') {
			return this.tasks.filter((item: Task) => item.isComplete === false)
		}
		if(this.filterMark === 'complete') {
			return this.tasks.filter((item: Task) => item.isComplete === true)
		}
		return this.tasks;
	}

	removeItem = (id:number): void => {
		this.tasks = this.tasks.filter((item: Task) => item.id !== id)
	}

	setFilterMark = (filterMark: string) => {
		this.filterMark = filterMark;
	}

	setQueryText = (queryText:string) => {
		this.queryText = queryText;
	}

}

const tasksStore = new TasksStore();

export {TasksStore, tasksStore};