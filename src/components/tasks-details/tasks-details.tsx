import React from 'react';
import TaskItem from '../task-item';

import './tasks-details.css';

import { observer } from "mobx-react-lite";
import { tasksStore } from "../../tasks-store";

const TasksDetails: React.FC = observer(() => {

	const {tasks, filterTasks} = tasksStore;

		const tasksList = filterTasks.map((el: any) => 
		
			<li key={el.id} className="list-item__item list-group-item">
				<TaskItem task={el}/>
			</li>
		);

		return (
			<ul className="list list-group">
				{tasksList}
			</ul>

		)
});

export default TasksDetails;