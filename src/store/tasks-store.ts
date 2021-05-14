import { makeAutoObservable } from "mobx";
import { getTasks } from '../api/server';

import { Task, FilterMarks } from '../types/data';

const completeStatus = {
	all: true,
	uncomplete: false,
	complete: true
};

class TasksStore {

	tasks: any[] = [];
	filterMark = FilterMarks.All;
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

		const tasks = this.filterMark === FilterMarks.All ? this.tasks : this.tasks.filter((task: Task) => task.isComplete === completeStatus[this.filterMark])
		
		if(this.queryText) {
			return this.tasks.filter((task: Task) => task.text.toLowerCase().includes(this.queryText.toLowerCase())) 
		}
			return tasks;
		}

	removeItem = (id:number): void => {
		this.tasks = this.tasks.filter((item: Task) => item.id !== id)
	}

	setFilterMark = (filterMark: FilterMarks) => {
		this.filterMark = filterMark;
	}

	setQueryText = (queryText:string) => {
		this.queryText = queryText;
	}

}

const tasksStore = new TasksStore();

export {TasksStore, tasksStore};