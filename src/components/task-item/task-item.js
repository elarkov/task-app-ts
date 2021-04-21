import React, {useState} from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../tasks-store.js";

import {updateTask, deleteTask } from '../../api/server.js';

import './task-item.css';

const TaskItem = observer(({task}) => {

	/**хуки для работы с внутренним стейтом */
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(null);
	const [isComplete, setIsComplete] = useState(false);

	const {removeItem, getTaskList } = tasksStore;

	const handleEditClick = () => {
		setIsEdit(!isEdit);
		setValue(task.text)
	};

	const handleCancelEdit = () => {
		setIsEdit(!isEdit);
	}

	const handleSave = (evt) => {
		evt.preventDefault();

		const idUser = localStorage.getItem('user_id');

		const newTask = {
			id: task.id,
			text: evt.target.parentElement.elements.text.value,
			user_id: Number(idUser),
			isComplete: false
		};
		
		setIsEdit(!isEdit);

		updateTask(newTask.id, newTask, getTaskList);
	}

	const onInputEditChange = (value) => {
		setValue(value)
	}

	const deleteItem = () => {
		const id = task.id;

		deleteTask(id);
		removeItem(id);
	};

	const handleOnClickItem = () => {

		const currentState = setIsComplete(isComplete);

		const newTask = {
			...task,
			isComplete: !task.isComplete
		}

		setIsComplete(!currentState)

		updateTask(task.id, newTask, getTaskList);
	}

	const styleLineThough = {
		textDecoration: task.isComplete ? "line-through" : null,
	}

	if (!isEdit) {

		return (
			<>
				<span className="list-item__text" style={styleLineThough}>
					{task.text}
				</span>
				
				<div className="action">
					<button className="action__button btn btn-success" onClick={handleOnClickItem}>
						<i className="fas fa-check"></i>
					</button>
					<button className="action__button btn btn-info" onClick={handleEditClick}>
						<i className="fas fa-edit"></i>
					</button>
					<button className="action__button btn btn-danger" onClick={deleteItem}>
						<i className="fas fa-trash-alt"></i>
					</button>
				</div>
			</>
		)
		
	} else {

		return (
			<form className="create-new__form" onSubmit={updateTask}>
			<input 
				className="create-new__input form-control" 
				name="text" 
				type="text"
				value={value}
				onChange={e => onInputEditChange(e.target.value)}
			/>
			<button 
				className="action__button btn btn-info" 
				type="submit" 
				onClick={handleSave}
			>
				Добавить
			</button>

			<button 
				className="action__button btn btn-info" 
				type="submit" 
				onClick={handleCancelEdit}
			>
				<i className="fas fa-times"></i>
			</button>
		</form>
		)
	}

});

export default TaskItem;