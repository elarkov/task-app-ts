import React, {MouseEvent, SyntheticEvent} from 'react';

import { makeAutoObservable } from "mobx";
import { getTasks, addTask } from './api/server';

import history from './history';

interface Task {
	id: number;
	text: string;
	user_id: number;
	isComplete: boolean
}

interface Props {
	tasks: Task[],
	filterTasks: Task[]
}

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
			const items = tasks.filter((task: Task) => task.user_id === Number(id));

			this.tasks = items
			this.filterTasks = items
			
		})
	}

	searchQueryItem = (queryText:string) => {
		if(queryText) {
			this.filterTasks = this.tasks.filter((task: Task) => task.text.toLowerCase().includes(queryText.toLowerCase()))
		} else {
			this.filterTasks = this.tasks
		}
	}

	searchItem = (evt:SyntheticEvent) => {
		this.searchQueryItem((evt.target as HTMLInputElement).value)
	}

	removeItem = (id:number) => {
		this.tasks = this.tasks.filter((item: Task) => item.id !== id),
		this.filterTasks = this.tasks.filter((item: Task) => item.id !== id)
	}

	handleRemoveUser = (evt:MouseEvent) => {
		evt.preventDefault();
		localStorage.removeItem('user_id');
		history.push('/login');
	}

	handleSortTasksDone = () => {
		this.filterTasks = this.tasks.filter((item: Task) => item.isComplete === true)
	}

	handleSortTaskUnComplete = () => {
		this.filterTasks = this.tasks.filter((item: Task) => item.isComplete === false)
	}

	handleSortTasksAll = () => {
		this.filterTasks = this.tasks
	}


	onSubmit = (evt:MouseEvent) => {
		evt.preventDefault();

		const id = localStorage.getItem('user_id');
		const newTask = {
			text: (evt.target as any).elements.text.value,
			user_id: Number(id),
			isComplete: false
		}
		
		addTask(newTask, this.getTaskList);
		(evt.target as HTMLFormElement).reset();
	}

}

const tasksStore = new TasksStore();

export {tasksStore};
