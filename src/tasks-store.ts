import React from 'react';

import { makeAutoObservable } from "mobx";
import { getTasks, addTask } from './api/server';

import history from './history';

import { Task } from './types/data';

class TasksStore {

	tasks = [];
	filterTasks = [];

	constructor() {
		makeAutoObservable(this);
	}

	getTaskList = (): void => {
		const id = localStorage.getItem('user_id');

		getTasks()
		.then((tasks) => {
			const items = tasks.filter((task: Task) => task.user_id === Number(id));

			this.tasks = items
			this.filterTasks = items
			
		})
	}

	searchQueryItem = (queryText:string): void => {
		if(queryText) {
			this.filterTasks = this.tasks.filter((task: Task) => task.text.toLowerCase().includes(queryText.toLowerCase()))
		} else {
			this.filterTasks = this.tasks
		}
	}

	searchItem: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
		this.searchQueryItem(evt.target.value)
	}

	removeItem = (id:number): void => {
		this.tasks = this.tasks.filter((item: Task) => item.id !== id),
		this.filterTasks = this.tasks.filter((item: Task) => item.id !== id)
	}

	handleRemoveUser: React.MouseEventHandler = (evt) => {
		evt.preventDefault();
		localStorage.removeItem('user_id');
		history.push('/login');
	}

	handleSortTasksDone = (): void => {
		this.filterTasks = this.tasks.filter((item: Task) => item.isComplete === true)
	}

	handleSortTaskUnComplete = (): void => {
		this.filterTasks = this.tasks.filter((item: Task) => item.isComplete === false)
	}

	handleSortTasksAll = (): void => {
		this.filterTasks = this.tasks
	}

	onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
		evt.preventDefault();

		const id = localStorage.getItem('user_id');
		
		const newTask = {
			text: (evt.target as any).elements.text.value,
			user_id: Number(id),
			isComplete: false
		}
		
		addTask(newTask, this.getTaskList);
		(evt.target as any).reset();
	}

}

const tasksStore = new TasksStore();

export {TasksStore, tasksStore};
