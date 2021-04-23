import React from 'react';
import TaskItem from '../task-item';

import './tasks-details.css';


import { observer } from "mobx-react-lite";
import { tasksStore } from "../../tasks-store";

import {Task} from '../../types/data';

const TasksDetails: React.FC = observer(() => {

	const {filterTasks} = tasksStore;

		const tasksList = filterTasks.map((el: Task) => 
		
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