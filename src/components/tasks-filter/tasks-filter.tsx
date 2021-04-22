import React from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../tasks-store";

import './tasks-filter.css';


const TasksFilter: React.FC = observer(() => {

	const {handleSortTasksAll, handleSortTaskUnComplete, handleSortTasksDone} = tasksStore;

	return (
		<div className="ml-sm-2">
			<button className="btn btn-light" onClick={handleSortTasksAll}>Все</button>
			<button className="btn btn-light" onClick={handleSortTaskUnComplete}>Открытые</button>
			<button className="btn btn-light" onClick={handleSortTasksDone}>Завершенные</button>
		</div>
	)
});

export default TasksFilter;