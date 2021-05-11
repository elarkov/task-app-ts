import React, {useState} from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../tasks-store";

import {updateTask, deleteTask } from '../../api/server';

import './task-item.css';
import * as CSS from 'csstype';

import {Task} from '../../types/data';

interface TaskItemProps {
	task: Task
}

const TaskItem: React.FC<TaskItemProps> = observer(({task}) => {

	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState('');

	const {removeItem, getTaskList } = tasksStore;

	const handleEditClick = () => {
		setIsEdit(!isEdit);
		setValue(task.text);
	};

	const handleCancelEdit = () => {
		setIsEdit(!isEdit);
	}

	const handleSave: React.MouseEventHandler = (evt) => {
		evt.preventDefault();

		const idUser = localStorage.getItem('user_id');

		const newTask = {
			id: task.id,
			text: (evt.target as any).parentElement.elements.text.value,
			user_id: idUser,
			isComplete: false
		};
		
		setIsEdit(!isEdit);

		updateTask(newTask.id, newTask, getTaskList);
	}

	const onInputEditChange = (value: string) => {
		setValue(value)
	}

	const deleteItem = () => {
		const id = task.id;

		deleteTask(id);
		removeItem(id);
	};

	const handleOnClickItem = () => {

		const newTask = {
			...task,
			isComplete: !task.isComplete
		}

		updateTask(task.id, newTask, getTaskList);
	}

	const handlerSubmit = () => {
		return updateTask;
	}

	const styleLineThough: CSS.Properties = {
		textDecoration: task.isComplete ? "line-through" : 'none',
	}

	if (!isEdit) {

		return (
			<>
				<span data-testid={`task-${task.id}`} className="list-item__text" style={styleLineThough}>
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
			<form className="create-new__form" onSubmit={handlerSubmit}>
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