/**import react and hooks */
import React, { useEffect } from "react";

/**import library https://github.com/mobxjs/mobx-react-lite */
import { observer } from "mobx-react-lite";

/**import stores for mobx */
import { tasksStore } from "../tasks-store.js";
import { usersStore } from '../users-store.js';

/**import server requests */
import { addTask } from '../api/server.js';

/**import components */
import TasksSearch from '../components/tasks-search/tasks-search.js';
import CreateTask from '../components/create-task/create-task.js';
import TasksDetails from '../components/tasks-details/tasks-details.js';
import TasksFilter from '../components/tasks-filter/tasks-filter.js';

/**import styles component */
import '../components/app/app.css';


const Dashboard = observer(() => {

	/** destructuring methods and properties from store tasks-store.js*/
	const {
		getTaskList,
		handleRemoveUser
	} = tasksStore;

	/** destructuring methods and properties from store users-store.js*/
	const {currentUser, getListUsers} = usersStore;

	/**hook a method from tasks-store.js */
	useEffect(() => {
		getTaskList()
	}, []);

	/**hook a method from users-store.js */
	useEffect(() => {
		getListUsers()
	}, []);

	return (
		<div className="content">
			<div className="content__list">
				<h3 className="content__header bg-primary">Список задач для {currentUser}</h3>
				<div className="content__wrapper">
					<TasksSearch /> 
					<CreateTask submitHandler={addTask}/>
					<TasksFilter/>
				</div>
				<TasksDetails />
			</div>
			<button className="btn btn-danger" onClick={handleRemoveUser}>Выйти</button>
		</div>
	)
});
	
export default Dashboard;