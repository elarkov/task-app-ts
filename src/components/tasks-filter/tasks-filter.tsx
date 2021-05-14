import React from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/tasks-store";
import {FilterMarks} from '../../types/data';


const TasksFilter: React.FC = observer(() => {

	const {setFilterMark, filterMark} = tasksStore;

	const handleAll = () => {
		setFilterMark(FilterMarks.All);
	};

	const handleUncomplete = () => {
		setFilterMark(FilterMarks.Uncomplete);
	};

	const handleComplete = () => {
		setFilterMark(FilterMarks.Complete);
	}

	return (
		<div className="ml-sm-2">
			<button className={`btn btn-light ${filterMark === FilterMarks.All ? 'active' : ''}`} onClick={handleAll}>Все</button>
			<button className={`btn btn-light ${filterMark === FilterMarks.Uncomplete ? 'active' : ''}`} onClick={handleUncomplete}>Открытые</button>
			<button className={`btn btn-light ${filterMark === FilterMarks.Complete ? 'active' : ''}`} onClick={handleComplete}>Завершенные</button>
		</div>
	)
});

export default TasksFilter;
