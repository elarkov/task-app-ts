import React from 'react';
import {Redirect} from './router';

interface PrivateRouteProps {
	exact: boolean,
	path: string,
	component: React.ComponentType,
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
	
	const {component: Component} = props;

	const isAuthenticated = localStorage.getItem('user_id');

	return (
		isAuthenticated ? (
			<Component/>
		):(
			<Redirect to={{pathname: '/login'}}/>
		)
	)
}

export default PrivateRoute;