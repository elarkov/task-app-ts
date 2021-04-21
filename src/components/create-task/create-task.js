import React from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../tasks-store.js";

import './create-task.css';


const CreateTask = observer(() =>  {

	const {onSubmit} = tasksStore;

	return(
		<div className="create-new">
			<form className="create-new__form" onSubmit={onSubmit} autoComplete="off">
				<input 
					className="create-new__input form-control" 
					name="text" 
					type="text" required
					placeholder="Поехать в Японию"
				/>
				<button className="create-new__button btn btn-success" type="submit">Добавить</button>
			</form>
		</div>
	)
});

export default CreateTask;