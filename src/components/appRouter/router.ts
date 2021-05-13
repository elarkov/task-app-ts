import {DASHBOARD, LOGIN_ROUTE} from '../../utils/consts';
import Login from '../log-in/log-in';
import Dashboard from '../../pages/dashboard';

export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		Component: Login
	}
]

export const privateRoutes = [
	{
		path: DASHBOARD,
		Component: Dashboard
	}
]