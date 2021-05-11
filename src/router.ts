// import {
// 	Router,
//   Switch,
//   Route,
// 	Link,
// 	Redirect
// } from "react-router-dom";

// export {Router, Switch, Route, Link, Redirect};

import {DASHBOARD, LOGIN_ROUTE} from './utils/consts';
import Login from './components/log-in/log-in';
import Dashboard from './pages/dashboard';

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