import React from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/tasks-store";

import './tasks-search.css';


const TasksSearch: React.FC = observer(() => {

	const {setQueryText} = tasksStore;

	return (
		<div className="from-search form-inline my-2 my-lg-0">
			<button 
			className="form-search__btn btn btn-secondary my-2 my-sm-0">
				<i className="fas fa-search"></i>
			</button>
			<input 
				className="form-search__input form-control mr-sm-2" 
				type="search" 
				onChange={(evt) => setQueryText(evt.target.value)}
				placeholder="Поиск"
			/>
		</div>
	)
});

export default TasksSearch;