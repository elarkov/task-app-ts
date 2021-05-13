import React, { useContext } from "react";

import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes}from './router';
import { LOGIN_ROUTE, DASHBOARD } from "../../utils/consts";
import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from '../../index';

const AppRouter = () => {
	const {auth} = useContext(Context);
	const [user] = useAuthState(auth);
	
	return user ? (

		<Switch>
			{privateRoutes.map(({path, Component}) => 
				<Route key={path} path={path} component={Component} exact={true}/>
			)}
			<Redirect to={DASHBOARD}/>
		</Switch>

	) : (

		<Switch>
			{publicRoutes.map(({path, Component}) => 
				<Route key={path} path={path} component={Component} exact={true}/>
			)}
			<Redirect to={LOGIN_ROUTE}/>
		</Switch>
	)

};

export default AppRouter;

