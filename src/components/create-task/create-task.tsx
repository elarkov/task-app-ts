import React from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/tasks-store";
import { addTask } from '../../api/server';

import './create-task.css';


const CreateTask: React.FC = observer(() =>  {

	const {getTaskList} = tasksStore;

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
		evt.preventDefault();

		const id = localStorage.getItem('user_id') || '0';
		
		const newTask = {
			text: (evt.target as any).elements.text.value,
			user_id: id,
			isComplete: false
		}
		
		addTask(newTask, getTaskList);
		(evt.target as any).reset();
	}
	
	return(
		<div className="create-new">
			<form className="create-new__form" onSubmit={onSubmit} autoComplete="off" data-testid="form">
				<input 
					className="create-new__input form-control image" 
					name="text" 
					type="text" 
					required
					placeholder="Купить билеты в Японию"
				/>
				<button className="create-new__button btn btn-success" type="submit">Добавить</button>
			</form>
		</div>
	)
});

export default CreateTask;