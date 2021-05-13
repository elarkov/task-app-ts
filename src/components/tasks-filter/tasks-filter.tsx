import React, {useState} from 'react';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/tasks-store";


const TasksFilter: React.FC = observer(() => {

	const {setFilterMark} = tasksStore;

	const [activeIndex, setActiveIndex] = useState(0);

	const handleAll = () => {
		setFilterMark('all');
		setActiveIndex(0);
	};

	const handleUncomplete = () => {
		setFilterMark('uncomplete');
		setActiveIndex(1);
	};

	const handleComplete = () => {
		setFilterMark('complete');
		setActiveIndex(2);
	}

	return (
		<div className="ml-sm-2">
			<button className={`btn btn-light ${activeIndex === 0 ? 'active' : ''}`} onClick={handleAll}>Все</button>
			<button className={`btn btn-light ${activeIndex === 1 ? 'active' : ''}`} onClick={handleUncomplete}>Открытые</button>
			<button className={`btn btn-light ${activeIndex === 2 ? 'active' : ''}`} onClick={handleComplete}>Завершенные</button>
		</div>
	)
});

export default TasksFilter;