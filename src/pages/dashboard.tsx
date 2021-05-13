/**import react and hooks */
import React, { useEffect, useContext } from "react";

import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from '../index';

/**import library https://github.com/mobxjs/mobx-react-lite */
import { observer } from "mobx-react-lite";

/**import stores for mobx */
import { tasksStore } from "../store/tasks-store";

/**import components */
import TasksSearch from '../components/tasks-search/tasks-search';
import CreateTask from '../components/create-task/create-task';
import TasksDetails from '../components/tasks-details/tasks-details';
import TasksFilter from '../components/tasks-filter/tasks-filter';


/**import styles component */
import '../components/app/app.css';

const Dashboard: React.FC = observer(() => {

	const {auth} = useContext(Context);
	const [user] = useAuthState(auth);

	/** destructuring methods and properties from store tasks-store.js*/
	const {
		getTaskList,
	} = tasksStore;

	/**hook a method from tasks-store.js */
	useEffect(() => {
		getTaskList()
	}, []);

	

	return (
		<div className="content">
			<div className="content__list">
				<h3 className="content__header bg-primary">Список задач для {user?.displayName}</h3>
				<div className="content__wrapper">
					<TasksSearch/> 
					<CreateTask/>
					<TasksFilter/>
				</div>
				<TasksDetails/>
			</div>
			<button className="btn btn-danger" onClick={() => auth.signOut()}>Выйти</button>
		</div>
	)
});
	
export default Dashboard;