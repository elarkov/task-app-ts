import React from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../tasks-store";

import './create-task.css';


const CreateTask: React.FC = observer(() =>  {

	const {onSubmit} = tasksStore;

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